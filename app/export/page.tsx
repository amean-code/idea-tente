import { Header } from "@/components/header"
import { ExportHero } from "@/components/export-hero"
import { GlobalReach } from "@/components/global-reach"
import { DistributorBenefits } from "@/components/distributor-benefits"
import { ExportProducts } from "@/components/export-products"
import { DistributorApplication } from "@/components/distributor-application"
import { ExportSupport } from "@/components/export-support"
import { ExportGlobe } from "@/components/export-globe"

export default function ExportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ExportHero />
        <ExportGlobe />
        <GlobalReach />
        <DistributorBenefits />
        <ExportProducts />
        <ExportSupport />
        <DistributorApplication />
      </main>
    </div>
  )
}
