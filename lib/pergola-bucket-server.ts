import { ListObjectsV2Command, type S3Client } from "@aws-sdk/client-s3"
import { LEGACY_PERGOLA_PREFIX, SITE_PUBLIC_PREFIX, siteObjectKeyToPublicPath } from "@/lib/site-storage-keys"

/** Bucket'ta pergola görsellerinin tutulduğu eski nesne öneki. */
export const PERGOLA_BUCKET_PREFIX = LEGACY_PERGOLA_PREFIX

/**
 * Bucket'taki `site/pergola/` nesnelerini tarayıcıda kullanılan `/pergola/dosya.webp` yollarına çevirir.
 */
export function bucketKeyToPergolaPublicPath(key: string): string | null {
  if (!key.startsWith(PERGOLA_BUCKET_PREFIX)) {
    return null
  }
  const fileName = key.slice(PERGOLA_BUCKET_PREFIX.length)
  if (!fileName || fileName.endsWith("/")) {
    return null
  }
  return `/pergola/${fileName}`
}

/**
 * Bucket nesne anahtarını public yola çevirir (`site/public/` ve eski `site/pergola/`).
 */
export function bucketKeyToPublicPath(key: string): string | null {
  const sitePublicPath = siteObjectKeyToPublicPath(key)
  if (sitePublicPath) {
    return sitePublicPath
  }
  return bucketKeyToPergolaPublicPath(key)
}

/**
 * Belirtilen önek altındaki tüm nesneler için public path kümesini listeler.
 */
async function listBucketPublicPathsByPrefix(
  client: S3Client,
  bucket: string,
  prefix: string,
): Promise<Set<string>> {
  const paths = new Set<string>()
  let continuationToken: string | undefined

  do {
    const page = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      }),
    )

    for (const obj of page.Contents ?? []) {
      const key = obj.Key
      if (typeof key !== "string") {
        continue
      }
      const publicPath = bucketKeyToPublicPath(key)
      if (publicPath) {
        paths.add(publicPath)
      }
    }

    continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined
  } while (continuationToken)

  return paths
}

/**
 * `site/public/` önekindeki tüm nesneler için public path kümesini listeler.
 */
export async function listSitePublicBucketPaths(client: S3Client, bucket: string): Promise<Set<string>> {
  return listBucketPublicPathsByPrefix(client, bucket, SITE_PUBLIC_PREFIX)
}

/**
 * `site/pergola/` önekindeki tüm nesneler için public path kümesini listeler (geriye dönük).
 */
export async function listPergolaBucketPublicPaths(client: S3Client, bucket: string): Promise<Set<string>> {
  return listBucketPublicPathsByPrefix(client, bucket, PERGOLA_BUCKET_PREFIX)
}

/**
 * Bucket'taki site görsellerini (public + eski pergola öneki) tek kümede döndürür.
 */
export async function listAllSiteImagePublicPaths(client: S3Client, bucket: string): Promise<Set<string>> {
  const [sitePublic, legacyPergola] = await Promise.all([
    listSitePublicBucketPaths(client, bucket),
    listPergolaBucketPublicPaths(client, bucket),
  ])
  return new Set([...sitePublic, ...legacyPergola])
}
