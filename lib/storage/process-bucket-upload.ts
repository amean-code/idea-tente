import {
  buildSitePublicUploadObjectKey,
  buildUploadObjectKey,
  sitePublicObjectKeyToPublicPath,
} from "@/lib/storage/upload-key"
import {
  buildPublicS3ObjectUrl,
  createS3BucketClientFromEnv,
  putS3Object,
  readS3BucketConfigFromEnv,
} from "@/lib/storage/s3-bucket"

/** Bucket'a tek dosya yükleme sonucunda dönen özet bilgi. */
export type BucketUploadResult = {
  key: string
  bucket: string
  contentType: string
  size: number
  publicUrl: string
  publicPath: string | null
}

export type BucketUploadOptions = {
  /** `site/public/{publicFolder}/` altına yüklemek için galeri klasör adı. */
  publicFolder?: string
}

/**
 * Tek bir `File` nesnesini ortam değişkenleriyle tanımlı S3 bucket'a yükler.
 */
export async function processBucketFileUpload(
  file: File,
  options: BucketUploadOptions = {},
): Promise<BucketUploadResult> {
  const config = readS3BucketConfigFromEnv()
  const client = createS3BucketClientFromEnv()

  const originalName = typeof file.name === "string" ? file.name : "upload.bin"
  const key = options.publicFolder
    ? buildSitePublicUploadObjectKey(options.publicFolder, originalName)
    : buildUploadObjectKey(originalName)
  const bytes = new Uint8Array(await file.arrayBuffer())
  const contentType = file.type || "application/octet-stream"

  await putS3Object(
    client,
    {
      Key: key,
      Body: bytes,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    },
    config.bucket,
  )

  return {
    key,
    bucket: config.bucket,
    contentType,
    size: bytes.byteLength,
    publicUrl: buildPublicS3ObjectUrl(config, key),
    publicPath: sitePublicObjectKeyToPublicPath(key),
  }
}
