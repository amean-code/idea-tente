import type { Metadata } from "next"
import { AdminCoverManager } from "@/components/admin/admin-cover-manager"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"
import { loadAdminCoverState } from "@/lib/admin-gallery-covers"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Kapak Fotoğrafları",
  robots: { index: false, follow: false },
}

/**
 * Ürün sayfası kapak fotoğraflarını yönetme sayfasını render eder.
 */
export default async function AdminCoversPage() {
  const isAuthenticated = await isAdminCookieAuthenticated()

  if (!isAuthenticated) {
    return <AdminLoginForm />
  }

  const initialState = await loadAdminCoverState()
  return <AdminCoverManager initialState={initialState} />
}
