import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsOverview } from "@/components/products-overview"
import { FeaturedProjects } from "@/components/featured-projects"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsOverview />
        <FeaturedProjects />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  )
}
