"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, MessageCircle, Download } from "lucide-react"
import { motion } from "motion/react"

/**
 * Export sayfası hero bölümü
 * Global ihracat ve distribütörlük için ana giriş bölümü
 */
export function ExportHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/global-business-world-map-with-modern-pergola-sys.jpg"
          alt="Global Export"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Ana başlık */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg"
          >
            Global İhracat & Distribütörlük
          </motion.h1>

          {/* Açıklama */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-white/90 mb-6 text-pretty leading-relaxed drop-shadow-md">
              Türkiye'den dünyaya uzanan kaliteli pergola ve cam sistemleri. 50+ ülkede güvenilir iş ortaklarımızla birlikte premium IDEA sistemlerini dünya çapında sunuyoruz.
            </p>
          </motion.div>

          {/* Alt açıklama */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-5xl mx-auto mb-8"
          >
            <p className="text-base md:text-lg text-white/80 text-pretty drop-shadow-md">
              Global distribütör ağımıza katılın, CE sertifikalı ürünlerimiz ve kapsamlı destek hizmetlerimizle başarı hikayemizin bir parçası olun.
            </p>
          </motion.div>

          {/* Butonlar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="#distributor-application">
                <MessageCircle className="h-5 w-5 mr-2" />
                Distribütör Başvurusu
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur"
            >
              <Link href="/katalog">
                <Download className="h-5 w-5 mr-2" />
                Export Katalog
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
