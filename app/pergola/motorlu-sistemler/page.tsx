import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { MotorluPageView } from "./motorlu-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Motorlu Pergola Sistemleri sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function MotorlupergolaPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("motorlu-sistemler"),
    getGalleryCoverAsync("motorlu-sistemler"),
  ])
  return (
    <MotorluPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
