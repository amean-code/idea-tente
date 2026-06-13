import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { PergolaPageView } from "./pergola-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Pergola Sistemleri ana sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function BioklimatikPergolaPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("pergola"),
    getGalleryCoverAsync("pergola"),
  ])
  return (
    <PergolaPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
