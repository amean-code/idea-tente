"use client"

import { Header } from "@/components/header"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import { motion } from "framer-motion"

/**
 * Motorlu Pergola Sistemleri Sayfası
 */
export default function MotorlupergolaPage() {
  // Galeri görselleri
  const galleryImages = [
    "/pergola/pergola-ev-dıs.jpg",
    "/pergola/pergola-kafe-1.jpg",
    "/pergola/pergola-kafe-aktif.jpeg",
    "/pergola/pergola-beyaz.jpg",
  ]

  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Maksimum Genişlik", value: "8,30 m" },
        { label: "Maksimum Derinlik", value: "10 m" },
        { label: "Maksimum Alan", value: "43 m²" },
      ]
    },
    {
      title: "Motor & Kontrol",
      icon: "settings" as const,
      items: [
        { label: "Motor Tipi", value: "Somfy / Otomasyon" },
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
        { label: "Motor Garantisi", value: "2 Yıl" },
        { label: "Mekanik Garanti", value: "2 Yıl" },
        { label: "Otomasyon", value: "2 Yıl" },
      ]
    },
  ]

  // Özellikler
  const features = [
    {
      title: "Tam Otomatik Kontrol",
      description: "Uzaktan kumanda ile lamellerin açılma, kapanma ve eğim açısını kolayca kontrol edin.",
      icon: "smartphone" as const,
    },
    {
      title: "Güneş Sensörü",
      description: "Güneş ışığını algılayarak otomatik olarak ideal pozisyona geçer.",
      icon: "sun" as const,
    },
    {
      title: "Rüzgar Sensörü",
      description: "Yüksek rüzgar hızlarında sistemi otomatik olarak koruma moduna alır.",
      icon: "wind" as const,
    },
    {
      title: "Yağmur Sensörü",
      description: "Yağmur algılandığında lameller otomatik olarak kapanır.",
      icon: "rain" as const,
    },
    {
      title: "Sessiz Motor",
      description: "Yüksek kaliteli motorlar ile sessiz ve pürüzsüz çalışma.",
      icon: "volume" as const,
    },
    {
      title: "Güvenlik Sistemi",
      description: "Engel algılama sistemi ile güvenli kullanım.",
      icon: "shield" as const,
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
              src="/pergola/pergola-render-siyah-gece.jpg"
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
          title="Akıllı Otomasyon"
          subtitle="Sensör teknolojisi ve uzaktan kontrol ile konforlu kullanım"
          features={features}
        />
        
        {/* Referans Projeler */}
        <ReferenceProjects 
          serviceType="bioclimatic-pergola"
          useTranslations={true}
        />
        
        {/* İletişim */}
        <ContactSection />
      </main>
    </div>
  )
}

