"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

/**
 * Pergola ürün kartları bölümü
 * Palmiye Global'in 3 ana kategori kartlarını taklit eder
 */
export function PergolaProductCards() {
  const { t } = useLanguage()
  const pergolaCategories = [
    {
      id: "bioclimatic",
      title: t("pergolaProducts.bioclimatic.title"),
      subtitle: t("pergolaProducts.bioclimatic.subtitle"),
      description: t("pergolaProducts.bioclimatic.description"),
      image: "/pergola/pergola-dıs-gunes.jpeg",
      href: "/pergola/bioklimatik-sistemler",
      features: [
        t("pergolaProducts.bioclimatic.features.rotatable"),
        t("pergolaProducts.bioclimatic.features.waterproof"),
        t("pergolaProducts.bioclimatic.features.energySaving"),
        t("pergolaProducts.bioclimatic.features.allSeasons")
      ],
      explore: t("pergolaProducts.bioclimatic.explore")
    },
    {
      id: "motorized",
      title: t("pergolaProducts.motorized.title"),
      subtitle: t("pergolaProducts.motorized.subtitle"),
      description: t("pergolaProducts.motorized.description"),
      image: "/pergola/pergola-kafe-aktif.jpeg",
      href: "/pergola/motorlu-sistemler",
      features: [
        t("pergolaProducts.motorized.features.sunSensor"),
        t("pergolaProducts.motorized.features.windSensor"),
        t("pergolaProducts.motorized.features.remoteControl"),
        t("pergolaProducts.motorized.features.quietOperation")
      ],
      explore: t("pergolaProducts.motorized.explore")
    },
    {
      id: "rolling",
      title: t("pergolaProducts.rolling.title"),
      subtitle: t("pergolaProducts.rolling.subtitle"),
      description: t("pergolaProducts.rolling.description"),
      image: "/pergola/pergola-render-siyah.jpg",
      href: "/pergola/rolling-roof",
      features: [
        t("pergolaProducts.rolling.features.openClose"),
        t("pergolaProducts.rolling.features.durableFabric"),
        t("pergolaProducts.rolling.features.motorized"),
        t("pergolaProducts.rolling.features.modernDesign")
      ],
      explore: t("pergolaProducts.rolling.explore")
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid Layout - Palmiye tarzı 3 kart */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pergolaCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${category.image}')` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    {category.title}
                  </h3>
                  <p className="text-lg text-white/90 mb-4 font-medium">
                    {category.subtitle}
                  </p>
                  
                  {/* Features - Hover'da görünür */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-2 mb-4">
                      {category.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-white/90 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      asChild
                      className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Link 
                        href={category.href} 
                        className="flex items-center justify-center"
                      >
                        <span>{category.explore}</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
