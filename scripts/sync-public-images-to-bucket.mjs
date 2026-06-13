import { createReadStream } from "node:fs"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { createS3ClientFromEnv } from "./s3-env.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const publicDir = path.join(projectRoot, "public")
const PREFIX = "site/public/"

const imageExtensions = new Set([".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".tif", ".tiff", ".webp"])

/** Dosya uzantısından Content-Type üretir. */
function contentTypeFor(fileName) {
  const ext = path.extname(fileName).toLowerCase()
  if (ext === ".webp") return "image/webp"
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg"
  if (ext === ".png") return "image/png"
  if (ext === ".gif") return "image/gif"
  if (ext === ".svg") return "image/svg+xml"
  if (ext === ".avif") return "image/avif"
  return "application/octet-stream"
}

/** Dosyanın görsel olup olmadığını kontrol eder. */
function isImageFile(fileName) {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * `public/` altındaki tüm görselleri özyinelemeli olarak toplar.
 */
async function collectPublicImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
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
 * `public/` altındaki görselleri Railway bucket'a `site/public/` önekiyle yükler.
 */
async function main() {
  const { client, bucket } = createS3ClientFromEnv()
  const files = await collectPublicImages(publicDir)

  if (files.length === 0) {
    console.warn("Yüklenecek dosya yok:", publicDir)
    return
  }

  for (const fullPath of files) {
    const relative = path.relative(publicDir, fullPath).split(path.sep).join("/")
    const key = `${PREFIX}${relative}`
    const body = createReadStream(fullPath)

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentTypeFor(fullPath),
        CacheControl: "public, max-age=31536000, immutable",
      }),
    )

    const fileStat = await stat(fullPath)
    console.log("OK", key, `${Math.round(fileStat.size / 1024)}KB`)
  }

  console.log(`Bitti: ${files.length} dosya yüklendi.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
