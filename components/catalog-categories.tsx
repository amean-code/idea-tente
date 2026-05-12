"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight, FileText, Zap, Layers } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

/**
 * Katalog kategorileri bileşeni
 * Sadece ana ürün kategorilerinin kataloglarını gösterir
 */
export function CatalogCategories() {
  const { t } = useLanguage()
  
  /**
   * Ana kategori katalog verisi
   * Sadece ana ürünler için katalog gösterilir
   */
  const mainCategories = [
    {
      id: "pergola",
      title: t("nav.pergolaSystems"),
      description: t("nav.menuDescriptions.pergola"),
      image: "/modern-bioclimatic-pergola-with-adjustable-louvers.webp",
      href: "/pergola",
      icon: Zap,
    },
    {
      id: "glass",
      title: t("nav.glassSystems"),
      description: t("nav.menuDescriptions.glass"),
      image: "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-3.webp",
      href: "/cam-sistemleri",
      icon: Layers,
    },
    {
      id: "winter-garden",
      title: t("nav.winterGarden"),
      description: t("nav.menuDescriptions.winterGarden"),
      image: "/pergola/pergola-kapak.webp",
      href: "/kis-bahcesi",
      icon: FileText,
    },
    {
      id: "sun-breaker",
      title: t("nav.sunBreakers"),
      description: t("nav.menuDescriptions.sunBreaker"),
      image: "/pergola/pergola-dıs-gunes.webp",
      href: "/gunes-kiriclari",
      icon: FileText,
    },
    {
      id: "zip-screen",
      title: t("nav.zipScreen"),
      description: t("nav.menuDescriptions.zipScreen"),
      image: "/zip-perde/zip-perde-2.webp",
      href: "/zip-perde",
      icon: FileText,
    },
  ]
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <FileText className="h-4 w-4 text-black" />
            <span className="text-sm font-medium text-black">{t("catalog.categories.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {t("catalog.categories.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("catalog.categories.subtitle")}
          </p>
        </div>

        {/* Ana Kategoriler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map((category, index) => (
            <div
              key={category.id}
              className="group bg-card rounded-2xl border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {/* Görsel */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {category.description}
                </p>

                {/* Butonlar */}
                <div className="flex flex-col gap-3">
                  <Button size="lg" asChild className="w-full">
                    <Link href={category.href}>
                      <ArrowRight className="h-5 w-5 mr-2" />
                      {t("catalog.categories.viewProducts")}
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
