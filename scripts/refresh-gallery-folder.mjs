import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const galleryConfigPath = path.join(projectRoot, "data", "gallery-config.json")
const galleryCoversPath = path.join(projectRoot, "data", "gallery-covers.json")
const heroSlidesPath = path.join(projectRoot, "data", "pergola-hero-slides.json")
const publicDir = path.join(projectRoot, "public")

const imageExtensions = new Set([".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".tif", ".tiff", ".webp"])

/** Otomatik kapak güncellenen galeri anahtarları. */
const coverGalleryKeys = ["giyotin-cam-sistemleri", "motorlu-sistemler"]

/** Kapak önceliği: bu dosya adları varsa ilk sıradaki kullanılır. */
const preferredCoverNames = ["cover.webp", "hero.webp", "kapak.webp", "kapak.jpg", "cover.jpg", "hero.jpg"]

/**
 * Dosya adının desteklenen görsel uzantısına sahip olup olmadığını kontrol eder.
 */
function isImageFile(fileName) {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * `public/{folder}/` altındaki görselleri alfabetik olarak listeler.
 */
async function listFolderImages(folderName) {
  const directory = path.join(publicDir, folderName)
  const entries = await readdir(directory, { withFileTypes: true })
  const files = entries
    .filter((entry) => entry.isFile() && isImageFile(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "tr"))

  return files.map((fileName) => `/${folderName}/${fileName}`)
}

/**
 * Görsel listesinden kapak görseli seçer (`cover.webp` vb. veya ilk dosya).
 */
function pickCoverImage(publicPaths) {
  if (publicPaths.length === 0) {
    return null
  }

  for (const preferredName of preferredCoverNames) {
    const match = publicPaths.find((publicPath) => path.basename(publicPath).toLowerCase() === preferredName)
    if (match) {
      return match
    }
  }

  const numberedCover = publicPaths.find((publicPath) => /-01\.webp$/i.test(publicPath))
  if (numberedCover) {
    return numberedCover
  }

  return publicPaths[0]
}

/**
 * `data/gallery-covers.json` içindeki kapak yolunu günceller.
 */
async function updateGalleryCoversManifest(galleryKey, coverPath) {
  const current = await readFile(galleryCoversPath, "utf-8")
  const manifest = JSON.parse(current)
  manifest.covers = manifest.covers ?? {}
  manifest.covers[galleryKey] = coverPath
  await writeFile(galleryCoversPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf-8")
}

/**
 * Ana sayfa slayt manifestinde eski klasör yollarını yeni kapak ile değiştirir.
 */
async function replaceHeroSlideFolderPaths(folderPrefix, newCoverPath) {
  const raw = await readFile(heroSlidesPath, "utf-8")
  const manifest = JSON.parse(raw)
  if (!Array.isArray(manifest.slides)) {
    return
  }

  manifest.slides = manifest.slides.map((slide) =>
    typeof slide === "string" && slide.startsWith(folderPrefix) ? newCoverPath : slide,
  )

  await writeFile(heroSlidesPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf-8")
}

/**
 * Belirtilen galeri anahtarı için `public/` klasörünü tarayıp manifest ve kapak sabitlerini günceller.
 */
async function main() {
  const galleryKey = process.argv[2]?.trim()
  if (!galleryKey) {
    throw new Error("Kullanım: node scripts/refresh-gallery-folder.mjs <galeri-anahtarı>")
  }

  const configRaw = await readFile(galleryConfigPath, "utf-8")
  const config = JSON.parse(configRaw)
  const gallery = config.galleries?.[galleryKey]

  if (!gallery?.publicFolder) {
    throw new Error(`gallery-config.json içinde "${galleryKey}" veya publicFolder bulunamadı.`)
  }

  const publicPaths = await listFolderImages(gallery.publicFolder)
  if (publicPaths.length === 0) {
    throw new Error(`public/${gallery.publicFolder}/ klasöründe görsel yok.`)
  }

  const coverPath = pickCoverImage(publicPaths)
  gallery.images = publicPaths

  await writeFile(galleryConfigPath, `${JSON.stringify(config, null, 2)}\n`, "utf-8")

  if (coverGalleryKeys.includes(galleryKey) && coverPath) {
    await updateGalleryCoversManifest(galleryKey, coverPath)
    await replaceHeroSlideFolderPaths(`/${gallery.publicFolder}/`, coverPath)
  }

  console.log(`Galeri: ${galleryKey}`)
  console.log(`Klasör: public/${gallery.publicFolder}/`)
  console.log(`Görsel sayısı: ${publicPaths.length}`)
  console.log(`Kapak: ${coverPath}`)
  if (coverGalleryKeys.includes(galleryKey)) {
    console.log(`Kapak manifest: data/gallery-covers.json → ${galleryKey}`)
  }
  console.log("")
  console.log("Sonraki adımlar:")
  console.log("  pnpm images:optimize")
  console.log("  pnpm sync:bucket-images")
  console.log("  pnpm sync:bucket-manifests")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
