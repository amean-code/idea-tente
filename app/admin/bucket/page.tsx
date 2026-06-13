import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Yönlendirme",
  robots: { index: false, follow: false },
}

/**
 * Eski bucket URL'sini yeni görsel yükleme sayfasına yönlendirir.
 */
export default function AdminBucketRedirectPage() {
  redirect("/admin/yukle")
}
