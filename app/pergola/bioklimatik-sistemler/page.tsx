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

/**
 * Bioklimatik Pergola Sistemleri Sayfası
 */
export default function BioklimatikSistemlerPage() {
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
      description: "Bioklimatik sistem ile mekanınızın havasını, ışığını ve sıcaklığını optimal seviyede tutun.",
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
              alt="Bioklimatik Pergola Sistemleri"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-lg">
              Bioklimatik Pergola Sistemleri
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Doğa ile uyumlu, akıllı iklim kontrolü ile konforlu yaşam alanları
            </p>
          </div>
        </section>
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Bioklimatik Sistemler"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler */}
        <ProductDetailFeatures
          title="Bioklimatik Teknoloji"
          subtitle="Doğal havalandırma ve iklim kontrolü ile enerji verimliliği"
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
                <span className="text-sm font-medium">Teknik Dokümantasyon</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Detaylı Bilgi ve <span className="text-primary">Dokümantasyon</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ürünümüz hakkında detaylı teknik bilgiler ve katalog dosyalarını indirebilirsiniz
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
                    <h3 className="text-xl font-bold mb-2">Teknik Özellikler</h3>
                    <p className="text-muted-foreground text-sm">
                      Bioklimatik pergola sistemlerinin detaylı teknik özellikleri ve teknik çizimler
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
                    Teknik Dosyayı İndir
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
                    <h3 className="text-xl font-bold mb-2">E-Katalog</h3>
                    <p className="text-muted-foreground text-sm">
                      Tüm ürün gamımızı içeren kapsamlı e-katalog dosyası
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
                    E-Kataloğu İndir
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

