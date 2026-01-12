"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import { CamSistemleriHero } from "@/components/cam-sistemleri-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"

/**
 * Sürme Cam Sistemleri sayfası
 * Frameless sliding glass systems için özel sayfa
 */
export default function SurmeCamPage() {
  const { t, language } = useLanguage()

  /**
   * Galeri görselleri - public/SürmeCam/ klasöründeki görseller
   * SEO odaklı isimlerle tanımlanmıştır
   */
  const galleryImages = [
    "/SürmeCam/sürme-cam-sistemleri-dis-gorunum-1.jpeg",
    "/SürmeCam/sürme-cam-sistemleri-dis-gorunum-2.jpeg",
    "/SürmeCam/sürme-cam-sistemleri-dis-gorunum-3.jpeg",
    "/SürmeCam/sürme-cam-sistemleri-dis-gorunum-4.jpeg",
    "/SürmeCam/sürme-cam-sistemleri-ic-gorunum-1.jpeg",
    "/SürmeCam/sürme-cam-sistemleri-ic-gorunum-2.jpeg",
  ]

  /**
   * Teknik özellikler - dil değiştiğinde yeniden hesaplanır
   */
  const specs = useMemo(() => [
    {
      title: t("glassSystems.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("glassSystems.specs.maxWidth"), value: "600 cm" },
        { label: t("glassSystems.specs.maxHeight"), value: "300 cm" },
      ]
    },
    {
      title: t("glassSystems.specs.productStandards"),
      icon: "settings" as const,
      items: [
        { label: t("glassSystems.specs.glassType"), value: t("glassSystems.specs.glassTypeValue") },
        { label: t("glassSystems.specs.glassThickness"), value: "8-10 mm" },
        { label: t("glassSystems.specs.system"), value: "Sürme" },
      ]
    },
    {
      title: t("glassSystems.specs.colorOptions"),
      icon: "palette" as const,
      items: [
        { label: t("glassSystems.specs.profileColor"), value: t("glassSystems.specs.profileColorValue") },
        { label: t("glassSystems.specs.glass"), value: t("glassSystems.specs.glassValue") },
      ]
    },
    {
      title: t("glassSystems.specs.additionalFeatures"),
      icon: "layers" as const,
      items: [
        { label: t("glassSystems.specs.soundInsulation"), value: "30-35 dB" },
        { label: t("glassSystems.specs.security"), value: t("glassSystems.specs.securityValue") },
      ]
    },
  ], [t, language])

  /**
   * Özellikler ve avantajlar - dil değiştiğinde yeniden hesaplanır
   */
  const features = useMemo(() => [
    {
      title: t("glassSystems.slidingGlass.features.framelessDesign.title"),
      description: t("glassSystems.slidingGlass.features.framelessDesign.description"),
      icon: "maximize" as const,
    },
    {
      title: t("glassSystems.slidingGlass.features.slidingMechanism.title"),
      description: t("glassSystems.slidingGlass.features.slidingMechanism.description"),
      icon: "settings" as const,
    },
    {
      title: t("glassSystems.slidingGlass.features.easyUse.title"),
      description: t("glassSystems.slidingGlass.features.easyUse.description"),
      icon: "check" as const,
    },
    {
      title: t("glassSystems.slidingGlass.features.weatherResistant.title"),
      description: t("glassSystems.slidingGlass.features.weatherResistant.description"),
      icon: "shield" as const,
    },
    {
      title: t("glassSystems.slidingGlass.features.safetyGlass.title"),
      description: t("glassSystems.slidingGlass.features.safetyGlass.description"),
      icon: "lock" as const,
    },
    {
      title: t("glassSystems.slidingGlass.features.energyEfficiency.title"),
      description: t("glassSystems.slidingGlass.features.energyEfficiency.description"),
      icon: "battery" as const,
    },
  ], [t, language])

  // Başlık ve alt başlıklar - dil değiştiğinde yeniden hesaplanır
  const featuresTitle = useMemo(() => t("glassSystems.slidingGlass.features.title"), [t, language])
  const featuresSubtitle = useMemo(() => t("glassSystems.slidingGlass.features.subtitle"), [t, language])
  const galleryProductName = useMemo(() => t("glassSystems.slidingGlass.gallery.productName"), [t, language])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section - Custom hero for sliding glass */}
        <SlidingGlassHero key={`hero-${language}`} />
        
        {/* Galeri */}
        <ProductDetailGallery
          key={`gallery-${language}`}
          images={galleryImages}
          productName={galleryProductName}
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs key={`specs-${language}`} categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          key={`features-${language}`}
          title={featuresTitle}
          subtitle={featuresSubtitle}
          features={features}
        />
        
        {/* Referans Projeler */}
        <ReferenceProjects 
          serviceType="glass-systems"
          useTranslations={true}
        />
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}

/**
 * Sürme Cam için özel Hero bileşeni
 */
function SlidingGlassHero() {
  const { t, language } = useLanguage()
  
  const badge = useMemo(() => t("glassSystems.slidingGlass.hero.badge"), [t, language])
  const title = useMemo(() => t("glassSystems.slidingGlass.hero.title"), [t, language])
  const description = useMemo(() => t("glassSystems.slidingGlass.hero.description"), [t, language])
  const subdescription = useMemo(() => t("glassSystems.slidingGlass.hero.subdescription"), [t, language])

  return (
    <CamSistemleriHero 
      badge={badge}
      title={title}
      description={description}
      subdescription={subdescription}
      imageSrc="/SürmeCam/sürme-cam-sistemleri-dis-gorunum-1.jpeg"
    />
  )
}
