"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ConditionalSiteChromeProps {
  children: React.ReactNode
}

/**
 * Admin rotalarında site header/footer'ını gizler; diğer sayfalarda normal kabuk gösterir.
 */
export function ConditionalSiteChrome({ children }: ConditionalSiteChromeProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith("/admin")

  if (isAdminRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
