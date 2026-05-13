"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Play, Award, Globe, TrendingUp, Users } from "lucide-react"

/**
 * Company Video Section bileşeni
 * Firmayı anlatan video, açıklama ve istatistikleri gösterir
 * Kaydırmalı içerik yok, statik tasarım
 */
export function CompanyVideoSection() {
  const { t } = useLanguage()

  /**
   * İstatistik verileri
   */
  const stats = [
    {
      number: "4000+",
      label: t("companyVideo.stats.projects"),
      icon: Award,
    },
    {
      number: "50+",
      label: t("companyVideo.stats.countries"),
      icon: Globe,
    },
    {
      number: "15+",
      label: t("companyVideo.stats.experience"),
      icon: TrendingUp,
    },
    {
      number: "98%",
      label: t("companyVideo.stats.satisfaction"),
      icon: Users,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Bölümü */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/20 shadow-2xl">
              {/* Video placeholder - gerçek video URL'i buraya eklenecek */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 transition-all duration-300 hover:bg-white/30 group"
                >
                  <Play className="w-12 h-12 text-white ml-2 group-hover:text-primary transition-colors" />
                </motion.button>
              </div>
              
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Video başlığı */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t("companyVideo.videoTitle")}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Açıklama ve İstatistikler */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Başlık ve Açıklama */}
            <div className="space-y-4">              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t("companyVideo.title")}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {t("companyVideo.description")}
              </p>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
