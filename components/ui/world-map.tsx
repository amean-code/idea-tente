"use client";
import { motion } from "motion/react";

interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

/**
 * WorldMap bileşeni
 * Dünya haritası üzerinde noktalar ve bağlantılar gösterir
 */
export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: {
  dots?: Dot[];
  lineColor?: string;
}) {
  /**
   * Lat/Lng koordinatlarını SVG koordinatlarına dönüştürür
   */
  const projectPoint = (lat: number, lng: number) => {
    // Mercator projeksiyon benzeri basitleştirilmiş dönüşüm
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  return (
    <div className="w-full aspect-[2/1] bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl p-4">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
      >
        {/* Okyanus arka planı */}
        <rect width="800" height="400" fill="#e0f2fe" opacity="0.3" rx="20" />
        
        {/* Basitleştirilmiş Dünya Haritası Konturları - Daha Belirgin */}
        
        {/* Kuzey Amerika */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          d="M 80 90 L 100 70 L 130 65 L 160 60 L 180 65 L 200 80 L 215 100 L 225 130 L 230 160 L 225 185 L 210 205 L 190 215 L 165 218 L 140 210 L 120 195 L 105 175 L 95 150 L 85 120 L 80 90 Z"
          fill="#22c55e"
          fillOpacity="0.5"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Güney Amerika */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
          d="M 175 220 L 190 230 L 195 250 L 193 275 L 185 300 L 175 325 L 160 342 L 145 348 L 130 345 L 120 335 L 115 315 L 118 290 L 125 270 L 135 250 L 148 235 L 162 225 L 175 220 Z"
          fill="#22c55e"
          fillOpacity="0.5"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Avrupa */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          d="M 375 85 L 395 75 L 415 72 L 435 78 L 450 92 L 458 110 L 460 130 L 455 145 L 440 152 L 420 155 L 400 152 L 385 142 L 378 125 L 375 105 L 375 85 Z"
          fill="#22c55e"
          fillOpacity="0.5"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Afrika */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          d="M 385 158 L 405 163 L 425 178 L 435 200 L 440 225 L 440 250 L 435 275 L 425 300 L 410 320 L 390 332 L 370 338 L 350 335 L 335 322 L 325 300 L 322 275 L 325 250 L 335 225 L 350 200 L 365 180 L 378 165 L 385 158 Z"
          fill="#22c55e"
          fillOpacity="0.5"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Asya */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          d="M 470 75 L 500 68 L 535 72 L 565 85 L 590 105 L 610 130 L 625 155 L 630 180 L 625 200 L 610 218 L 585 230 L 555 238 L 525 235 L 495 225 L 470 210 L 455 190 L 448 165 L 450 135 L 458 105 L 470 75 Z"
          fill="#22c55e"
          fillOpacity="0.5"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Avustralya */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          d="M 575 285 L 600 280 L 625 285 L 645 298 L 658 315 L 660 335 L 650 350 L 630 358 L 605 360 L 580 355 L 565 342 L 558 325 L 560 305 L 570 292 L 575 285 Z"
          fill="#22c55e"
          fillOpacity="0.5"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Grid çizgileri - latitude (paraleller) */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`lat-${i}`}
            x1="50"
            y1={50 + i * 40}
            x2="750"
            y2={50 + i * 40}
            stroke="#94a3b8"
            strokeWidth="0.5"
            strokeDasharray="3 3"
            opacity="0.3"
          />
        ))}
        
        {/* Grid çizgileri - longitude (meridyenler) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={`lng-${i}`}
            x1={50 + i * 50}
            y1="50"
            x2={50 + i * 50}
            y2="350"
            stroke="#94a3b8"
            strokeWidth="0.5"
            strokeDasharray="3 3"
            opacity="0.3"
          />
        ))}

        {/* Bağlantı çizgileri ve noktalar */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);

          // Eğri için kontrol noktası
          const midX = (start.x + end.x) / 2;
          const midY = Math.min(start.y, end.y) - 50;

          return (
            <g key={i}>
              {/* Bağlantı çizgisi */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.5,
                  delay: 1 + i * 0.2,
                  ease: "easeInOut",
                }}
                d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                stroke={lineColor}
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />

              {/* Başlangıç noktası (Türkiye - kırmızı) */}
              {i === 0 && (
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 1 }}
                  cx={start.x}
                  cy={start.y}
                  r="6"
                  fill="#ef4444"
                  className="drop-shadow-lg"
                >
                  <animate
                    attributeName="r"
                    values="6;8;6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </motion.circle>
              )}

              {/* Varış noktası */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                cx={end.x}
                cy={end.y}
                r="4"
                fill="#fbbf24"
                className="drop-shadow-md"
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

