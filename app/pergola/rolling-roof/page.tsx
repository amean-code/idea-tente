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
 * Rolling Roof Pergola Sayfası
 */
export default function RollingRoofPage() {
  // Galeri görselleri
  const galleryImages = [
    "/pergola/pergola-kafe-aktif.jpeg",
    "/pergola/pergola-dıs-mekan.jpeg",
    "/pergola/pergola-render-siyah.jpg",
    "/pergola/pergola-beyaz.jpg",
  ]

  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Maksimum Genişlik", value: "6,00 m" },
        { label: "Maksimum Derinlik", value: "6,00 m" },
        { label: "Maksimum Alan", value: "36 m²" },
      ]
    },
    {
      title: "Malzeme & Yapı",
      icon: "settings" as const,
      items: [
        { label: "Profil Malzeme", value: "Alüminyum" },
        { label: "Tavan Tipi", value: "Açılır Kapanır Tente" },
        { label: "Kontrol", value: "Motorlu" },
      ]
    },
    {
      title: "Performans",
      icon: "palette" as const,
      items: [
        { label: "Su Geçirmezlik", value: "%100" },
        { label: "UV Koruma", value: "UPF 50+" },
        { label: "Rüzgar Dayanımı", value: "Yüksek" },
      ]
    },
    {
      title: "Garanti",
      icon: "layers" as const,
      items: [
        { label: "Motor Garantisi", value: "2 Yıl" },
        { label: "Mekanik Garanti", value: "2 Yıl" },
        { label: "Kumaş Garantisi", value: "5 Yıl" },
      ]
    },
  ]

  // Özellikler
  const features = [
    {
      title: "Açılır Kapanır Tente Tavan",
      description: "Ray sistemi üzerinde hareket eden motorlu tente ile tam açılma ve kapanma imkanı.",
      icon: "sun" as const,
    },
    {
      title: "Esnek Kullanım",
      description: "İstediğiniz zaman açın, istediğiniz zaman kapatın. Tam kontrol sizde.",
      icon: "settings" as const,
    },
    {
      title: "Dayanıklı Kumaş",
      description: "UV korumalı, su geçirmez ve rüzgara dayanıklı özel tente kumaşı.",
      icon: "shield" as const,
    },
    {
      title: "Motorlu Sistem",
      description: "Uzaktan kumanda ile kolay kontrol. Sessiz ve güvenilir motor.",
      icon: "smartphone" as const,
    },
    {
      title: "Modern Tasarım",
      description: "Şık alüminyum profiller ile her mimari yapıya uyum sağlar.",
      icon: "check" as const,
    },
    {
      title: "Kolay Montaj",
      description: "Profesyonel ekip tarafından hızlı ve pratik kurulum.",
      icon: "zap" as const,
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
              alt="Rolling Roof Pergola"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
              Rolling Roof
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Açılır kapanır tente sistemi ile esnek ve fonksiyonel pergola çözümü
            </p>
          </div>
        </section>
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Rolling Roof"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler */}
        <ProductDetailFeatures
          title="Rolling Roof Özellikleri"
          subtitle="Açılır kapanır tente sistemi ile maksimum esneklik"
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

