import { getGalleryImagesAsync } from "@/lib/gallery-config"
import { getGalleryCoverAsync } from "@/lib/gallery-covers-server"
import { ZipPerdePageView } from "./zip-perde-view"

/** Galeri manifesti değişince ISR ile yenilenir. */
export const revalidate = 3600

/**
 * Zip Perde ana sayfası — galeri görselleri bucket manifestinden okunur.
 */
export default async function ZipScreenPage() {
  const [galleryImages, coverImage] = await Promise.all([
    getGalleryImagesAsync("zip-perde"),
    getGalleryCoverAsync("zip-perde"),
  ])
  return (
    <ZipPerdePageView
      galleryImages={galleryImages}
      coverImage={coverImage ?? galleryImages[0] ?? ""}
    />
  )
}
