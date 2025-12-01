"use client"

import { Package, FileCheck, Plane, Ship, Truck, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

const getShippingSteps = (t: (key: string) => string) => [
  {
    icon: FileCheck,
    title: t("export.shipping.steps.order.title"),
    description: t("export.shipping.steps.order.description"),
    duration: t("export.shipping.steps.order.duration"),
  },
  {
    icon: Package,
    title: t("export.shipping.steps.production.title"),
    description: t("export.shipping.steps.production.description"),
    duration: t("export.shipping.steps.production.duration"),
  },
  {
    icon: Truck,
    title: t("export.shipping.steps.customs.title"),
    description: t("export.shipping.steps.customs.description"),
    duration: t("export.shipping.steps.customs.duration"),
  },
  {
    icon: Ship,
    title: t("export.shipping.steps.shipping.title"),
    description: t("export.shipping.steps.shipping.description"),
    duration: t("export.shipping.steps.shipping.duration"),
  },
  {
    icon: MapPin,
    title: t("export.shipping.steps.delivery.title"),
    description: t("export.shipping.steps.delivery.description"),
    duration: t("export.shipping.steps.delivery.duration"),
  },
]

const getFeatures = (t: (key: string) => string) => [
  {
    icon: CheckCircle2,
    text: t("export.shipping.features.insured"),
  },
  {
    icon: CheckCircle2,
    text: t("export.shipping.features.tracking"),
  },
  {
    icon: CheckCircle2,
    text: t("export.shipping.features.customs"),
  },
  {
    icon: CheckCircle2,
    text: t("export.shipping.features.packaging"),
  },
]

/**
 * Export gönderim süreci bileşeni
 * Global kargo sürecini timeline şeklinde gösterir
 */
export function ExportShippingProcess() {
  const { t } = useLanguage()
  const shippingSteps = getShippingSteps(t)
  const features = getFeatures(t)
  
  return (
    <section className="py-20 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            {t("export.shipping.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            {t("export.shipping.subtitle")}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Bağlantı çizgisi - desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-primary/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {shippingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* İkon */}
                    <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-md hover:shadow-lg transition-all relative z-10">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>

                    {/* İçerik */}
                    <div className="bg-card rounded-lg p-4 border w-full">
                      <h3 className="font-bold text-base mb-2 text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                      <div className="inline-block px-3 py-1 bg-primary rounded-full">
                        <span className="text-xs font-semibold text-white">{step.duration}</span>
                      </div>
                    </div>

                    {/* Numara badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-primary flex items-center justify-center shadow-md z-20">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

