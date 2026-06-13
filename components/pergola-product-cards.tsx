"use client"

import { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { pergolaPublicSrc } from "@/lib/pergola-public-path"
import { MOTORLU_PERGOLA_COVER } from "@/lib/gallery-covers"

/**
 * `/pergola` ana sayfasında bioklimatik ve motorlu alt sayfalara `/cam-sistemleri` ile aynı kart düzeninde yönlendirir.
 */
export function PergolaProductCards() {
  const { t, language } = useLanguage()

  /**
   * Dil değişince kart verilerini ve özellik metinlerini günceller.
   */
  const systems = useMemo(
    () => [
      {
        id: "bioclimatic",
        title: t("pergolaProducts.bioclimatic.title"),
        description: t("pergolaProducts.bioclimatic.description"),
        image: "/pergola/pergola-dıs-gunes.webp",
        badge: t("pergolaProducts.bioclimatic.subtitle"),
        href: "/pergola/bioklimatik-sistemler",
        icon: Leaf,
        features: [
          t("pergolaProducts.bioclimatic.features.rotatable"),
          t("pergolaProducts.bioclimatic.features.waterproof"),
          t("pergolaProducts.bioclimatic.features.energySaving"),
          t("pergolaProducts.bioclimatic.features.allSeasons"),
        ],
      },
      {
        id: "motorized",
        title: t("pergolaProducts.motorized.title"),
        description: t("pergolaProducts.motorized.description"),
        image: MOTORLU_PERGOLA_COVER,
        badge: t("pergolaProducts.motorized.subtitle"),
        href: "/pergola/motorlu-sistemler",
        icon: Cpu,
        features: [
          t("pergolaProducts.motorized.features.sunSensor"),
          t("pergolaProducts.motorized.features.windSensor"),
          t("pergolaProducts.motorized.features.remoteControl"),
          t("pergolaProducts.motorized.features.quietOperation"),
        ],
      },
    ],
    [t, language],
  )

  /** Bölüm üst başlığı (cam-sistemleri grid başlığına paralel). */
  const sectionTitle = useMemo(() => t("pergolaProducts.subpages.title"), [t, language])
  /** Bölüm kısa açıklaması. */
  const sectionSubtitle = useMemo(() => t("pergolaProducts.subpages.subtitle"), [t, language])
  /** Kart aksiyon düğmesi metni. */
  const viewDetailsLabel = useMemo(() => t("pergolaProducts.viewDetails"), [t, language])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <Link href={system.href} className="block group h-full">
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-200">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={pergolaPublicSrc(system.image)}
                      alt={system.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute top-6 right-6">
                      <Badge className="bg-primary text-primary-foreground shadow-lg text-sm px-4 py-2">
                        {system.badge}
                      </Badge>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <system.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {system.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{system.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {system.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" className="w-full group-hover:bg-primary-600 transition-colors" asChild>
                      <span>
                        {viewDetailsLabel}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
