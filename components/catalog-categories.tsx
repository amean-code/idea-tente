"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight, FileText, Zap, Layers } from "lucide-react"
import Link from "next/link"
import {
  getPergolaSubCategories,
  getGlassSystemsSubCategories,
  getWinterGardenSubCategories,
  getSunBreakerSubCategories,
  getZipScreenSubCategories,
} from "@/data/subcategories"

/**
 * Ana kategori katalog verisi
 */
const mainCategories = [
  {
    id: "pergola",
    title: "Pergola Sistemleri",
    description: "Biyoklimatik, motorlu ve rolling roof pergola çözümleri",
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    href: "/pergola/biyoklimatik",
    icon: Zap,
    subCategories: getPergolaSubCategories(),
  },
  {
    id: "glass",
    title: "Cam Sistemleri",
    description: "Giyotin cam ve frameless sistem çözümleri",
    image: "/giyotin-cam/villa-giyotin2.jpg",
    href: "/cam-sistemleri",
    icon: Layers,
    subCategories: getGlassSystemsSubCategories(),
  },
  {
    id: "winter-garden",
    title: "Kış Bahçesi",
    description: "4 mevsim kullanım için kapalı alan çözümleri",
    image: "/pergola/pergola-kapak.jpeg",
    href: "/kis-bahcesi",
    icon: FileText,
    subCategories: getWinterGardenSubCategories(),
  },
  {
    id: "sun-breaker",
    title: "Güneş Kırıcı",
    description: "Bina cephesi güneş koruma ve gölgeleme sistemleri",
    image: "/pergola/pergola-dıs-gunes.jpeg",
    href: "/gunes-kiriclari",
    icon: FileText,
    subCategories: getSunBreakerSubCategories(),
  },
  {
    id: "zip-screen",
    title: "Zip Perde",
    description: "Motorlu ve manuel zip screen sistemleri",
    image: "/zip-perde/zip-perde-2.jpeg",
    href: "/zip-perde",
    icon: FileText,
    subCategories: getZipScreenSubCategories(),
  },
]

/**
 * Katalog kategorileri bileşeni
 * Ana kategoriler ve alt kategorilerin kataloglarını gösterir
 */
export function CatalogCategories() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <FileText className="h-4 w-4 text-black" />
            <span className="text-sm font-medium text-black">Kategori Bazlı Kataloglar</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Ürün Katalogları
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Her kategori için özel hazırlanmış detaylı kataloglarımızı inceleyin
          </p>
        </div>

        {/* Ana Kategoriler */}
        <div className="space-y-20">
          {mainCategories.map((category, index) => (
            <div key={category.id} className="space-y-8">
              {/* Ana Kategori Kartı */}
              <div className="relative group overflow-hidden rounded-2xl border shadow-lg hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Görsel Tarafı */}
                  <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm font-bold text-foreground">
                          {category.subCategories.length} Alt Kategori
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* İçerik Tarafı */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center bg-card ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <div className="inline-flex w-fit items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg mb-6">
                      <category.icon className="h-5 w-5 text-black" />
                      <span className="text-sm font-semibold text-black">Ana Kategori</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      {category.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" asChild>
                        <Link href={category.href}>
                          <ArrowRight className="h-5 w-5 mr-2" />
                          Ürünleri Görüntüle
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline">
                        <Download className="h-5 w-5 mr-2" />
                        Katalog İndir
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt Kategoriler */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {category.subCategories.map((subCat) => (
                  <div
                    key={subCat.id}
                    className="group bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    {/* Alt Kategori Görseli */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={subCat.image}
                        alt={subCat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                          {subCat.badge}
                        </span>
                      </div>
                    </div>

                    {/* Alt Kategori İçerik */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                        {subCat.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {subCat.description}
                      </p>

                      {/* Özellikler */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {subCat.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Butonlar */}
                      <div className="flex items-center gap-2 pt-4 border-t">
                        <Button size="sm" variant="outline" className="h-9 w-9 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="flex-1" asChild>
                          <Link href={subCat.href}>
                            Detaylar
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
