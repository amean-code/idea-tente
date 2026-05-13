"use client"

import { useEffect } from "react"

/**
 * URL'deki hash (#id) ile eşleşen öğeye, sayfa yüklendikten sonra kaydırır (Next.js App Router ile uyum)
 */
export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "")
    if (!hash) return

    const scrollToTarget = () => {
      const el = document.getElementById(hash)
      el?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    requestAnimationFrame(() => requestAnimationFrame(scrollToTarget))
  }, [])

  return null
}
