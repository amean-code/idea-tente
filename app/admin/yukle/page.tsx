import type { Metadata } from "next"
import { AdminUploadManager } from "@/components/admin/admin-upload-manager"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"
import { buildGalleryFolderStats } from "@/lib/admin-folder-stats"
import { getGalleryUploadFolderOptions } from "@/lib/admin-upload-folders"
import { listAvailableGalleryImages, readGalleryConfig } from "@/lib/admin-gallery"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Görsel Yönetimi",
  robots: { index: false, follow: false },
}

/**
 * Galeri klasörüne görsel yükleme sayfasını render eder.
 */
export default async function AdminUploadPage() {
  const isAuthenticated = await isAdminCookieAuthenticated()

  if (!isAuthenticated) {
    return <AdminLoginForm />
  }

  const [availableImages, config] = await Promise.all([listAvailableGalleryImages(), readGalleryConfig()])
  const folderOptions = getGalleryUploadFolderOptions()
  const initialFolderStats = buildGalleryFolderStats(availableImages, config)

  return (
    <AdminUploadManager
      folderOptions={folderOptions}
      initialFolderStats={initialFolderStats}
      initialTotalImages={availableImages.length}
    />
  )
}
