"use client"

import { Smartphone, Camera, Hand, CheckCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getSteps = (t: (key: string) => string) => [
  {
    icon: Smartphone,
    title: t("arDemo.instructions.prepare.title"),
    description: t("arDemo.instructions.prepare.description"),
  },
  {
    icon: Camera,
    title: t("arDemo.instructions.camera.title"),
    description: t("arDemo.instructions.camera.description"),
  },
  {
    icon: Hand,
    title: t("arDemo.instructions.scan.title"),
    description: t("arDemo.instructions.scan.description"),
  },
  {
    icon: CheckCircle,
    title: t("arDemo.instructions.place.title"),
    description: t("arDemo.instructions.place.description"),
  },
]

/**
 * AR kullanım talimatları - modern step by step tasarım
 */
export function ARInstructions() {
  const { t } = useLanguage()
  const steps = getSteps(t)
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {t("arDemo.instructions.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            {t("arDemo.instructions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Modern Step Kartı */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <step.icon className="h-8 w-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
