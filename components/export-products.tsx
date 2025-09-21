import { Card, CardContent } from "@/components/ui/card"

const exportProducts = [
  {
    title: "Biyoklimatik Pergola",
    description: "Akıllı lamel sistemli premium pergolalar",
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    features: ["CE Sertifikalı", "10 Yıl Garanti", "Özel Ambalaj"],
    markets: ["Avrupa", "Orta Doğu", "Afrika"],
  },
  {
    title: "Cam Sistemleri",
    description: "Frameless sürme cam sistemleri",
    image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
    features: ["Temperli Cam", "Alüminyum Profil", "Hızlı Montaj"],
    markets: ["Avrupa", "Asya-Pasifik"],
  },
  {
    title: "Kış Bahçesi",
    description: "4 mevsim kullanım için kapalı sistemler",
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
    features: ["Isı Yalıtımı", "Hava Geçirmezlik", "Özel Tasarım"],
    markets: ["Avrupa", "Kuzey Amerika"],
  },
]

export function ExportProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            İhracat Ürünlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Uluslararası standartlarda üretilen, CE sertifikalı premium ürünlerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exportProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }} />

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Özellikler:</h4>
                    <div className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Hedef Pazarlar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.markets.map((market, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
