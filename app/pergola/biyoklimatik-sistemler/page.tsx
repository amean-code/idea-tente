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
 * Biyoklimatik Pergola Sistemleri Sayfası
 */
export default function BiyoklimatikSistemlerPage() {
  // Galeri görselleri
  const galleryImages = [
    "/pergola/pergola-kafe-aktif-2.jpg",
    "/pergola/pergola-dıs-gunes.jpeg",
    "/pergola/pergola-ic-mekan.jpeg",
    "/pergola/pergola-kafe-gorsel.jpg",
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
      title: "Malzeme & Yapı",
      icon: "settings" as const,
      items: [
        { label: "Profil Malzeme", value: "Alüminyum 6063-T6 F25" },
        { label: "Lamel Açısı", value: "105° Dönebilir" },
        { label: "Fitil Malzemesi", value: "EPDM" },
      ]
    },
    {
      title: "Performans",
      icon: "palette" as const,
      items: [
        { label: "Su Geçirmezlik", value: "%100" },
        { label: "Yayılı Yük Kapasitesi", value: "50kg+25kg/m²" },
        { label: "Rüzgar Yükü", value: "50 kg/m²" },
      ]
    },
    {
      title: "Garanti",
      icon: "layers" as const,
      items: [
        { label: "Motor Garantisi", value: "2 Yıl" },
        { label: "Mekanik Garanti", value: "2 Yıl" },
        { label: "Eğim", value: "Düz veya %5 Eğimli" },
      ]
    },
  ]

  // Özellikler
  const features = [
    {
      title: "105° Dönebilen Lameller",
      description: "Eksenel olarak 105° açıda açılabilen lameller ile güneş ışığını ve havalandırmayı aynı anda kontrol edin.",
      icon: "sun" as const,
    },
    {
      title: "Akıllı İklim Kontrolü",
      description: "Biyoklimatik sistem ile mekanınızın havasını, ışığını ve sıcaklığını optimal seviyede tutun.",
      icon: "thermometer" as const,
    },
    {
      title: "%100 Su Geçirmezlik",
      description: "Lamellerdeki oluklar sayesinde yağmur suları yan oluklara akarak taşıyıcı ayaklardan dışarı atılır.",
      icon: "rain" as const,
    },
    {
      title: "Enerji Tasarrufu",
      description: "Doğal havalandırma ve gölgeleme ile enerji tüketimini azaltın.",
      icon: "battery" as const,
    },
    {
      title: "Sessiz Çalışma",
      description: "Triger kayışı ile güç aktarımı sağlanan sistem sessiz ve pürüzsüz çalışır.",
      icon: "volume" as const,
    },
    {
      title: "Tüm Mevsim",
      description: "Yaz ve kış aylarında konforlu kullanım. Her mevsim için ideal çözüm.",
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
              src="/pergola/pergola-dıs-gunes-2.jpeg"
              alt="Biyoklimatik Pergola Sistemleri"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
              Biyoklimatik Pergola Sistemleri
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Doğa ile uyumlu, akıllı iklim kontrolü ile konforlu yaşam alanları
            </p>
          </div>
        </section>
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Biyoklimatik Sistemler"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler */}
        <ProductDetailFeatures
          title="Biyoklimatik Teknoloji"
          subtitle="Doğal havalandırma ve iklim kontrolü ile enerji verimliliği"
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

