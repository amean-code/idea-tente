"use client"

import { Package, FileCheck, Plane, Ship, Truck, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    title: "Gönderim Sürecimiz",
    subtitle: "Siparişinizden teslimat sonrası desteğe kadar her adımda yanınızdayız",
    steps: {
      order: {
        title: "Sipariş & Doküman",
        description: "Sipariş onayı ve tüm belgeler hazırlanır",
        duration: "1-2 gün"
      },
      production: {
        title: "Üretim & Paketleme",
        description: "Ürünler üretilir ve özel ihracat ambalajı yapılır",
        duration: "7-14 gün"
      },
      customs: {
        title: "Gümrük İşlemleri",
        description: "Tüm gümrük işlemleri tamamlanır",
        duration: "1-3 gün"
      },
      shipping: {
        title: "Uluslararası Kargo",
        description: "Deniz veya hava yolu ile güvenli gönderim",
        duration: "5-30 gün"
      },
      delivery: {
        title: "Teslimat",
        description: "Hedef ülkede yerel kargo ile teslimat",
        duration: "2-5 gün"
      }
    },
    features: {
      insured: "Sigortalı Kargo",
      tracking: "Takip Sistemi",
      customs: "Gümrük Desteği",
      packaging: "Özel Ambalaj"
    }
  },
  en: {
    title: "Our Shipping Process",
    subtitle: "We are with you at every step from your order to post-delivery support",
    steps: {
      order: {
        title: "Order & Documents",
        description: "Order confirmation and all documents are prepared",
        duration: "1-2 days"
      },
      production: {
        title: "Production & Packaging",
        description: "Products are manufactured and special export packaging is done",
        duration: "7-14 days"
      },
      customs: {
        title: "Customs Procedures",
        description: "All customs procedures are completed",
        duration: "1-3 days"
      },
      shipping: {
        title: "International Cargo",
        description: "Safe shipping by sea or air",
        duration: "5-30 days"
      },
      delivery: {
        title: "Delivery",
        description: "Delivery with local cargo in the target country",
        duration: "2-5 days"
      }
    },
    features: {
      insured: "Insured Cargo",
      tracking: "Tracking System",
      customs: "Customs Support",
      packaging: "Special Packaging"
    }
  },
  de: {
    title: "Unser Versandprozess",
    subtitle: "Wir sind bei jedem Schritt von Ihrer Bestellung bis zur Unterstützung nach der Lieferung an Ihrer Seite",
    steps: {
      order: {
        title: "Bestellung & Dokumente",
        description: "Bestellbestätigung und alle Dokumente werden vorbereitet",
        duration: "1-2 Tage"
      },
      production: {
        title: "Produktion & Verpackung",
        description: "Produkte werden hergestellt und spezielle Exportverpackung wird durchgeführt",
        duration: "7-14 Tage"
      },
      customs: {
        title: "Zollverfahren",
        description: "Alle Zollverfahren werden abgeschlossen",
        duration: "1-3 Tage"
      },
      shipping: {
        title: "Internationale Fracht",
        description: "Sicherer Versand per See oder Luft",
        duration: "5-30 Tage"
      },
      delivery: {
        title: "Lieferung",
        description: "Lieferung mit lokaler Fracht im Zielland",
        duration: "2-5 Tage"
      }
    },
    features: {
      insured: "Versicherte Fracht",
      tracking: "Verfolgungssystem",
      customs: "Zollunterstützung",
      packaging: "Spezielle Verpackung"
    }
  },
  ar: {
    title: "عملية الشحن لدينا",
    subtitle: "نحن معك في كل خطوة من طلبك إلى الدعم بعد التسليم",
    steps: {
      order: {
        title: "الطلب والمستندات",
        description: "يتم إعداد تأكيد الطلب وجميع المستندات",
        duration: "1-2 يوم"
      },
      production: {
        title: "الإنتاج والتعبئة",
        description: "يتم تصنيع المنتجات وتنفيذ التعبئة الخاصة بالتصدير",
        duration: "7-14 يوم"
      },
      customs: {
        title: "إجراءات الجمارك",
        description: "يتم إكمال جميع إجراءات الجمارك",
        duration: "1-3 يوم"
      },
      shipping: {
        title: "الشحن الدولي",
        description: "الشحن الآمن عن طريق البحر أو الجو",
        duration: "5-30 يوم"
      },
      delivery: {
        title: "التسليم",
        description: "التسليم مع الشحن المحلي في البلد المستهدف",
        duration: "2-5 يوم"
      }
    },
    features: {
      insured: "شحن مؤمن",
      tracking: "نظام التتبع",
      customs: "دعم الجمارك",
      packaging: "تعبئة خاصة"
    }
  }
}

const getShippingSteps = (lang: string) => {
  const t = translations[lang as keyof typeof translations] || translations.tr
  
  return [
    {
      icon: FileCheck,
      title: t.steps.order.title,
      description: t.steps.order.description,
      duration: t.steps.order.duration,
    },
    {
      icon: Package,
      title: t.steps.production.title,
      description: t.steps.production.description,
      duration: t.steps.production.duration,
    },
    {
      icon: Truck,
      title: t.steps.customs.title,
      description: t.steps.customs.description,
      duration: t.steps.customs.duration,
    },
    {
      icon: Ship,
      title: t.steps.shipping.title,
      description: t.steps.shipping.description,
      duration: t.steps.shipping.duration,
    },
    {
      icon: MapPin,
      title: t.steps.delivery.title,
      description: t.steps.delivery.description,
      duration: t.steps.delivery.duration,
    },
  ]
}

const getFeatures = (lang: string) => {
  const t = translations[lang as keyof typeof translations] || translations.tr
  
  return [
    {
      icon: CheckCircle2,
      text: t.features.insured,
    },
    {
      icon: CheckCircle2,
      text: t.features.tracking,
    },
    {
      icon: CheckCircle2,
      text: t.features.customs,
    },
    {
      icon: CheckCircle2,
      text: t.features.packaging,
    },
  ]
}

/**
 * Export gönderim süreci bileşeni
 * Global kargo sürecini timeline şeklinde gösterir
 */
export function ExportShippingProcess() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr
  const shippingSteps = getShippingSteps(language)
  const features = getFeatures(language)
  
  return (
    <section id="shipping-process" className="py-20 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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

