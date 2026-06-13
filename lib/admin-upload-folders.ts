import galleryConfigFallback from "@/data/gallery-config.json"

/** Yükleme formunda gösterilecek klasör seçeneği. */
export interface GalleryUploadFolderOption {
  folder: string
  label: string
}

/**
 * Galeri manifestindeki benzersiz `publicFolder` değerlerini yükleme listesi olarak döndürür.
 */
export function getGalleryUploadFolderOptions(): GalleryUploadFolderOption[] {
  const folderLabels = new Map<string, string>()

  for (const gallery of Object.values(galleryConfigFallback.galleries)) {
    if (!folderLabels.has(gallery.publicFolder)) {
      folderLabels.set(gallery.publicFolder, gallery.label)
    }
  }

  return Array.from(folderLabels.entries())
    .map(([folder, label]) => ({ folder, label }))
    .sort((first, second) => first.label.localeCompare(second.label, "tr"))
}
