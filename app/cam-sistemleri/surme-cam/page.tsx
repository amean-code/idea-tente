import type { Metadata } from "next"
import SurmeCamClientPage from "./SurmeCamClientPage"

export const metadata: Metadata = {
  title: "Sürme Cam Sistemleri | Pratik Cam Çözümleri",
  description:
    "Kolay kullanımlı sürme cam sistemleri ile mekanlarınızı genişletin. Sessiz çalışma, dayanıklı yapı ve estetik tasarım.",
}

// Alt ürün sayfaları için özel layout - header/footer yok
export default function SurmeCamPage() {
  return <SurmeCamClientPage />
}
