"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import { getReferencesByService } from "@/data/references"
import { useLanguage } from "@/contexts/language-context"

interface ReferenceProjectsProps {
  serviceType: string
  title?: string
  subtitle?: string
  showAllButton?: boolean
  limit?: number
  useTranslations?: boolean
}

/**
 * Belirli bir hizmet türüne göre referans projeleri gösterir
 */
export function ReferenceProjects({ 
  serviceType, 
  title,
  subtitle,
  showAllButton = true,
  limit = 3,
  useTranslations = true
}: ReferenceProjectsProps) {
  const { t } = useLanguage()
  const references = getReferencesByService(serviceType).slice(0, limit)

  // Çeviri kullanılıyorsa varsayılan metinleri al
  // useTranslations kontrolü kaldırıldı - her zaman çeviri kullan
  const displayTitle = title || t("references.title")
  const displaySubtitle = subtitle || t("references.subtitle")

  if (references.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {displayTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            {displaySubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12 max-w-7xl mx-auto">
          {references.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              {/* Çerçevesiz Minimalist Kart */}
              <div className="overflow-hidden">
                {/* Resim Alanı */}
                <div className="aspect-[16/10] overflow-hidden relative mb-5 rounded-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay - Hover'da görünür */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Kategori Badge - Hover'da görünür */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold px-4 py-2 rounded-xl">
                      {project.category}
                    </span>
                  </div>

                  {/* Alt bilgi - Hover'da görünür */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 text-white text-base">
                      <MapPin className="h-5 w-5" />
                      <span>{project.location}</span>
                      <span className="ml-auto text-sm opacity-90">{project.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Başlık ve Açıklama */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Özellikler - Minimal gösterim */}
                  <div className="flex items-center gap-2.5 pt-2">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="text-sm text-gray-400">
                        +{project.features.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Hover'da görünen ok ikonu */}
                  <div className="pt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                    <div className="flex items-center text-primary text-base font-medium">
                      <span>{t("references.projectDetails")}</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showAllButton && (
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-600 text-primary-foreground px-8"
              asChild
            >
              <a href="/referanslar" className="flex items-center">
                {t("references.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
