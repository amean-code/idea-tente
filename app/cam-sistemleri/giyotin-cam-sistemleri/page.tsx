import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { GiyotinCamPageView } from "./giyotin-cam-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Giyotin Cam Sistemleri sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function GiyotinCamSistemleriPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("giyotin-cam-sistemleri"),
    getGalleryCoverAsync("giyotin-cam-sistemleri"),
  ])
  return (
    <GiyotinCamPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
