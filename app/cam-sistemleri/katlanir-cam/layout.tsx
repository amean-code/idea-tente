import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Katlanır Cam Sistemleri | Premium Cam Çözümleri",
  description:
    "Yüksek kaliteli katlanır cam sistemleri ile mekanlarınızı dönüştürün. Dayanıklı alüminyum profil, çift cam teknolojisi ve 15 yıl garanti.",
}

// Alt ürün sayfaları için özel layout - header/footer yok
export default function SubProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
