"use client"

import { MapPin, Users, Award, TrendingUp } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    title: "Küresel Erişim",
    subtitle: "Dünya çapında genişleyen ihracat ağımız ve başarılı projelerimiz",
    projectLabel: "Proje",
    regions: {
      europe: {
        name: "Avrupa",
        countries: ["Almanya", "Fransa", "İtalya", "İspanya", "Hollanda", "Belçika"]
      },
      middleEast: {
        name: "Orta Doğu",
        countries: ["BAE", "Suudi Arabistan", "Katar", "Kuveyt", "Lübnan"]
      },
      africa: {
        name: "Afrika",
        countries: ["Güney Afrika", "Mısır", "Fas", "Tunus", "Cezayir"]
      },
      asiaPacific: {
        name: "Asya-Pasifik",
        countries: ["Avustralya", "Japonya", "Singapur", "Malezya"]
      }
    },
    stats: {
      countries: {
        label: "Ülke",
        description: "Aktif ihracat yaptığımız ülkeler"
      },
      distributors: {
        label: "Distribütör",
        description: "Güvenilir iş ortaklarımız"
      },
      projects: {
        label: "Proje",
        description: "Başarıyla tamamlanan projeler"
      },
      growth: {
        label: "Büyüme",
        description: "Yıllık büyüme oranı"
      }
    }
  },
  en: {
    title: "Global Reach",
    subtitle: "Our expanding export network worldwide and successful projects",
    projectLabel: "Projects",
    regions: {
      europe: {
        name: "Europe",
        countries: ["Germany", "France", "Italy", "Spain", "Netherlands", "Belgium"]
      },
      middleEast: {
        name: "Middle East",
        countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Lebanon"]
      },
      africa: {
        name: "Africa",
        countries: ["South Africa", "Egypt", "Morocco", "Tunisia", "Algeria"]
      },
      asiaPacific: {
        name: "Asia-Pacific",
        countries: ["Australia", "Japan", "Singapore", "Malaysia"]
      }
    },
    stats: {
      countries: {
        label: "Countries",
        description: "Countries we actively export to"
      },
      distributors: {
        label: "Distributors",
        description: "Our trusted business partners"
      },
      projects: {
        label: "Projects",
        description: "Successfully completed projects"
      },
      growth: {
        label: "Growth",
        description: "Annual growth rate"
      }
    }
  },
  de: {
    title: "Globale Reichweite",
    subtitle: "Unser sich weltweit ausdehnendes Exportnetzwerk und erfolgreiche Projekte",
    projectLabel: "Projekte",
    regions: {
      europe: {
        name: "Europa",
        countries: ["Deutschland", "Frankreich", "Italien", "Spanien", "Niederlande", "Belgien"]
      },
      middleEast: {
        name: "Naher Osten",
        countries: ["VAE", "Saudi-Arabien", "Katar", "Kuwait", "Libanon"]
      },
      africa: {
        name: "Afrika",
        countries: ["Südafrika", "Ägypten", "Marokko", "Tunesien", "Algerien"]
      },
      asiaPacific: {
        name: "Asien-Pazifik",
        countries: ["Australien", "Japan", "Singapur", "Malaysia"]
      }
    },
    stats: {
      countries: {
        label: "Länder",
        description: "Länder, in die wir aktiv exportieren"
      },
      distributors: {
        label: "Vertriebspartner",
        description: "Unsere vertrauenswürdigen Geschäftspartner"
      },
      projects: {
        label: "Projekte",
        description: "Erfolgreich abgeschlossene Projekte"
      },
      growth: {
        label: "Wachstum",
        description: "Jährliche Wachstumsrate"
      }
    }
  },
  ar: {
    title: "الوصول العالمي",
    subtitle: "شبكة التصدير المتوسعة لدينا في جميع أنحاء العالم والمشاريع الناجحة",
    projectLabel: "المشاريع",
    regions: {
      europe: {
        name: "أوروبا",
        countries: ["ألمانيا", "فرنسا", "إيطاليا", "إسبانيا", "هولندا", "بلجيكا"]
      },
      middleEast: {
        name: "الشرق الأوسط",
        countries: ["الإمارات", "السعودية", "قطر", "الكويت", "لبنان"]
      },
      africa: {
        name: "أفريقيا",
        countries: ["جنوب أفريقيا", "مصر", "المغرب", "تونس", "الجزائر"]
      },
      asiaPacific: {
        name: "آسيا والمحيط الهادئ",
        countries: ["أستراليا", "اليابان", "سنغافورة", "ماليزيا"]
      }
    },
    stats: {
      countries: {
        label: "الدول",
        description: "الدول التي نصدر إليها بنشاط"
      },
      distributors: {
        label: "الموزعون",
        description: "شركاؤنا التجاريون الموثوقون"
      },
      projects: {
        label: "المشاريع",
        description: "المشاريع المكتملة بنجاح"
      },
      growth: {
        label: "النمو",
        description: "معدل النمو السنوي"
      }
    }
  }
}

/**
 * Global erişim bölümü
 * İhracat istatistikleri ve bölgesel dağılımı gösterir
 */
export function GlobalReach() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr

  const regions = [
    {
      name: t.regions.europe.name,
      countries: t.regions.europe.countries,
      projects: "2000+",
      color: "bg-primary",
    },
    {
      name: t.regions.middleEast.name,
      countries: t.regions.middleEast.countries,
      projects: "1500+",
      color: "bg-primary",
    },
    {
      name: t.regions.africa.name,
      countries: t.regions.africa.countries,
      projects: "800+",
      color: "bg-primary",
    },
    {
      name: t.regions.asiaPacific.name,
      countries: t.regions.asiaPacific.countries,
      projects: "700+",
      color: "bg-primary",
    },
  ]

  const stats = [
    {
      icon: MapPin,
      number: "50+",
      label: t.stats.countries.label,
      description: t.stats.countries.description,
    },
    {
      icon: Users,
      number: "200+",
      label: t.stats.distributors.label,
      description: t.stats.distributors.description,
    },
    {
      icon: Award,
      number: "5000+",
      label: t.stats.projects.label,
      description: t.stats.projects.description,
    },
    {
      icon: TrendingUp,
      number: "%40",
      label: t.stats.growth.label,
      description: t.stats.growth.description,
    },
  ]

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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-6">
                <div className={`w-3 h-3 rounded-full ${region.color} mr-3`} />
                <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
              </div>

              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-primary rounded-lg">
                  <span className="text-2xl font-bold text-white">{region.projects}</span>
                  <span className="text-sm text-white/90 ml-2">{t.projectLabel}</span>
                </div>
              </div>

              <div className="space-y-2">
                {region.countries.map((country, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${region.color} mr-2`} />
                    {country}
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
