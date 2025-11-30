import { HeroSection } from "@/components/hero-section"
import { ProductsOverview } from "@/components/products-overview"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { CertificatesSection } from "@/components/certificates-section"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('/luxury-modern-pergola-with-glass-panels-by-pool-at.jpg')"
          }}
        />
      </div>
      
      <main className="relative z-10">
        <HeroSection />
        <ProductsOverview />
        <FeaturedProjects />
        <CertificatesSection />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  )
}
