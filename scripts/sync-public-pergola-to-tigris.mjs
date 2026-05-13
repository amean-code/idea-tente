import { createReadStream } from "node:fs"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const pergolaPublicDir = path.join(projectRoot, "public", "pergola")
const PREFIX = "site/pergola/"

/** Ortam değişkenlerinden S3 istemcisi ve bucket adını üretir. */
function createClientFromEnv() {
  const endpoint = process.env.S3_ENDPOINT?.trim()
  const region = (process.env.S3_REGION ?? "auto").trim()
  const bucket = process.env.S3_BUCKET?.trim()
  const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim()
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim()
  const forcePathStyle =
    process.env.S3_FORCE_PATH_STYLE === undefined
      ? true
      : process.env.S3_FORCE_PATH_STYLE === "1" ||
        process.env.S3_FORCE_PATH_STYLE.toLowerCase() === "true"

  if (!endpoint || !bucket || !accessKeyId || !secretAccessKey) {
    throw new Error("S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY gerekli.")
  }

  return {
    client: new S3Client({
      region,
      endpoint: endpoint.replace(/\/$/, ""),
      credentials: { accessKeyId, secretAccessKey },
      forcePathStyle,
    }),
    bucket,
  }
}

/**
 * `public/pergola` içindeki görselleri Tigris `site/pergola/` önekine yükler.
 */
async function main() {
  const { client, bucket } = createClientFromEnv()
  const names = await readdir(pergolaPublicDir)
  const files = []

  for (const name of names) {
    const full = path.join(pergolaPublicDir, name)
    const st = await stat(full)
    if (st.isFile()) {
      files.push(name)
    }
  }

  if (files.length === 0) {
    console.warn("Yüklenecek dosya yok:", pergolaPublicDir)
    return
  }

  for (const fileName of files) {
    const key = `${PREFIX}${fileName}`
    const body = createReadStream(path.join(pergolaPublicDir, fileName))
    const ext = path.extname(fileName).toLowerCase()
    const contentType =
      ext === ".webp"
        ? "image/webp"
        : ext === ".jpg" || ext === ".jpeg"
          ? "image/jpeg"
          : ext === ".png"
            ? "image/png"
            : "application/octet-stream"

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
        CacheControl: "public, max-age=31536000, immutable",
      }),
    )
    console.log("OK", key)
  }

  console.log(`Bitti: ${files.length} dosya`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
