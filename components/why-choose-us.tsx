"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Wrench, Globe, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { useLanguage } from "@/contexts/language-context"

/**
 * İstatistik marquee bileşeni
 * Üstte kayan istatistik bilgileri gösterir
 */
const StatsMarquee = () => {
  const { t } = useLanguage()
  
  const stats = [
    { number: "5000+", label: t("stats.projects") },
    { number: "50+", label: t("stats.countries") },
    { number: "20+", label: t("stats.years") },
    { number: "98%", label: t("stats.satisfaction") },
  ]

  return (
    <div className="absolute top-2 sm:top-3 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_20%,#000_80%,transparent_100%)]">
      <div className="flex animate-marquee gap-3 sm:gap-6">
        {[...stats, ...stats].map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[80px] sm:min-w-[100px] border border-white/20"
          >
            <div className="text-sm sm:text-lg font-bold text-white drop-shadow-lg">{stat.number}</div>
            <div className="text-white/80 text-xs text-center drop-shadow-md">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Proje vitrin bileşeni
 * Sağ tarafta kayan proje örnekleri gösterir
 */
const ProjectShowcase = () => {
  const { t } = useLanguage()
  
  const projects = [
    { name: t("whyChooseUs.projectShowcase.villa"), location: t("whyChooseUs.projectShowcase.istanbul") },
    { name: t("whyChooseUs.projectShowcase.hotel"), location: t("whyChooseUs.projectShowcase.antalya") },
    { name: t("whyChooseUs.projectShowcase.restaurant"), location: t("whyChooseUs.projectShowcase.izmir") },
    { name: t("whyChooseUs.projectShowcase.residence"), location: t("whyChooseUs.projectShowcase.ankara") },
  ]

  return (
    <div className="absolute right-2 sm:right-4 top-4 h-[240px] sm:h-[280px] w-[160px] sm:w-[200px] overflow-hidden">
      <div className="flex flex-col gap-2 sm:gap-3 animate-marquee-vertical">
        {[...projects, ...projects].map((project, idx) => (
          <div key={idx} className="bg-white backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
            <div className="font-semibold text-xs sm:text-sm text-gray-900">{project.name}</div>
            <div className="text-xs text-gray-700">{project.location}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Neden IDEA bölümü
 * Şirketin özelliklerini ve avantajlarını sergiler
 */
export function WhyChooseUs() {
  const { t } = useLanguage()

  // Özellikler listesi
  const features = [
    {
      Icon: Award,
      name: t("whyChooseUs.features.experience.title"),
      description: t("whyChooseUs.features.experience.description"),
      href: "#",
      cta: t("whyChooseUs.features.experience.cta"),
      className: "sm:col-span-2 lg:col-span-2",
      hasCustomBackground: true,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90">
          <div className="absolute inset-0 bg-black/10" />
          <StatsMarquee />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white/90 drop-shadow-lg">
            <div className="text-sm sm:text-base font-bold">2003</div>
            <div className="text-xs">{t("whyChooseUs.features.experience.founded")}</div>
          </div>
        </div>
      ),
    },
    {
      Icon: Shield,
      name: t("whyChooseUs.features.quality.title"),
      description: t("whyChooseUs.features.quality.description"),
      href: "#",
      cta: t("whyChooseUs.features.quality.cta"),
      className: "sm:col-span-2 lg:col-span-1",
      hasCustomBackground: true,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
            </div>
          </div>
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-white drop-shadow-lg">
            <div className="text-sm sm:text-base font-bold">10 YIL</div>
            <div className="text-xs opacity-90">{t("whyChooseUs.features.quality.warranty")}</div>
          </div>
        </div>
      ),
    },
    {
      Icon: Users,
      name: t("whyChooseUs.features.team.title"),
      description: t("whyChooseUs.features.team.description"),
      href: "#",
      cta: t("whyChooseUs.features.team.cta"),
      className: "sm:col-span-2 lg:col-span-2",
      hasCustomBackground: false,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          <ProjectShowcase />
        </div>
      ),
    },
    {
      Icon: Globe,
      name: t("whyChooseUs.features.global.title"),
      description: t("whyChooseUs.features.global.description"),
      href: "#",
      cta: t("whyChooseUs.features.global.cta"),
      className: "sm:col-span-1 lg:col-span-1",
      hasCustomBackground: true,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/80">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 grid grid-cols-2 gap-1 sm:gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-white drop-shadow-lg">
            <div className="text-sm sm:text-base font-bold">50+</div>
            <div className="text-xs opacity-90">{t("whyChooseUs.features.global.countries")}</div>
          </div>
        </div>
      ),
    },
    {
      Icon: Wrench,
      name: t("whyChooseUs.features.design.title"),
      description: t("whyChooseUs.features.design.description"),
      href: "#",
      cta: t("whyChooseUs.features.design.cta"),
      className: "sm:col-span-1 lg:col-span-1",
      hasCustomBackground: true,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/60">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/40 rounded-lg rotate-45 animate-spin-slow" />
          </div>
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white drop-shadow-lg">
            <div className="text-sm sm:text-base font-bold">100%</div>
            <div className="text-xs opacity-90">{t("whyChooseUs.features.design.custom")}</div>
          </div>
        </div>
      ),
    },
    {
      Icon: Clock,
      name: t("whyChooseUs.features.delivery.title"),
      description: t("whyChooseUs.features.delivery.description"),
      href: "#",
      cta: t("whyChooseUs.features.delivery.cta"),
      className: "sm:col-span-2 lg:col-span-1",
      hasCustomBackground: true,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white/30 rounded-full relative">
              <div className="absolute top-2 left-1/2 w-0.5 h-5 sm:h-6 bg-white transform -translate-x-1/2 origin-bottom animate-pulse" />
            </div>
          </div>
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white drop-shadow-lg">
            <div className="text-sm sm:text-base font-bold">7-14</div>
            <div className="text-xs opacity-90">{t("whyChooseUs.features.delivery.days")}</div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            {t("whyChooseUs.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t("whyChooseUs.title")}
            <span className="text-primary block">{t("whyChooseUs.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("whyChooseUs.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BentoGrid className="auto-rows-[18rem] sm:auto-rows-[20rem] md:auto-rows-[22rem]">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
}
