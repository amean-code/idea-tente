"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Play, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const heroImages = [
  "/pergola/pergola-kapak.jpeg",
  "/pergola/pergola-kafe-gorsel.jpg",
  "/giyotin-cam/giyotin-cam.png",
  "/pergola/pergola-dıs-mekan.jpeg",
  "/pergola/pergola-render-siyah-gece.jpg",
  "/slide-1.jpg",
]

export function HeroSection() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/80 via-[#3D4247]/50 to-[#3D4247]/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left text-white">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in">
            {t("hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl text-pretty animate-fade-in-delay">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start animate-fade-in-delay-2">
            <Button size="lg" asChild className="bg-primary hover:bg-primary-600 text-primary-foreground">
              <Link href="/teklif-al">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("hero.getQuote")}
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Link href="#products">
                {t("hero.viewProducts")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Video Play Button */}
          <div className="pt-8 animate-fade-in-delay-3 flex justify-start">
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 group" asChild>
              <Link href="/ar-demo">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 text-white ml-1" />
                  </div>
                  <span className="text-lg">{t("nav.arDemo")}</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
