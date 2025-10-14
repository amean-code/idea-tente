"use client"

import { Package, FileCheck, Plane, Ship, Truck, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

const shippingSteps = [
  {
    icon: FileCheck,
    title: "Sipariş & Doküman",
    description: "Sipariş onayı ve tüm belgeler hazırlanır",
    duration: "1-2 gün",
  },
  {
    icon: Package,
    title: "Üretim & Paketleme",
    description: "Ürünler üretilir ve özel ihracat ambalajı yapılır",
    duration: "7-14 gün",
  },
  {
    icon: Truck,
    title: "Gümrük İşlemleri",
    description: "Tüm gümrük işlemleri tamamlanır",
    duration: "1-3 gün",
  },
  {
    icon: Ship,
    title: "Uluslararası Kargo",
    description: "Deniz veya hava yolu ile güvenli gönderim",
    duration: "5-30 gün",
  },
  {
    icon: MapPin,
    title: "Teslimat",
    description: "Hedef ülkede yerel kargo ile teslimat",
    duration: "2-5 gün",
  },
]

const features = [
  {
    icon: CheckCircle2,
    text: "Sigortalı Kargo",
  },
  {
    icon: CheckCircle2,
    text: "Takip Sistemi",
  },
  {
    icon: CheckCircle2,
    text: "Gümrük Desteği",
  },
  {
    icon: CheckCircle2,
    text: "Özel Ambalaj",
  },
]

/**
 * Export gönderim süreci bileşeni
 * Global kargo sürecini timeline şeklinde gösterir
 */
export function ExportShippingProcess() {
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
            Gönderim Sürecimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Siparişinizden teslimat sonrası desteğe kadar her adımda yanınızdayız
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

