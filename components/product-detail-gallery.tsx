"use client"

import { useState } from "react"
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Image */}
        <div className="relative mb-8 max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={images[currentIndex]}
              alt={`${productName} - ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
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
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  currentIndex === index
                      ? "ring-4 ring-primary scale-110 z-10"
                      : "ring-2 ring-gray-200 hover:ring-gray-300 hover:scale-105"
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} - ${index + 1}`}
                  fill
                  className="object-cover"
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

