import { Header } from "@/components/header"
import { ARHero } from "@/components/ar-hero"
import { ARFeatures } from "@/components/ar-features"
import { ARGallery } from "@/components/ar-gallery"
import { ARInstructions } from "@/components/ar-instructions"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

/**
 * AR Demo sayfası - modern ve tutarlı tasarım
 */
export default function ARDemoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ARHero />
        <ARFeatures />
        <ARGallery />
        <ARInstructions />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              AR Deneyimini Şimdi Başlatın
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
              Pergola sistemlerimizi kendi mekanınızda görün ve doğru kararı verin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/teklif-al">
                  Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-secondary/20 border-secondary/30 text-primary-foreground hover:bg-secondary/30" asChild>
                <Link href="/iletisim">
                  <Phone className="mr-2 h-5 w-5" />
                  İletişime Geç
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
