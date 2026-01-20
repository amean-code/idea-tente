"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductDetailGalleryProps {
  images: string[]
  productName: string
}

/**
 * Ürün detay galerisi - Palmiye Global stilinde
 * Büyük resim + thumbnail navigasyon
 */
export function ProductDetailGallery({ images, productName }: ProductDetailGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * Bir sonraki resme geç
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  /**
   * Bir önceki resme geç
   */
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  /**
   * Klavye ile navigasyon - sağ/sol ok tuşları ile resimler arasında geçiş
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Input alanlarında yazı yazılırken klavye navigasyonunu devre dışı bırak
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target instanceof HTMLElement && event.target.isContentEditable)
      ) {
        return
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [images.length])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Image */}
        <div className="relative mb-8 max-w-5xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`${productName} - ${currentIndex + 1}`}
              width={1920}
              height={1080}
              className="object-contain w-full h-auto max-h-[80vh]"
              priority={currentIndex === 0}
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-xl backdrop-blur-sm z-10"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6 text-gray-900" />
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white border-2 border-gray-200 hover:border-gray-300 shadow-xl backdrop-blur-sm z-10"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6 text-gray-900" />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all bg-gray-100 flex items-center justify-center ${
                  currentIndex === index
                      ? "ring-4 ring-primary scale-110 z-10"
                      : "ring-2 ring-gray-200 hover:ring-gray-300 hover:scale-105"
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} - ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </button>
            ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

