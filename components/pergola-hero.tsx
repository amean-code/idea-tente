"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

/**
 * Pergola ana sayfası hero bölümü
 * Palmiye Global tasarımı referans alınarak oluşturulmuştur
 */
export function PergolaHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pergola/pergola-beyaz.jpg"
          alt="Pergola Sistemleri"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Ana Başlık */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg"
        >
          Pergola Sistemleri
        </motion.h1>
        
        {/* Açıklama Metni */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md">
            {t("pergola.hero.description") || "Pergola sistemleri, dayanıklı alüminyum taşıyıcı yapıya sahiptir ve çeşitli tavan seçenekleri sunarak farklı mimari tasarımlar için idealdir. Cam, PVC kumaş veya alüminyum panel gibi seçeneklerle, dış mekanlarınızı özgün bir tarzla güçlendirir."}
          </p>
        </motion.div>

        {/* Alt açıklama - Palmiye tarzı */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-base md:text-lg text-white/80 text-pretty drop-shadow-md">
            {t("pergola.hero.subdescription") || "Biyoklimatik pergola ve şezlonglarla çevrili, dinlenmek ve güneşi içinize çekmek için mükemmel olan sakin bir alan yaratın."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
