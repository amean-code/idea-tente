"use client"

import { Cable as Cube, Palette, Ruler, Share2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Cube,
    title: t("arDemo.features.visualization.title"),
    description: t("arDemo.features.visualization.description"),
  },
  {
    icon: Palette,
    title: t("arDemo.features.colors.title"),
    description: t("arDemo.features.colors.description"),
  },
  {
    icon: Ruler,
    title: t("arDemo.features.measurement.title"),
    description: t("arDemo.features.measurement.description"),
  },
  {
    icon: Share2,
    title: t("arDemo.features.share.title"),
    description: t("arDemo.features.share.description"),
  },
]

/**
 * AR Demo özellikleri bölümü - modern kart tasarımı
 */
export function ARFeatures() {
  const { t } = useLanguage()
  const features = getFeatures(t)
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {t("arDemo.features.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            {t("arDemo.features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
