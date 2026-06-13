import { unstable_cache } from "next/cache"
import galleryConfigFallback from "@/data/gallery-config.json"
import { GALLERY_CONFIG_OBJECT_KEY } from "@/lib/site-storage-keys"
import { readSiteManifest } from "@/lib/site-manifest-storage"

export type GalleryConfig = typeof galleryConfigFallback
export type GalleryKey = keyof GalleryConfig["galleries"]
export type GalleryItem = GalleryConfig["galleries"][GalleryKey]

const localManifestPath = "data/gallery-config.json"

/**
 * Galeri manifestini bucket'tan okur; başarısızsa yerel JSON'a düşer.
 */
export async function readGalleryConfig(): Promise<GalleryConfig> {
  return readSiteManifest<GalleryConfig>(GALLERY_CONFIG_OBJECT_KEY, localManifestPath)
}

/**
 * ISR/on-demand revalidate için önbelleğe alınmış galeri manifest okuyucusu.
 */
export async function readGalleryConfigCached(): Promise<GalleryConfig> {
  return unstable_cache(
    async () => readGalleryConfig(),
    ["gallery-config-manifest"],
    { revalidate: 3600, tags: ["gallery-config"] },
  )()
}

/**
 * Seçilen ürün galerisine ait görsel yollarını manifest dosyasından döndürür (sunucu).
 */
export async function getGalleryImagesAsync(galleryKey: GalleryKey): Promise<string[]> {
  const config = await readGalleryConfigCached()
  return config.galleries[galleryKey]?.images ?? []
}

/**
 * Derleme zamanı / istemci yedek: yerel JSON'dan galeri görsellerini döndürür.
 */
export function getGalleryImages(galleryKey: GalleryKey): string[] {
  return galleryConfigFallback.galleries[galleryKey]?.images ?? []
}

/**
 * Admin arayüzünde kullanılacak galeri etiketlerini manifest dosyasından üretir.
 */
export function getGalleryLabels(): Record<GalleryKey, string> {
  return Object.fromEntries(
    Object.entries(galleryConfigFallback.galleries).map(([key, gallery]) => [key, gallery.label]),
  ) as Record<GalleryKey, string>
}
