"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import { PergolaHero } from "@/components/pergola-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { PergolaProductCards } from "@/components/pergola-product-cards"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/contexts/language-context"
import { getGalleryImages } from "@/lib/gallery-config"

/**
 * Pergola ana sayfa galerisini ortak manifest dosyasından okur.
 */
const galleryImages = getGalleryImages("pergola")

/**
 * Pergola Sistemleri ana sayfası
 * Palmiye Global referans alınarak tasarlanmıştır
 */
export default function BioklimatikPergolaPage() {
  const { t, language } = useLanguage()

  // Teknik özellikler - dil değiştiğinde yeniden hesaplanır
  const specs = useMemo(() => [
    {
      title: t("pergola.mainPage.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("pergola.mainPage.specs.maxWidth"), value: "8,30 m" },
        { label: t("pergola.mainPage.specs.maxDepth"), value: "10 m" },
        { label: t("pergola.mainPage.specs.maxArea"), value: "43 m²" },
      ]
    },
    {
      title: t("pergola.mainPage.specs.materials"),
      icon: "settings" as const,
      items: [
        { label: t("pergola.mainPage.specs.profileMaterial"), value: "Alüminyum 6063-T6 F25" },
        { label: t("pergola.mainPage.specs.louverAngle"), value: "105° Dönebilir" },
        { label: t("pergola.mainPage.specs.gasketMaterial"), value: "EPDM" },
      ]
    },
    {
      title: t("pergola.mainPage.specs.performance"),
      icon: "palette" as const,
      items: [
        { label: t("pergola.mainPage.specs.waterproof"), value: "%100" },
        { label: t("pergola.mainPage.specs.distributedLoad"), value: "200kg-250kg/m²" },
        { label: t("pergola.mainPage.specs.windLoad"), value: "100 - 120 km/h" },
      ]
    },
    {
      title: t("pergola.mainPage.specs.warranty"),
      icon: "layers" as const,
      items: [
        { label: t("pergola.mainPage.specs.motorWarranty"), value: "5 Yıl" },
        { label: t("pergola.mainPage.specs.mechanicalWarranty"), value: "2 Yıl" },
        { label: t("pergola.mainPage.specs.slope"), value: "Düz veya %5 Eğimli" },
      ]
    },
  ], [t, language])

  // Özellikler ve avantajlar - dil değiştiğinde yeniden hesaplanır
  const features = useMemo(() => [
    {
      title: t("pergola.mainPage.features.rotatableLouvers.title"),
      description: t("pergola.mainPage.features.rotatableLouvers.description"),
      icon: "sun" as const,
    },
    {
      title: t("pergola.mainPage.features.waterproof.title"),
      description: t("pergola.mainPage.features.waterproof.description"),
      icon: "rain" as const,
    },
    {
      title: t("pergola.mainPage.features.quietOperation.title"),
      description: t("pergola.mainPage.features.quietOperation.description"),
      icon: "volume" as const,
    },
    {
      title: t("pergola.mainPage.features.thermalInsulation.title"),
      description: t("pergola.mainPage.features.thermalInsulation.description"),
      icon: "thermometer" as const,
    },
    {
      title: t("pergola.mainPage.features.remoteControl.title"),
      description: t("pergola.mainPage.features.remoteControl.description"),
      icon: "smartphone" as const,
    },
    {
      title: t("pergola.mainPage.features.allSeasons.title"),
      description: t("pergola.mainPage.features.allSeasons.description"),
      icon: "shield" as const,
    },
  ], [t, language])

  // Başlık ve alt başlıklar - dil değiştiğinde yeniden hesaplanır
  const featuresTitle = useMemo(() => t("pergola.bioclimatic.features.pageTitle"), [t, language])
  const featuresSubtitle = useMemo(() => t("pergola.bioclimatic.features.pageSubtitle"), [t, language])
  const galleryProductName = useMemo(() => t("pergola.bioclimatic.hero.title"), [t, language])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section - Palmiye tarzı */}
        <PergolaHero key={`hero-${language}`} />

        {/* Alt sayfa yönlendirme kartları (cam-sistemleri düzeni) */}
        <PergolaProductCards />

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
        
        {/* Etkileşimli Ürün Seçim Sihirbazı - Kaldırıldı */}
        {/* <PergolaSelectionWizard /> */}
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
