"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Kış Bahçesi Ana Ürün Kartları
 * Standart, Premium, Lüks modeller
 */
export function KisBahcesiProductCards() {
  const { t } = useLanguage()
  const products = [
    {
      id: "standart",
      title: "Standart Kış Bahçesi",
      description: "Ekonomik ve kaliteli kış bahçesi çözümü. Çift cam sistemi ve manuel havalandırma.",
      image: "/standard-winter-garden-double-glass.jpg",
      badge: "Ekonomik",
      href: "/kis-bahcesi/standart-kis-bahcesi",
      features: ["Çift Cam", "Termal Kesim", "Manuel Havalandırma", "10 Yıl Garanti"]
    },
    {
      id: "premium",
      title: "Premium Kış Bahçesi",
      description: "Akıllı cam teknolojisi ve otomatik iklim kontrol sistemi ile konfor.",
      image: "/premium-winter-garden-smart-glass.jpg",
      badge: "Popüler",
      href: "/kis-bahcesi/premium-kis-bahcesi",
      features: ["Akıllı Cam", "Oto Isı Kontrol", "Uzaktan Kontrol", "15 Yıl Garanti"]
    },
    {
      id: "lux",
      title: "Lüks Kış Bahçesi",
      description: "Panoramik cam, akıllı ev entegrasyonu ve zemin ısıtma ile lüks yaşam.",
      image: "/luxury-winter-garden-panoramic-view.jpg",
      badge: "Premium",
      href: "/kis-bahcesi/lux-kis-bahcesi",
      features: ["Panoramik Cam", "Akıllı Ev", "Zemin Isıtma", "20 Yıl Garanti"]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("winterGarden.products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("winterGarden.products.subtitle")}
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
                    {t("winterGarden.products.viewDetails")}
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

