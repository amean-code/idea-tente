import { Header } from "@/components/header"
import { ARHero } from "@/components/ar-hero"
import { ARFeatures } from "@/components/ar-features"
import { ARGallery } from "@/components/ar-gallery"
import { ARInstructions } from "@/components/ar-instructions"

export default function ARDemoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ARHero />
        <ARFeatures />
        <ARGallery />
        <ARInstructions />
      </main>
    </div>
  )
}
