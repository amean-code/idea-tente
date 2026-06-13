import { unstable_cache } from "next/cache"
import { HERO_SLIDES_OBJECT_KEY } from "@/lib/site-storage-keys"
import { canWriteLocalManifest, canWriteSiteManifest, readSiteManifest, writeSiteManifest } from "@/lib/site-manifest-storage"

/** Ana sayfa kahraman slayt listesi manifest biçimi. */
export interface PergolaHeroSlidesManifest {
  slides: string[]
}

const localManifestPath = "data/pergola-hero-slides.json"

/**
 * Kahraman slayt manifest dosyasını bucket'tan okur; başarısızsa yerel dosyaya düşer.
 */
export async function readPergolaHeroSlides(): Promise<PergolaHeroSlidesManifest> {
  return readSiteManifest<PergolaHeroSlidesManifest>(HERO_SLIDES_OBJECT_KEY, localManifestPath)
}

/**
 * ISR/on-demand revalidate için önbelleğe alınmış kahraman slayt okuyucusu.
 */
export async function readPergolaHeroSlidesCached(): Promise<PergolaHeroSlidesManifest> {
  return unstable_cache(
    async () => readPergolaHeroSlides(),
    ["pergola-hero-slides-manifest"],
    { revalidate: 3600, tags: ["pergola-hero-slides"] },
  )()
}

/**
 * Kahraman slayt manifest dosyasının yazılabilir olup olmadığını kontrol eder.
 */
export async function canWritePergolaHeroSlides(): Promise<boolean> {
  return canWriteSiteManifest() || canWriteLocalManifest(localManifestPath)
}

/**
 * Kahraman slayt sırasını bucket'a (ve mümkünse yerel dosyaya) yazar.
 */
export async function savePergolaHeroSlides(slides: string[]): Promise<PergolaHeroSlidesManifest> {
  const manifest: PergolaHeroSlidesManifest = { slides }
  return writeSiteManifest(HERO_SLIDES_OBJECT_KEY, localManifestPath, manifest)
}
