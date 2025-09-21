"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Wrench, Globe, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"

const StatsMarquee = () => {
  const stats = [
    { number: "5000+", label: "Proje" },
    { number: "50+", label: "Ülke" },
    { number: "20+", label: "Yıl" },
    { number: "98%", label: "Memnuniyet" },
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

const ProjectShowcase = () => {
  const projects = [
    { name: "Villa Projesi", location: "İstanbul" },
    { name: "Otel Terası", location: "Antalya" },
    { name: "Restoran", location: "İzmir" },
    { name: "Rezidans", location: "Ankara" },
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

const features = [
  {
    Icon: Award,
    name: "20+ Yıl Deneyim",
    description: "Sektörde uzun yıllara dayanan deneyim ve uzmanlık ile müşterilerimize en iyi hizmeti sunuyoruz.",
    href: "#",
    cta: "Daha Fazla",
    className: "sm:col-span-2 lg:col-span-2",
    hasCustomBackground: true,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500">
        <div className="absolute inset-0 bg-black/10" />
        <StatsMarquee />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white/90 drop-shadow-lg">
          <div className="text-sm sm:text-base font-bold">2003</div>
          <div className="text-xs">Kuruluş</div>
        </div>
      </div>
    ),
  },
  {
    Icon: Shield,
    name: "Kalite Garantisi",
    description: "CE sertifikalı ürünler ve 10 yıl garanti ile güvenilir çözümler sunuyoruz.",
    href: "#",
    cta: "Sertifikalar",
    className: "sm:col-span-2 lg:col-span-1",
    hasCustomBackground: true,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-400">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-white drop-shadow-lg">
          <div className="text-sm sm:text-base font-bold">10 YIL</div>
          <div className="text-xs opacity-90">Garanti</div>
        </div>
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Uzman Ekip",
    description: "Profesyonel montaj ve satış sonrası destek hizmeti ile yanınızdayız.",
    href: "#",
    cta: "Ekibimiz",
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
    name: "Global Reach",
    description: "50+ ülkeye ihracat ve distribütör ağı ile dünya çapında hizmet veriyoruz.",
    href: "#",
    cta: "İhracat",
    className: "sm:col-span-1 lg:col-span-1",
    hasCustomBackground: true,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300">
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
          <div className="text-xs opacity-90">Ülke</div>
        </div>
      </div>
    ),
  },
  {
    Icon: Wrench,
    name: "Özel Tasarım",
    description: "İhtiyaçlarınıza özel tasarım ve üretim hizmeti sunuyoruz.",
    href: "#",
    cta: "Tasarım",
    className: "sm:col-span-1 lg:col-span-1",
    hasCustomBackground: true,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/40 rounded-lg rotate-45 animate-spin-slow" />
        </div>
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white drop-shadow-lg">
          <div className="text-sm sm:text-base font-bold">100%</div>
          <div className="text-xs opacity-90">Özel</div>
        </div>
      </div>
    ),
  },
  {
    Icon: Clock,
    name: "Hızlı Teslimat",
    description: "Kısa sürede üretim ve montaj hizmeti ile projelerinizi hayata geçiriyoruz.",
    href: "#",
    cta: "Süreç",
    className: "sm:col-span-2 lg:col-span-1",
    hasCustomBackground: true,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white/30 rounded-full relative">
            <div className="absolute top-2 left-1/2 w-0.5 h-5 sm:h-6 bg-white transform -translate-x-1/2 origin-bottom animate-pulse" />
          </div>
        </div>
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white drop-shadow-lg">
          <div className="text-sm sm:text-base font-bold">7-14</div>
          <div className="text-xs opacity-90">Gün</div>
        </div>
      </div>
    ),
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-orange-50/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
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
          <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200">
            Neden IDEA?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Türkiye'nin Önde Gelen
            <span className="text-orange-500 block">Pergola Üreticisi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            20+ yıllık deneyimimiz ve 5000+ başarılı projemizle, kalite ve güvenin adresi olarak hizmet veriyoruz.
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
