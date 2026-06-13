import { unlink } from "node:fs/promises"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const publicDir = path.join(projectRoot, "public")

const imageExtensions = new Set([".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".tif", ".tiff", ".webp"])
const skipDirectories = new Set(["TEKNİK DOSYALAR", "E-KATALOG", "SERTİFİKALAR"])

/** Komut satırında `--apply` verilmişse dosyalar gerçekten silinir. */
const apply = process.argv.includes("--apply")

/** Dosyanın görsel olup olmadığını kontrol eder. */
function isImageFile(fileName) {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * `public/` altındaki görselleri özyinelemeli olarak toplar.
 */
async function collectPublicImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (skipDirectories.has(entry.name)) {
        continue
      }
      files.push(...(await collectPublicImages(fullPath)))
      continue
    }
    if (entry.isFile() && isImageFile(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Bucket'a senkronlanmış görselleri `public/` altından kaldırır (varsayılan: kuru çalıştırma).
 */
async function main() {
  const files = await collectPublicImages(publicDir)
  let totalBytes = 0

  for (const filePath of files) {
    const fileStat = await stat(filePath)
    totalBytes += fileStat.size
    const relative = path.relative(projectRoot, filePath)
    console.log(apply ? "DELETE" : "DRY-RUN", relative, `${Math.round(fileStat.size / 1024)}KB`)
    if (apply) {
      await unlink(filePath)
    }
  }

  console.log(
    `${apply ? "Silindi" : "Silinecek"}: ${files.length} dosya, ~${Math.round(totalBytes / 1024 / 1024)}MB`,
  )
  if (!apply) {
    console.log("Uygulamak için: node scripts/prune-synced-public-images.mjs --apply")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
