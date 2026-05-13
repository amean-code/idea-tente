"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getProducts } from "@/data/products"
import { useState, useRef, useEffect } from "react"
import { pergolaBackgroundUrl } from "@/lib/pergola-public-path"

/**
 * Ana sayfa ürünler bölümü bileşeni
 * Aralıklı otomatik kaydırma ve manuel kontrol destekler
 */
export function ProductsOverview() {
  const { t } = useLanguage()
  const products = getProducts(t)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * Otomatik kaydırma - 6 saniyede bir
   */
  useEffect(() => {
    if (isHovered || isDragging) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = 380 + 32 // kart genişliği + gap
        const currentScroll = scrollRef.current.scrollLeft
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        
        if (currentScroll >= maxScroll - 100) {
          // Sona yaklaştıysak başa dön
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
          setCurrentIndex(0)
        } else {
          // Bir kart kaydır
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
          setCurrentIndex((prev) => (prev + 1) % products.length)
        }
      }
    }, 6000) // 6 saniye

    return () => clearInterval(interval)
  }, [isHovered, isDragging, products.length])

  /**
   * Mouse ile sürükleme başlangıcı
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  /**
   * Mouse ile sürükleme bitişi
   */
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  /**
   * Mouse ile sürükleme hareketi
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  /**
   * Mouse leave event'i
   */
  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsHovered(false)
  }

  /**
   * Belirli bir ürüne kaydır
   */
  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 380 + 32
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  /**
   * Scroll pozisyonunu takip et
   */
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !isDragging) {
        const cardWidth = 380 + 32
        const scrollPosition = scrollRef.current.scrollLeft
        const newIndex = Math.round(scrollPosition / cardWidth) % products.length
        setCurrentIndex(newIndex)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      return () => scrollElement.removeEventListener('scroll', handleScroll)
    }
  }, [isDragging, products.length])
  
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {t("products.title")}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl text-pretty">
            {t("products.subtitle")}
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="flex overflow-x-auto scrollbar-hide gap-8 px-8 cursor-grab active:cursor-grabbing scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Ürünleri tekrarla (sonsuz efekti için) */}
        {[...products, ...products, ...products].map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 cursor-pointer flex-shrink-0 w-[380px] h-[480px]"
            >
              {/* Full-size background image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${pergolaBackgroundUrl(product.image)}')` }}
              />

              {/* Gradient overlay - hover'da resmi bulanıklaştırır */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500" />
              
              {/* Hover'da resim bulanıklığı */}
              <div className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-500" />

              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  {product.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 group-hover:rotate-12 transition-all duration-300">
                <product.icon className="h-6 w-6" />
              </div>

              {/* Hover ile gelen bilgiler - alttan yukarı doğru */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform z-20 ${
                hoveredIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-full'
              }`}>
                <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {product.title}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features listesi */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-white/80 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    asChild
                    className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 relative z-30"
                  >
                    <Link 
                      href={product.href} 
                      className="flex items-center justify-center"
                    >
                      <span>{t("productsOverview.viewDetails")}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Alt kısım - hover olmadığında görünen minimal bilgi */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {product.title}
                </h3>
                <p className="text-white/90 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center text-white/80 text-sm">
                  <span>{t("productsOverview.hoverHint")}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            </div>
        ))}
      </div>

      {/* Desktop Navigation Indicators */}
      <div className="hidden md:flex items-center justify-center gap-3 mt-8">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index 
                ? 'w-12 bg-primary' 
                : 'w-8 bg-gray-300 hover:bg-primary/50'
            }`}
            aria-label={`Ürün ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
