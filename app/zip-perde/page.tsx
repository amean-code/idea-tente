"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import { ZipPerdeHero } from "@/components/zip-perde-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ZipPerdeProductCards } from "@/components/zip-perde-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"
import { getGalleryImages } from "@/lib/gallery-config"

/**
 * Zip perde galerisini ortak manifest dosyasından okur.
 */
const galleryImages = getGalleryImages("zip-perde")

/**
 * Zip Perde ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function ZipScreenPage() {
  const { t, language } = useLanguage()

  // Teknik özellikler - dil değiştiğinde yeniden hesaplanır
  const specs = useMemo(() => [
    {
      title: t("zipScreen.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("zipScreen.specs.widthRange"), value: "150 - 600 cm" },
        { label: t("zipScreen.specs.maxHeight"), value: "300 cm" },
      ]
    },
    {
      title: t("zipScreen.specs.productStandards"),
      icon: "settings" as const,
      items: [
        { label: t("zipScreen.specs.controlType"), value: t("zipScreen.specs.controlTypeValue") },
        { label: t("zipScreen.specs.fabric"), value: t("zipScreen.specs.fabricValue") },
        { label: t("zipScreen.specs.profile"), value: t("zipScreen.specs.profileValue") },
      ]
    },
    {
      title: t("zipScreen.specs.colorOptions"),
      icon: "palette" as const,
      items: [
        { label: t("zipScreen.specs.profileColor"), value: t("zipScreen.specs.profileColorValue") },
        { label: t("zipScreen.specs.fabricColor"), value: t("zipScreen.specs.fabricColorValue") },
      ]
    },
    {
      title: t("zipScreen.specs.additionalFeatures"),
      icon: "layers" as const,
      items: [
        { label: t("zipScreen.specs.windResistance"), value: t("zipScreen.specs.windResistanceValue") },
        { label: t("zipScreen.specs.uvProtection"), value: "UPF 50+" },
      ]
    },
  ], [t, language])

  // Özellikler ve avantajlar - dil değiştiğinde yeniden hesaplanır
  const features = useMemo(() => [
    {
      title: t("zipScreen.features.windResistance.title"),
      description: t("zipScreen.features.windResistance.description"),
      icon: "wind" as const,
    },
    {
      title: t("zipScreen.features.uvProtection.title"),
      description: t("zipScreen.features.uvProtection.description"),
      icon: "sun" as const,
    },
    {
      title: t("zipScreen.features.waterproof.title"),
      description: t("zipScreen.features.waterproof.description"),
      icon: "rain" as const,
    },
    {
      title: t("zipScreen.features.smartControl.title"),
      description: t("zipScreen.features.smartControl.description"),
      icon: "smartphone" as const,
    },
    {
      title: t("zipScreen.features.sunSensor.title"),
      description: t("zipScreen.features.sunSensor.description"),
      icon: "sun" as const,
    },
    {
      title: t("zipScreen.features.windSensor.title"),
      description: t("zipScreen.features.windSensor.description"),
      icon: "shield" as const,
    },
  ], [t, language])

  // Başlık ve alt başlıklar - dil değiştiğinde yeniden hesaplanır
  const featuresTitle = useMemo(() => t("zipScreen.features.title"), [t, language])
  const featuresSubtitle = useMemo(() => t("zipScreen.features.subtitle"), [t, language])
  const galleryProductName = useMemo(() => t("zipScreen.hero.title"), [t, language])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <ZipPerdeHero key={`hero-${language}`} />
        
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
        {/* <ZipPerdeProductCards /> */}
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
