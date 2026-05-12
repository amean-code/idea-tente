"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Cam Sistemleri Ana Ürün Kartları
 * Sürme, Katlanır, Sabit cam sistemleri
 */
export function CamSistemleriProductCards() {
  const { t } = useLanguage()
  const products = [
    {
      id: "surme-cam",
      title: t("glassSystems.products.surmeCam.title"),
      description: t("glassSystems.products.surmeCam.description"),
      image: "/frameless-glass-sliding-system--modern-terrace-wit.webp",
      badge: t("glassSystems.products.surmeCam.badge"),
      href: "/cam-sistemleri/surme-cam",
      features: [
        t("glassSystems.products.surmeCam.features.frameless"),
        t("glassSystems.products.surmeCam.features.sliding"),
        t("glassSystems.products.surmeCam.features.tempered"),
        t("glassSystems.products.surmeCam.features.waterproof")
      ]
    },
    {
      id: "katlanir-cam",
      title: t("glassSystems.products.katlanirCam.title"),
      description: t("glassSystems.products.katlanirCam.description"),
      image: "/folding-glass-gallery-1.webp",
      badge: t("glassSystems.products.katlanirCam.badge"),
      href: "/cam-sistemleri/katlanir-cam",
      features: [
        t("glassSystems.products.katlanirCam.features.folding"),
        t("glassSystems.products.katlanirCam.features.wideOpening"),
        t("glassSystems.products.katlanirCam.features.premium"),
        t("glassSystems.products.katlanirCam.features.customSize")
      ]
    },
    {
      id: "sabit-cam",
      title: t("glassSystems.products.sabitCam.title"),
      description: t("glassSystems.products.sabitCam.description"),
      image: "/folding-glass-gallery-2.webp",
      badge: t("glassSystems.products.sabitCam.badge"),
      href: "/cam-sistemleri/sabit-cam",
      features: [
        t("glassSystems.products.sabitCam.features.fixed"),
        t("glassSystems.products.sabitCam.features.insulation"),
        t("glassSystems.products.sabitCam.features.uvProtection"),
        t("glassSystems.products.sabitCam.features.lowMaintenance")
      ]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("glassSystems.products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("glassSystems.products.subtitle")}
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
                    {t("glassSystems.products.viewDetails")}
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

