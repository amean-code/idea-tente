"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Globe2, Award, Truck } from "lucide-react"
import Image from "next/image"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    title: "İhracat Ürünlerimiz",
    subtitle: "Uluslararası standartlarda üretilen, CE sertifikalı premium ürünlerimiz dünya çapında güvenle kullanılmaktadır",
    products: {
      bioclimatic: {
        title: "Bioklimatik Pergola",
        description: "Akıllı lamel sistemli premium pergolalar",
        features: ["CE Sertifikalı", "10 Yıl Garanti", "Özel Ambalaj"],
        markets: ["Avrupa", "Orta Doğu", "Afrika"]
      },
      glassSystems: {
        title: "Cam Sistemleri",
        description: "Frameless giyotin cam sistemleri",
        features: ["Temperli Cam", "Alüminyum Profil", "Hızlı Montaj"],
        markets: ["Avrupa", "Asya-Pasifik"]
      },
      winterGarden: {
        title: "Kış Bahçesi",
        description: "4 mevsim kullanım için kapalı sistemler",
        features: ["Isı Yalıtımı", "Hava Geçirmezlik", "Özel Tasarım"],
        markets: ["Avrupa", "Kuzey Amerika"]
      }
    },
    exportReady: "İhracata Hazır",
    features: "Özellikler",
    targetMarkets: "Hedef Pazarlar",
    infoCards: {
      ceCertified: {
        title: "CE Sertifikalı",
        description: "Tüm ürünlerimiz Avrupa standartlarında CE sertifikalıdır"
      },
      secureShipping: {
        title: "Güvenli Kargo",
        description: "Özel ihracat ambalajı ile hasar riski minimumda"
      },
      worldwide: {
        title: "Dünya Çapında",
        description: "50+ ülkeye başarıyla gönderilmiş binlerce ürün"
      }
    }
  },
  en: {
    title: "Our Export Products",
    subtitle: "Our premium products manufactured to international standards and CE certified are safely used worldwide",
    products: {
      bioclimatic: {
        title: "Bioclimatic Pergola",
        description: "Premium pergolas with smart louver system",
        features: ["CE Certified", "10 Year Warranty", "Special Packaging"],
        markets: ["Europe", "Middle East", "Africa"]
      },
      glassSystems: {
        title: "Glass Systems",
        description: "Frameless guillotine glass systems",
        features: ["Tempered Glass", "Aluminum Profile", "Quick Installation"],
        markets: ["Europe", "Asia-Pacific"]
      },
      winterGarden: {
        title: "Winter Garden",
        description: "Enclosed systems for 4-season use",
        features: ["Thermal Insulation", "Airtightness", "Custom Design"],
        markets: ["Europe", "North America"]
      }
    },
    exportReady: "Export Ready",
    features: "Features",
    targetMarkets: "Target Markets",
    infoCards: {
      ceCertified: {
        title: "CE Certified",
        description: "All our products are CE certified according to European standards"
      },
      secureShipping: {
        title: "Secure Shipping",
        description: "Damage risk is minimized with special export packaging"
      },
      worldwide: {
        title: "Worldwide",
        description: "Thousands of products successfully shipped to 50+ countries"
      }
    }
  },
  de: {
    title: "Unsere Exportprodukte",
    subtitle: "Unsere Premium-Produkte, die nach internationalen Standards hergestellt und CE-zertifiziert sind, werden weltweit sicher verwendet",
    products: {
      bioclimatic: {
        title: "Bioklimatische Pergola",
        description: "Premium-Pergolen mit intelligentem Lamellensystem",
        features: ["CE-zertifiziert", "10 Jahre Garantie", "Spezielle Verpackung"],
        markets: ["Europa", "Naher Osten", "Afrika"]
      },
      glassSystems: {
        title: "Glassysteme",
        description: "Rahmenlose Guillotine-Glassysteme",
        features: ["Verglastes Glas", "Aluminiumprofil", "Schnelle Installation"],
        markets: ["Europa", "Asien-Pazifik"]
      },
      winterGarden: {
        title: "Wintergarten",
        description: "Geschlossene Systeme für die Nutzung in 4 Jahreszeiten",
        features: ["Wärmedämmung", "Luftdichtheit", "Individuelles Design"],
        markets: ["Europa", "Nordamerika"]
      }
    },
    exportReady: "Exportbereit",
    features: "Funktionen",
    targetMarkets: "Zielmärkte",
    infoCards: {
      ceCertified: {
        title: "CE-zertifiziert",
        description: "Alle unsere Produkte sind nach europäischen Standards CE-zertifiziert"
      },
      secureShipping: {
        title: "Sicherer Versand",
        description: "Das Schadensrisiko wird durch spezielle Exportverpackung minimiert"
      },
      worldwide: {
        title: "Weltweit",
        description: "Tausende von Produkten erfolgreich in über 50 Länder versandt"
      }
    }
  },
  ar: {
    title: "منتجات التصدير لدينا",
    subtitle: "منتجاتنا المتميزة المصنعة وفق المعايير الدولية والمعتمدة CE تُستخدم بأمان في جميع أنحاء العالم",
    products: {
      bioclimatic: {
        title: "البرجولا البيوكليماتية",
        description: "برجولات متميزة بنظام لوحات ذكي",
        features: ["معتمد CE", "ضمان 10 سنوات", "تعبئة خاصة"],
        markets: ["أوروبا", "الشرق الأوسط", "أفريقيا"]
      },
      glassSystems: {
        title: "أنظمة الزجاج",
        description: "أنظمة زجاج منزلق بدون إطار",
        features: ["زجاج مقسى", "بروفيل ألومنيوم", "تركيب سريع"],
        markets: ["أوروبا", "آسيا والمحيط الهادئ"]
      },
      winterGarden: {
        title: "حديقة الشتاء",
        description: "أنظمة مغلقة للاستخدام في 4 فصول",
        features: ["عزل حراري", "إحكام الهواء", "تصميم مخصص"],
        markets: ["أوروبا", "أمريكا الشمالية"]
      }
    },
    exportReady: "جاهز للتصدير",
    features: "الميزات",
    targetMarkets: "الأسواق المستهدفة",
    infoCards: {
      ceCertified: {
        title: "معتمد CE",
        description: "جميع منتجاتنا معتمدة CE وفقًا للمعايير الأوروبية"
      },
      secureShipping: {
        title: "شحن آمن",
        description: "يتم تقليل مخاطر التلف مع التعبئة الخاصة بالتصدير"
      },
      worldwide: {
        title: "عالميًا",
        description: "آلاف المنتجات التي تم شحنها بنجاح إلى أكثر من 50 دولة"
      }
    }
  }
}

