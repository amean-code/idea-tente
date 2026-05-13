"use client"

import { useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

/**
 * Cam Sistemleri Hero Section
 */
interface CamSistemleriHeroProps {
  badge?: string
  title?: string
  description?: string
  subdescription?: string
  imageSrc?: string
}

export function CamSistemleriHero(props?: CamSistemleriHeroProps) {
  const { t, language } = useLanguage()

  // Props varsa onları kullan, yoksa çevirilerden al
  const badge = useMemo(() => 
    props?.badge || t("glassSystems.hero.badge"), 
    [props?.badge, t, language]
  )
  const title = useMemo(() => 
    props?.title || t("glassSystems.hero.title"), 
    [props?.title, t, language]
  )
  const description = useMemo(() => 
    props?.description || t("glassSystems.hero.description"), 
    [props?.description, t, language]
  )
  const subdescription = useMemo(() => 
    props?.subdescription || t("glassSystems.hero.subdescription"), 
    [props?.subdescription, t, language]
  )
  const imageSrc = props?.imageSrc || "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-3.webp"

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Antrasit Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md">
            {description}
          </p>
        </motion.div>

      </div>
    </section>
  )
}

