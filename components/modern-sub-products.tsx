"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { pergolaPublicSrc } from "@/lib/pergola-public-path"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface SubProduct {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  price?: string
  badge?: string
  href: string
}

interface ModernSubProductsProps {
  title: string
  subtitle: string
  products: SubProduct[]
}

/**
 * Modern alt ürün kartları komponenti
 * Daha şık ve profesyonel tasarım
 */
export function ModernSubProducts({ title, subtitle, products }: ModernSubProductsProps) {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Ürün Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <Link href={product.href} className="block group h-full">
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Görsel */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pergolaPublicSrc(product.image)}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground shadow-lg">
                          {product.badge}
                        </Badge>
                      </div>
                    )}
                    
                    {/* Fiyat Badge */}
                    {product.price && (
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                          <div className="text-sm font-semibold text-primary">{product.price}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* İçerik */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-1">
                      {product.description}
                    </p>

                    {/* Özellikler */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buton */}
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {t("common.viewDetails")}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

