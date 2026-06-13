import { AdminShell } from "@/components/admin/admin-shell"
import { isAdminCookieAuthenticated } from "@/lib/admin-auth"

/**
 * Admin rotaları için özel düzen: giriş yoksa sade ekran, giriş varsa sidebar kabuk.
 */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = await isAdminCookieAuthenticated()

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-slate-100">{children}</div>
  }

  return <AdminShell>{children}</AdminShell>
}
