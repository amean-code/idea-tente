import type { Metadata } from "next"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { AdminPergolaManager } from "@/components/admin/admin-pergola-manager"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Pergola bucket",
  robots: { index: false, follow: false },
}

/**
 * Pergola bucket ve kahraman slaytlarını yöneten admin alt sayfası.
 */
export default async function AdminPergolaPage() {
  const isAuthenticated = await isAdminCookieAuthenticated()
  if (!isAuthenticated) {
    return <AdminLoginForm />
  }
  return <AdminPergolaManager />
}
