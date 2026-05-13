import { NextRequest, NextResponse } from "next/server"
import { isAdminRequestAuthenticated } from "@/lib/admin-auth"
import {
  canWritePergolaHeroSlides,
  readPergolaHeroSlides,
  savePergolaHeroSlides,
} from "@/lib/pergola-hero-slides"
import { listPergolaBucketPublicPaths } from "@/lib/pergola-bucket-server"
import { createTigrisS3ClientFromEnv, readTigrisStorageConfigFromEnv } from "@/lib/storage/tigris-s3"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

/**
 * Yetkisiz istekler için 401 yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Bu işlem için admin girişi gerekli." }, { status: 401 })
}

/**
 * Bucket istemcisi ile `site/pergola/` altındaki tüm public yolları toplar.
 */
async function loadBucketPergolaPathSet(): Promise<Set<string>> {
  const cfg = readTigrisStorageConfigFromEnv()
  const client = createTigrisS3ClientFromEnv()
  return listPergolaBucketPublicPaths(client, cfg.bucket)
}

/**
 * İstemci gövdesindeki slayt yollarını tekil ve güvenli hale getirir; `/pergola/` yolları bucket ile eşleşmelidir.
 */
function sanitizeHeroSlidesPayload(rawSlides: unknown, bucketPaths: Set<string>): string[] {
  if (!Array.isArray(rawSlides)) {
    throw new Error("slides bir dizi olmalı.")
  }

  const paths = rawSlides
    .filter((item): item is string => typeof item === "string")
    .map((s) => s.trim())
    .filter(Boolean)

  const unique = [...new Set(paths)]

  for (const p of unique) {
    if (p.includes("..") || !p.startsWith("/")) {
      throw new Error("Geçersiz slayt yolu.")
    }
    if (p.startsWith("/pergola/") && !bucketPaths.has(p)) {
      throw new Error(`Bucket'ta bulunamadı: ${p}`)
    }
  }

  if (unique.length === 0) {
    throw new Error("En az bir slayt gerekli.")
  }

  return unique
}

/**
 * Kahraman slayt manifestini ve bucket'taki pergola public yollarını döndürür.
 */
export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  try {
    const [manifest, canWrite, bucketPaths] = await Promise.all([
      readPergolaHeroSlides(),
      canWritePergolaHeroSlides(),
      loadBucketPergolaPathSet().catch(() => new Set<string>()),
    ])

    return NextResponse.json({
      ok: true,
      slides: manifest.slides,
      canWrite,
      bucketPergolaPaths: [...bucketPaths].sort((first, second) => first.localeCompare(second, "tr")),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Manifest okunamadı."
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}

/**
 * Kahraman slayt sırasını doğrulayıp manifest dosyasına yazar.
 */
export async function PUT(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  if (!(await canWritePergolaHeroSlides())) {
    return NextResponse.json(
      { ok: false, message: "Manifest dosyası bu ortamda yazılamıyor (salt okunur)." },
      { status: 400 },
    )
  }

  const body = await request.json().catch(() => null)

  try {
    const bucketPaths = await loadBucketPergolaPathSet()
    const slides = sanitizeHeroSlidesPayload(body?.slides, bucketPaths)
    const manifest = await savePergolaHeroSlides(slides)
    return NextResponse.json({ ok: true, slides: manifest.slides, message: "Kahraman slaytları güncellendi." })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kayıt başarısız."
    return NextResponse.json({ ok: false, message }, { status: 400 })
  }
}
