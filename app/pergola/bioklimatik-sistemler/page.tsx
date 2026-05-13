"use client"

import { useMemo, useEffect } from "react"
import { Header } from "@/components/header"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, Eye, FileText, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getGalleryImages } from "@/lib/gallery-config"

/**
 * Bioklimatik sistemler galerisini ortak manifest dosyasından okur.
 */
const galleryImages = getGalleryImages("bioklimatik-sistemler")

/**
 * Bioklimatik Pergola Sistemleri Sayfası
 */
export default function BioklimatikSistemlerPage() {
  const { t, language } = useLanguage()

  // Teknik özellikler - dil değiştiğinde yeniden hesaplanır
  const specs = useMemo(() => [
    {
      title: t("pergola.bioclimatic.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.maxWidth"), value: "8 m" },
        { label: t("pergola.bioclimatic.specs.maxDepth"), value: "9 m" },
        { label: t("pergola.bioclimatic.specs.maxArea"), value: "43 m²" },
        { label: t("pergola.bioclimatic.specs.verticalProfile"), value: "16 cm x 14 cm" },
        { label: t("pergola.bioclimatic.specs.horizontalProfile"), value: "12 cm x 18 cm" },
      ]
    },
    {
      title: t("pergola.bioclimatic.specs.materials"),
      icon: "settings" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.profileMaterial"), value: "Alüminyum 6063-T6 F25" },
        { label: t("pergola.bioclimatic.specs.motorSystem"), value: "IP 68 Linear Motor" },
        { label: t("pergola.bioclimatic.specs.accessoryCoating"), value: "Krom İnox Paslanmaz" },
        { label: t("pergola.bioclimatic.specs.surfaceTreatment"), value: "Elektrostatik Fırın Boyası" },
        { label: t("pergola.bioclimatic.specs.gasketMaterial"), value: "EPDM" },
      ]
    },
    {
      title: t("pergola.bioclimatic.specs.performance"),
      icon: "palette" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.waterproof"), value: "%100" },
        { label: t("pergola.bioclimatic.specs.distributedLoad"), value: "200kg-250kg/m²" },
        { label: t("pergola.bioclimatic.specs.windLoad"), value: "100 - 120 km/h" },
        { label: t("pergola.bioclimatic.specs.louverAngle"), value: "105° Dönebilir (Eksenel)" },
        { label: t("pergola.bioclimatic.specs.control"), value: "Uzaktan Kumanda + Otomasyon" },
      ]
    },
    {
      title: t("pergola.bioclimatic.specs.warranty"),
      icon: "layers" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.motorWarranty"), value: "5 Yıl" },
        { label: t("pergola.bioclimatic.specs.mechanicalWarranty"), value: "2 Yıl" },
        { label: t("pergola.bioclimatic.specs.slope"), value: "Düz veya %5 Eğimli" },
        { label: t("pergola.bioclimatic.specs.rainMode"), value: "Kontrollü Havalandırma" },
        { label: t("pergola.bioclimatic.specs.ledLighting"), value: "Opsiyonel" },
      ]
    },
  ], [t, language])

  // Özellikler - dil değiştiğinde yeniden hesaplanır
  const features = useMemo(() => [
    {
      title: t("pergola.bioclimatic.featureList.rotatableLouvers.title"),
      description: t("pergola.bioclimatic.featureList.rotatableLouvers.description"),
      icon: "sun" as const,
    },
    {
      title: t("pergola.bioclimatic.featureList.climateControl.title"),
      description: t("pergola.bioclimatic.featureList.climateControl.description"),
      icon: "thermometer" as const,
    },
    {
      title: t("pergola.bioclimatic.featureList.waterproof.title"),
      description: t("pergola.bioclimatic.featureList.waterproof.description"),
      icon: "rain" as const,
    },
    {
      title: t("pergola.bioclimatic.featureList.energySaving.title"),
      description: t("pergola.bioclimatic.featureList.energySaving.description"),
      icon: "battery" as const,
    },
    {
      title: t("pergola.bioclimatic.featureList.quietOperation.title"),
      description: t("pergola.bioclimatic.featureList.quietOperation.description"),
      icon: "volume" as const,
    },
    {
      title: t("pergola.bioclimatic.featureList.allSeasons.title"),
      description: t("pergola.bioclimatic.featureList.allSeasons.description"),
      icon: "shield" as const,
    },
  ], [t, language])

  // Başlık ve alt başlıklar - dil değiştiğinde yeniden hesaplanır
  const featuresTitle = useMemo(() => t("pergola.bioclimatic.features.title"), [t, language])
  const featuresSubtitle = useMemo(() => t("pergola.bioclimatic.features.subtitle"), [t, language])
  const galleryProductName = useMemo(() => t("pergola.bioclimatic.hero.title"), [t, language])
  const heroTitle = useMemo(() => t("pergola.bioclimatic.hero.title"), [t, language])
  const heroSubtitle = useMemo(() => t("pergola.bioclimatic.hero.subtitle"), [t, language])

  /**
   * Galeri görsellerini önceden yükle - geçiş hızını artırır
   * Tüm görselleri preload ederek anında geçiş sağlanır
   */
  useEffect(() => {
    galleryImages.forEach((imageSrc, index) => {
      // İlk görsel zaten priority ile yükleniyor, diğerlerini preload et
      if (index > 0) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = imageSrc
        document.head.appendChild(link)
      }
    })

    return () => {
      // Cleanup - preload link'lerini kaldır
      const preloadLinks = document.head.querySelectorAll('link[rel="preload"][as="image"]')
      preloadLinks.forEach(link => {
        if (galleryImages.some(img => link.getAttribute('href') === img)) {
          document.head.removeChild(link)
        }
      })
    }
  }, [galleryImages])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section key={`hero-${language}`} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={galleryImages[6]}
              alt={heroTitle}
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </section>
        
        {/* Galeri */}
        <ProductDetailGallery
          key={`gallery-${language}`}
          images={galleryImages}
          productName={galleryProductName}
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs key={`specs-${language}`} categories={specs} />
        
        {/* Özellikler */}
        <ProductDetailFeatures
          key={`features-${language}`}
          title={featuresTitle}
          subtitle={featuresSubtitle}
          features={features}
        />
        
        {/* Teknik Dosyalar ve Katalog */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm">
                <FileText className="h-4 w-4" />
                <span className="text-sm font-medium">{t("pergola.bioclimatic.documents.badge")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                {t("pergola.bioclimatic.documents.title")} <span className="text-primary">{t("pergola.bioclimatic.documents.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                {t("pergola.bioclimatic.documents.description")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Teknik Dosya */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow min-w-0 overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-6 min-w-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-2">{t("pergola.bioclimatic.documents.technicalFile.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pergola.bioclimatic.documents.technicalFile.description")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full min-w-0">
                  <Button className="w-full sm:flex-1 sm:min-w-0" variant="outline" asChild>
                    <a
                      href="/api/documents/pdf?id=bioclimatic-technical&mode=inline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {t("pergola.bioclimatic.documents.technicalFile.view")}
                    </a>
                  </Button>
                  <Button className="w-full sm:flex-1 sm:min-w-0" asChild>
                    <a
                      href="/api/documents/pdf?id=bioclimatic-technical&mode=attachment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t("pergola.bioclimatic.documents.technicalFile.download")}
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* E-Katalog */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow min-w-0 overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-6 min-w-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-2">{t("pergola.bioclimatic.documents.catalog.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pergola.bioclimatic.documents.catalog.description")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full min-w-0">
                  <Button className="w-full sm:flex-1 sm:min-w-0" variant="outline" asChild>
                    <a
                      href="/api/documents/pdf?id=bioclimatic-catalog&mode=inline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {t("pergola.bioclimatic.documents.catalog.view")}
                    </a>
                  </Button>
                  <Button className="w-full sm:flex-1 sm:min-w-0" asChild>
                    <a
                      href="/api/documents/pdf?id=bioclimatic-catalog&mode=attachment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t("pergola.bioclimatic.documents.catalog.download")}
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <ContactSection />
      </main>
    </div>
  )
}

