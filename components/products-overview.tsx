"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getProducts = (t: any) => [
  {
    title: t("products.bioclimatic"),
    description: t("products.bioclimaticDesc"),
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    href: "/pergola/biyoklimatik",
    features: [t("products.features.smartLouver"), t("products.features.climateControl"), t("products.features.ledLighting")],
    badge: t("products.badges.popular"),
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: t("products.glass"),
    description: t("nav.glassDesc"),
    image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
    href: "/cam-sistemleri",
    features: [t("products.features.framelessDesign"), t("products.features.slidingSystem"), t("products.features.safetyGlass")],
    badge: t("products.badges.premium"),
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: t("products.winterGarden"),
    description: "Dört mevsim kullanım için kapalı alan çözümleri",
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
    href: "/kis-bahcesi",
    features: [t("products.features.fourSeasons"), t("products.features.thermalInsulation"), t("products.features.naturalLighting")],
    badge: t("products.badges.new"),
    icon: <Star className="h-6 w-6" />,
  },
]

export function ProductsOverview() {
  const { t } = useLanguage()
  const products = getProducts(t)
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {t("products.title")}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 h-96 cursor-pointer"
            >
              {/* Full-size background image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${product.image}')` }}
              />

              {/* Gradient overlay - hover'da resmi bulanıklaştırır */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500" />
              
              {/* Hover'da resim bulanıklığı */}
              <div className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-500" />

              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  {product.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 group-hover:rotate-12 transition-all duration-300">
                {product.icon}
              </div>

              {/* Hover ile gelen bilgiler - alttan yukarı doğru */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 z-20">
                <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {product.title}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features listesi */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-white/80 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    asChild
                    className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 relative z-30"
                  >
                    <Link 
                      href={product.href} 
                      className="flex items-center justify-center"
                      onClick={() => console.log('Butona tıklandı, yönlendiriliyor:', product.href)}
                    >
                      <span>Detayları İncele</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Alt kısım - hover olmadığında görünen minimal bilgi */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {product.title}
                </h3>
                <p className="text-white/90 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center text-white/80 text-sm">
                  <span>Detayları görmek için üzerine gelin</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="hover:scale-105 transition-transform">
            <Link href="/urunler">
              Tüm Ürünleri Görüntüle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
