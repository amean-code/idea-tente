import { listAvailableGalleryImages, readGalleryConfig } from "@/lib/admin-gallery"
import type { GalleryKey } from "@/lib/gallery-config"
import {
  canWriteGalleryCovers,
  readGalleryCovers,
} from "@/lib/gallery-covers-server"
import type { GalleryCoversManifest } from "@/lib/gallery-covers"
import { getPublicImageFolderName } from "@/lib/admin-folder-stats"

/** Admin kapak panelinde gösterilecek sayfa satırı. */
export interface AdminCoverPageOption {
  galleryKey: GalleryKey
  label: string
  publicFolder: string
  pagePath: string
  coverPath: string
  folderImageCount: number
}

/** Admin kapak yönetimi başlangıç durumu. */
export interface AdminCoverState {
  covers: GalleryCoversManifest
  pages: AdminCoverPageOption[]
  availableImages: string[]
  canWrite: boolean
}

/** Galeri anahtarı → ürün sayfası URL eşlemesi. */
const pagePathByGalleryKey: Partial<Record<GalleryKey, string>> = {
  "bioklimatik-sistemler": "/pergola/bioklimatik-sistemler",
  "motorlu-sistemler": "/pergola/motorlu-sistemler",
  pergola: "/pergola",
  "giyotin-cam-sistemleri": "/cam-sistemleri/giyotin-cam-sistemleri",
  "surme-cam": "/cam-sistemleri/surme-cam",
  "kis-bahcesi": "/kis-bahcesi",
  "gunes-kiriclari": "/gunes-kiriclari",
  "zip-perde": "/zip-perde",
}

/**
 * Admin kapak panelinin ihtiyaç duyduğu manifest ve sayfa listesini hazırlar.
 */
export async function loadAdminCoverState(): Promise<AdminCoverState> {
  const [covers, config, availableImages, canWrite] = await Promise.all([
    readGalleryCovers(),
    readGalleryConfig(),
    listAvailableGalleryImages(),
    canWriteGalleryCovers(),
  ])

  const folderCounts = new Map<string, number>()
  for (const imagePath of availableImages) {
    const folderName = getPublicImageFolderName(imagePath)
    folderCounts.set(folderName, (folderCounts.get(folderName) ?? 0) + 1)
  }

  const pages = Object.entries(config.galleries).map(([galleryKey, gallery]) => {
    const key = galleryKey as GalleryKey
    const coverPath =
      covers.covers[key] ?? gallery.images[0] ?? availableImages.find((path) => path.startsWith(`/${gallery.publicFolder}/`)) ?? ""

    return {
      galleryKey: key,
      label: gallery.label,
      publicFolder: gallery.publicFolder,
      pagePath: pagePathByGalleryKey[key] ?? "/",
      coverPath,
      folderImageCount: folderCounts.get(gallery.publicFolder) ?? 0,
    }
  })

  return {
    covers,
    pages,
    availableImages,
    canWrite,
  }
}

/**
 * Kapak seçiminde kullanılabilecek görsel yollarını galeri klasörüne göre filtreler.
 */
export function filterCoverCandidates(
  availableImages: string[],
  publicFolder: string,
  galleryImages: string[],
): string[] {
  const gallerySet = new Set(galleryImages)
  const folderPaths = availableImages.filter((imagePath) => getPublicImageFolderName(imagePath) === publicFolder)
  const merged = new Set([...galleryImages, ...folderPaths])
  return [...merged].sort((first, second) => first.localeCompare(second, "tr"))
}
