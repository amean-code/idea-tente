import { NextRequest, NextResponse } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"
import { isAdminRequestAuthenticated } from "@/lib/admin-auth"
import { loadAdminCoverState } from "@/lib/admin-gallery-covers"
import { listAvailableGalleryImages, readGalleryConfig } from "@/lib/admin-gallery"
import type { GalleryKey } from "@/lib/gallery-config"
import { canWriteGalleryCovers, saveGalleryCover } from "@/lib/gallery-covers-server"
import { getPublicImageFolderName } from "@/lib/admin-folder-stats"

/**
 * Yetkisiz admin istekleri için standart JSON yanıtı üretir.
 */
function unauthorizedResponse() {
  return NextResponse.json({ ok: false, message: "Bu işlem için admin girişi gerekli." }, { status: 401 })
}

/**
 * Kapak yolunun ilgili galeri klasörüne ait olduğunu doğrular.
 */
async function validateCoverPathForGallery(galleryKey: GalleryKey, coverPath: string): Promise<void> {
  const [config, availableImages] = await Promise.all([readGalleryConfig(), listAvailableGalleryImages()])
  const gallery = config.galleries[galleryKey]

  if (!gallery) {
    throw new Error("Sayfa bulunamadı.")
  }

  if (!availableImages.includes(coverPath)) {
    throw new Error("Seçilen görsel depoda bulunamadı.")
  }

  if (getPublicImageFolderName(coverPath) !== gallery.publicFolder) {
    throw new Error("Kapak görseli ilgili ürün klasöründe olmalı.")
  }
}

/**
 * Admin paneline kapak manifestini ve sayfa listesini döndürür.
 */
export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  const state = await loadAdminCoverState()
  return NextResponse.json({ ok: true, ...state })
}

/**
 * Seçili sayfa için kapak görselini günceller.
 */
export async function PUT(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  if (!(await canWriteGalleryCovers())) {
    return NextResponse.json(
      { ok: false, message: "Kapak manifesti bu ortamda yazılamıyor (bucket yapılandırması gerekli)." },
      { status: 400 },
    )
  }

  const body = await request.json().catch(() => null)
  const galleryKey = typeof body?.galleryKey === "string" ? (body.galleryKey as GalleryKey) : undefined
  const coverPath = typeof body?.coverPath === "string" ? body.coverPath.trim() : ""

  if (!galleryKey || !coverPath) {
    return NextResponse.json({ ok: false, message: "galleryKey ve coverPath gerekli." }, { status: 400 })
  }

  try {
    await validateCoverPathForGallery(galleryKey, coverPath)
    const covers = await saveGalleryCover(galleryKey, coverPath)
    revalidateTag("gallery-covers", "max")
    revalidatePath("/admin/kapaklar")
    return NextResponse.json({ ok: true, covers, message: "Kapak fotoğrafı kaydedildi." })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kapak kaydedilemedi."
    return NextResponse.json({ ok: false, message }, { status: 400 })
  }
}
