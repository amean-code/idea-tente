import { buildUploadObjectKey } from "@/lib/storage/upload-key"
import {
  buildPublicTigrisObjectUrl,
  createTigrisS3ClientFromEnv,
  putTigrisObject,
  readTigrisStorageConfigFromEnv,
} from "@/lib/storage/tigris-s3"

/** Tigris'e tek dosya yükleme sonucunda dönen özet bilgi. */
export type TigrisUploadResult = {
  key: string
  bucket: string
  contentType: string
  size: number
  publicUrl: string
}

/**
 * Tek bir `File` nesnesini ortam değişkenleriyle tanımlı Tigris bucket'a yükler.
 */
export async function processTigrisFileUpload(file: File): Promise<TigrisUploadResult> {
  const config = readTigrisStorageConfigFromEnv()
  const client = createTigrisS3ClientFromEnv()

  const originalName = typeof file.name === "string" ? file.name : "upload.bin"
  const key = buildUploadObjectKey(originalName)
  const bytes = new Uint8Array(await file.arrayBuffer())
  const contentType = file.type || "application/octet-stream"

  await putTigrisObject(
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
    publicUrl: buildPublicTigrisObjectUrl(config, key),
  }
}
