"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Globe2, Award, Truck } from "lucide-react"
import Image from "next/image"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

const exportProducts = [
  {
    title: "Bioklimatik Pergola",
    description: "Akıllı lamel sistemli premium pergolalar",
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    features: ["CE Sertifikalı", "10 Yıl Garanti", "Özel Ambalaj"],
    markets: ["Avrupa", "Orta Doğu", "Afrika"],
    exportReady: true,
  },
  {
    title: "Cam Sistemleri",
    description: "Frameless sürme cam sistemleri",
    image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
    features: ["Temperli Cam", "Alüminyum Profil", "Hızlı Montaj"],
    markets: ["Avrupa", "Asya-Pasifik"],
    exportReady: true,
  },
  {
    title: "Kış Bahçesi",
    description: "4 mevsim kullanım için kapalı sistemler",
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
    features: ["Isı Yalıtımı", "Hava Geçirmezlik", "Özel Tasarım"],
    markets: ["Avrupa", "Kuzey Amerika"],
    exportReady: true,
  },
]

/**
 * Export ürünleri bölümü
 * İhracat için hazır ürünleri modern kartlarla gösterir
 */
export function ExportProducts() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            {t("export.products.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            {t("export.products.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {exportProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  {product.exportReady && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-1">
                        <Truck className="h-3 w-3" />
                        {t("exportProducts.exportReady")}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">{t("exportProducts.features")}</h4>
                      </div>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe2 className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">{t("exportProducts.targetMarkets")}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.markets.map((market, idx) => (
                          <Badge key={idx} variant="outline" className="text-muted-foreground">
                            {market}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Shipping Bilgi Kartları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-card p-6 border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("exportProducts.infoCards.ceCertified.title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("exportProducts.infoCards.ceCertified.description")}
            </p>
          </div>

          <div className="bg-card p-6 border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("exportProducts.infoCards.secureShipping.title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("exportProducts.infoCards.secureShipping.description")}
            </p>
          </div>

          <div className="bg-card p-6 border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Globe2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("exportProducts.infoCards.worldwide.title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("exportProducts.infoCards.worldwide.description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
