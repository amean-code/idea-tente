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

export interface GiyotinCamPageViewProps {
  galleryImages: string[]
  coverImage: string
}

/**
 * Giyotin Cam Sistemleri sayfası (istemci görünümü)
 */
export function GiyotinCamPageView({ galleryImages, coverImage }: GiyotinCamPageViewProps) {
  const { t, language } = useLanguage()

  /**
   * Teknik özellikler - dil değiştiğinde yeniden hesaplanır
   */
  const specs = useMemo(() => [
    {
      title: t("glassSystems.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("glassSystems.specs.maxWidth"), value: "450 cm" },
        { label: t("glassSystems.specs.maxHeight"), value: "350 cm" },
      ]
    },
    {
      title: t("glassSystems.specs.productStandards"),
      icon: "settings" as const,
      items: [
        { label: t("glassSystems.specs.profileMaterial"), value: t("glassSystems.specs.profileMaterialValue") },
        { label: t("glassSystems.specs.glassType"), value: t("glassSystems.specs.glassTypeValue") },
        { label: t("glassSystems.specs.glassThickness"), value: "8-24 mm" },
        { label: t("glassSystems.specs.system"), value: t("glassSystems.specs.systemValue") },
        { label: t("glassSystems.specs.soundInsulation"), value: "30-35 dB" },
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
        { label: t("glassSystems.specs.soundInsulation"), value: "Zincirli / Kayışlı" },
        { label: t("glassSystems.specs.engineType"), value: t("glassSystems.specs.engineTypeValue") }
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
  /**
   * Giyotin cam alt sayfası hero başlığı; üst liste sayfasındaki genel "Cam Sistemleri" başlığından ayrılır.
   */
  const giyotinHeroTitle = useMemo(
    () => t("glassSystems.guillotine.hero.title"),
    [t, language],
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <CamSistemleriHero key={`hero-${language}`} title={giyotinHeroTitle} imageSrc={coverImage} />
        
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
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
