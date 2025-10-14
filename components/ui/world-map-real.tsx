"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";

// Dünya haritası TopoJSON verisinin URL'si
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

/**
 * WorldMapReal bileşeni
 * React Simple Maps kullanarak gerçek bir dünya haritası üzerinde noktalar ve bağlantılar gösterir
 */
export default function WorldMapReal({
  dots = [],
  lineColor = "#0ea5e9",
}: {
  dots?: Dot[];
  lineColor?: string;
}) {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Türkiye'nin ISO kodu
  const turkeyISO = "TUR";
  
  // İhracat yapılan ülkelerin ISO kodları (dots.end koordinatlarına göre)
  const exportCountries = [
    "DEU", // Almanya
    "FRA", // Fransa
    "ITA", // İtalya
    "ESP", // İspanya
    "GBR", // İngiltere
    "NLD", // Hollanda
    "ARE", // BAE
    "SAU", // Suudi Arabistan
    "EGY", // Mısır
    "ZAF", // Güney Afrika
    "JPN", // Japonya
    "AUS", // Avustralya
  ];

  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 150,
            center: [20, 30], // Türkiye'yi merkez alacak şekilde ayarlandı
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isExportCountry = exportCountries.includes(geo.id);
                const isTurkey = geo.id === turkeyISO;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      isTurkey
                        ? "#ef4444" // Türkiye - kırmızı
                        : isExportCountry
                        ? "#fbbf24" // İhracat ülkeleri - sarı
                        : "#e2e8f0" // Diğer ülkeler - gri
                    }
                    stroke="#94a3b8"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: "none",
                        transition: "all 0.3s",
                      },
                      hover: {
                        fill: isTurkey ? "#dc2626" : isExportCountry ? "#f59e0b" : "#cbd5e1",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                    onMouseEnter={(evt) => {
                      const { NAME } = geo.properties;
                      setTooltipContent(NAME);
                      setTooltipPosition({ x: evt.clientX, y: evt.clientY });
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Bağlantı çizgileri */}
          {dots.map((dot, index) => (
            <Line
              key={`line-${index}`}
              from={[dot.start.lng, dot.start.lat]}
              to={[dot.end.lng, dot.end.lat]}
              stroke={lineColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="5,5"
              style={{
                filter: "drop-shadow(0px 0px 2px rgba(14, 165, 233, 0.5))",
              }}
            />
          ))}

          {/* Başlangıç noktası (Türkiye) */}
          {dots.length > 0 && (
            <Marker coordinates={[dots[0].start.lng, dots[0].start.lat]}>
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                r={6}
                fill="#ef4444"
                stroke="#fff"
                strokeWidth={2}
                style={{
                  filter: "drop-shadow(0px 0px 3px rgba(239, 68, 68, 0.7))",
                }}
              />
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fontFamily: "system-ui",
                  fontSize: "8px",
                  fontWeight: "bold",
                  fill: "#ef4444",
                  filter: "drop-shadow(0px 0px 1px #ffffff)",
                }}
              >
                Türkiye
              </text>
            </Marker>
          )}

          {/* Varış noktaları */}
          {dots.map((dot, index) => (
            <Marker key={`marker-${index}`} coordinates={[dot.end.lng, dot.end.lat]}>
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                r={4}
                fill="#fbbf24"
                stroke="#fff"
                strokeWidth={1}
                style={{
                  filter: "drop-shadow(0px 0px 2px rgba(251, 191, 36, 0.7))",
                }}
              />
            </Marker>
          ))}
        </ComposableMap>
      </motion.div>

      {/* Tooltip */}
      {tooltipContent && (
        <div
          className="absolute z-50 px-2 py-1 text-xs font-semibold text-white bg-gray-800 rounded-md shadow-md pointer-events-none"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y - 40}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
