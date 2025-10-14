"use client"

import { MapPin, Users, Award, TrendingUp } from "lucide-react"
import { motion } from "motion/react"

const regions = [
  {
    name: "Avrupa",
    countries: ["Almanya", "Fransa", "İtalya", "İspanya", "Hollanda", "Belçika"],
    projects: "2000+",
    color: "bg-primary",
  },
  {
    name: "Orta Doğu",
    countries: ["BAE", "Suudi Arabistan", "Katar", "Kuveyt", "Lübnan"],
    projects: "1500+",
    color: "bg-primary",
  },
  {
    name: "Afrika",
    countries: ["Güney Afrika", "Mısır", "Fas", "Tunus", "Cezayir"],
    projects: "800+",
    color: "bg-primary",
  },
  {
    name: "Asya-Pasifik",
    countries: ["Avustralya", "Japonya", "Singapur", "Malezya"],
    projects: "700+",
    color: "bg-primary",
  },
]

const stats = [
  {
    icon: MapPin,
    number: "50+",
    label: "Ülke",
    description: "Dünya çapında distribütör ağı",
  },
  {
    icon: Users,
    number: "200+",
    label: "Distribütör",
    description: "Güvenilir iş ortakları",
  },
  {
    icon: Award,
    number: "5000+",
    label: "Proje",
    description: "Başarıyla tamamlanan projeler",
  },
  {
    icon: TrendingUp,
    number: "%40",
    label: "Büyüme",
    description: "Yıllık ihracat artışı",
  },
]

/**
 * Global erişim bölümü
 * İhracat istatistikleri ve bölgesel dağılımı gösterir
 */
export function GlobalReach() {
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
            Global Erişimimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Dünya çapında güçlü distribütör ağımız ile premium IDEA sistemlerini her kıtaya ulaştırıyoruz
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
                  <span className="text-sm text-white/90 ml-2">proje</span>
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
