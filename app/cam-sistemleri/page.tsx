"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import { CamSistemleriHero } from "@/components/cam-sistemleri-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { CamSistemleriProductCards } from "@/components/cam-sistemleri-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"

/**
 * Cam Sistemleri ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function CamSistemleriPage() {
  const { t, language } = useLanguage()

  /**
   * Galeri görselleri - public/giyotin-cam/ klasöründeki görseller
   * Her görsel giyotin-cam-sistemleri ön ekiyle ve anlamlı açıklayıcı isimlerle tanımlanmıştır
   */
  const galleryImages = [
    "/giyotin-cam/giyotin-cam-sistemleri-idea-dis-acik-1.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-dis-acik-1.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-ev-ic-acik-1.jpg",
    "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-1.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-idea-ic-acik-1.JPG",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-ic-acik-1.JPG",
    "/giyotin-cam/giyotin-cam-sistemleri-idea-tasarim.png",
    "/giyotin-cam/giyotin-cam-sistemleri-ev-dis-acik-1.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-restorant-ic-acik-1.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-dis-acik-2.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-ev-dis-acik-2.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-idea-dis-acik-2.png",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-dis-acik-3.png",
    "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-2.png",
    "/giyotin-cam/giyotin-cam-sistemleri-ev-ic-acik-2.png",
    "/giyotin-cam/giyotin-cam-sistemleri-idea-ic-acik-2.png",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-ic-acik-2.png",
    "/giyotin-cam/giyotin-cam-sistemleri-restorant-ic-acik-2.png",
    "/giyotin-cam/giyotin-cam-sistemleri-ev-dis-acik-3.png",
    "/giyotin-cam/giyotin-cam-sistemleri-idea-dis-acik-3.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-dis-acik-4.JPG",
    "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-3.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-ev-dis-acik-4.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-kafe-ic-acik-3.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-idea-dis-acik-4.jpeg",
    "/giyotin-cam/giyotin-cam-sistemleri-kose-detay.png",
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
        { label: t("glassSystems.specs.system"), value: t("glassSystems.specs.systemValue") },
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
      title: t("glassSystems.features.slidingMechanism.title"),
      description: t("glassSystems.features.slidingMechanism.description"),
      icon: "check" as const,
    },
    {
      title: t("glassSystems.features.easyUse.title"),
      description: t("glassSystems.features.easyUse.description"),
      icon: "settings" as const,
    },
    {
      title: t("glassSystems.features.weatherResistant.title"),
      description: t("glassSystems.features.weatherResistant.description"),
      icon: "shield" as const,
    },
    {
      title: t("glassSystems.features.safetyGlass.title"),
      description: t("glassSystems.features.safetyGlass.description"),
      icon: "lock" as const,
    },
    {
      title: t("glassSystems.features.energyEfficiency.title"),
      description: t("glassSystems.features.energyEfficiency.description"),
      icon: "battery" as const,
    },
    {
      title: t("glassSystems.features.soundInsulation.title"),
      description: t("glassSystems.features.soundInsulation.description"),
      icon: "volume" as const,
    },
  ], [t, language])

  // Başlık ve alt başlıklar - dil değiştiğinde yeniden hesaplanır
  const featuresTitle = useMemo(() => t("glassSystems.features.title"), [t, language])
  const featuresSubtitle = useMemo(() => t("glassSystems.features.subtitle"), [t, language])
  const galleryProductName = useMemo(() => t("glassSystems.gallery.productName"), [t, language])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <CamSistemleriHero key={`hero-${language}`} />
        
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
        
        {/* Alt Ürünler */}
        {/* <CamSistemleriProductCards /> */}
        
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
