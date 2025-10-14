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
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Arka plan görseli */}
      <div className="absolute inset-0">
        <Image
          src="/pergola/pergola-kapak.jpeg"
          alt="Katalog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Ana başlık ve açıklama */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">2024 Katalogları Yayında</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Ürün Katalogları
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Tüm ürün gamımızı detaylı teknik özellikler, görseller ve bilgiler ile inceleyin
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                <Download className="h-5 w-5 mr-2" />
                Genel Katalog İndir
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <BookOpen className="h-5 w-5 mr-2" />
                Online Görüntüle
              </Button>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground font-medium">Ürün Kategorisi</p>
            </div>
            <div className="text-center p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-sm text-muted-foreground font-medium">Ürün Modeli</p>
            </div>
            <div className="text-center p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-sm text-muted-foreground font-medium">Dil Seçeneği</p>
            </div>
            <div className="text-center p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground font-medium">Online Erişim</p>
            </div>
          </div>

          {/* Özellikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur rounded-xl border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Güncel İçerik</h3>
                <p className="text-sm text-muted-foreground">2024 Ürün Koleksiyonu</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur rounded-xl border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hızlı İndirme</h3>
                <p className="text-sm text-muted-foreground">PDF ve Dijital Format</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur rounded-xl border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Çoklu Dil</h3>
                <p className="text-sm text-muted-foreground">5 Farklı Dil Desteği</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
