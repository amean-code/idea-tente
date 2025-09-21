"use client"

import { Button } from "@/components/ui/button"
import { Download, BookOpen, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CatalogHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Ürün Kataloğu
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Tüm IDEA ve cam sistemlerimizi detaylı teknik özellikler, ölçüler ve fiyat bilgileri ile inceleyin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                PDF Katalog İndir
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="h-5 w-5 mr-2" />
                Online Katalog
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">150+</div>
                <p className="text-sm text-muted-foreground">Ürün Modeli</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">8</div>
                <p className="text-sm text-muted-foreground">Kategori</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <p className="text-sm text-muted-foreground">Dil Seçeneği</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Katalog Önizleme</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
