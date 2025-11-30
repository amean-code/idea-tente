"use client"

import { Ruler, Settings, Palette, Layers } from "lucide-react"

interface SpecCategory {
  title: string
  icon: "ruler" | "settings" | "palette" | "layers"
  items: { label: string; value: string }[]
}

interface ProductDetailSpecsProps {
  categories: SpecCategory[]
}

/**
 * Icon map - lucide-react iconları
 */
const iconMap = {
  ruler: Ruler,
  settings: Settings,
  palette: Palette,
  layers: Layers,
}

/**
 * Ürün teknik özellikleri - Palmiye Global stilinde
 * Kategorilere ayrılmış spesifikasyonlar
 */
export function ProductDetailSpecs({ categories }: ProductDetailSpecsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Teknik Özellikler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ürünümüzün detaylı teknik özellikleri ve boyutları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, idx) => {
            const IconComponent = iconMap[category.icon]
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mr-3">
                    <IconComponent className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{category.title}</h3>
                </div>

                {/* Spec Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-t border-gray-100 pt-3 first:border-0 first:pt-0">
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      <div className="font-medium text-gray-900">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

