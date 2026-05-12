"use client"

import { Button } from "@/components/ui/button"
import { Play, Eye, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * AR Demo galerisi - modern ve çerçevesiz kart tasarımı
 */
export function ARGallery() {
  const { t } = useLanguage()

  const arDemos = [
    {
      title: t("arDemo.gallery.demos.bioclimatic.title"),
      description: t("arDemo.gallery.demos.bioclimatic.description"),
      image: "/modern-bioclimatic-pergola-with-adjustable-louvers.webp",
      category: t("arDemo.gallery.categories.pergola"),
    },
    {
      title: t("arDemo.gallery.demos.glass.title"),
      description: t("arDemo.gallery.demos.glass.description"),
      image: "/frameless-glass-sliding-system--modern-terrace-wit.webp",
      category: t("arDemo.gallery.categories.glass"),
    },
    {
      title: t("arDemo.gallery.demos.winterGarden.title"),
      description: t("arDemo.gallery.demos.winterGarden.description"),
      image: "/winter-garden-conservatory-with-glass-roof--indoor.webp",
      category: t("arDemo.gallery.categories.winterGarden"),
    },
    {
      title: t("arDemo.gallery.demos.sunBreaker.title"),
      description: t("arDemo.gallery.demos.sunBreaker.description"),
      image: "/architectural-sun-shades-on-modern-building-facade.webp",
      category: t("arDemo.gallery.categories.sunBreaker"),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {t("arDemo.gallery.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            {t("arDemo.gallery.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arDemos.map((demo, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Modern Çerçevesiz Kart */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={demo.image || "/placeholder.svg"}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Kategori Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                      {demo.category}
                    </span>
                  </div>

                  {/* Play Button - Hover'da görünür */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{demo.description}</p>
                  
                  {/* AR Demo Butonu */}
                  <div className="pt-2">
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      <Eye className="h-5 w-5" />
                      <span className="ml-2">{t("arDemo.gallery.startDemo")}</span>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
