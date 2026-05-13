"use client"

import { useMemo } from "react"
import { 
  Settings, 
  Smartphone, 
  Sun, 
  Wind, 
  CloudRain, 
  Zap,
  Shield,
  Thermometer,
  Volume2,
  Battery,
  Lock,
  CheckCircle,
  Maximize,
  Sparkles,
  EyeClosed,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Feature {
  title: string
  description: string
  icon: keyof typeof iconMap
}

interface ProductDetailFeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
}

/**
 * UV koruma özelliği için kalkan içinde UV yazılı vektör ikon.
 */
function UvLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="12"
        y="15.25"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6.5"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        letterSpacing="-0.03em"
      >
        UV
      </text>
    </svg>
  )
}

/**
 * Icon map - lucide-react iconları ve özel SVG'ler
 */
const iconMap = {
  settings: Settings,
  smartphone: Smartphone,
  sun: Sun,
  wind: Wind,
  rain: CloudRain,
  zap: Zap,
  shield: Shield,
  thermometer: Thermometer,
  volume: Volume2,
  battery: Battery,
  lock: Lock,
  check: CheckCircle,
  maximize: Maximize,
  sparkles: Sparkles,
  eyeClosed: EyeClosed,
  uvLogo: UvLogoIcon,
}

/**
 * Ürün özellikleri ve avantajları - Palmiye Global stilinde
 * Kontrol ve Otomasyon bölümü gibi
 */
export function ProductDetailFeatures({ 
  title,
  subtitle,
  features 
}: ProductDetailFeaturesProps) {
  const { t, language } = useLanguage()
  
  // Dil değiştiğinde başlık ve alt başlığı yeniden hesapla
  const displayTitle = useMemo(
    () => title || t("productDetail.features.defaultTitle"),
    [title, t, language]
  )
  const displaySubtitle = useMemo(
    () => subtitle || t("productDetail.features.defaultSubtitle"),
    [subtitle, t, language]
  )
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {displayTitle}
          </h2>
          <p className="text-lg text-gray-600">
            {displaySubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <div 
                key={idx}
                className="group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/40 to-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <IconComponent className="h-8 w-8 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

