import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { KisBahcesiPageView } from "./kis-bahcesi-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Kış Bahçesi ana sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function WinterGardenPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("kis-bahcesi"),
    getGalleryCoverAsync("kis-bahcesi"),
  ])
  return (
    <KisBahcesiPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
