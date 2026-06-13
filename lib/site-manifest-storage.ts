import { access, readFile, writeFile } from "fs/promises"
import { constants } from "fs"
import path from "path"
import { createS3BucketClientFromEnv, getS3ObjectText, putS3ObjectText, readS3BucketConfigFromEnv } from "@/lib/storage/s3-bucket"

const projectRoot = process.cwd()

/**
 * S3 yapılandırması mevcutsa bucket'tan JSON manifest okur; aksi halde yerel dosyaya düşer.
 */
export async function readSiteManifest<T>(objectKey: string, localRelativePath: string): Promise<T> {
  const localPath = path.join(projectRoot, localRelativePath)

  try {
    const config = readS3BucketConfigFromEnv()
    const client = createS3BucketClientFromEnv()
    const remote = await getS3ObjectText(client, config.bucket, objectKey)

    if (remote) {
      return JSON.parse(remote) as T
    }
  } catch {
    /* Bucket yoksa veya okuma başarısızsa yerel dosyaya düş */
  }

  const local = await readFile(localPath, "utf-8")
  return JSON.parse(local) as T
}

/**
 * Manifest JSON'u bucket'a yazar; mümkünse yerel dosyayı da günceller.
 */
export async function writeSiteManifest<T>(objectKey: string, localRelativePath: string, data: T): Promise<T> {
  const serialized = `${JSON.stringify(data, null, 2)}\n`
  const localPath = path.join(projectRoot, localRelativePath)
  let wroteRemote = false

  try {
    const config = readS3BucketConfigFromEnv()
    const client = createS3BucketClientFromEnv()
    await putS3ObjectText(client, config.bucket, objectKey, serialized)
    wroteRemote = true
  } catch {
    /* Bucket yapılandırması yoksa yalnızca yerel dosyaya yaz */
  }

  if (!wroteRemote) {
    await writeFile(localPath, serialized, "utf-8")
    return data
  }

  try {
    await writeFile(localPath, serialized, "utf-8")
  } catch {
    /* Vercel gibi salt-okunur ortamlarda yerel yazma atlanır */
  }

  return data
}

/**
 * Yerel manifest dosyasının bu ortamda yazılabilir olup olmadığını kontrol eder.
 */
export async function canWriteLocalManifest(localRelativePath: string): Promise<boolean> {
  const localPath = path.join(projectRoot, localRelativePath)

  try {
    await access(localPath, constants.W_OK)
    return true
  } catch {
    return false
  }
}

/**
 * Bucket manifest yazımının mümkün olup olmadığını ortam değişkenlerinden kontrol eder.
 */
export function canWriteSiteManifest(): boolean {
  try {
    readS3BucketConfigFromEnv()
    return true
  } catch {
    return false
  }
}
