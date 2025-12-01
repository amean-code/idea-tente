"use client"

import { Header } from "@/components/header"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, FileText, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Bioklimatik Pergola Sistemleri Sayfası
 */
export default function BioklimatikSistemlerPage() {
  const { t } = useLanguage()
  // Galeri görselleri
  const galleryImages = [
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-kapalı.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-kapalı-iç.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-kapalı-havuz.jpeg",
    "/bioklimatik-pergola/bioklimatik-açık-üst-görünüm.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-geniş-havuz-üstü.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-açılır-kapanır-dış-mekan-havuz-başı-cephe.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-açılır-kapanır-dış-mekan-havuz-başı-yan.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-açılır-kapanır-dış-mekan-havuz-başı.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-açılır-kapanır.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-büyük-cephe.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-büyük-yan.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-büyük.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-görünüm.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-dış-mekan-kare.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-iç.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-açık-geniş.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-açık.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-güneş-alan-iç-mekan-yan.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-güneş-alan-iç-mekan.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-iç.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-kapalı-iç-mekan-2.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola-kafe-kapalı-iç-mekan.jpeg",
    "/bioklimatik-pergola/bioklimatik-pergola.jpeg",
  ]

  // Teknik özellikler
  const specs = [
    {
      title: t("pergola.bioclimatic.specs.dimensions"),
      icon: "ruler" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.maxWidth"), value: "8,30 m" },
        { label: t("pergola.bioclimatic.specs.maxDepth"), value: "10 m" },
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
        { label: t("pergola.bioclimatic.specs.louverAngle"), value: "105° Dönebilir (Eksenel)" },
        { label: t("pergola.bioclimatic.specs.gasketMaterial"), value: "EPDM" },
        { label: t("pergola.bioclimatic.specs.surfaceTreatment"), value: "Elektrostatik Fırın Boyası" },
        { label: t("pergola.bioclimatic.specs.accessoryCoating"), value: "Galvaniz + Elektrostatik Boya" },
      ]
    },
    {
      title: t("pergola.bioclimatic.specs.performance"),
      icon: "palette" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.waterproof"), value: "%100" },
        { label: t("pergola.bioclimatic.specs.distributedLoad"), value: "50kg+25kg/m²" },
        { label: t("pergola.bioclimatic.specs.windLoad"), value: "50 kg/m²" },
        { label: t("pergola.bioclimatic.specs.motorSystem"), value: "2-4 Linear Motor" },
        { label: t("pergola.bioclimatic.specs.control"), value: "Uzaktan Kumanda + Otomasyon" },
      ]
    },
    {
      title: t("pergola.bioclimatic.specs.warranty"),
      icon: "layers" as const,
      items: [
        { label: t("pergola.bioclimatic.specs.motorWarranty"), value: "2 Yıl" },
        { label: t("pergola.bioclimatic.specs.mechanicalWarranty"), value: "2 Yıl" },
        { label: t("pergola.bioclimatic.specs.slope"), value: "Düz veya %5 Eğimli" },
        { label: t("pergola.bioclimatic.specs.rainMode"), value: "Kontrollü Havalandırma" },
        { label: t("pergola.bioclimatic.specs.ledLighting"), value: "Opsiyonel" },
      ]
    },
  ]

  // Özellikler
  const features = [
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
              alt={t("pergola.bioclimatic.hero.title")}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
              {t("pergola.bioclimatic.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              {t("pergola.bioclimatic.hero.subtitle")}
            </p>
          </div>
        </section>
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName={t("pergola.bioclimatic.hero.title")}
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler */}
        <ProductDetailFeatures
          title={t("pergola.bioclimatic.features.title")}
          subtitle={t("pergola.bioclimatic.features.subtitle")}
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
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{t("pergola.bioclimatic.documents.technicalFile.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pergola.bioclimatic.documents.technicalFile.description")}
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  asChild
                >
                  <a 
                    href="/TEKNİK DOSYALAR/IDEA BIOCLIMATIC PERGOLA TECHINAL FEATURES.pdf" 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t("pergola.bioclimatic.documents.technicalFile.download")}
                  </a>
                </Button>
              </motion.div>

              {/* E-Katalog */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{t("pergola.bioclimatic.documents.catalog.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pergola.bioclimatic.documents.catalog.description")}
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  asChild
                >
                  <a 
                    href="/E-KATALOG/IDEA E- CATALOG (1).pdf" 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t("pergola.bioclimatic.documents.catalog.download")}
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
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

