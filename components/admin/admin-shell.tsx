"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ExternalLink, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { adminNavItems } from "@/lib/admin-navigation"
import { cn } from "@/lib/utils"

interface AdminShellProps {
  children: React.ReactNode
}

/**
 * Admin paneli için sol sidebar ve üst çubuk içeren ana kabuk bileşeni.
 */
export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname()

  /**
   * Admin oturumunu sonlandırır ve giriş ekranına döner.
   */
  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    window.location.assign("/admin")
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="sticky top-0 hidden h-screen max-h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white md:flex">
        <div className="flex shrink-0 items-center gap-3 border-b border-slate-200 px-5 py-5">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-slate-50">
            <Image src="/idea-logo.webp" alt="IDEA" fill className="object-contain p-1" sizes="40px" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">IDEA Admin</p>
            <p className="text-xs text-muted-foreground">İçerik yönetimi</p>
          </div>
        </div>

        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
          {adminNavItems.map((item) => {
            const isActive =
              item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href)
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col gap-0.5 rounded-xl px-3 py-3 transition-colors",
                  isActive ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-slate-50",
                )}
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </span>
                <span className="pl-6 text-xs text-muted-foreground">{item.description}</span>
              </Link>
            )
          })}
        </nav>

        <div className="shrink-0 space-y-2 border-t border-slate-200 bg-white p-3">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Siteyi aç
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Çıkış
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 md:hidden">
          <p className="text-sm font-semibold">IDEA Admin</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link href="/">Site</Link>
            </Button>
            <Button size="sm" variant="ghost" onClick={() => void handleLogout()}>
              Çıkış
            </Button>
          </div>
        </header>

        <div className="border-b border-slate-200 bg-white px-4 py-2 md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {adminNavItems.map((item) => {
              const isActive =
                item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium",
                    isActive ? "bg-primary text-primary-foreground" : "bg-slate-100 text-gray-700",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
