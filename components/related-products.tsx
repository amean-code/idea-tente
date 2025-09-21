import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const allProducts = [
  {
    id: "biyoklimatik",
    title: "Biyoklimatik Pergola",
    description: "Akıllı lamelli sistemler",
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    href: "/pergola/biyoklimatik",
  },
  {
    id: "cam-sistemleri",
    title: "Cam Sistemleri",
    description: "Frameless cam çözümleri",
    image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
    href: "/cam-sistemleri",
  },
  {
    id: "kis-bahcesi",
    title: "Kış Bahçesi",
    description: "4 mevsim kullanım",
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
    href: "/kis-bahcesi",
  },
  {
    id: "gunes-kiriclari",
    title: "Güneş Kırıcılar",
    description: "Estetik güneş koruma",
    image: "/architectural-sun-shades-on-modern-building-facade.jpg",
    href: "/gunes-kiriclari",
  },
]

interface RelatedProductsProps {
  currentProduct: string
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const relatedProducts = allProducts.filter((product) => product.id !== currentProduct).slice(0, 3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            İlgili Ürünler
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Size uygun diğer outdoor çözümlerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>

                <Button
                  variant="outline"
                  asChild
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href={product.href}>
                    Detayları İncele
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
