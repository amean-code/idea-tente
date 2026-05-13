import { ListObjectsV2Command, type S3Client } from "@aws-sdk/client-s3"

/** Tigris'te pergola görsellerinin tutulduğu nesne öneki. */
export const PERGOLA_BUCKET_PREFIX = "site/pergola/"

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
 * `site/pergola/` önekindeki tüm nesneler için public path kümesini listeler (sayfalama ile).
 */
export async function listPergolaBucketPublicPaths(client: S3Client, bucket: string): Promise<Set<string>> {
  const paths = new Set<string>()
  let continuationToken: string | undefined

  do {
    const page = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: PERGOLA_BUCKET_PREFIX,
        ContinuationToken: continuationToken,
      }),
    )

    for (const obj of page.Contents ?? []) {
      const key = obj.Key
      if (typeof key !== "string") {
        continue
      }
      const publicPath = bucketKeyToPergolaPublicPath(key)
      if (publicPath) {
        paths.add(publicPath)
      }
    }

    continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined
  } while (continuationToken)

  return paths
}
