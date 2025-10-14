import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExportHero } from "@/components/export-hero"
import { GlobalReach } from "@/components/global-reach"
import { DistributorBenefits } from "@/components/distributor-benefits"
import { ExportProducts } from "@/components/export-products"
import { DistributorApplication } from "@/components/distributor-application"
import { ExportGlobe } from "@/components/export-globe"
import { ExportShippingProcess } from "@/components/export-shipping-process"

/**
 * Export sayfası
 * Global ihracat ve distribütörlük bilgileri
 */
export default function ExportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ExportHero />
        <ExportGlobe />
        <ExportShippingProcess />
        <GlobalReach />
        <DistributorBenefits />
        <ExportProducts />
        <DistributorApplication />
      </main>
    </div>
  )
}
