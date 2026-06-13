import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { BioklimatikPageView } from "./bioklimatik-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Bioklimatik Sistemler sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function BioklimatikSistemlerPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("bioklimatik-sistemler"),
    getGalleryCoverAsync("bioklimatik-sistemler"),
  ])
  return (
    <BioklimatikPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
