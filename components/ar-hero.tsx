"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Camera, Eye, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * AR Demo hero section - arka plan görselli modern tasarım
 */
export function ARHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-bioclimatic-pergola-with-adjustable-louvers.jpg"
          alt="AR Demo"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Artırılmış Gerçeklik ile <span className="text-orange-500">Pergola Deneyimi</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 text-pretty max-w-2xl mx-auto">
            Pergola sistemlerimizi kendi mekanınızda görün. AR teknolojisi ile ürünlerimizi satın almadan önce test edin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Camera className="h-5 w-5 mr-2" />
              AR Demo Başlat
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <Download className="h-5 w-5 mr-2" />
              Mobil Uygulama İndir
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-7 w-7 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Mobil Uyumlu</h3>
              <p className="text-sm text-gray-300">iOS ve Android desteği</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-7 w-7 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Gerçekçi Görünüm</h3>
              <p className="text-sm text-gray-300">1:1 ölçek ve detay</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="h-7 w-7 text-orange-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Kolay Kullanım</h3>
              <p className="text-sm text-gray-300">Tek tıkla başlat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
