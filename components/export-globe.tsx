"use client"
import { motion } from "motion/react"
import dynamic from "next/dynamic"

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
})

export function ExportGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#3D4247", // IDEA Antrasit
    showAtmosphere: true,
    atmosphereColor: "#FFD100", // IDEA Sarı (Atmosfer)
    atmosphereAltitude: 0.1,
    emissive: "#3D4247",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#FFD100", // Sarı ambiyans
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 39.9334, lng: 32.8597 }, // Ankara
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const colors = ["#FFD100", "#FFFFFF", "#FFC000"] // Sarı ve Beyaz tonları

  // Türkiye'den (Ankara) dünyaya ihracat rotaları
  const exportArcs = [
    {
      order: 1,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[0],
    }, // Almanya
    {
      order: 1,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.2,
      color: colors[1],
    }, // Fransa
    {
      order: 1,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: colors[2],
    }, // İngiltere
    {
      order: 2,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 41.9028,
      endLng: 12.4964,
      arcAlt: 0.1,
      color: colors[0],
    }, // İtalya
    {
      order: 2,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 40.4168,
      endLng: -3.7038,
      arcAlt: 0.2,
      color: colors[1],
    }, // İspanya
    {
      order: 3,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.1,
      color: colors[2],
    }, // Dubai
    {
      order: 3,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 24.7136,
      endLng: 46.6753,
      arcAlt: 0.2,
      color: colors[0],
    }, // Riyad
    {
      order: 4,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 30.0444,
      endLng: 31.2357,
      arcAlt: 0.3,
      color: colors[1],
    }, // Kahire
    {
      order: 4,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: -33.9249,
      endLng: 18.4241,
      arcAlt: 0.5,
      color: colors[2],
    }, // Cape Town
    {
      order: 5,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.4,
      color: colors[0],
    }, // Tokyo
    {
      order: 6,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.6,
      color: colors[1],
    }, // New York
    {
      order: 7,
      startLat: 39.9334,
      startLng: 32.8597,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.5,
      color: colors[2],
    }, // Sydney
  ]

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
            Dünya Çapında İhracat Ağı
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Türkiye&apos;den 50&apos;den fazla ülkeye uzanan ihracat ağımızla,
            kaliteli IDEA pergola sistemlerini dünya ile buluşturuyoruz.
              </p>
            </motion.div>

        <div className="h-[600px] w-full relative flex items-center justify-center">
          <World data={exportArcs} globeConfig={globeConfig} />
          </div>

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
            <div className="text-gray-300 text-sm">İhracat Ülkesi</div>
            </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-300 text-sm">Global Distribütör</div>
            </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-300 text-sm">Tamamlanan Proje</div>
            </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">%100</div>
            <div className="text-gray-300 text-sm">Müşteri Memnuniyeti</div>
            </div>
          </motion.div>
      </div>
    </section>
  )
}
