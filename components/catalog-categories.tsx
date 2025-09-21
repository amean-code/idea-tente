import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Biyoklimatik Pergola",
    description: "Akıllı lamelli sistemler ve otomatik kontrol çözümleri",
    products: "25+ Model",
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
  },
  {
    title: "Cam Sistemleri",
    description: "Frameless sürme ve katlanır cam sistem çözümleri",
    products: "18+ Model",
    image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
  },
  {
    title: "Kış Bahçesi",
    description: "Kapalı alan çözümleri ve conservatory sistemleri",
    products: "12+ Model",
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
  },
  {
    title: "Güneş Kırıcı",
    description: "Bina cephesi güneş koruma ve gölgeleme sistemleri",
    products: "15+ Model",
    image: "/modern-sun-breaker-louver-system-on-building-facad.jpg",
  },
]

export function CatalogCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Kategori Katalogları
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Spesifik ürün kategorileri için özel hazırlanmış detaylı kataloglar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">{category.products}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Katalog İndir
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Ürünleri Gör
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
