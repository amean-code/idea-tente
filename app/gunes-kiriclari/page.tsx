import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { GunesKiriciPageView } from "./gunes-kirici-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Güneş Kırıcıları ana sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function SunBreakersPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("gunes-kiriclari"),
    getGalleryCoverAsync("gunes-kiriclari"),
  ])
  return (
    <GunesKiriciPageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
