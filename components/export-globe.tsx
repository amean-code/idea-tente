"use client"
import { motion } from "motion/react"

export function ExportGlobe() {
  // Export destinations with proper spherical coordinates
  const exportDestinations = [
    { name: "Almanya", region: "Avrupa", x: -20, y: -30, delay: 0.1 },
    { name: "Fransa", region: "Avrupa", x: -35, y: -25, delay: 0.2 },
    { name: "İngiltere", region: "Avrupa", x: -45, y: -35, delay: 0.3 },
    { name: "İtalya", region: "Avrupa", x: -10, y: -20, delay: 0.4 },
    { name: "İspanya", region: "Avrupa", x: -50, y: -15, delay: 0.5 },
    { name: "Hollanda", region: "Avrupa", x: -25, y: -40, delay: 0.6 },
    { name: "BAE", region: "Orta Doğu", x: 25, y: -5, delay: 0.7 },
    { name: "S. Arabistan", region: "Orta Doğu", x: 20, y: 10, delay: 0.8 },
    { name: "Mısır", region: "Afrika", x: 5, y: 15, delay: 0.9 },
    { name: "G. Afrika", region: "Afrika", x: 0, y: 45, delay: 1.0 },
    { name: "Japonya", region: "Asya", x: 60, y: -20, delay: 1.1 },
    { name: "G. Kore", region: "Asya", x: 55, y: -25, delay: 1.2 },
    { name: "Avustralya", region: "Okyanusya", x: 50, y: 40, delay: 1.3 },
    { name: "Singapur", region: "Asya", x: 45, y: 5, delay: 1.4 },
    { name: "ABD", region: "Amerika", x: -70, y: -10, delay: 1.5 },
    { name: "Kanada", region: "Amerika", x: -75, y: -35, delay: 1.6 },
    { name: "Brezilya", region: "Amerika", x: -60, y: 25, delay: 1.7 },
    { name: "Meksika", region: "Amerika", x: -80, y: 0, delay: 1.8 },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center relative w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-[600px] md:h-[700px]">
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
                duration: 1,
              }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Dünya Çapında İhracat Ağımız</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                50+ ülkeye ihracat yapıyor, kaliteli IDEA ve cam sistemlerimizi dünya genelinde müşterilerimizle
                buluşturuyoruz.
              </p>
            </motion.div>

            <div className="absolute w-full h-full flex items-center justify-center z-10">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Central globe with world map pattern */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-2xl border-4 border-blue-300/30 overflow-hidden"
                >
                  {/* Globe surface with continent patterns */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-white/10 to-transparent"></div>

                  <div className="absolute top-1/4 left-1/3 w-8 h-6 bg-green-600/40 rounded-lg transform rotate-12"></div>
                  <div className="absolute top-1/2 right-1/4 w-6 h-8 bg-green-600/40 rounded-lg transform -rotate-45"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-10 h-4 bg-green-600/40 rounded-lg transform rotate-45"></div>
                  <div className="absolute top-2/3 right-1/3 w-4 h-6 bg-green-600/40 rounded-lg"></div>

                  {/* Turkey marker - positioned in the center-left area */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg border-2 border-white"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-red-500 px-2 py-1 rounded whitespace-nowrap shadow-lg">
                      Türkiye
                    </div>
                  </div>

                  {exportDestinations.map((destination, index) => (
                    <motion.div
                      key={`dot-${destination.name}`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + destination.delay,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg border border-white animate-pulse"
                      style={{
                        left: `${50 + destination.x}%`,
                        top: `${50 + destination.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Connection line from Turkey to this country */}
                      <svg
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                          width: `${Math.abs(destination.x) + 20}px`,
                          height: `${Math.abs(destination.y) + 20}px`,
                          transform: `translate(-50%, -50%) translate(${-destination.x / 2}px, ${-destination.y / 2}px)`,
                        }}
                      >
                        <motion.line
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1, delay: 0.8 + destination.delay }}
                          viewport={{ once: true }}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + destination.x}%`}
                          y2={`${50 + destination.y}%`}
                          stroke="#60a5fa"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                        />
                      </svg>
                    </motion.div>
                  ))}

                  {exportDestinations.map((destination, index) => (
                    <motion.div
                      key={`label-${destination.name}`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.0 + destination.delay,
                        type: "spring",
                        stiffness: 150,
                      }}
                      viewport={{ once: true }}
                      className="absolute"
                      style={{
                        left: `${50 + destination.x * 1.8}%`,
                        top: `${50 + destination.y * 1.8}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="relative group">
                        <div className="text-xs font-medium text-gray-800 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap hover:bg-blue-50 transition-colors cursor-pointer">
                          {destination.name}
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {destination.region}
                        </div>
                        {/* Small connecting line to the globe */}
                        <div
                          className="absolute w-px bg-gray-300"
                          style={{
                            height: `${Math.sqrt(destination.x * destination.x + destination.y * destination.y) * 0.8}px`,
                            left: "50%",
                            top: "50%",
                            transform: `translate(-50%, -50%) rotate(${(Math.atan2(destination.y, destination.x) * 180) / Math.PI}deg)`,
                            transformOrigin: "bottom center",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Rotating animation for the entire globe */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 120,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Subtle rotating overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </motion.div>
              </div>
            </div>

            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-white z-40" />
          </div>

          {/* Stats overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">İhracat Ülkesi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Distribütör</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">İhracat Projesi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
