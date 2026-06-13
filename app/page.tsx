import { HeroSection } from "@/components/hero-section"
import { ProductsOverview } from "@/components/products-overview"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
// import { FeaturedProjects } from "@/components/featured-projects"
import { CertificatesSection } from "@/components/certificates-section"
import { CompanyVideoSection } from "@/components/company-video-section"
import { readPergolaHeroSlidesCached } from "@/lib/pergola-hero-slides"
import { pergolaBackgroundUrl } from "@/lib/pergola-public-path"

/** Kahraman slaytları manifest değişince admin kaydından sonra revalidate edilir. */
export const revalidate = 3600

export default async function HomePage() {
  const heroManifest = await readPergolaHeroSlidesCached()

  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('${pergolaBackgroundUrl("/luxury-modern-pergola-with-glass-panels-by-pool-at.webp")}')`,
          }}
        />
      </div>

      <main className="relative z-10">
        <HeroSection slides={heroManifest.slides} />
        <ProductsOverview />
        <CompanyVideoSection />
        {/* <FeaturedProjects /> */}
        <CertificatesSection />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  )
}
