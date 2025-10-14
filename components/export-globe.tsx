"use client"

import WorldMapReal from "@/components/ui/world-map-real"
import { motion } from "motion/react"

/**
 * Export Globe bileşeni
 * Türkiye'den dünyaya ihracat haritasını gösterir
 */
export function ExportGlobe() {
  // Türkiye'den ihracat yapılan ülkelere bağlantılar
  // Koordinatlar: { lat, lng } formatında
  const exportConnections = [
    // Türkiye (Ankara) → Avrupa
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 52.5200, lng: 13.4050 }, // Almanya - Berlin
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 48.8566, lng: 2.3522 }, // Fransa - Paris
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 41.9028, lng: 12.4964 }, // İtalya - Roma
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 40.4168, lng: -3.7038 }, // İspanya - Madrid
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 51.5074, lng: -0.1278 }, // İngiltere - Londra
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 52.3676, lng: 4.9041 }, // Hollanda - Amsterdam
    },
    // Türkiye → Orta Doğu
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 25.2048, lng: 55.2708 }, // BAE - Dubai
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 24.7136, lng: 46.6753 }, // Suudi Arabistan - Riyad
    },
    // Türkiye → Afrika
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 30.0444, lng: 31.2357 }, // Mısır - Kahire
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: -33.9249, lng: 18.4241 }, // Güney Afrika - Cape Town
    },
    // Türkiye → Asya-Pasifik
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: 35.6762, lng: 139.6503 }, // Japonya - Tokyo
    },
    {
      start: { lat: 39.9334, lng: 32.8597 }, // Türkiye - Ankara
      end: { lat: -33.8688, lng: 151.2093 }, // Avustralya - Sydney
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center relative w-full">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Dünya Çapında İhracat Ağımız</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Türkiye'den 50+ ülkeye ihracat yapıyor, kaliteli IDEA pergola ve cam sistemlerimizi dünya genelinde müşterilerimizle
                buluşturuyoruz.
              </p>
            </motion.div>

            {/* World Map - Gerçek dünya haritası */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="my-8"
            >
              <WorldMapReal dots={exportConnections} lineColor="#0ea5e9" />
            </motion.div>
          </div>

          {/* Stats overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-4xl"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">İhracat Ülkesi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Distribütör</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">İhracat Projesi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Yıllık Deneyim</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
