"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    badge: "Global Çözüm Ortağınız",
    title: "Sınırları Aşan",
    titleHighlight: "Kalite ve Güven",
    subtitle: "IDEA Pergola olarak, modern üretim tesislerimizden dünyanın dört bir yanına premium pergola ve cam sistemleri ihraç ediyoruz. Uluslararası standartlarda paketleme ve lojistik çözümlerimizle projelerinizi güvenle teslim ediyoruz.",
    createRequest: "İthalat Talebi Oluştur",
    howItWorks: "Süreç Nasıl İşler?",
    secureLogistics: "Güvenli Lojistik",
    internationalShipping: "Uluslararası Taşıma",
    countries: "50+ Ülke",
    activeExport: "Aktif İhracat"
  },
  en: {
    badge: "Your Global Solution Partner",
    title: "Transcending Boundaries",
    titleHighlight: "Quality and Trust",
    subtitle: "As IDEA Pergola, we export premium pergola and glass systems from our modern production facilities to all corners of the world. We safely deliver your projects with international standard packaging and logistics solutions.",
    createRequest: "Create Import Request",
    howItWorks: "How Does It Work?",
    secureLogistics: "Secure Logistics",
    internationalShipping: "International Shipping",
    countries: "50+ Countries",
    activeExport: "Active Export"
  },
  de: {
    badge: "Ihr globaler Lösungspartner",
    title: "Grenzen überschreitend",
    titleHighlight: "Qualität und Vertrauen",
    subtitle: "Als IDEA Pergola exportieren wir Premium-Pergola- und Glassysteme von unseren modernen Produktionsstätten in alle Ecken der Welt. Wir liefern Ihre Projekte sicher mit internationalen Standard-Verpackungs- und Logistiklösungen.",
    createRequest: "Importanfrage erstellen",
    howItWorks: "Wie funktioniert es?",
    secureLogistics: "Sichere Logistik",
    internationalShipping: "Internationaler Versand",
    countries: "50+ Länder",
    activeExport: "Aktiver Export"
  },
  ar: {
    badge: "شريك الحلول العالمي الخاص بك",
    title: "تجاوز الحدود",
    titleHighlight: "الجودة والثقة",
    subtitle: "كـ IDEA Pergola، نصدر أنظمة البرجولا والزجاج المتميزة من منشآتنا الإنتاجية الحديثة إلى جميع أنحاء العالم. نحن نسلم مشاريعك بأمان مع حلول التعبئة والتغليف واللوجستيات وفق المعايير الدولية.",
    createRequest: "إنشاء طلب استيراد",
    howItWorks: "كيف يعمل؟",
    secureLogistics: "اللوجستيات الآمنة",
    internationalShipping: "الشحن الدولي",
    countries: "50+ دولة",
    activeExport: "التصدير النشط"
  }
}

export function ExportHero() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#3D4247]">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
          alt="Global Export Logistics"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247] via-[#3D4247]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{t.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t.title} <br />
            <span className="text-primary">{t.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-600 text-primary-foreground"
              asChild
            >
              <Link href="/iletisim">
                {t.createRequest}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <Link 
                href="#shipping-process"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('shipping-process')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                {t.howItWorks}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 border-t border-gray-700/50 pt-8 w-full"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-left">
                <div className="text-white font-semibold">{t.secureLogistics}</div>
                <div>{t.internationalShipping}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-left">
                <div className="text-white font-semibold">{t.countries}</div>
                <div>{t.activeExport}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
