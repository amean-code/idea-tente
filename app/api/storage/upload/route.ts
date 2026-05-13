import { NextResponse, type NextRequest } from "next/server"
import { isStorageApiRequestAuthorized } from "@/lib/storage/storage-api-auth"
import { buildUploadObjectKey } from "@/lib/storage/upload-key"
import {
  buildPublicTigrisObjectUrl,
  createTigrisS3ClientFromEnv,
  putTigrisObject,
  readTigrisStorageConfigFromEnv,
} from "@/lib/storage/tigris-s3"

export const runtime = "nodejs"

/**
 * Yetkisiz yükleme istekleri için JSON yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Depolama API gizli anahtarı geçersiz veya eksik." }, { status: 401 })
}

/**
 * multipart/form-data ile gelen dosyayı Tigris bucket'a yükler ve herkese açık URL tahminini döndürür.
 */
export async function POST(request: NextRequest) {
  if (!isStorageApiRequestAuthorized(request)) {
    return unauthorizedResponse()
  }

  try {
    const config = readTigrisStorageConfigFromEnv()
    const client = createTigrisS3ClientFromEnv()

    const form = await request.formData()
    const file = form.get("file")

    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, message: "file alanı zorunlu (multipart/form-data)." }, { status: 400 })
    }

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

    const publicUrl = buildPublicTigrisObjectUrl(config, key)

    return NextResponse.json({
      ok: true,
      key,
      bucket: config.bucket,
      contentType,
      size: bytes.byteLength,
      publicUrl,
      note:
        "publicUrl ancak bucket okuma izinleri herkese açıksa doğrudan görüntülenir; özel bucket'ta GET presigned URL kullanın.",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yükleme başarısız."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
