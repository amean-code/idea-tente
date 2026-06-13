import { NextRequest, NextResponse } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"
import { isAdminRequestAuthenticated } from "@/lib/admin-auth"
import { listAvailableGalleryImages } from "@/lib/admin-gallery"
import {
  canWritePergolaHeroSlides,
  readPergolaHeroSlides,
  savePergolaHeroSlides,
} from "@/lib/pergola-hero-slides"
import { listAllSiteImagePublicPaths } from "@/lib/pergola-bucket-server"
import { createS3BucketClientFromEnv, readS3BucketConfigFromEnv } from "@/lib/storage/s3-bucket"

export const runtime = "nodejs"

/**
 * Yetkisiz istekler için 401 yanıtı döndürür.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Bu işlem için admin girişi gerekli." }, { status: 401 })
}

/**
 * Bucket istemcisi ile site görsellerinin public yollarını toplar.
 */
async function loadBucketPublicPathSet(): Promise<Set<string>> {
  const cfg = readS3BucketConfigFromEnv()
  const client = createS3BucketClientFromEnv()
  return listAllSiteImagePublicPaths(client, cfg.bucket)
}

/**
 * Bucket ve yerel public klasöründeki izin verilen slayt yollarını toplar.
 */
async function loadAllowedSlidePathSet(): Promise<Set<string>> {
  const paths = new Set<string>()

  try {
    const bucketPaths = await loadBucketPublicPathSet()
    for (const bucketPath of bucketPaths) {
      paths.add(bucketPath)
    }
  } catch {
    /* Bucket yapılandırması yoksa yerel public ile devam */
  }

  const localImages = await listAvailableGalleryImages()
  for (const localPath of localImages) {
    paths.add(localPath)
  }

  return paths
}

/**
 * İstemci gövdesindeki slayt yollarını tekil ve güvenli hale getirir.
 */
function sanitizeHeroSlidesPayload(rawSlides: unknown, allowedPaths: Set<string>): string[] {
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
    if (!allowedPaths.has(p)) {
      throw new Error(`Görsel bulunamadı: ${p}`)
    }
  }

  if (unique.length === 0) {
    throw new Error("En az bir slayt gerekli.")
  }

  return unique
}

/**
 * Kahraman slayt manifestini ve bucket'taki public yolları döndürür.
 */
export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  try {
    const [manifest, canWrite, bucketPaths] = await Promise.all([
      readPergolaHeroSlides(),
      canWritePergolaHeroSlides(),
      loadAllowedSlidePathSet().catch(() => new Set<string>()),
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
 * Kahraman slayt sırasını doğrulayıp bucket manifestine yazar.
 */
export async function PUT(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  if (!(await canWritePergolaHeroSlides())) {
    return NextResponse.json(
      { ok: false, message: "Manifest bu ortamda yazılamıyor (bucket yapılandırması gerekli)." },
      { status: 400 },
    )
  }

  const body = await request.json().catch(() => null)

  try {
    const allowedPaths = await loadAllowedSlidePathSet()
    const slides = sanitizeHeroSlidesPayload(body?.slides, allowedPaths)
    const manifest = await savePergolaHeroSlides(slides)
    revalidateTag("pergola-hero-slides")
    revalidatePath("/")
    revalidatePath("/en")
    return NextResponse.json({ ok: true, slides: manifest.slides, message: "Kahraman slaytları güncellendi." })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kayıt başarısız."
    return NextResponse.json({ ok: false, message }, { status: 400 })
  }
}
