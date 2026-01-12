"use client"

import { Button } from "@/components/ui/button"
import { Download, BookOpen, FileCheck, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

/**
 * Katalog ana hero bölümü bileşeni
 * Katalog sayfasının üst kısmında gösterilen hero banner
 */
export function CatalogHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#3D4247]">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pergola/pergola-kapak.jpeg"
          alt="Katalog"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247] via-[#3D4247]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Ana başlık ve açıklama */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">2024 Katalogları Yayında</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              {t("catalog.categories.title")}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 text-pretty">
              {t("catalog.categories.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-primary-foreground"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/E-KATALOG/IDEA-E-CATALOG-1.pdf'
                  link.download = 'IDEA-E-KATALOG.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                {t("catalog.categories.downloadCatalog")}
              </Button>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-gray-300 font-medium">{t("catalog.categories.mainCategory")}</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-sm text-gray-300 font-medium">{t("catalog.categories.subCategories")}</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-sm text-gray-300 font-medium">{t("catalog.categories.languages")}</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-gray-300 font-medium">{t("catalog.categories.onlineAccess")}</p>
            </div>
          </div>

          {/* Özellikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Güncel İçerik</h3>
                <p className="text-sm text-gray-400">2026 Ürün Koleksiyonu</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Hızlı İndirme</h3>
                <p className="text-sm text-gray-400">PDF ve Dijital Format</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Çoklu Dil</h3>
                <p className="text-sm text-gray-400">5 Farklı Dil Desteği</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
