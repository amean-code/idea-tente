"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Award, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

interface SubProductsShowcaseProps {
  title: string
  subtitle: string
  products: SubProduct[]
}

export function SubProductsShowcase({ title, subtitle, products }: SubProductsShowcaseProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="h-full"
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm h-full flex flex-col">
                {product.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    {product.badge}
                  </Badge>
                )}

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      y: hoveredProduct === product.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/95 text-gray-800 text-xs backdrop-blur-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    {product.price && (
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-600">{product.price}</div>
                        <div className="text-xs text-muted-foreground">başlangıç</div>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{product.description}</p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-white/50 backdrop-blur-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button asChild className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                      <Link href={product.href}>
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="shadow-lg">
                      <Link href="/teklif-al">
                        <Zap className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProduct === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 origin-left"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/teklif-al">
              Tüm Ürünler İçin Teklif Al
              <Award className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