const getExportProducts = (lang: string) => {
  const t = translations[lang as keyof typeof translations] || translations.tr
  
  return [
    {
      title: t.products.bioclimatic.title,
      description: t.products.bioclimatic.description,
      image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
      features: t.products.bioclimatic.features,
      markets: t.products.bioclimatic.markets,
      exportReady: true,
    },
    {
      title: t.products.glassSystems.title,
      description: t.products.glassSystems.description,
      image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
      features: t.products.glassSystems.features,
      markets: t.products.glassSystems.markets,
      exportReady: true,
    },
    {
      title: t.products.winterGarden.title,
      description: t.products.winterGarden.description,
      image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
      features: t.products.winterGarden.features,
      markets: t.products.winterGarden.markets,
      exportReady: true,
    },
  ]
}

/**
 * Export ürünleri bölümü
 * İhracat için hazır ürünleri modern kartlarla gösterir
 */
export function ExportProducts() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr
  const exportProducts = getExportProducts(language)
  
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {exportProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  {product.exportReady && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-1">
                        <Truck className="h-3 w-3" />
{t.exportReady}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">{t.features}</h4>
                      </div>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe2 className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">{t.targetMarkets}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.markets.map((market, idx) => (
                          <Badge key={idx} variant="outline" className="text-muted-foreground">
                            {market}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Shipping Bilgi Kartları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-card p-6 border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t.infoCards.ceCertified.title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.infoCards.ceCertified.description}
            </p>
          </div>

          <div className="bg-card p-6 border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t.infoCards.secureShipping.title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.infoCards.secureShipping.description}
            </p>
          </div>

          <div className="bg-card p-6 border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Globe2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t.infoCards.worldwide.title}</h3>
            <p className="text-sm text-muted-foreground">
              {t.infoCards.worldwide.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
