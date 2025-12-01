"use client"

import { Settings, Smartphone, Lightbulb, Shield, Wind, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const iconMap = {
  settings: Settings,
  smartphone: Smartphone,
  lightbulb: Lightbulb,
  shield: Shield,
  wind: Wind,
  award: Award,
}

interface Feature {
  title: string
  description: string
  icon: keyof typeof iconMap
}

interface ProductFeaturesProps {
  features: Feature[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("productFeatures.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("productFeatures.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
