import { S3Client } from "@aws-sdk/client-s3"

/**
 * Railway / S3 uyumlu bucket için `forcePathStyle` değerini ortam değişkeninden okur.
 * Railway varsayılanı virtual-hosted (`false`); Credentials sekmesinde path-style yazıyorsa `true` yapın.
 */
export function readForcePathStyleFromEnv() {
  if (process.env.S3_FORCE_PATH_STYLE === undefined) {
    return false
  }
  return (
    process.env.S3_FORCE_PATH_STYLE === "1" ||
    process.env.S3_FORCE_PATH_STYLE.toLowerCase() === "true"
  )
}

/**
 * Ortam değişkenlerinden Railway (veya S3 uyumlu) bucket istemcisi üretir.
 */
export function createS3ClientFromEnv() {
  const endpoint = process.env.S3_ENDPOINT?.trim()
  const region = (process.env.S3_REGION ?? "auto").trim()
  const bucket = process.env.S3_BUCKET?.trim()
  const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim()
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim()
  const forcePathStyle = readForcePathStyleFromEnv()

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
