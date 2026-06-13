import type { Metadata } from "next"
import { AdminGalleryManager } from "@/components/admin/admin-gallery-manager"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"
import { loadAdminGalleryState } from "@/lib/admin-gallery"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Sayfa Galerileri",
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Admin sayfasını oturum durumuna göre giriş formu veya galeri yöneticisi olarak render eder.
 */
export default async function AdminPage() {
  const isAuthenticated = await isAdminCookieAuthenticated()

  if (!isAuthenticated) {
    return <AdminLoginForm />
  }

  const initialState = await loadAdminGalleryState()
  return <AdminGalleryManager initialState={initialState} />
}
