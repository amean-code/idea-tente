"use client"

import { useEffect, useState } from "react"

/**
 * Client-only wrapper bileşeni
 * Hydration hatalarını önlemek için sadece client-side render yapar
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <>{children}</>
}

