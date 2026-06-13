import { unlink } from "node:fs/promises"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const publicDir = path.join(projectRoot, "public")

const imageExtensions = new Set([".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".tif", ".tiff", ".webp"])
const maxWidth = 1920
const webpQuality = 78

/** Dosyanın raster görsel uzantısına sahip olup olmadığını kontrol eder. */
function isRasterImage(fileName) {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * `public/` altındaki tüm raster görselleri özyinelemeli olarak toplar.
 */
async function collectImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectImageFiles(fullPath)))
      continue
    }
    if (entry.isFile() && isRasterImage(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Tek bir görseli yeniden boyutlandırır, WebP'ye çevirir ve metadata'yı temizler.
 */
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const outputPath = ext === ".webp" ? filePath : `${filePath.slice(0, -ext.length)}.webp`
  const beforeStat = await stat(filePath)

  const optimized = await sharp(filePath, { failOn: "none" })
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: webpQuality })
    .toBuffer()

  const { writeFile } = await import("node:fs/promises")
  await writeFile(outputPath, optimized)

  if (outputPath !== filePath) {
    await unlink(filePath)
  }

  const afterStat = await stat(outputPath)
  return { outputPath, beforeStat, afterStat }
}

/**
 * `public/` altındaki görselleri Sharp ile sıkıştırır (maks. 1920px, WebP q78).
 */
async function main() {
  const files = await collectImageFiles(publicDir)

  for (const filePath of files) {
    const { outputPath, beforeStat, afterStat } = await optimizeImage(filePath)
    const saved = beforeStat.size - afterStat.size
    console.log(
      "OK",
      path.relative(projectRoot, outputPath),
      `${Math.round(beforeStat.size / 1024)}KB -> ${Math.round(afterStat.size / 1024)}KB (${saved > 0 ? "-" : "+"}${Math.abs(Math.round(saved / 1024))}KB)`,
    )
  }

  console.log(`Bitti: ${files.length} görsel işlendi.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
