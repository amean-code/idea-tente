"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

/**
 * WorldMapImage bileşeni
 * Gerçek dünya haritası görseli üzerinde noktalar ve bağlantılar gösterir
 */
export default function WorldMapImage({
  dots = [],
  lineColor = "#0ea5e9",
}: {
  dots?: Dot[];
  lineColor?: string;
}) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mapWidth = 1200;
  const mapHeight = 600;

  useEffect(() => {
    setDimensions({ width: mapWidth, height: mapHeight });
  }, []);

  /**
   * Lat/Lng koordinatlarını SVG koordinatlarına dönüştürür
   */
  const projectPoint = (lat: number, lng: number) => {
    // Mercator projeksiyon benzeri basitleştirilmiş dönüşüm
    const x = ((lng + 180) / 360) * mapWidth;
    const y = ((90 - lat) / 180) * mapHeight;
    return { x, y };
  };

  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-blue-50/30 border border-blue-100">
      {/* Dünya haritası arka planı */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maps/world-map-blue.webp"
          alt="Dünya Haritası"
          width={mapWidth}
          height={mapHeight}
          className="object-cover w-full h-full opacity-60"
          onLoad={() => setMapLoaded(true)}
          priority
        />
      </div>

      {/* SVG overlay - bağlantılar ve noktalar için */}
      <svg
        className="absolute inset-0 z-10 w-full h-full"
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        style={{ filter: "drop-shadow(0 0 5px rgba(14, 165, 233, 0.3))" }}
      >
        {/* Bağlantı çizgileri ve noktalar */}
        {mapLoaded && dots.map((dot, i) => {
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
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + i * 0.1,
                  ease: "easeInOut",
                }}
                d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                stroke={lineColor}
                strokeWidth="3"
                fill="none"
                strokeDasharray="5 5"
                className="drop-shadow-md"
              />

              {/* Başlangıç noktası (Türkiye - kırmızı) */}
              {i === 0 && (
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  cx={start.x}
                  cy={start.y}
                  r="8"
                  fill="#ef4444"
                  className="drop-shadow-lg"
                >
                  <animate
                    attributeName="r"
                    values="8;10;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </motion.circle>
              )}

              {/* Varış noktası */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                cx={end.x}
                cy={end.y}
                r="5"
                fill="#fbbf24"
                className="drop-shadow-md"
              >
                <animate
                  attributeName="r"
                  values="5;7;5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          );
        })}

        {/* Türkiye etiketi */}
        {mapLoaded && dots.length > 0 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <rect
              x={projectPoint(dots[0].start.lat, dots[0].start.lng).x - 30}
              y={projectPoint(dots[0].start.lat, dots[0].start.lng).y - 35}
              width="60"
              height="22"
              rx="11"
              fill="#ef4444"
              className="drop-shadow-md"
            />
            <text
              x={projectPoint(dots[0].start.lat, dots[0].start.lng).x}
              y={projectPoint(dots[0].start.lat, dots[0].start.lng).y - 20}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
              className="drop-shadow-sm"
            >
              Türkiye
            </text>
          </motion.g>
        )}
      </svg>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none" />
    </div>
  );
}
