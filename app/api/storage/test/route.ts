import { NextResponse, type NextRequest } from "next/server"
import { isStorageApiRequestAuthorized } from "@/lib/storage/storage-api-auth"
import {
  buildPublicTigrisObjectUrl,
  createTigrisS3ClientFromEnv,
  headTigrisBucket,
  listSampleTigrisObjects,
  readTigrisStorageConfigFromEnv,
} from "@/lib/storage/tigris-s3"

export const runtime = "nodejs"

/**
 * Yetkisiz depolama test istekleri için JSON yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Depolama API gizli anahtarı geçersiz veya eksik." }, { status: 401 })
}

/**
 * Ortam değişkenleri ve kimlik bilgileriyle Tigris bucket bağlantısını doğrular; örnek nesne anahtarlarını listeler.
 */
export async function GET(request: NextRequest) {
  if (!isStorageApiRequestAuthorized(request)) {
    return unauthorizedResponse()
  }

  try {
    const config = readTigrisStorageConfigFromEnv()
    const client = createTigrisS3ClientFromEnv()

    await headTigrisBucket(client, config.bucket)
    const listed = await listSampleTigrisObjects(client, config.bucket, 5)

    const sampleKeys =
      listed.Contents?.map((item) => item.Key).filter((key): key is string => typeof key === "string") ?? []

    const samplePublicUrls = sampleKeys.map((key) => ({
      key,
      publicUrl: buildPublicTigrisObjectUrl(config, key),
    }))

    return NextResponse.json({
      ok: true,
      bucket: config.bucket,
      endpoint: config.endpoint,
      region: config.region,
      forcePathStyle: config.forcePathStyle,
      sampleKeys,
      samplePublicUrls,
      note:
        "publicUrl yalnızca bucket nesneleri herkese açık okunabiliyorsa çalışır; aksi halde presigned URL kullanın.",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Bucket testi başarısız."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
