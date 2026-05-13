import { readFile, writeFile, access, constants } from "fs/promises"
import path from "path"

/** Ana sayfa kahraman slayt listesi manifest biçimi. */
export interface PergolaHeroSlidesManifest {
  slides: string[]
}

const projectRoot = process.cwd()
const pergolaHeroSlidesPath = path.join(projectRoot, "data", "pergola-hero-slides.json")

/**
 * Kahraman slayt manifest dosyasını okur.
 */
export async function readPergolaHeroSlides(): Promise<PergolaHeroSlidesManifest> {
  const raw = await readFile(pergolaHeroSlidesPath, "utf-8")
  return JSON.parse(raw) as PergolaHeroSlidesManifest
}

/**
 * Kahraman slayt manifest dosyasının yazılabilir olup olmadığını kontrol eder.
 */
export async function canWritePergolaHeroSlides(): Promise<boolean> {
  try {
    await access(pergolaHeroSlidesPath, constants.W_OK)
    return true
  } catch {
    return false
  }
}

/**
 * Kahraman slayt sırasını manifest dosyasına yazar.
 */
export async function savePergolaHeroSlides(slides: string[]): Promise<PergolaHeroSlidesManifest> {
  const manifest: PergolaHeroSlidesManifest = { slides }
  await writeFile(pergolaHeroSlidesPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf-8")
  return manifest
}
