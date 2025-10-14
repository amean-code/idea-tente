"use client"

import { Handshake, TrendingUp, Shield, Headphones, Truck, Award } from "lucide-react"
import { motion } from "motion/react"

const benefits = [
  {
    icon: Handshake,
    title: "Güçlü Ortaklık",
    description: "Uzun vadeli, karşılıklı kazançlı iş ortaklığı",
  },
  {
    icon: TrendingUp,
    title: "Yüksek Kar Marjı",
    description: "Rekabetçi fiyatlar ve cazip kar marjları",
  },
  {
    icon: Shield,
    title: "Bölge Koruması",
    description: "Özel bölge hakları ve rekabet koruması",
  },
  {
    icon: Headphones,
    title: "Teknik Destek",
    description: "7/24 teknik destek ve eğitim programları",
  },
  {
    icon: Truck,
    title: "Lojistik Çözümler",
    description: "Hızlı ve güvenli kargo çözümleri",
  },
  {
    icon: Award,
    title: "Pazarlama Desteği",
    description: "Katalog, broşür ve pazarlama materyalleri",
  },
]

/**
 * Distribütör avantajları bölümü
 * İş ortaklarına sunulan avantajları modern kartlarla gösterir
 */
export function DistributorBenefits() {
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
            Distribütör Avantajları
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            İş ortaklarımıza sunduğumuz kapsamlı destek ve avantajlar ile birlikte büyüyün
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
