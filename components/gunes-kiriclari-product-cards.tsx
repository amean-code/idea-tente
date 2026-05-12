"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Güneş Kırıcıları Ana Ürün Kartları
 * Sabit, Dikey, Hareketli sistemler
 */
export function GunesKiriclariProductCards() {
  const { t } = useLanguage()
  const products = [
    {
      id: "sabit",
      title: t("sunBreakers.products.sabit.title"),
      description: t("sunBreakers.products.sabit.description"),
      image: "/fixed-aluminum-sun-breaker-system.webp",
      badge: t("sunBreakers.products.sabit.badge"),
      href: "/gunes-kiriclari/sabit-gunes-kirici",
      features: [
        t("sunBreakers.products.sabit.features.aluminum"),
        t("sunBreakers.products.sabit.features.easyInstall"),
        t("sunBreakers.products.sabit.features.lowMaintenance"),
        t("sunBreakers.products.sabit.features.warranty")
      ]
    },
    {
      id: "dikey",
      title: t("sunBreakers.products.dikey.title"),
      description: t("sunBreakers.products.dikey.description"),
      image: "/vertical-facade-sun-control-system.webp",
      badge: t("sunBreakers.products.dikey.badge"),
      href: "/gunes-kiriclari/dikey-gunes-kirici",
      features: [
        t("sunBreakers.products.dikey.features.facade"),
        t("sunBreakers.products.dikey.features.aesthetic"),
        t("sunBreakers.products.dikey.features.ralColor"),
        t("sunBreakers.products.dikey.features.warranty")
      ]
    },
    {
      id: "hareketli",
      title: t("sunBreakers.products.hareketli.title"),
      description: t("sunBreakers.products.hareketli.description"),
      image: "/motorized-adjustable-sun-breaker.webp",
      badge: t("sunBreakers.products.hareketli.badge"),
      href: "/gunes-kiriclari/hareketli-gunes-kirici",
      features: [
        t("sunBreakers.products.hareketli.features.motorized"),
        t("sunBreakers.products.hareketli.features.remote"),
        t("sunBreakers.products.hareketli.features.sensor"),
        t("sunBreakers.products.hareketli.features.warranty")
      ]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("sunBreakers.products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("sunBreakers.products.subtitle")}
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
                    {t("sunBreakers.products.viewDetails")}
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

