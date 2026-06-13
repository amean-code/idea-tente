import { rename, readdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { galleryRenamePresets } from "./gallery-rename-presets.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const publicDir = path.join(projectRoot, "public")

const imageExtensions = new Set([".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".tif", ".tiff", ".webp"])

/**
 * Dosya adından sıralama anahtarı üretir (ChatGPT zamanı, MOTORLU PERGOLA (N), sondaki numara).
 */
function extractSortKey(fileName) {
  const chatGptTime = fileName.match(/(\d{1,2})_(\d{2})_(\d{2})\./)
  if (chatGptTime) {
    const [, hours, minutes, seconds] = chatGptTime
    return `0-${hours.padStart(2, "0")}${minutes}${seconds}`
  }

  const motorluNumber = fileName.match(/MOTORLU PERGOLA \((\d+)\)/i)
  if (motorluNumber) {
    return `1-${String(motorluNumber[1]).padStart(4, "0")}`
  }

  const trailingNumber = fileName.match(/-(\d+)\.[^.]+$/)
  if (trailingNumber) {
    return `2-${String(trailingNumber[1]).padStart(4, "0")}-${fileName}`
  }

  return `9-${fileName}`
}

/**
 * Görsel dosya adının desteklenen uzantıya sahip olup olmadığını kontrol eder.
 */
function isImageFile(fileName) {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * Sıra numarası ve sahne ekine göre SEO dostu dosya adı üretir.
 */
function buildSeoFileName(prefix, scene, index, extension, sceneVariants) {
  const sequence = String(index + 1).padStart(2, "0")
  const duplicateSuffix = index >= sceneVariants.length ? `-${Math.floor(index / sceneVariants.length) + 1}` : ""
  return `${prefix}-${scene}${duplicateSuffix}-${sequence}${extension}`
}

/**
 * Zaten SEO formatında olan dosyaları yeniden adlandırmadan atlar.
 */
function isAlreadySeoNamed(fileName, namePrefix) {
  return fileName.toLowerCase().startsWith(`${namePrefix.toLowerCase()}-`)
}

/**
 * Belirtilen galeri klasöründeki görselleri SEO anahtar kelimeli dosya adlarına yeniden adlandırır.
 */
async function main() {
  const galleryKey = process.argv[2]?.trim()
  const apply = process.argv.includes("--apply")
  const preset = galleryRenamePresets[galleryKey]

  if (!galleryKey || !preset) {
    const available = Object.keys(galleryRenamePresets).join(", ")
    throw new Error(`Kullanım: node scripts/rename-gallery-folder-images.mjs <galeri-anahtarı> [--apply]\nDesteklenen: ${available}`)
  }

  const targetDir = path.join(publicDir, preset.publicFolder)
  const entries = await readdir(targetDir, { withFileTypes: true })
  const files = entries
    .filter((entry) => entry.isFile() && isImageFile(entry.name) && !isAlreadySeoNamed(entry.name, preset.namePrefix))
    .map((entry) => entry.name)
    .sort((a, b) => extractSortKey(a).localeCompare(extractSortKey(b)))

  if (files.length === 0) {
    console.log(`Yeniden adlandırılacak dosya yok: public/${preset.publicFolder}/`)
    return
  }

  const plannedNames = files.map((fileName, index) => {
    const scene = preset.sceneVariants[index % preset.sceneVariants.length]
    return buildSeoFileName(preset.namePrefix, scene, index, path.extname(fileName).toLowerCase(), preset.sceneVariants)
  })

  const duplicateTargets = new Set()
  for (const targetName of plannedNames) {
    if (duplicateTargets.has(targetName)) {
      throw new Error(`Çakışan hedef ad: ${targetName}`)
    }
    duplicateTargets.add(targetName)
  }

  const tempPrefix = "__rename_tmp__"
  const tempMoves = []

  for (let index = 0; index < files.length; index += 1) {
    const fromName = files[index]
    const tempName = `${tempPrefix}${index}${path.extname(fromName).toLowerCase()}`
    const fromPath = path.join(targetDir, fromName)
    const tempPath = path.join(targetDir, tempName)
    console.log(apply ? "TEMP" : "DRY-RUN", fromName, "->", tempName)
    if (apply) {
      await rename(fromPath, tempPath)
    }
    tempMoves.push({ tempName, finalName: plannedNames[index] })
  }

  for (const move of tempMoves) {
    const tempPath = path.join(targetDir, move.tempName)
    const finalPath = path.join(targetDir, move.finalName)
    console.log(apply ? "RENAME" : "DRY-RUN", move.tempName, "->", move.finalName)
    if (apply) {
      await rename(tempPath, finalPath)
    }
  }

  console.log(`${apply ? "Tamamlandı" : "Planlandı"}: ${files.length} dosya (${galleryKey})`)
  if (!apply) {
    console.log("Uygulamak için: node scripts/rename-gallery-folder-images.mjs", galleryKey, "--apply")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
