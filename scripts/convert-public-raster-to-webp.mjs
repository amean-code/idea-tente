/**
 * public/ altındaki raster görselleri (webp/svg/ico hariç) WebP'ye çevirir,
 * kaynak dosyayı siler ve depo genelinde eski URL -> yeni URL değişimini uygular.
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const publicDir = path.join(projectRoot, "public")

/** WebP'ye dönüştürülecek kaynak uzantılar (küçük harf). */
const sourceExtensions = new Set([
  ".avif",
  ".bmp",
  ".gif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
])

/**
 * public altındaki tüm dönüştürülebilir dosya yollarını toplar.
 */
function collectRasterFiles(directory) {
  const results = []
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectRasterFiles(fullPath))
      continue
    }
    if (!entry.isFile()) continue
    const ext = path.extname(entry.name).toLowerCase()
    if (sourceExtensions.has(ext)) {
      results.push(fullPath)
    }
  }

  return results
}

/**
 * Dosya yolunu sitede kullanılan / ile başlayan public URL biçimine çevirir.
 */
function toPublicUrl(absolutePath) {
  const rel = path.relative(publicDir, absolutePath)
  return `/${rel.split(path.sep).join("/")}`
}

/**
 * Metin dosyalarında eski görsel URL'lerini yeni WebP URL'leri ile değiştirir.
 */
function applyReplacementsInRepo(replacements) {
  const sortedEntries = [...replacements.entries()].sort((a, b) => b[0].length - a[0].length)
  const textExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json", ".css", ".md", ".html"])

  /**
   * Verilen dizini özyinelemeli gezerek metin dosyalarında değişim uygular.
   */
  function walkRepo(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") continue
        walkRepo(fullPath)
        continue
      }
      if (!entry.isFile()) continue
      const ext = path.extname(entry.name).toLowerCase()
      if (!textExtensions.has(ext)) continue

      let content = fs.readFileSync(fullPath, "utf8")
      let changed = false

      for (const [fromUrl, toUrl] of sortedEntries) {
        if (!content.includes(fromUrl)) continue
        content = content.split(fromUrl).join(toUrl)
        changed = true
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, "utf8")
      }
    }
  }

  walkRepo(projectRoot)
}

/**
 * Komut satırından çalıştırıldığında `public/` altındaki rasterları WebP'ye çevirir ve depo genelinde URL güncellemesi yapar.
 */
async function main() {
  const rasterFiles = collectRasterFiles(publicDir).sort((a, b) => a.localeCompare(b, "tr"))
  const replacements = new Map()

  console.log(`${rasterFiles.length} dosya WebP'ye dönüştürülüyor...`)

  for (const sourcePath of rasterFiles) {
    const dir = path.dirname(sourcePath)
    const base = path.basename(sourcePath, path.extname(sourcePath))
    const targetPath = path.join(dir, `${base}.webp`)

    try {
      await sharp(sourcePath).rotate().webp({ quality: 85, effort: 4 }).toFile(targetPath)
    } catch (error) {
      console.error(`Atlandı (dönüştürülemedi): ${sourcePath}`, error.message)
      continue
    }

    const oldUrl = toPublicUrl(sourcePath)
    const newUrl = toPublicUrl(targetPath)

    if (oldUrl !== newUrl) {
      replacements.set(oldUrl, newUrl)
    }

    if (sourcePath !== targetPath) {
      fs.unlinkSync(sourcePath)
    }
  }

  console.log(`${replacements.size} URL eşlemesi kod ve veri dosyalarına uygulanıyor...`)
  applyReplacementsInRepo(replacements)
  console.log("Tamamlandı.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
