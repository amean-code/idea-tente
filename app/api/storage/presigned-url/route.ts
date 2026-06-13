import { NextResponse, type NextRequest } from "next/server"
import { isStorageApiRequestAuthorized } from "@/lib/storage/storage-api-auth"
import {
  createS3GetObjectPresignedUrl,
  createS3PutObjectPresignedUrl,
  createS3BucketClientFromEnv,
  readS3BucketConfigFromEnv,
} from "@/lib/storage/s3-bucket"

export const runtime = "nodejs"

/**
 * Yetkisiz presigned istekleri için JSON yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Depolama API gizli anahtarı geçersiz veya eksik." }, { status: 401 })
}

/**
 * GET parametreleriyle sınırlı süreli yükleme veya indirme URL'si üretir (`mode=put|get`).
 */
export async function GET(request: NextRequest) {
  if (!isStorageApiRequestAuthorized(request)) {
    return unauthorizedResponse()
  }

  const url = new URL(request.url)
  const key = url.searchParams.get("key")?.trim()
  const modeRaw = url.searchParams.get("mode")?.trim().toLowerCase()
  const mode = modeRaw === "put" ? "put" : "get"
  const expiresRaw = url.searchParams.get("expiresIn")
  const expiresIn = Math.min(Math.max(Number(expiresRaw ?? 900) || 900, 60), 60 * 60 * 24)
  const contentType = url.searchParams.get("contentType")?.trim() || "application/octet-stream"

  if (!key) {
    return NextResponse.json({ ok: false, message: "key sorgu parametresi zorunlu." }, { status: 400 })
  }

  try {
    const config = readS3BucketConfigFromEnv()
    const client = createS3BucketClientFromEnv()

    const signedUrl =
      mode === "put"
        ? await createS3PutObjectPresignedUrl(client, config.bucket, key, contentType, expiresIn)
        : await createS3GetObjectPresignedUrl(client, config.bucket, key, expiresIn)

    return NextResponse.json({
      ok: true,
      mode,
      key,
      bucket: config.bucket,
      expiresIn,
      contentType: mode === "put" ? contentType : undefined,
      url: signedUrl,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Presigned URL üretilemedi."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
