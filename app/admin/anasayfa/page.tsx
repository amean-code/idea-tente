import type { Metadata } from "next"
import { AdminHeroSlidesManager } from "@/components/admin/admin-hero-slides-manager"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Ana Sayfa Slaytları",
  robots: { index: false, follow: false },
}

/**
 * Ana sayfa kahraman slaytlarını düzenleme sayfasını render eder.
 */
export default async function AdminHomeSlidesPage() {
  const isAuthenticated = await isAdminCookieAuthenticated()

  if (!isAuthenticated) {
    return <AdminLoginForm />
  }

  return <AdminHeroSlidesManager />
}
