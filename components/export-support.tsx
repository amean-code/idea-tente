"use client"

import { FileText, Truck, Headphones, GraduationCap, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

const supportServices = [
  {
    icon: FileText,
    title: "Dokümantasyon",
    description: "CE sertifikaları, teknik çizimler, montaj kılavuzları",
    items: ["CE Sertifikaları", "Teknik Çizimler", "Montaj Kılavuzları", "Garanti Belgeleri"],
  },
  {
    icon: Truck,
    title: "Lojistik",
    description: "Güvenli ambalaj, hızlı kargo, gümrük işlemleri",
    items: ["Özel Ambalaj", "Sigortalı Kargo", "Gümrük Desteği", "Takip Sistemi"],
  },
  {
    icon: Headphones,
    title: "Teknik Destek",
    description: "7/24 teknik destek, uzaktan yardım, problem çözme",
    items: ["7/24 Destek", "Uzaktan Yardım", "Video Konferans", "Hızlı Çözüm"],
  },
  {
    icon: GraduationCap,
    title: "Eğitim",
    description: "Ürün eğitimleri, satış teknikleri, pazarlama desteği",
    items: ["Ürün Eğitimi", "Satış Teknikleri", "Pazarlama Desteği", "Online Seminerler"],
  },
]

/**
 * Export destek hizmetleri bölümü
 * İş ortaklarına sunulan destek hizmetlerini gösterir
 */
export function ExportSupport() {
  const { t } = useLanguage()
  const supportServices = getSupportServices(t)
  
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            {t("export.support.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            {t("export.support.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 text-pretty leading-relaxed">{service.description}</p>

              <div className="space-y-3">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
