import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sabit Cam Sistemleri | Kalıcı Cam Çözümleri",
  description:
    "Sabit cam panelleri ile modern ve kalıcı koruma. Yalıtım, UV koruma ve kolay bakım özellikleri.",
}

/**
 * Sabit cam alt ürün sayfası layout'u
 * Header/footer yok, sadece içerik
 */
export default function SubProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

