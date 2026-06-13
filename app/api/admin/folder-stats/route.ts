import { NextRequest, NextResponse } from "next/server"
import { isAdminRequestAuthenticated } from "@/lib/admin-auth"
import { buildGalleryFolderStats, getTotalFolderImageCount } from "@/lib/admin-folder-stats"
import { listAvailableGalleryImages, readGalleryConfig } from "@/lib/admin-gallery"

/**
 * Yetkisiz admin istekleri için standart JSON yanıtı üretir.
 */
function unauthorizedResponse() {
  return NextResponse.json({ message: "Bu işlem için admin girişi gerekli." }, { status: 401 })
}

/**
 * Her galeri klasöründeki depolama ve sayfa görsel sayılarını döndürür.
 */
export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse()
  }

  const [availableImages, config] = await Promise.all([listAvailableGalleryImages(), readGalleryConfig()])
  const stats = buildGalleryFolderStats(availableImages, config)

  return NextResponse.json({
    stats,
    totalImages: availableImages.length,
    totalInFolders: getTotalFolderImageCount(stats),
  })
}
