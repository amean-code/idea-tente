import { createReadStream } from "node:fs"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { DeleteObjectCommand, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3"
import { createS3ClientFromEnv } from "./s3-env.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, "..")
const publicDir = path.join(projectRoot, "public")
const BUCKET_PREFIX = "site/public/"

const imageExtensions = new Set([".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".tif", ".tiff", ".webp"])

/** Varsayılan temizlenecek ürün klasörleri. */
const defaultFolders = ["motorlu-pergola", "giyotin-cam"]

/** Komut satırında `--apply` verilmişse bucket'ta silme ve eksik yükleme yapılır. */
const apply = process.argv.includes("--apply")

/**
 * Komut satırından hedef klasör listesini çıkarır.
 */
function parseTargetFolders() {
  const folderArgs = process.argv.slice(2).filter((arg) => !arg.startsWith("--"))
  return folderArgs.length > 0 ? folderArgs : defaultFolders
}

/**
 * Dosyanın görsel olup olmadığını kontrol eder.
 */
function isImageFile(fileName) {
  return imageExtensions.has(path.extname(fileName).toLowerCase())
}

/**
 * Dosya uzantısından Content-Type üretir.
 */
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

/**
 * `public/{folder}` altındaki görsel dosya adlarını döndürür.
 */
async function listLocalImageNames(folderName) {
  const directory = path.join(publicDir, folderName)

  try {
    const entries = await readdir(directory, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isFile() && isImageFile(entry.name))
      .map((entry) => entry.name)
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return []
    }
    throw error
  }
}

/**
 * Bucket'ta `site/public/{folder}/` altındaki tüm nesne anahtarlarını listeler.
 */
async function listBucketObjectKeys(client, bucket, folderName) {
  const prefix = `${BUCKET_PREFIX}${folderName}/`
  const keys = []
  let continuationToken

  do {
    const page = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      }),
    )

    for (const object of page.Contents ?? []) {
      if (typeof object.Key === "string" && !object.Key.endsWith("/")) {
        keys.push(object.Key)
      }
    }

    continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined
  } while (continuationToken)

  return keys
}

/**
 * Bucket nesne anahtarından dosya adını çıkarır.
 */
function getFileNameFromBucketKey(key) {
  return path.posix.basename(key)
}

/**
 * Yerel dosyayı bucket'a yükler.
 */
async function uploadLocalFile(client, bucket, folderName, fileName) {
  const localPath = path.join(publicDir, folderName, fileName)
  const key = `${BUCKET_PREFIX}${folderName}/${fileName}`

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: createReadStream(localPath),
      ContentType: contentTypeFor(fileName),
      CacheControl: "public, max-age=31536000, immutable",
    }),
  )

  const fileStat = await stat(localPath)
  console.log(apply ? "UPLOAD" : "WOULD-UPLOAD", key, `${Math.round(fileStat.size / 1024)}KB`)
}

/**
 * Bucket'tan tek bir nesneyi siler.
 */
async function deleteBucketObject(client, bucket, key) {
  await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }))
  console.log(apply ? "DELETE" : "WOULD-DELETE", key)
}

/**
 * Tek bir ürün klasörü için bucket'ı `public/` ile hizalar.
 */
async function reconcileFolder(client, bucket, folderName) {
  const [localNames, bucketKeys] = await Promise.all([
    listLocalImageNames(folderName),
    listBucketObjectKeys(client, bucket, folderName),
  ])

  const localSet = new Set(localNames)
  const bucketFileNames = bucketKeys.map((key) => getFileNameFromBucketKey(key))
  const bucketSet = new Set(bucketFileNames)

  const toDelete = bucketKeys.filter((key) => !localSet.has(getFileNameFromBucketKey(key)))
  const toUpload = localNames.filter((name) => !bucketSet.has(name))

  console.log(`\n=== ${folderName} ===`)
  console.log(`public: ${localNames.length} görsel · bucket: ${bucketKeys.length} nesne`)
  console.log(`silinecek: ${toDelete.length} · yüklenecek: ${toUpload.length}`)

  for (const key of toDelete) {
    if (apply) {
      await deleteBucketObject(client, bucket, key)
    } else {
      console.log("WOULD-DELETE", key)
    }
  }

  for (const fileName of toUpload) {
    if (apply) {
      await uploadLocalFile(client, bucket, folderName, fileName)
    } else {
      console.log("WOULD-UPLOAD", `${BUCKET_PREFIX}${folderName}/${fileName}`)
    }
  }

  return { folderName, deleted: toDelete.length, uploaded: toUpload.length }
}

/**
 * Seçili klasörlerde bucket'ı `public/` ile eşitler; eski bucket görsellerini kaldırır.
 */
async function main() {
  const folders = parseTargetFolders()
  const { client, bucket } = createS3ClientFromEnv()

  console.log(apply ? "Uygulama modu (--apply)" : "Kuru çalıştırma (değişiklik yok)")
  console.log("Hedef klasörler:", folders.join(", "))

  const results = []

  for (const folderName of folders) {
    results.push(await reconcileFolder(client, bucket, folderName))
  }

  const totalDeleted = results.reduce((sum, row) => sum + row.deleted, 0)
  const totalUploaded = results.reduce((sum, row) => sum + row.uploaded, 0)

  console.log(
    `\nÖzet: ${apply ? "silindi" : "silinecek"} ${totalDeleted}, ${apply ? "yüklendi" : "yüklenecek"} ${totalUploaded}`,
  )

  if (!apply) {
    console.log("\nUygulamak için:")
    console.log("  pnpm prune:bucket-folders --apply")
    console.log("  pnpm prune:bucket-folders motorlu-pergola giyotin-cam --apply")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
