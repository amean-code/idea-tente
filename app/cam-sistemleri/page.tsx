"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Maximize, Move } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { publicAssetSrc } from "@/lib/pergola-public-path"
import { GIYOTIN_CAM_COVER } from "@/lib/gallery-covers"

/**
 * Cam Sistemleri Ana Sayfası
 * İki cam sistemi için yönlendirme sayfası
 */
export default function CamSistemleriPage() {
  const { t, language } = useLanguage()

  const systems = useMemo(() => [
    {
      id: "giyotin",
      title: t("glassSystems.products.surmeCam.title"),
      description: t("glassSystems.products.surmeCam.description"),
      image: GIYOTIN_CAM_COVER,
      badge: t("glassSystems.products.surmeCam.badge"),
      href: "/cam-sistemleri/giyotin-cam-sistemleri",
      icon: Move,
      features: [
        t("glassSystems.features.slidingMechanism.title"),
        t("glassSystems.features.easyUse.title"),
        t("glassSystems.features.weatherResistant.title"),
        t("glassSystems.features.safetyGlass.title"),
      ]
    },
    {
      id: "surme",
      title: t("glassSystems.slidingGlass.hero.title"),
      description: t("glassSystems.slidingGlass.hero.description"),
      image: "/SürmeCam/sürme-cam-sistemleri-dis-gorunum-1.webp",
      badge: "Modern",
      href: "/cam-sistemleri/surme-cam",
      icon: Maximize,
      features: [
        t("glassSystems.slidingGlass.features.framelessDesign.title"),
        t("glassSystems.slidingGlass.features.slidingMechanism.title"),
        t("glassSystems.slidingGlass.features.easyUse.title"),
        t("glassSystems.slidingGlass.features.safetyGlass.title"),
      ]
    },
  ], [t, language])

  const heroTitle = useMemo(() => t("glassSystems.hero.title"), [t, language])
  const heroDescription = useMemo(() => t("glassSystems.hero.description"), [t, language])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={publicAssetSrc(GIYOTIN_CAM_COVER)}
              alt="Cam Sistemleri"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm"
            >
              <span className="text-sm font-medium">{t("glassSystems.hero.badge")}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-lg"
            >
              {heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed drop-shadow-md"
            >
              {heroDescription}
            </motion.p>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("glassSystems.wizard.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("glassSystems.wizard.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {systems.map((system, index) => (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                >
                  <Link href={system.href} className="block group h-full">
                    <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-200">
                      {/* Görsel */}
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={publicAssetSrc(system.image)}
                          alt={system.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Badge */}
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-primary text-primary-foreground shadow-lg text-sm px-4 py-2">
                            {system.badge}
                          </Badge>
                        </div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute bottom-6 left-6">
                          <div className="w-16 h-16 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <system.icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* İçerik */}
                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                          {system.title}
                        </h3>
                        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                          {system.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {system.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Button */}
                        <Button 
                          size="lg" 
                          className="w-full group-hover:bg-primary-600 transition-colors"
                          asChild
                        >
                          <span>
                            {t("glassSystems.products.viewDetails")}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
