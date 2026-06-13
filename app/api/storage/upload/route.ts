import { NextResponse, type NextRequest } from "next/server"
import { processBucketFileUpload } from "@/lib/storage/process-bucket-upload"
import { isStorageApiRequestAuthorized } from "@/lib/storage/storage-api-auth"

export const runtime = "nodejs"

/**
 * Yetkisiz yükleme istekleri için JSON yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Depolama API gizli anahtarı geçersiz veya eksik." }, { status: 401 })
}

/**
 * multipart/form-data ile gelen dosyayı S3 bucket'a yükler ve herkese açık URL tahminini döndürür.
 */
export async function POST(request: NextRequest) {
  if (!isStorageApiRequestAuthorized(request)) {
    return unauthorizedResponse()
  }

  try {
    const form = await request.formData()
    const file = form.get("file")

    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, message: "file alanı zorunlu (multipart/form-data)." }, { status: 400 })
    }

    const uploaded = await processBucketFileUpload(file)

    return NextResponse.json({
      ok: true,
      ...uploaded,
      note:
        "publicUrl ancak bucket okuma izinleri herkese açıksa doğrudan görüntülenir; özel bucket'ta GET presigned URL kullanın.",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yükleme başarısız."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
