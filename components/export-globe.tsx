"use client"
import { useEffect, useRef, useState, useMemo } from "react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    globe: {
      title: "Dünya Çapında İhracat Ağı",
      subtitle: "Türkiye'den 50'den fazla ülkeye uzanan ihracat ağımızla, kaliteli IDEA pergola sistemlerini dünya ile buluşturuyoruz.",
      stats: {
        countries: "İhracat Ülkesi",
        distributors: "Global Distribütör",
        projects: "Tamamlanan Proje",
        satisfaction: "Müşteri Memnuniyeti"
      },
      countries: {
        germany: "Almanya",
        france: "Fransa",
        england: "İngiltere",
        italy: "İtalya",
        spain: "İspanya",
        dubai: "Dubai",
        riyadh: "Riyad",
        cairo: "Kahire",
        capeTown: "Cape Town",
        tokyo: "Tokyo",
        newYork: "New York",
        sydney: "Sydney"
      }
    }
  },
  en: {
    globe: {
      title: "Worldwide Export Network",
      subtitle: "With our export network extending to more than 50 countries from Turkey, we bring quality IDEA pergola systems together with the world.",
      stats: {
        countries: "Export Countries",
        distributors: "Global Distributors",
        projects: "Completed Projects",
        satisfaction: "Customer Satisfaction"
      },
      countries: {
        germany: "Germany",
        france: "France",
        england: "England",
        italy: "Italy",
        spain: "Spain",
        dubai: "Dubai",
        riyadh: "Riyadh",
        cairo: "Cairo",
        capeTown: "Cape Town",
        tokyo: "Tokyo",
        newYork: "New York",
        sydney: "Sydney"
      }
    }
  },
  de: {
    globe: {
      title: "Weltweites Exportnetzwerk",
      subtitle: "Mit unserem Exportnetzwerk, das sich von der Türkei auf mehr als 50 Länder erstreckt, bringen wir qualitativ hochwertige IDEA-Pergola-Systeme mit der Welt zusammen.",
      stats: {
        countries: "Exportländer",
        distributors: "Globale Vertriebspartner",
        projects: "Abgeschlossene Projekte",
        satisfaction: "Kundenzufriedenheit"
      },
      countries: {
        germany: "Deutschland",
        france: "Frankreich",
        england: "England",
        italy: "Italien",
        spain: "Spanien",
        dubai: "Dubai",
        riyadh: "Riad",
        cairo: "Kairo",
        capeTown: "Kapstadt",
        tokyo: "Tokio",
        newYork: "New York",
        sydney: "Sydney"
      }
    }
  },
  ar: {
    globe: {
      title: "شبكة التصدير العالمية",
      subtitle: "مع شبكة التصدير لدينا التي تمتد إلى أكثر من 50 دولة من تركيا، نجمع أنظمة البرجولا عالية الجودة من IDEA مع العالم.",
      stats: {
        countries: "دول التصدير",
        distributors: "موزعون عالميون",
        projects: "المشاريع المكتملة",
        satisfaction: "رضا العملاء"
      },
      countries: {
        germany: "ألمانيا",
        france: "فرنسا",
        england: "إنجلترا",
        italy: "إيطاليا",
        spain: "إسبانيا",
        dubai: "دبي",
        riyadh: "الرياض",
        cairo: "القاهرة",
        capeTown: "كيب تاون",
        tokyo: "طوكيو",
        newYork: "نيويورك",
        sydney: "سيدني"
      }
    }
  }
}

/**
 * ExportGlobe komponenti
 * globe.gl kütüphanesini kullanarak Türkiye'den ihracat yapılan ülkelere
 * oklar gösteren interaktif 3D globe görselleştirmesi
 */
