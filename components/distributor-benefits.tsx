"use client"

import { Handshake, TrendingUp, Shield, Headphones, Truck, Award } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    title: "Distribütör Avantajları",
    subtitle: "İş ortaklarımıza sunduğumuz kapsamlı destek ve avantajlar ile birlikte büyüyün",
    benefits: {
      strongPartnership: {
        title: "Güçlü Ortaklık",
        description: "Uzun vadeli, karşılıklı kazançlı iş ortaklığı"
      },
      highMargin: {
        title: "Yüksek Kar Marjı",
        description: "Rekabetçi fiyatlar ve cazip kar marjları"
      },
      territoryProtection: {
        title: "Bölge Koruması",
        description: "Özel bölge hakları ve rekabet koruması"
      },
      technicalSupport: {
        title: "Teknik Destek",
        description: "7/24 teknik destek ve eğitim programları"
      },
      logistics: {
        title: "Lojistik Çözümler",
        description: "Hızlı ve güvenli kargo çözümleri"
      },
      marketing: {
        title: "Pazarlama Desteği",
        description: "Katalog, broşür ve pazarlama materyalleri"
      }
    }
  },
  en: {
    title: "Distributor Benefits",
    subtitle: "Grow together with the comprehensive support and benefits we offer to our business partners",
    benefits: {
      strongPartnership: {
        title: "Strong Partnership",
        description: "Long-term, mutually beneficial business partnership"
      },
      highMargin: {
        title: "High Profit Margin",
        description: "Competitive prices and attractive profit margins"
      },
      territoryProtection: {
        title: "Territory Protection",
        description: "Exclusive territory rights and competition protection"
      },
      technicalSupport: {
        title: "Technical Support",
        description: "24/7 technical support and training programs"
      },
      logistics: {
        title: "Logistics Solutions",
        description: "Fast and secure shipping solutions"
      },
      marketing: {
        title: "Marketing Support",
        description: "Catalog, brochure and marketing materials"
      }
    }
  },
  de: {
    title: "Händler-Vorteile",
    subtitle: "Wachsen Sie gemeinsam mit der umfassenden Unterstützung und den Vorteilen, die wir unseren Geschäftspartnern bieten",
    benefits: {
      strongPartnership: {
        title: "Starke Partnerschaft",
        description: "Langfristige, für beide Seiten vorteilhafte Geschäftspartnerschaft"
      },
      highMargin: {
        title: "Hohe Gewinnspanne",
        description: "Wettbewerbsfähige Preise und attraktive Gewinnspannen"
      },
      territoryProtection: {
        title: "Gebietsschutz",
        description: "Exklusive Gebietsrechte und Wettbewerbsschutz"
      },
      technicalSupport: {
        title: "Technischer Support",
        description: "24/7 technischer Support und Schulungsprogramme"
      },
      logistics: {
        title: "Logistiklösungen",
        description: "Schnelle und sichere Versandlösungen"
      },
      marketing: {
        title: "Marketing-Unterstützung",
        description: "Katalog, Broschüre und Marketingmaterialien"
      }
    }
  },
  ar: {
    title: "مزايا الموزع",
    subtitle: "نمو معًا مع الدعم الشامل والمزايا التي نقدمها لشركائنا التجاريين",
    benefits: {
      strongPartnership: {
        title: "شراكة قوية",
        description: "شراكة تجارية طويلة الأجل ومفيدة للطرفين"
      },
      highMargin: {
        title: "هامش ربح مرتفع",
        description: "أسعار تنافسية وهوامش ربح جذابة"
      },
      territoryProtection: {
        title: "حماية المنطقة",
        description: "حقوق إقليمية حصرية وحماية من المنافسة"
      },
      technicalSupport: {
        title: "الدعم التقني",
        description: "دعم تقني على مدار الساعة وبرامج تدريبية"
      },
      logistics: {
        title: "حلول لوجستية",
        description: "حلول شحن سريعة وآمنة"
      },
      marketing: {
        title: "دعم التسويق",
        description: "كталوج، كتيب ومواد تسويقية"
      }
    }
  }
}

const getBenefits = (lang: string) => {
  const t = translations[lang as keyof typeof translations] || translations.tr
  
  return [
    {
      icon: Handshake,
      title: t.benefits.strongPartnership.title,
      description: t.benefits.strongPartnership.description,
    },
    {
      icon: TrendingUp,
      title: t.benefits.highMargin.title,
      description: t.benefits.highMargin.description,
    },
    {
      icon: Shield,
      title: t.benefits.territoryProtection.title,
      description: t.benefits.territoryProtection.description,
    },
    {
      icon: Headphones,
      title: t.benefits.technicalSupport.title,
      description: t.benefits.technicalSupport.description,
    },
    {
      icon: Truck,
      title: t.benefits.logistics.title,
      description: t.benefits.logistics.description,
    },
    {
      icon: Award,
      title: t.benefits.marketing.title,
      description: t.benefits.marketing.description,
    },
  ]
}

/**
 * Distribütör avantajları bölümü
 * İş ortaklarına sunulan avantajları modern kartlarla gösterir
 */
export function DistributorBenefits() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr
  const benefits = getBenefits(language)
  
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
