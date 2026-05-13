import {
  GetObjectCommand,
  HeadBucketCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  type PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

/** Sunucu tarafında kullanılan Tigris / S3 uyumlu yapılandırma alanları. */
export type TigrisStorageConfig = {
  endpoint: string
  region: string
  bucket: string
  accessKeyId: string
  secretAccessKey: string
  /** true ise path-style URL (`endpoint/bucket/key`), false ise sanal host tarzı. */
  forcePathStyle: boolean
}

/**
 * Ortam değişkenlerinden depolama yapılandırmasını okur; eksikse anlamlı hata fırlatır.
 */
export function readTigrisStorageConfigFromEnv(): TigrisStorageConfig {
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

  if (!endpoint) {
    throw new Error("S3_ENDPOINT tanımlı değil.")
  }
  if (!bucket) {
    throw new Error("S3_BUCKET tanımlı değil.")
  }
  if (!accessKeyId) {
    throw new Error("S3_ACCESS_KEY_ID tanımlı değil.")
  }
  if (!secretAccessKey) {
    throw new Error("S3_SECRET_ACCESS_KEY tanımlı değil.")
  }

  return {
    endpoint: endpoint.replace(/\/$/, ""),
    region,
    bucket,
    accessKeyId,
    secretAccessKey,
    forcePathStyle,
  }
}

/**
 * Verilen Tigris yapılandırmasından `S3Client` yapılandırma nesnesini üretir.
 */
function buildS3ClientOptions(config: TigrisStorageConfig) {
  return {
    region: config.region,
    endpoint: config.endpoint,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
    forcePathStyle: config.forcePathStyle,
  }
}

/**
 * Verilen yapılandırma ile S3 uyumlu `S3Client` örneği oluşturur.
 */
export function createTigrisS3Client(config: TigrisStorageConfig) {
  return new S3Client(buildS3ClientOptions(config))
}

/**
 * Ortam değişkenlerine göre yeni bir `S3Client` örneği oluşturur.
 */
export function createTigrisS3ClientFromEnv() {
  return createTigrisS3Client(readTigrisStorageConfigFromEnv())
}

/**
 * Bucket erişimini doğrulamak için `HeadBucket` komutunu çalıştırır.
 */
export async function headTigrisBucket(client: S3Client, bucket: string) {
  return client.send(new HeadBucketCommand({ Bucket: bucket }))
}

/**
 * Bucket içinde örnek nesne listesi almak için `ListObjectsV2` çalıştırır.
 */
export async function listSampleTigrisObjects(client: S3Client, bucket: string, maxKeys: number) {
  return client.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      MaxKeys: maxKeys,
    }),
  )
}

/**
 * S3 nesne anahtarındaki her yol segmentini URL-yolu için güvenli biçimde kodlar.
 */
export function encodeS3KeyForUrlPath(key: string) {
  return key
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/")
}

/**
 * Herkese açık okuma varsa tarayıcıda kullanılabilecek nesne URL'sini üretir.
 * `S3_PUBLIC_BASE_URL` tanımlıysa onu kullanır; aksi halde endpoint + bucket (path-style) birleştirir.
 */
export function buildPublicTigrisObjectUrl(config: TigrisStorageConfig, key: string) {
  const trimmedBase = process.env.S3_PUBLIC_BASE_URL?.trim().replace(/\/$/, "")
  const encodedKey = encodeS3KeyForUrlPath(key)

  if (trimmedBase) {
    return `${trimmedBase}/${encodedKey}`
  }

  if (config.forcePathStyle) {
    return `${config.endpoint}/${config.bucket}/${encodedKey}`
  }

  const host = new URL(config.endpoint).host
  return `https://${config.bucket}.${host}/${encodedKey}`
}

/**
 * Bucket'a bayt içeriği yüklemek için `PutObject` komutunu çalıştırır.
 */
export async function putTigrisObject(
  client: S3Client,
  input: Omit<PutObjectCommandInput, "Bucket"> & { Bucket?: string },
  bucket: string,
) {
  return client.send(
    new PutObjectCommand({
      Bucket: bucket,
      ...input,
    }),
  )
}

/**
 * Belirli bir nesne için süreli (GET) indirme URL'si üretir; bucket özel ise bile geçici erişim sağlar.
 */
export async function createTigrisGetObjectPresignedUrl(
  client: S3Client,
  bucket: string,
  key: string,
  expiresInSeconds: number,
) {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key })
  return getSignedUrl(client, command, { expiresIn: expiresInSeconds })
}

/**
 * İstemcinin doğrudan bucket'a yazabilmesi için süreli (PUT) yükleme URL'si üretir.
 */
export async function createTigrisPutObjectPresignedUrl(
  client: S3Client,
  bucket: string,
  key: string,
  contentType: string,
  expiresInSeconds: number,
) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: contentType,
  })
  return getSignedUrl(client, command, { expiresIn: expiresInSeconds })
}
