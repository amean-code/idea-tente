import galleryConfigFallback from "@/data/gallery-config.json"
import type { EditableGalleryConfig } from "@/lib/admin-gallery"

/** Galeri klasörü için depolama ve sayfa görsel sayıları. */
export interface GalleryFolderStat {
  folder: string
  label: string
  /** Klasördeki toplam görsel dosyası sayısı. */
  folderImageCount: number
  /** Manifestte sayfada gösterilen görsel sayısı. */
  galleryImageCount: number
}

/**
 * Public görsel yolundan üst klasör adını çıkarır (`/bioklimatik-pergola/a.webp` → `bioklimatik-pergola`).
 */
export function getPublicImageFolderName(imagePath: string): string {
  const pathParts = imagePath.split("/").filter(Boolean)
  return pathParts[0] ?? "public"
}

/**
 * Görsel yollarını klasör adına göre sayar.
 */
export function countImagesByFolder(imagePaths: string[]): Map<string, number> {
  const counts = new Map<string, number>()

  for (const imagePath of imagePaths) {
    const folderName = getPublicImageFolderName(imagePath)
    counts.set(folderName, (counts.get(folderName) ?? 0) + 1)
  }

  return counts
}

/**
 * Galeri manifestinden `publicFolder` başına sayfa görsel sayılarını üretir.
 */
export function countGalleryImagesByFolder(config: EditableGalleryConfig): Map<string, number> {
  const counts = new Map<string, number>()

  for (const gallery of Object.values(config.galleries)) {
    const current = counts.get(gallery.publicFolder) ?? 0
    counts.set(gallery.publicFolder, current + gallery.images.length)
  }

  return counts
}

/**
 * Manifest ve mevcut görsel listesinden klasör istatistik tablosunu oluşturur.
 */
export function buildGalleryFolderStats(
  availableImages: string[],
  config: EditableGalleryConfig = galleryConfigFallback as EditableGalleryConfig,
): GalleryFolderStat[] {
  const folderCounts = countImagesByFolder(availableImages)
  const galleryCounts = countGalleryImagesByFolder(config)
  const folderLabels = new Map<string, string>()

  for (const gallery of Object.values(config.galleries)) {
    if (!folderLabels.has(gallery.publicFolder)) {
      folderLabels.set(gallery.publicFolder, gallery.label)
    }
  }

  return Array.from(folderLabels.entries())
    .map(([folder, label]) => ({
      folder,
      label,
      folderImageCount: folderCounts.get(folder) ?? 0,
      galleryImageCount: galleryCounts.get(folder) ?? 0,
    }))
    .sort((first, second) => first.label.localeCompare(second.label, "tr"))
}

/**
 * Klasör istatistiklerinden toplam depolama görsel sayısını hesaplar.
 */
export function getTotalFolderImageCount(stats: GalleryFolderStat[]): number {
  return stats.reduce((total, stat) => total + stat.folderImageCount, 0)
}
