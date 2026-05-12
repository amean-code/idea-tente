import { NextRequest, NextResponse } from "next/server"
import { isAdminRequestAuthenticated } from "@/lib/admin-auth"
import { loadAdminGalleryState, saveGalleryImages } from "@/lib/admin-gallery"

/**
 * Yetkisiz admin API istekleri için standart JSON yanıtı üretir.
 */
function unauthorizedResponse() {
  return NextResponse.json({ message: "Bu işlem için admin girişi gerekli." }, { status: 401 })
}

/**
 * Admin panelinin güncel galeri manifestini ve public görselleri almasını sağlar.
 */
export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  const state = await loadAdminGalleryState()
  return NextResponse.json(state)
}

/**
 * Admin panelinden gelen galeri sırası ve seçim değişikliklerini manifest dosyasına kaydeder.
 */
export async function PUT(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  const body = await request.json().catch(() => null)
  const galleryKey = typeof body?.galleryKey === "string" ? body.galleryKey : ""
  const images = Array.isArray(body?.images) ? body.images.filter((image: unknown) => typeof image === "string") : []

  try {
    const config = await saveGalleryImages(galleryKey, images)
    return NextResponse.json({ config, message: "Galeri kaydedildi." })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Galeri kaydedilemedi."
    return NextResponse.json({ message }, { status: 400 })
  }
}
