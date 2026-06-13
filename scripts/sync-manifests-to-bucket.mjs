import { createReadStream } from "node:fs"
import { readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { createS3ClientFromEnv } from "./s3-env.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")

const manifests = [
  { local: "data/gallery-config.json", key: "site/manifests/gallery-config.json" },
  { local: "data/gallery-covers.json", key: "site/manifests/gallery-covers.json" },
  { local: "data/pergola-hero-slides.json", key: "site/manifests/pergola-hero-slides.json" },
]

/**
 * Yerel manifest JSON dosyalarını Railway bucket'a yükler.
 */
async function main() {
  const { client, bucket } = createS3ClientFromEnv()

  for (const manifest of manifests) {
    const fullPath = path.join(projectRoot, manifest.local)
    const body = await readFile(fullPath, "utf-8")
    const fileStat = await stat(fullPath)

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: manifest.key,
        Body: body,
        ContentType: "application/json; charset=utf-8",
        CacheControl: "public, max-age=60, must-revalidate",
      }),
    )

    console.log("OK", manifest.key, `${Math.round(fileStat.size / 1024)}KB`)
  }

  console.log(`Bitti: ${manifests.length} manifest yüklendi.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
