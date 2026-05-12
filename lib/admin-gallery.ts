import { access, readdir, readFile, writeFile } from "fs/promises"
import { constants } from "fs"
import path from "path"

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
const galleryConfigPath = path.join(projectRoot, "data", "gallery-config.json")

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
 * Manifest dosyasını okuyup düzenlenebilir galeri konfigürasyonu olarak döndürür.
 */
export async function readGalleryConfig(): Promise<EditableGalleryConfig> {
  const configFile = await readFile(galleryConfigPath, "utf-8")
  return JSON.parse(configFile) as EditableGalleryConfig
}

/**
 * Public klasörü altındaki tüm görselleri alfabetik olarak listeler.
 */
export async function listPublicImages(): Promise<string[]> {
  const images = await collectPublicImages(publicDirectory)
  return images.sort((firstImage, secondImage) => firstImage.localeCompare(secondImage, "tr"))
}

/**
 * Manifest dosyasının mevcut ortamda yazılabilir olup olmadığını kontrol eder.
 */
export async function canWriteGalleryConfig(): Promise<boolean> {
  try {
    await access(galleryConfigPath, constants.W_OK)
    return true
  } catch {
    return false
  }
}

/**
 * Admin ekranının ihtiyaç duyduğu manifest ve public görsel listesini tek cevapta hazırlar.
 */
export async function loadAdminGalleryState(): Promise<AdminGalleryState> {
  const [config, availableImages, canWriteConfig] = await Promise.all([
    readGalleryConfig(),
    listPublicImages(),
    canWriteGalleryConfig(),
  ])

  return {
    config,
    availableImages,
    canWriteConfig,
  }
}

/**
 * Admin tarafından gönderilen görsel yollarını public klasöründeki gerçek dosyalarla sınırlar.
 */
function sanitizeGalleryImages(images: string[], availableImages: string[]): string[] {
  const availableImageSet = new Set(availableImages)
  const uniqueImages = Array.from(new Set(images))

  return uniqueImages.filter((imagePath) => availableImageSet.has(imagePath))
}

/**
 * Seçili galeriye ait görsel sırasını manifest dosyasına kaydeder.
 */
export async function saveGalleryImages(galleryKey: string, images: string[]): Promise<EditableGalleryConfig> {
  const [config, availableImages] = await Promise.all([readGalleryConfig(), listPublicImages()])
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

  await writeFile(galleryConfigPath, `${JSON.stringify(nextConfig, null, 2)}\n`, "utf-8")
  return nextConfig
}
