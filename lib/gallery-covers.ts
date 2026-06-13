import coversFallback from "@/data/gallery-covers.json"
import type { GalleryKey } from "@/lib/gallery-config"

/** Kapak manifest dosyası biçimi. */
export interface GalleryCoversManifest {
  covers: Partial<Record<GalleryKey, string>>
}

/**
 * Yerel JSON yedeğinden senkron kapak yolunu döndürür.
 */
export function getGalleryCoverSync(galleryKey: GalleryKey): string | undefined {
  const fallbackCovers = coversFallback.covers as Partial<Record<GalleryKey, string>>
  return fallbackCovers[galleryKey]
}

/** Giyotin cam hero ve kart kapak görseli (yerel yedek). */
export const GIYOTIN_CAM_COVER =
  getGalleryCoverSync("giyotin-cam-sistemleri") ??
  "/giyotin-cam/idea-tente-giyotin-cam-sistemleri-profesyonel-dis-mekan-cephe-01.webp"

/** Motorlu pergola hero ve kart kapak görseli (yerel yedek). */
export const MOTORLU_PERGOLA_COVER =
  getGalleryCoverSync("motorlu-sistemler") ??
  "/motorlu-pergola/idea-tente-motorlu-pergola-sistemleri-profesyonel-dis-cekim-01.webp"
