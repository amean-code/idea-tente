"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Zip Perde Ana Ürün Kartları
 * Manuel, Motorlu, Akıllı sistemler
 */
export function ZipPerdeProductCards() {
  const { t } = useLanguage()
  const products = [
    {
      id: "manuel",
      title: "Manuel Zip Perde",
      description: "Ekonomik fiyat avantajı. Zincir/krank ile kolay kullanım ve %95 UV koruma.",
      image: "/manual-zip-screen-system-terrace.jpg",
      badge: "Ekonomik",
      href: "/zip-perde/manuel-zip-perde",
      features: ["Manuel Kullanım", "%95 UV Koruma", "Kolay Montaj", "10 Yıl Garanti"]
    },
    {
      id: "motorlu",
      title: "Motorlu Zip Perde",
      description: "Uzaktan kumandalı motorlu sistem. Sessiz çalışma ve 120 km/h rüzgar dayanımı.",
      image: "/motorized-zip-screen-remote-control.jpg",
      badge: "Popüler",
      href: "/zip-perde/motorlu-zip-perde",
      features: ["Motorlu Sistem", "Sessiz Çalışma", "Uzaktan Kumanda", "10 Yıl Garanti"]
    },
    {
      id: "akilli",
      title: "Akıllı Zip Perde",
      description: "Sensör kontrollü tam otomatik sistem. Güneş takibi ve otomatik hava durumu kontrolü.",
      image: "/smart-zip-screen-sensor-control.jpg",
      badge: "Premium",
      href: "/zip-perde/akilli-zip-perde",
      features: ["Akıllı Sensör", "Oto Güneş Takibi", "Hava Durumu", "10 Yıl Garanti"]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("zipScreen.products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("zipScreen.products.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link href={product.href}>
                    {t("zipScreen.products.viewDetails")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