export function ExportGlobe() {
  const globeEl = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const { language } = useLanguage()

  // IDEA marka renkleri
  const colors = ["#FFD100", "#FFFFFF", "#FFC000"] // Sarı ve Beyaz tonları

  // Türkiye'den (Ankara) dünyaya ihracat rotaları
  // globe.gl Arcs Layer formatına uygun veri yapısı
  const exportArcs = useMemo(() => {
    const t = translations[language as keyof typeof translations] || translations.tr
    
    return [
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 52.52,
      endLng: 13.405,
      color: colors[0],
      country: t.globe.countries.germany,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 48.8566,
      endLng: 2.3522,
      color: colors[1],
      country: t.globe.countries.france,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 51.5074,
      endLng: -0.1278,
      color: colors[2],
      country: t.globe.countries.england,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 41.9028,
      endLng: 12.4964,
      color: colors[0],
      country: t.globe.countries.italy,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 40.4168,
      endLng: -3.7038,
      color: colors[1],
      country: t.globe.countries.spain,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 25.2048,
      endLng: 55.2708,
      color: colors[2],
      country: t.globe.countries.dubai,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 24.7136,
      endLng: 46.6753,
      color: colors[0],
      country: t.globe.countries.riyadh,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 30.0444,
      endLng: 31.2357,
      color: colors[1],
      country: t.globe.countries.cairo,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: -33.9249,
      endLng: 18.4241,
      color: colors[2],
      country: t.globe.countries.capeTown,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 35.6762,
      endLng: 139.6503,
      color: colors[0],
      country: t.globe.countries.tokyo,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 40.7128,
      endLng: -74.006,
      color: colors[1],
      country: t.globe.countries.newYork,
    },
    {
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: -33.8688,
      endLng: 151.2093,
      color: colors[2],
      country: t.globe.countries.sydney,
    },
    ]
  }, [language])

  const t = translations[language as keyof typeof translations] || translations.tr

  // Client-side kontrolü
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!globeEl.current || !isClient) return

    let world: any = null

    // Dinamik import - sadece client-side'da yükle
    import("globe.gl").then((GlobeModule) => {
      const Globe = GlobeModule.default

      // Globe instance oluştur
      world = new Globe(globeEl.current!, {
        rendererConfig: {
          antialias: true,
          alpha: true,
        },
      })

      // Globe temel ayarları
      world
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#FFD100") // IDEA Sarı atmosfer
        .atmosphereAltitude(0.15)
        .globeOffset([0, 0]) // Globu ortala

      // Renderer canvas'ını ortala
      const renderer = world.renderer()
      if (renderer && renderer.domElement) {
        const canvas = renderer.domElement
        canvas.style.margin = "0 auto"
        canvas.style.display = "block"
        canvas.style.width = "100%"
        canvas.style.height = "100%"
      }
      
      // Globe boyutlarını container'a göre ayarla (sadece bir kez, sabit boyutlar)
      if (globeEl.current) {
        const containerWidth = globeEl.current.clientWidth || 1200
        const containerHeight = globeEl.current.clientHeight || 600
        world.width(containerWidth).height(containerHeight)
      }

      // Arcs Layer - İhracat rotalarını göster
      world
        .arcsData(exportArcs)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any) => d.endLat)
        .arcEndLng((d: any) => d.endLng)
        .arcColor((d: any) => d.color)
        .arcAltitude((d: any) => {
          // Mesafeye göre otomatik yükseklik hesaplama
          const distance = Math.sqrt(
            Math.pow(d.endLat - d.startLat, 2) +
              Math.pow(d.endLng - d.startLng, 2)
          )
          return Math.min(distance * 0.1, 0.3)
        })
        .arcStroke((d: any) => 0.4)
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000)
        .arcsTransitionDuration(1000)

      // Tooltip için label ayarları
      world.arcLabel((d: any) => `${d.country}`)

      // Kamera pozisyonu - Türkiye'ye odaklan
      world.pointOfView({ lat: 39.9334, lng: 32.8597, altitude: 2.5 }, 0)

      // Otomatik döndürme
      const controls = world.controls()
      if (controls) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5
      }
    })

    // Cleanup
    return () => {
      if (world && world._destructor) {
        world._destructor()
      }
    }
  }, [isClient, exportArcs])

  return (
    <section className="py-20 bg-[#2D3237] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,209,0,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.globe.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.globe.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Globe container - container dışında tam genişlikte */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ 
          once: true,
          margin: "-30% 0px", // Viewport kontrolünü daralt - sadece %30 görünür olduğunda tetikle
          amount: 0.5 // Elementin %50'si görünür olduğunda tetikle
        }}
        className="h-[600px] w-full relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '600px', maxHeight: '600px' }}
      >
        <div 
          ref={globeEl} 
          className="w-full h-full mx-auto"
          style={{ width: '100%', height: '600px' }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto text-white"
        >
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-300 text-sm">{t.globe.stats.countries}</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-300 text-sm">{t.globe.stats.distributors}</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-300 text-sm">{t.globe.stats.projects}</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">%100</div>
            <div className="text-gray-300 text-sm">{t.globe.stats.satisfaction}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
