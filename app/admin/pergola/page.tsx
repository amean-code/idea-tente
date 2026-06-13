import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Admin — Yönlendirme",
  robots: { index: false, follow: false },
}

/**
 * Eski pergola URL'sini ana sayfa slaytları sayfasına yönlendirir.
 */
export default function AdminPergolaRedirectPage() {
  redirect("/admin/anasayfa")
}
