import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Standart Biyoklimatik Pergola | Ekonomik Çözümler",
  description:
    "Uygun fiyatlı, güvenilir ve fonksiyonel biyoklimatik pergola çözümü. Manuel lamel sistemi ile ekonomik seçenek.",
}

// Alt ürün sayfaları için özel layout - header/footer yok
export default function SubProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
