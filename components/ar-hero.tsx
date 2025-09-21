"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Camera, Eye, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ARHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Artırılmış Gerçeklik ile Pergola Deneyimi
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Pergola sistemlerimizi kendi mekanınızda görün. AR teknolojisi ile ürünlerimizi satın almadan önce test
              edin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                AR Demo Başlat
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Mobil Uygulama İndir
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Mobil Uyumlu</h3>
                <p className="text-sm text-muted-foreground">iOS ve Android desteği</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Gerçekçi Görünüm</h3>
                <p className="text-sm text-muted-foreground">1:1 ölçek ve detay</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Kolay Kullanım</h3>
                <p className="text-sm text-muted-foreground">Tek tıkla başlat</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground">AR Demo Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
