import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsOverview } from "@/components/products-overview"
import { FeaturedProjects } from "@/components/featured-projects"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { readPergolaHeroSlidesCached } from "@/lib/pergola-hero-slides"

/** Kahraman slaytları manifest değişince admin kaydından sonra revalidate edilir. */
export const revalidate = 3600

/**
 * İngilizce ana sayfa — kahraman slayt manifesti Türkçe ana sayfa ile paylaşılır.
 */
export default async function EnglishHomePage() {
  const heroManifest = await readPergolaHeroSlidesCached()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection slides={heroManifest.slides} />
        <ProductsOverview />
        <FeaturedProjects />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  )
}
