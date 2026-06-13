import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { SurmeCamPageView } from "./surme-cam-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Sürme Cam Sistemleri sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function SurmeCamPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("surme-cam"),
    getGalleryCoverAsync("surme-cam"),
  ])
  return (
    <SurmeCamPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
