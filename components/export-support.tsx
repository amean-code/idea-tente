"use client"

import { FileText, Truck, Headphones, GraduationCap, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    title: "Kapsamlı Destek Hizmetleri",
    subtitle: "İş ortaklarımızın başarısı için sunduğumuz profesyonel destek hizmetleri ile her adımda yanınızdayız",
    support: {
      documentation: {
        title: "Dokümantasyon",
        description: "CE sertifikaları, teknik çizimler, montaj kılavuzları",
        items: ["CE Sertifikaları", "Teknik Çizimler", "Montaj Kılavuzları", "Garanti Belgeleri"]
      },
      logistics: {
        title: "Lojistik",
        description: "Güvenli ambalaj, hızlı kargo, gümrük işlemleri",
        items: ["Özel Ambalaj", "Sigortalı Kargo", "Gümrük Desteği", "Takip Sistemi"]
      },
      technical: {
        title: "Teknik Destek",
        description: "7/24 teknik destek, uzaktan yardım, problem çözme",
        items: ["7/24 Destek", "Uzaktan Yardım", "Video Konferans", "Hızlı Çözüm"]
      },
      training: {
        title: "Eğitim",
        description: "Ürün eğitimleri, satış teknikleri, pazarlama desteği",
        items: ["Ürün Eğitimi", "Satış Teknikleri", "Pazarlama Desteği", "Online Seminerler"]
      }
    }
  },
  en: {
    title: "Comprehensive Support Services",
    subtitle: "We are with you at every step with professional support services we offer for the success of our business partners",
    support: {
      documentation: {
        title: "Documentation",
        description: "CE certificates, technical drawings, installation guides",
        items: ["CE Certificates", "Technical Drawings", "Installation Guides", "Warranty Documents"]
      },
      logistics: {
        title: "Logistics",
        description: "Secure packaging, fast cargo, customs procedures",
        items: ["Special Packaging", "Insured Cargo", "Customs Support", "Tracking System"]
      },
      technical: {
        title: "Technical Support",
        description: "24/7 technical support, remote assistance, problem solving",
        items: ["24/7 Support", "Remote Assistance", "Video Conference", "Quick Solution"]
      },
      training: {
        title: "Training",
        description: "Product training, sales techniques, marketing support",
        items: ["Product Training", "Sales Techniques", "Marketing Support", "Online Seminars"]
      }
    }
  },
  de: {
    title: "Umfassende Support-Services",
    subtitle: "Wir sind bei jedem Schritt mit professionellen Support-Services an Ihrer Seite, die wir für den Erfolg unserer Geschäftspartner anbieten",
    support: {
      documentation: {
        title: "Dokumentation",
        description: "CE-Zertifikate, technische Zeichnungen, Installationsanleitungen",
        items: ["CE-Zertifikate", "Technische Zeichnungen", "Installationsanleitungen", "Garantieunterlagen"]
      },
      logistics: {
        title: "Logistik",
        description: "Sichere Verpackung, schnelle Fracht, Zollverfahren",
        items: ["Spezielle Verpackung", "Versicherte Fracht", "Zollunterstützung", "Verfolgungssystem"]
      },
      technical: {
        title: "Technischer Support",
        description: "24/7 technischer Support, Fernunterstützung, Problemlösung",
        items: ["24/7 Support", "Fernunterstützung", "Videokonferenz", "Schnelle Lösung"]
      },
      training: {
        title: "Schulung",
        description: "Produktschulungen, Verkaufstechniken, Marketingunterstützung",
        items: ["Produktschulung", "Verkaufstechniken", "Marketingunterstützung", "Online-Seminare"]
      }
    }
  },
  ar: {
    title: "خدمات الدعم الشاملة",
    subtitle: "نحن معك في كل خطوة مع خدمات الدعم المهنية التي نقدمها لنجاح شركائنا التجاريين",
    support: {
      documentation: {
        title: "التوثيق",
        description: "شهادات CE، الرسومات التقنية، أدلة التثبيت",
        items: ["شهادات CE", "الرسومات التقنية", "أدلة التثبيت", "مستندات الضمان"]
      },
      logistics: {
        title: "اللوجستيات",
        description: "تعبئة آمنة، شحن سريع، إجراءات جمركية",
        items: ["تعبئة خاصة", "شحن مؤمن", "دعم الجمارك", "نظام التتبع"]
      },
      technical: {
        title: "الدعم التقني",
        description: "دعم تقني على مدار الساعة، مساعدة عن بُعد، حل المشاكل",
        items: ["دعم 24/7", "مساعدة عن بُعد", "مؤتمر فيديو", "حل سريع"]
      },
      training: {
        title: "التدريب",
        description: "تدريب المنتجات، تقنيات المبيعات، دعم التسويق",
        items: ["تدريب المنتجات", "تقنيات المبيعات", "دعم التسويق", "ندوات عبر الإنترنت"]
      }
    }
  }
}

/**
 * Destek hizmetlerini çeviri sisteminden alır
 */
const getSupportServices = (lang: string) => {
  const t = translations[lang as keyof typeof translations] || translations.tr
  
  return [
    {
      icon: FileText,
      title: t.support.documentation.title,
      description: t.support.documentation.description,
      items: t.support.documentation.items,
    },
    {
      icon: Truck,
      title: t.support.logistics.title,
      description: t.support.logistics.description,
      items: t.support.logistics.items,
    },
    {
      icon: Headphones,
      title: t.support.technical.title,
      description: t.support.technical.description,
      items: t.support.technical.items,
    },
    {
      icon: GraduationCap,
      title: t.support.training.title,
      description: t.support.training.description,
      items: t.support.training.items,
    },
  ]
}

/**
 * Export destek hizmetleri bölümü
 * İş ortaklarına sunulan destek hizmetlerini gösterir
 */
export function ExportSupport() {
  const { language, t: tFunc } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr
  const supportServices = getSupportServices(language)
  
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
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            {t.subtitle}
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
