"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, Smartphone, Globe2, BookOpen } from "lucide-react"

/**
 * İndirilebilir katalog verisi
 */
const catalogs = [
  {
    title: "Genel Katalog 2024",
    description: "Tüm ürün gamımızı içeren kapsamlı katalog",
    size: "15.2 MB",
    pages: "84 sayfa",
    languages: ["TR", "EN", "DE", "AR", "RU"],
    icon: FileText,
    featured: true,
  },
  {
    title: "Pergola Sistemleri",
    description: "Biyoklimatik pergola çözümleri",
    size: "8.7 MB",
    pages: "32 sayfa",
    languages: ["TR", "EN", "AR"],
    icon: FileText,
  },
  {
    title: "Cam Sistemleri",
    description: "Sürme ve katlanır cam sistemleri",
    size: "6.3 MB",
    pages: "24 sayfa",
    languages: ["TR", "EN", "RU"],
    icon: FileText,
  },
  {
    title: "Kış Bahçesi",
    description: "Conservatory ve kış bahçesi sistemleri",
    size: "5.8 MB",
    pages: "20 sayfa",
    languages: ["TR", "EN", "DE"],
    icon: FileText,
  },
  {
    title: "Güneş Kırıcı",
    description: "Sabit ve hareketli güneş kırıcı sistemleri",
    size: "4.5 MB",
    pages: "16 sayfa",
    languages: ["TR", "EN"],
    icon: FileText,
  },
  {
    title: "Zip Perde",
    description: "Motorlu ve manuel zip screen sistemleri",
    size: "3.9 MB",
    pages: "14 sayfa",
    languages: ["TR", "EN"],
    icon: FileText,
  },
  {
    title: "Dijital Katalog",
    description: "İnteraktif web katalog deneyimi",
    size: "Online",
    pages: "İnteraktif",
    languages: ["TR", "EN"],
    icon: Globe2,
  },
  {
    title: "Mobil Katalog",
    description: "Mobil cihazlar için optimize edilmiş",
    size: "4.1 MB",
    pages: "Tüm Ürünler",
    languages: ["TR", "EN"],
    icon: Smartphone,
  },
]

/**
 * Katalog indirme merkezi bileşeni
 * Kullanıcıların farklı formatlarda katalogları indirmesini sağlar
 */
export function CatalogDownload() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Download className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Hızlı İndirme Merkezi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Dijital Kataloglar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            İhtiyacınıza uygun katalog formatını seçin ve anında indirin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalogs.map((catalog, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Featured Badge */}
              {catalog.featured && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    Popüler
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <catalog.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{catalog.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[2.5rem]">{catalog.description}</p>

              {/* Detaylar */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Boyut:
                  </span>
                  <span className="font-semibold text-foreground">{catalog.size}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Sayfa:
                  </span>
                  <span className="font-semibold text-foreground">{catalog.pages}</span>
                </div>
                <div className="flex justify-between items-start text-sm">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Globe2 className="h-4 w-4" />
                    Diller:
                  </span>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                    {catalog.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-primary/10 text-primary px-2 py-0.5 rounded-md text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* İndirme Butonu */}
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                İndir
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
