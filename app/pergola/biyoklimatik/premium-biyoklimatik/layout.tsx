import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Biyoklimatik Pergola | Lüks Outdoor Çözümleri",
  description:
    "Motorlu lamel sistemi, RGB LED aydınlatma ve akıllı kontrol özellikleri ile lüks outdoor yaşamın zirvesi.",
}

// Alt ürün sayfaları için özel layout - header/footer yok
export default function SubProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
