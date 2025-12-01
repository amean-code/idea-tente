"use client"

import { Handshake, TrendingUp, Shield, Headphones, Truck, Award } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

const getBenefits = (t: (key: string) => string) => [
  {
    icon: Handshake,
    title: t("distributor.benefits.strongPartnership.title"),
    description: t("distributor.benefits.strongPartnership.description"),
  },
  {
    icon: TrendingUp,
    title: t("distributor.benefits.highMargin.title"),
    description: t("distributor.benefits.highMargin.description"),
  },
  {
    icon: Shield,
    title: t("distributor.benefits.territoryProtection.title"),
    description: t("distributor.benefits.territoryProtection.description"),
  },
  {
    icon: Headphones,
    title: t("distributor.benefits.technicalSupport.title"),
    description: t("distributor.benefits.technicalSupport.description"),
  },
  {
    icon: Truck,
    title: t("distributor.benefits.logistics.title"),
    description: t("distributor.benefits.logistics.description"),
  },
  {
    icon: Award,
    title: t("distributor.benefits.marketing.title"),
    description: t("distributor.benefits.marketing.description"),
  },
]

/**
 * Distribütör avantajları bölümü
 * İş ortaklarına sunulan avantajları modern kartlarla gösterir
 */
export function DistributorBenefits() {
  const { t } = useLanguage()
  const benefits = getBenefits(t)
  
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
            {t("distributor.benefits.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            {t("distributor.benefits.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
