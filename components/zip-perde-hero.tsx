"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

/**
 * Zip Perde Hero Section
 */
export function ZipPerdeHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/zip-perde/zip-perde-9.webp"
          alt="Zip Perde Sistemleri"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg"
        >
          {t("zipScreen.hero.title")}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md">
            {t("zipScreen.hero.description")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

