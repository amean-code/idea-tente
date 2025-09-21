import type { Metadata } from "next"
import KatlanirCamClientPage from "./KatlanirCamClientPage"

export const metadata: Metadata = {
  title: "Katlanır Cam Sistemleri | Premium Cam Çözümleri",
  description:
    "Yüksek kaliteli katlanır cam sistemleri ile mekanlarınızı dönüştürün. Dayanıklı alüminyum profil, çift cam teknolojisi ve 15 yıl garanti.",
}

export default function KatlanirCamPage() {
  return <KatlanirCamClientPage />
}
