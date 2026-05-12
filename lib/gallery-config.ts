import galleryConfig from "@/data/gallery-config.json"

export type GalleryConfig = typeof galleryConfig
export type GalleryKey = keyof GalleryConfig["galleries"]
export type GalleryItem = GalleryConfig["galleries"][GalleryKey]

/**
 * Seçilen ürün galerisine ait görsel yollarını manifest dosyasından döndürür.
 */
export function getGalleryImages(galleryKey: GalleryKey): string[] {
  return galleryConfig.galleries[galleryKey]?.images ?? []
}

/**
 * Admin arayüzünde kullanılacak galeri etiketlerini manifest dosyasından üretir.
 */
export function getGalleryLabels(): Record<GalleryKey, string> {
  return Object.fromEntries(
    Object.entries(galleryConfig.galleries).map(([key, gallery]) => [key, gallery.label]),
  ) as Record<GalleryKey, string>
}
