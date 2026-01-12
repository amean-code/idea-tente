"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import { KisBahcesiHero } from "@/components/kis-bahcesi-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { KisBahcesiProductCards } from "@/components/kis-bahcesi-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"

/**
 * Kış Bahçesi ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function WinterGardenPage() {
  const { t, language } = useLanguage()

  // Galeri görselleri
  const galleryImages = [
    "/pergola/pergola-kapak.jpeg",
    "/pergola/pergola-render-siyah-gece.jpg",
    "/pergola/pergola-render-siyah.jpg",
    "/pergola/pergola-ic-mekan.jpeg",
    "/pergola/pergola-kafe-aktif-2.jpg",
    "/pergola/pergola-beyaz.jpg",
  ]

  // Teknik özellikler - dil değiştiğinde yeniden hesaplanır
  const specs = useMemo(() => [
    {
      title: t("winterGarden.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("winterGarden.specs.areaRange"), value: "10 - 100 m²" },
        { label: t("winterGarden.specs.maxHeight"), value: "350 cm" },
      ]
    },
    {
      title: t("winterGarden.specs.productStandards"),
      icon: "settings" as const,
      items: [
        { label: t("winterGarden.specs.glassType"), value: t("winterGarden.specs.glassTypeValue") },
        { label: t("winterGarden.specs.profile"), value: t("winterGarden.specs.profileValue") },
        { label: t("winterGarden.specs.thermalInsulation"), value: t("winterGarden.specs.thermalInsulationValue") },
      ]
    },
    {
      title: t("winterGarden.specs.colorOptions"),
      icon: "palette" as const,
      items: [
        { label: t("winterGarden.specs.profileColor"), value: t("winterGarden.specs.profileColorValue") },
        { label: t("winterGarden.specs.glass"), value: t("winterGarden.specs.glassValue") },
      ]
    },
    {
      title: t("winterGarden.specs.additionalFeatures"),
      icon: "layers" as const,
      items: [
        { label: t("winterGarden.specs.soundInsulation"), value: "35-40 dB" },
        { label: t("winterGarden.specs.energySaving"), value: t("winterGarden.specs.energySavingValue") },
      ]
    },
  ], [t, language])

  // Özellikler ve avantajlar - dil değiştiğinde yeniden hesaplanır
  const features = useMemo(() => [
    {
      title: t("winterGarden.features.fourSeasons.title"),
      description: t("winterGarden.features.fourSeasons.description"),
      icon: "thermometer" as const,
    },
    {
      title: t("winterGarden.features.energySaving.title"),
      description: t("winterGarden.features.energySaving.description"),
      icon: "battery" as const,
    },
    {
      title: t("winterGarden.features.soundInsulation.title"),
      description: t("winterGarden.features.soundInsulation.description"),
      icon: "volume" as const,
    },
    {
      title: t("winterGarden.features.security.title"),
      description: t("winterGarden.features.security.description"),
      icon: "shield" as const,
    },
    {
      title: t("winterGarden.features.automaticVentilation.title"),
      description: t("winterGarden.features.automaticVentilation.description"),
      icon: "wind" as const,
    },
    {
      title: t("winterGarden.features.smartControl.title"),
      description: t("winterGarden.features.smartControl.description"),
      icon: "smartphone" as const,
    },
  ], [t, language])

  // Başlık ve alt başlıklar - dil değiştiğinde yeniden hesaplanır
  const featuresTitle = useMemo(() => t("winterGarden.features.title"), [t, language])
  const featuresSubtitle = useMemo(() => t("winterGarden.features.subtitle"), [t, language])
  const galleryProductName = useMemo(() => t("winterGarden.hero.title"), [t, language])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <KisBahcesiHero key={`hero-${language}`} />
        
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
        {/* <KisBahcesiProductCards /> */}
        
        {/* Referans Projeler */}
        <ReferenceProjects 
          serviceType="winter-garden"
          useTranslations={true}
        />
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
