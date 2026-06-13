import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadBucketCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  type PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

/** Sunucu tarafında kullanılan Railway / S3 uyumlu bucket yapılandırma alanları. */
export type S3BucketConfig = {
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
export function readS3BucketConfigFromEnv(): S3BucketConfig {
  const endpoint = process.env.S3_ENDPOINT?.trim()
  const region = (process.env.S3_REGION ?? "auto").trim()
  const bucket = process.env.S3_BUCKET?.trim()
  const accessKeyId = process.env.S3_ACCESS_KEY_ID?.trim()
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY?.trim()
  const forcePathStyle =
    process.env.S3_FORCE_PATH_STYLE === undefined
      ? false
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
 * Verilen bucket yapılandırmasından `S3Client` yapılandırma nesnesini üretir.
 */
function buildS3ClientOptions(config: S3BucketConfig) {
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
export function createS3BucketClient(config: S3BucketConfig) {
  return new S3Client(buildS3ClientOptions(config))
}

/**
 * Ortam değişkenlerine göre yeni bir `S3Client` örneği oluşturur.
 */
export function createS3BucketClientFromEnv() {
  return createS3BucketClient(readS3BucketConfigFromEnv())
}

/**
 * Bucket içindeki bir nesneyi kalıcı olarak siler.
 */
export async function deleteS3Object(client: S3Client, bucket: string, key: string) {
  return client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }))
}

/**
 * Bucket içindeki bir nesnenin bayt gövdesini okur; yoksa `null` döner.
 */
export async function getS3ObjectBytes(client: S3Client, bucket: string, key: string) {
  try {
    const response = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }))
    const body = response.Body
    if (!body) {
      return null
    }
    const bytes = await body.transformToByteArray()
    return {
      bytes,
      contentType: response.ContentType ?? "application/octet-stream",
      cacheControl: response.CacheControl,
    }
  } catch {
    return null
  }
}

/**
 * Bucket içindeki bir nesnenin metin gövdesini UTF-8 olarak okur; yoksa `null` döner.
 */
export async function getS3ObjectText(client: S3Client, bucket: string, key: string) {
  try {
    const response = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }))
    const body = response.Body
    if (!body) {
      return null
    }
    return await body.transformToString("utf-8")
  } catch {
    return null
  }
}

/**
 * Bucket'a UTF-8 metin nesnesi yazar (manifest JSON vb.).
 */
export async function putS3ObjectText(
  client: S3Client,
  bucket: string,
  key: string,
  text: string,
  contentType = "application/json; charset=utf-8",
) {
  return putS3Object(
    client,
    {
      Key: key,
      Body: text,
      ContentType: contentType,
      CacheControl: "public, max-age=60, must-revalidate",
    },
    bucket,
  )
}

/**
 * Bucket erişimini doğrulamak için `HeadBucket` komutunu çalıştırır.
 */
export async function headS3Bucket(client: S3Client, bucket: string) {
  return client.send(new HeadBucketCommand({ Bucket: bucket }))
}

/**
 * Bucket içinde örnek nesne listesi almak için `ListObjectsV2` çalıştırır.
 */
export async function listSampleS3Objects(client: S3Client, bucket: string, maxKeys: number) {
  return client.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      MaxKeys: maxKeys,
    }),
  )
}

/**
 * Bucket içinde önek ve isteğe bağlı devam belirteci ile sayfalanmış nesne listesi döndürür.
 */
export async function listS3ObjectPage(
  client: S3Client,
  bucket: string,
  options: {
    prefix?: string
    maxKeys?: number
    continuationToken?: string
  },
) {
  return client.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: options.prefix,
      MaxKeys: options.maxKeys ?? 50,
      ContinuationToken: options.continuationToken,
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
export function buildPublicS3ObjectUrl(config: S3BucketConfig, key: string) {
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
export async function putS3Object(
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
export async function createS3GetObjectPresignedUrl(
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
export async function createS3PutObjectPresignedUrl(
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
