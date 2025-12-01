"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ProductHeroProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
}

export function ProductHero({ title, subtitle, description, heroImage }: ProductHeroProps) {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">{t("productDetail.hero.premiumBadge")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">{title}</h1>

          <p className="text-xl md:text-2xl text-gray-200 text-pretty">{subtitle}</p>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-pretty">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/teklif-al">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("productDetail.hero.getQuote")}
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Link href="/katalog">
                <Download className="mr-2 h-5 w-5" />
                {t("productDetail.hero.downloadCatalog")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
