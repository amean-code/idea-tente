import { Header } from "@/components/header"
import { ProductHero } from "@/components/product-hero"
import { ProductFeatures } from "@/components/product-features"
import { ProductGallery } from "@/components/product-gallery"
import { ProductSpecs } from "@/components/product-specs"
import { RelatedProducts } from "@/components/related-products"
import { ProductCTA } from "@/components/product-cta"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const biyoklimatikData = {
  title: "Biyoklimatik Pergola Sistemleri",
  subtitle: "Akıllı lamelli sistemler ile mükemmel hava kontrolü",
  description:
    "Biyoklimatik Pergola Sistemleri, gölge sistemlerin de hem güneşin tadını çıkarmanın hem de sıcak yaz günlerinde serin kalmanın mükemmel bir yoludur. Akıllı lamel sistemi ile hava akımını kontrol edebilir, LED aydınlatma ile akşam keyfinizi sürdürebilirsiniz.",
  heroImage: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
  features: [
    {
      title: "Akıllı Lamel Sistemi",
      description: "0-135° arası ayarlanabilir lamel açısı ile mükemmel hava kontrolü",
      icon: "settings",
    },
    {
      title: "Motorlu Kumanda",
      description: "Uzaktan kumanda ve akıllı telefon uygulaması ile kolay kontrol",
      icon: "smartphone",
    },
    {
      title: "LED Aydınlatma",
      description: "Entegre LED aydınlatma sistemi ile gece kullanımı",
      icon: "lightbulb",
    },
    {
      title: "Su Geçirmez",
      description: "Yağmur sensörü ile otomatik kapanma özelliği",
      icon: "shield",
    },
    {
      title: "Rüzgar Sensörü",
      description: "Güçlü rüzgarda otomatik güvenlik kapanması",
      icon: "wind",
    },
    {
      title: "10 Yıl Garanti",
      description: "Uzun ömürlü alüminyum yapı ve kaliteli malzeme",
      icon: "award",
    },
  ],
  gallery: [
    "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    "/luxury-modern-pergola-with-glass-panels-by-pool-at.jpg",
    "/architectural-sun-shades-on-modern-building-facade.jpg",
  ],
  specs: {
    Malzeme: "Alüminyum 6063-T5",
    "Lamel Kalınlığı": "1.5mm",
    "Maksimum Genişlik": "6000mm",
    "Maksimum Derinlik": "4000mm",
    "Rüzgar Dayanımı": "120 km/h",
    "Kar Yükü": "150 kg/m²",
    "Renk Seçenekleri": "RAL renk kartelası",
    Garanti: "10 yıl",
  },
}

const subProducts = [
  {
    id: "premium-biyoklimatik",
    title: "Premium Biyoklimatik Pergola",
    description: "Motorlu lamel sistemi ve LED aydınlatma ile lüks konfor",
    image: "/premium-bioclimatic-pergola-with-led-lighting.jpg",
    features: ["Motorlu Lamel", "LED Aydınlatma", "Rüzgar Sensörü"],
  },
  {
    id: "standart-biyoklimatik",
    title: "Standart Biyoklimatik Pergola",
    description: "Manuel lamel sistemi ile ekonomik çözüm",
    image: "/standard-bioclimatic-pergola-manual-system.jpg",
    features: ["Manuel Lamel", "Alüminyum Yapı", "10 Yıl Garanti"],
  },
  {
    id: "akilli-biyoklimatik",
    title: "Akıllı Biyoklimatik Pergola",
    description: "IoT teknolojisi ile tam otomatik kontrol",
    image: "/smart-bioclimatic-pergola-iot-control.jpg",
    features: ["IoT Kontrol", "Hava Durumu Sensörü", "Mobil Uygulama"],
  },
]

export default function BiyoklimatikPergolaPage() {
  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('/modern-bioclimatic-pergola-with-adjustable-louvers.jpg')"
          }}
        />
      </div>
      
      <Header />
      <main className="relative z-10">
        <ProductHero
          title={biyoklimatikData.title}
          subtitle={biyoklimatikData.subtitle}
          description={biyoklimatikData.description}
          heroImage={biyoklimatikData.heroImage}
        />
        <ProductFeatures features={biyoklimatikData.features} />

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Biyoklimatik Pergola Modelleri</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                İhtiyacınıza uygun biyoklimatik pergola modelini seçin ve detaylarını inceleyin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {subProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-primary font-semibold mb-4">{product.price}</p>
                    <Button asChild className="w-full">
                      <Link href={`/pergola/biyoklimatik/${product.id}`}>
                        Detayları İncele <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ProductGallery images={biyoklimatikData.gallery} />
        <ProductSpecs specs={biyoklimatikData.specs} />
        <ProductCTA productName="Biyoklimatik Pergola" />
        <RelatedProducts currentProduct="biyoklimatik" />
      </main>
    </div>
  )
}
