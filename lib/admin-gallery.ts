import { revalidatePath, revalidateTag } from "next/cache"
import { access, readdir } from "fs/promises"
import { constants } from "fs"
import path from "path"
import { createS3BucketClientFromEnv, readS3BucketConfigFromEnv } from "@/lib/storage/s3-bucket"
import { listAllSiteImagePublicPaths } from "@/lib/pergola-bucket-server"
import { GALLERY_CONFIG_OBJECT_KEY } from "@/lib/site-storage-keys"
import {
  canWriteLocalManifest,
  canWriteSiteManifest,
  readSiteManifest,
  writeSiteManifest,
} from "@/lib/site-manifest-storage"

export interface EditableGallery {
  label: string
  publicFolder: string
  images: string[]
}

export interface EditableGalleryConfig {
  galleries: Record<string, EditableGallery>
}

export interface AdminGalleryState {
  config: EditableGalleryConfig
  availableImages: string[]
  canWriteConfig: boolean
}

/** Public klasöründe taranacak görsel dosya uzantıları (küçük harf). */
const imageExtensions = new Set([
  ".avif",
  ".bmp",
  ".gif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".tif",
  ".tiff",
  ".webp",
])

const projectRoot = process.cwd()
const publicDirectory = path.join(projectRoot, "public")
const localManifestPath = "data/gallery-config.json"

/** Ürün galeri sayfalarının URL yolları (manifest güncellenince revalidate edilir). */
const galleryPagePaths: Record<string, string[]> = {
  "bioklimatik-sistemler": ["/pergola/bioklimatik-sistemler"],
  "motorlu-sistemler": ["/pergola/motorlu-sistemler"],
  pergola: ["/pergola"],
  "giyotin-cam-sistemleri": ["/cam-sistemleri/giyotin-cam-sistemleri"],
  "surme-cam": ["/cam-sistemleri/surme-cam"],
  "kis-bahcesi": ["/kis-bahcesi"],
  "gunes-kiriclari": ["/gunes-kiriclari"],
  "zip-perde": ["/zip-perde"],
}

/**
 * Bir dosyanın admin galerisinde gösterilecek desteklenen görsel uzantısına sahip olup olmadığını kontrol eder.
 */
function isImageFile(fileName: string): boolean {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * Dosya sistemi yolunu tarayıcıda kullanılabilecek public URL formatına çevirir.
 */
function toPublicImagePath(filePath: string): string {
  const relativePath = path.relative(publicDirectory, filePath)
  return `/${relativePath.split(path.sep).join("/")}`
}

/**
 * Public klasörünü özyinelemeli gezerek tüm görsel dosyalarının URL yollarını toplar.
 */
async function collectPublicImages(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const images = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        return collectPublicImages(entryPath)
      }

      if (entry.isFile() && isImageFile(entry.name)) {
        return [toPublicImagePath(entryPath)]
      }

      return []
    }),
  )

  return images.flat()
}

/**
 * Manifest dosyasını bucket'tan okuyup düzenlenebilir galeri konfigürasyonu olarak döndürür.
 */
export async function readGalleryConfig(): Promise<EditableGalleryConfig> {
  return readSiteManifest<EditableGalleryConfig>(GALLERY_CONFIG_OBJECT_KEY, localManifestPath)
}

/**
 * Public klasörü ve bucket'taki görselleri alfabetik olarak listeler.
 */
export async function listAvailableGalleryImages(): Promise<string[]> {
  const images = await collectPublicImages(publicDirectory)
  const imageSet = new Set(images)

  try {
    const storage = readS3BucketConfigFromEnv()
    const client = createS3BucketClientFromEnv()
    const bucketPaths = await listAllSiteImagePublicPaths(client, storage.bucket)
    for (const bucketPath of bucketPaths) {
      imageSet.add(bucketPath)
    }
  } catch {
    /* Bucket yapılandırması yoksa yalnızca public klasörü */
  }

  return [...imageSet].sort((firstImage, secondImage) => firstImage.localeCompare(secondImage, "tr"))
}

/**
 * Manifest dosyasının mevcut ortamda yazılabilir olup olmadığını kontrol eder.
 */
export async function canWriteGalleryConfig(): Promise<boolean> {
  return canWriteSiteManifest() || canWriteLocalManifest(localManifestPath)
}

/**
 * Admin ekranının ihtiyaç duyduğu manifest ve görsel listesini tek cevapta hazırlar.
 */
export async function loadAdminGalleryState(): Promise<AdminGalleryState> {
  const [config, availableImages, canWriteConfig] = await Promise.all([
    readGalleryConfig(),
    listAvailableGalleryImages(),
    canWriteGalleryConfig(),
  ])

  return {
    config,
    availableImages,
    canWriteConfig,
  }
}

/**
 * Admin tarafından gönderilen görsel yollarını izin verilen kaynaklarla sınırlar.
 */
function sanitizeGalleryImages(images: string[], availableImages: string[]): string[] {
  const availableImageSet = new Set(availableImages)
  const uniqueImages = Array.from(new Set(images))
  return uniqueImages.filter((imagePath) => availableImageSet.has(imagePath))
}

/**
 * Galeri manifest güncellemesinden sonra ilgili sayfaların önbelleğini yeniler.
 */
export function revalidateGalleryPages(galleryKey: string) {
  revalidateTag("gallery-config")
  const paths = galleryPagePaths[galleryKey] ?? []
  for (const pagePath of paths) {
    revalidatePath(pagePath)
  }
}

/**
 * Seçili galeriye ait görsel sırasını bucket manifestine kaydeder.
 */
export async function saveGalleryImages(galleryKey: string, images: string[]): Promise<EditableGalleryConfig> {
  const [config, availableImages] = await Promise.all([readGalleryConfig(), listAvailableGalleryImages()])
  const gallery = config.galleries[galleryKey]

  if (!gallery) {
    throw new Error("Galeri bulunamadı.")
  }

  const sanitizedImages = sanitizeGalleryImages(images, availableImages)

  if (sanitizedImages.length === 0) {
    throw new Error("Galeri en az bir görsel içermeli.")
  }

  const nextConfig: EditableGalleryConfig = {
    ...config,
    galleries: {
      ...config.galleries,
      [galleryKey]: {
        ...gallery,
        images: sanitizedImages,
      },
    },
  }

  await writeSiteManifest(GALLERY_CONFIG_OBJECT_KEY, localManifestPath, nextConfig)
  revalidateGalleryPages(galleryKey)
  return nextConfig
}
