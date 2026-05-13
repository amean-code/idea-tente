import type { Metadata } from "next"
import { AdminBucketManager } from "@/components/admin/admin-bucket-manager"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin Bucket — Tigris",
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Tigris bucket önizleme ve yükleme sayfasını oturum yoksa giriş formu olarak render eder.
 */
export default async function AdminBucketPage() {
  const isAuthenticated = await isAdminCookieAuthenticated()

  if (!isAuthenticated) {
    return <AdminLoginForm />
  }

  return <AdminBucketManager />
}
