import { access, readFile } from "node:fs/promises"
import { constants } from "node:fs"
import path from "node:path"
import { NextResponse, type NextRequest } from "next/server"
import { publicPathToSiteObjectKey } from "@/lib/site-storage-keys"
import { createS3BucketClientFromEnv, getS3ObjectBytes, readS3BucketConfigFromEnv } from "@/lib/storage/s3-bucket"

export const runtime = "nodejs"

/**
 * `Uint8Array` gövdesini `NextResponse` için uyumlu `Blob` biçimine çevirir.
 */
function toResponseBody(bytes: Uint8Array): Blob {
  const normalized = new Uint8Array(bytes.byteLength)
  normalized.set(bytes)
  return new Blob([normalized])
}

/**
 * İstek yolundan güvenli public dosya segmentlerini çıkarır.
 */
function parseAssetPathSegments(pathParam: string | string[] | undefined): string[] | null {
  const rawParts = Array.isArray(pathParam) ? pathParam : typeof pathParam === "string" ? [pathParam] : []
  if (rawParts.length === 0) {
    return null
  }

  const segments = rawParts
    .flatMap((part) => part.split("/"))
    .map((segment) => decodeURIComponent(segment))
    .filter(Boolean)

  if (segments.length === 0 || segments.some((segment) => segment === ".." || segment.includes("\0"))) {
    return null
  }

  return segments
}

/**
 * `public/` altından yerel dosya okumayı dener (bucket yedek).
 */
async function readLocalPublicAsset(segments: string[]): Promise<{ bytes: Uint8Array; contentType: string } | null> {
  const localPath = path.join(process.cwd(), "public", ...segments)

  try {
    await access(localPath, constants.R_OK)
    const bytes = await readFile(localPath)
    const ext = path.extname(localPath).toLowerCase()
    const contentType =
      ext === ".webp"
        ? "image/webp"
        : ext === ".png"
          ? "image/png"
          : ext === ".jpg" || ext === ".jpeg"
            ? "image/jpeg"
            : ext === ".svg"
              ? "image/svg+xml"
              : ext === ".gif"
                ? "image/gif"
                : "application/octet-stream"

    return { bytes, contentType }
  } catch {
    return null
  }
}

/**
 * Özel bucket'taki site görsellerini tarayıcıya proxy üzerinden sunar; yoksa `public/` yedekler.
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path?: string[] }> },
) {
  const { path: pathParam } = await context.params
  const segments = parseAssetPathSegments(pathParam)

  if (!segments) {
    return NextResponse.json({ ok: false, message: "Geçersiz görsel yolu." }, { status: 400 })
  }

  const publicPath = `/${segments.join("/")}`
  const objectKey = publicPathToSiteObjectKey(publicPath)

  if (objectKey) {
    try {
      const config = readS3BucketConfigFromEnv()
      const client = createS3BucketClientFromEnv()
      const remote = await getS3ObjectBytes(client, config.bucket, objectKey)

      if (remote) {
        return new NextResponse(toResponseBody(remote.bytes), {
          status: 200,
          headers: {
            "Content-Type": remote.contentType,
            "Cache-Control": remote.cacheControl ?? "public, max-age=86400, stale-while-revalidate=604800",
          },
        })
      }
    } catch {
      /* S3 yapılandırması yoksa yerel dosyaya düş */
    }
  }

  const local = await readLocalPublicAsset(segments)
  if (!local) {
    return NextResponse.json({ ok: false, message: "Görsel bulunamadı." }, { status: 404 })
  }

  return new NextResponse(toResponseBody(local.bytes), {
    status: 200,
    headers: {
      "Content-Type": local.contentType,
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
