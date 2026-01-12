import { Header } from "@/components/header"
import { ExportHero } from "@/components/export-hero"
import { ExportGlobe } from "@/components/export-globe"
import { GlobalReach } from "@/components/global-reach"
import { DistributorBenefits } from "@/components/distributor-benefits"
import { ExportProducts } from "@/components/export-products"
import { DistributorApplication } from "@/components/distributor-application"
import { ExportShippingProcess } from "@/components/export-shipping-process"

/**
 * Export sayfası
 * Global ihracat ve distribütörlük bilgileri
 */
export default function ExportPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <ExportHero />
        <ExportGlobe />
        <GlobalReach />
        <ExportShippingProcess />
        <ExportProducts />
        <DistributorBenefits />
        <DistributorApplication />
      </main>
    </div>
  )
}
