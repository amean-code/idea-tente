"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              {/* 404 Illustration */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <Image
                  src="/404-pergola-illustration.jpg"
                  alt="404 - Sayfa Bulunamadı"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Error Message */}
              <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sayfa Bulunamadı</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönebilir veya arama yapabilirsiniz.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Home className="mr-2 h-5 w-5" />
                    Ana Sayfa
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Geri Dön
                </Button>
              </div>

              {/* Popular Links */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-semibold mb-6">Popüler Sayfalar</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link href="/pergola/biyoklimatik" className="text-orange-500 hover:text-orange-600 font-medium">
                    Biyoklimatik Pergola
                  </Link>
                  <Link href="/kis-bahcesi" className="text-orange-500 hover:text-orange-600 font-medium">
                    Kış Bahçesi
                  </Link>
                  <Link href="/cam-sistemleri" className="text-orange-500 hover:text-orange-600 font-medium">
                    Cam Sistemleri
                  </Link>
                  <Link href="/teklif-al" className="text-orange-500 hover:text-orange-600 font-medium">
                    Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
