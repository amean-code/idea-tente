"use client"

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
  CheckCircle
} from "lucide-react"

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
 * Icon map - lucide-react iconları
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
}

/**
 * Ürün özellikleri ve avantajları - Palmiye Global stilinde
 * Kontrol ve Otomasyon bölümü gibi
 */
export function ProductDetailFeatures({ 
  title = "Kontrol ve Otomasyon",
  subtitle = "Ürününüzü dünyanın neresinde olursanız olun kolayca kontrol edebilmeniz için tasarlandı",
  features 
}: ProductDetailFeaturesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
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
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
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

