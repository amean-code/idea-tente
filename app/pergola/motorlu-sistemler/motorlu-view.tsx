"use client"

import { Header } from "@/components/header"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import { pergolaPublicSrc } from "@/lib/pergola-public-path"

export interface MotorluPageViewProps {
  galleryImages: string[]
  coverImage: string
}

/**
 * Motorlu Pergola Sistemleri Sayfası (istemci görünümü)
 */
export function MotorluPageView({ galleryImages, coverImage }: MotorluPageViewProps) {
  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Maksimum Genişlik", value: "1000 cm" },
        { label: "Maksimum Derinlik", value: "1000 cm" },
        { label: "Maksimum Alan", value: "60 m²" },
      ]
    },
    {
      title: "Motor & Kontrol",
      icon: "settings" as const,
      items: [
        { label: "Motor Tipi", value: "Opsiyonel" },
        { label: "Kontrol", value: "Uzaktan Kumanda" },
        { label: "Akıllı Sistem", value: "Sensör Entegrasyonu" },
      ]
    },
    {
      title: "Özellikler",
      icon: "palette" as const,
      items: [
        { label: "Çalışma Şekli", value: "Tam Otomatik" },
        { label: "Ses Seviyesi", value: "Sessiz" },
        { label: "Güvenlik", value: "Engel Algılama" },
      ]
    },
    {
      title: "Garanti",
      icon: "layers" as const,
      items: [
        { label: "Motor Garantisi", value: "5 Yıl" },
        { label: "Mekanik Garanti", value: "2 Yıl" },
        { label: "Otomasyon", value: "2 Yıl" },
      ]
    },
  ]

  // Özellikler
  const features = [
    {
      title: "Tam Otomatik Kontrol",
      description:
        "Uzaktan kumanda ile açılıp kapanabilir; istenilen noktada durdurularak gölge ve havalandırma sağlanabilir.",
      icon: "smartphone" as const,
    },
    {
      title: "Su Geçirmezlik",
      description: "Özel blackout kumaş ve gizli oluk sistemi sayesinde yağmur suyunu mevcut sistem direkleri içerisinden kontrollü tahliye eder.",
      icon: "rain" as const,
    },
    {
      title: "Rüzgar ve Yağmur Sensörleri",
      description:
        "Sisteme haricen entegre edilen rüzgar ve yağmur sensörleri sayesinde oluşacak hava muhalefetine göre sistem kendini açıp kapatabilir.",
      icon: "wind" as const,
    },
    {
      title: "Dört Mevsim Kullanım",
      description:
        "Zip perde, giyotin cam, sürme cam gibi sistemlerle etrafı tamamen kapalı bir mekana dönüştürülebilir.",
      icon: "sun" as const,
    },
    {
      title: "LED Aydınlatma",
      description:
        "Kumaş profillerinin üzerine takılan lineer LED'ler ile mekan aydınlatılır.",
      icon: "zap" as const,
    },
    {
      title: "Özel Ölçü ve Üretim",
      description: "Mekanınıza göre ister tek modül ister çoklu modüllerin birbirine birleşimi ile mimariye uyumlu sistemler üretilir.",
      icon: "maximize" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={pergolaPublicSrc(coverImage)}
              alt="Motorlu Pergola Sistemleri"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
              Motorlu Pergola Sistemleri
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Tam otomatik kontrol ve sensör teknolojisi ile akıllı yaşam
            </p>
          </div>
        </section>
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Motorlu Sistemler"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler */}
        <ProductDetailFeatures
          title="Motorlu Pergola Teknolojisi"
          subtitle="Sensör teknolojisi ve uzaktan kontrol ile konforlu kullanım"
          features={features}
        />
        
        {/* İletişim */}
        <ContactSection />
      </main>
    </div>
  )
}

