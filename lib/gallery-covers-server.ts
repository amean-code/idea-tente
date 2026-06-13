import { revalidatePath, revalidateTag } from "next/cache"
import { unstable_cache } from "next/cache"
import type { GalleryKey } from "@/lib/gallery-config"
import { getGalleryCoverSync, type GalleryCoversManifest } from "@/lib/gallery-covers"
import { GALLERY_COVERS_OBJECT_KEY } from "@/lib/site-storage-keys"
import {
  canWriteLocalManifest,
  canWriteSiteManifest,
  readSiteManifest,
  writeSiteManifest,
} from "@/lib/site-manifest-storage"

const localManifestPath = "data/gallery-covers.json"

/** Kapak güncellenince yenilenecek sayfa yolları. */
const coverPagePaths: Partial<Record<GalleryKey, string[]>> = {
  "bioklimatik-sistemler": ["/pergola/bioklimatik-sistemler"],
  "motorlu-sistemler": ["/pergola/motorlu-sistemler", "/pergola"],
  pergola: ["/pergola"],
  "giyotin-cam-sistemleri": ["/cam-sistemleri/giyotin-cam-sistemleri", "/cam-sistemleri"],
  "surme-cam": ["/cam-sistemleri/surme-cam"],
  "kis-bahcesi": ["/kis-bahcesi"],
  "gunes-kiriclari": ["/gunes-kiriclari"],
  "zip-perde": ["/zip-perde"],
}

/**
 * Kapak manifest dosyasını bucket'tan okur; başarısızsa yerel JSON'a düşer.
 */
export async function readGalleryCovers(): Promise<GalleryCoversManifest> {
  return readSiteManifest<GalleryCoversManifest>(GALLERY_COVERS_OBJECT_KEY, localManifestPath)
}

/**
 * ISR için önbelleğe alınmış kapak manifest okuyucusu.
 */
export async function readGalleryCoversCached(): Promise<GalleryCoversManifest> {
  return unstable_cache(
    async () => readGalleryCovers(),
    ["gallery-covers-manifest"],
    { revalidate: 3600, tags: ["gallery-covers"] },
  )()
}

/**
 * Manifestten ürün sayfası kapak görsel yolunu döndürür.
 */
export async function getGalleryCoverAsync(galleryKey: GalleryKey): Promise<string | undefined> {
  const manifest = await readGalleryCoversCached()
  return manifest.covers[galleryKey] ?? getGalleryCoverSync(galleryKey)
}

/**
 * Kapak manifest dosyasının yazılabilir olup olmadığını kontrol eder.
 */
export async function canWriteGalleryCovers(): Promise<boolean> {
  return canWriteSiteManifest() || canWriteLocalManifest(localManifestPath)
}

/**
 * Kapak değişikliğinden sonra ilgili sayfaların önbelleğini yeniler.
 */
export function revalidateGalleryCoverPages(galleryKey: GalleryKey) {
  revalidateTag("gallery-covers", "max")
  const paths = coverPagePaths[galleryKey] ?? []
  for (const pagePath of paths) {
    revalidatePath(pagePath)
  }
}

/**
 * Seçili sayfa için kapak görsel yolunu manifest dosyasına kaydeder.
 */
export async function saveGalleryCover(galleryKey: GalleryKey, coverPath: string): Promise<GalleryCoversManifest> {
  const manifest = await readGalleryCovers()
  const trimmedCover = coverPath.trim()

  if (!trimmedCover.startsWith("/") || trimmedCover.includes("..")) {
    throw new Error("Geçersiz kapak yolu.")
  }

  const nextManifest: GalleryCoversManifest = {
    covers: {
      ...manifest.covers,
      [galleryKey]: trimmedCover,
    },
  }

  await writeSiteManifest(GALLERY_COVERS_OBJECT_KEY, localManifestPath, nextManifest)
  revalidateGalleryCoverPages(galleryKey)
  return nextManifest
}
