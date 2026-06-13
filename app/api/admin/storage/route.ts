import { NextResponse, type NextRequest } from "next/server"
import { isAdminRequestAuthenticated } from "@/lib/admin-auth"
import { isImageObjectKey } from "@/lib/storage/image-object-key"
import { processBucketFileUpload } from "@/lib/storage/process-bucket-upload"
import {
  buildPublicS3ObjectUrl,
  createS3GetObjectPresignedUrl,
  createS3BucketClientFromEnv,
  deleteS3Object,
  listS3ObjectPage,
  readS3BucketConfigFromEnv,
} from "@/lib/storage/s3-bucket"
import { validateDeletableSitePublicObjectKey } from "@/lib/storage/validate-deletable-storage-key"

export const runtime = "nodejs"

const defaultPreviewExpiresSeconds = 3600

/**
 * Yetkisiz admin depolama istekleri için JSON yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Bu işlem için admin girişi gerekli." }, { status: 401 })
}

/**
 * Admin oturumuyla bucket nesnelerini listeler; görseller için kısa ömürlü önizleme URL’si üretir.
 */
export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  try {
    const config = readS3BucketConfigFromEnv()
    const client = createS3BucketClientFromEnv()

    const url = new URL(request.url)
    const prefix = url.searchParams.get("prefix") ?? "uploads/"
    const maxKeysParam = Number(url.searchParams.get("maxKeys") ?? 48)
    const maxKeys = Math.min(Math.max(Number.isFinite(maxKeysParam) ? maxKeysParam : 48, 1), 100)
    const continuationToken = url.searchParams.get("continuationToken")?.trim() || undefined

    const listed = await listS3ObjectPage(client, config.bucket, {
      prefix: prefix || undefined,
      maxKeys,
      continuationToken,
    })

    const contents = listed.Contents ?? []

    const items = await Promise.all(
      contents.map(async (obj) => {
        const key = typeof obj.Key === "string" ? obj.Key : ""
        const isImage = key ? isImageObjectKey(key) : false
        let previewUrl: string | null = null
        if (key && isImage) {
          previewUrl = await createS3GetObjectPresignedUrl(
            client,
            config.bucket,
            key,
            defaultPreviewExpiresSeconds,
          )
        }

        return {
          key,
          size: obj.Size ?? 0,
          lastModified: obj.LastModified?.toISOString() ?? null,
          isImage,
          publicUrl: key ? buildPublicS3ObjectUrl(config, key) : "",
          previewUrl,
        }
      }),
    )

    return NextResponse.json({
      ok: true,
      bucket: config.bucket,
      prefix: prefix || "",
      previewExpiresIn: defaultPreviewExpiresSeconds,
      items,
      isTruncated: Boolean(listed.IsTruncated),
      nextContinuationToken: listed.NextContinuationToken ?? null,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Bucket listesi alınamadı."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}

/**
 * Admin oturumuyla multipart yüklemeyi S3 bucket'a iletir.
 */
export async function POST(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  try {
    const form = await request.formData()
    const file = form.get("file")
    const publicFolder = typeof form.get("publicFolder") === "string" ? form.get("publicFolder") : undefined

    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, message: "file alanı zorunlu (multipart/form-data)." }, { status: 400 })
    }

    const uploaded = await processBucketFileUpload(file, {
      publicFolder: typeof publicFolder === "string" ? publicFolder.trim() || undefined : undefined,
    })

    return NextResponse.json({
      ok: true,
      ...uploaded,
      note:
        "Özel bucket’ta doğrudan publicUrl yerine admin listesindeki previewUrl (presigned) kullanılır.",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yükleme başarısız."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}

/**
 * Admin oturumuyla bucket'tan tek bir site görselini siler.
 */
export async function DELETE(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  try {
    const body = await request.json().catch(() => null)
    const key = typeof body?.key === "string" ? body.key : ""
    const validationMessage = validateDeletableSitePublicObjectKey(key)

    if (validationMessage) {
      return NextResponse.json({ ok: false, message: validationMessage }, { status: 400 })
    }

    const config = readS3BucketConfigFromEnv()
    const client = createS3BucketClientFromEnv()
    await deleteS3Object(client, config.bucket, key.trim())

    return NextResponse.json({
      ok: true,
      key: key.trim(),
      message: "Görsel silindi.",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Silme başarısız."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
