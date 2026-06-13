import { createReadStream } from "node:fs"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { createS3ClientFromEnv } from "./s3-env.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const pergolaPublicDir = path.join(projectRoot, "public", "pergola")
const PREFIX = "site/pergola/"

/**
 * `public/pergola` içindeki görselleri Railway bucket'a `site/pergola/` önekiyle yükler.
 */
async function main() {
  const { client, bucket } = createS3ClientFromEnv()
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
