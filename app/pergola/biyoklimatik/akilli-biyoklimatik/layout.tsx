import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Akıllı Biyoklimatik Pergola | IoT Teknolojisi",
  description:
    "IoT teknolojisi ile tam otomatik kontrol. Hava durumu sensörü, mobil uygulama ve yapay zeka algoritmaları.",
}

// Alt ürün sayfaları için özel layout - header/footer yok
export default function SubProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
