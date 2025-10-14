import { Header } from "@/components/header"
import { ZipPerdeHero } from "@/components/zip-perde-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { ZipPerdeProductCards } from "@/components/zip-perde-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"

/**
 * Zip Perde ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function ZipScreenPage() {
  // Galeri görselleri
  const galleryImages = [
    "/zip-perde/zip-perde-2.jpeg",
    "/zip-perde/zip-perde-3.jpeg",
    "/zip-perde/zip-perde-4.jpeg",
    "/zip-perde/zip-perde-5.jpeg",
    "/zip-perde/zip-perde-8.jpeg",
    "/zip-perde/zip-perde-9.jpeg",
  ]

  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Genişlik (min. - maks.)", value: "150 - 600 cm" },
        { label: "Yükseklik (maks.)", value: "300 cm" },
      ]
    },
    {
      title: "Ürün Standartları",
      icon: "settings" as const,
      items: [
        { label: "Kontrol Tipi", value: "Manuel / Motorlu" },
        { label: "Kumaş", value: "Screen / Blackout" },
        { label: "Profil", value: "Alüminyum" },
      ]
    },
    {
      title: "Renk Seçenekleri",
      icon: "palette" as const,
      items: [
        { label: "Profil Rengi", value: "RAL Renk Seçenekleri" },
        { label: "Kumaş Rengi", value: "Geniş Renk Paleti" },
      ]
    },
    {
      title: "Ek Özellikler",
      icon: "layers" as const,
      items: [
        { label: "Rüzgar Dayanımı", value: "80 km/saat'e kadar" },
        { label: "UV Koruma", value: "UPF 50+" },
      ]
    },
  ]

  // Özellikler ve avantajlar
  const features = [
    {
      title: "Rüzgar Dayanımı",
      description: "Fermuarlı sistem sayesinde yüksek rüzgar hızlarına karşı maksimum dayanım sağlar.",
      icon: "wind" as const,
    },
    {
      title: "UV Koruma",
      description: "UPF 50+ koruma ile zararlı güneş ışınlarını engeller, mekanınızı serinletir.",
      icon: "sun" as const,
    },
    {
      title: "Su Geçirmezlik",
      description: "Özel kumaş ve profil yapısı ile yağmura karşı tam koruma sağlar.",
      icon: "rain" as const,
    },
    {
      title: "Akıllı Kontrol",
      description: "İOS ve Android uyumlu akıllı telefon kontrolü ile uzaktan yönetim imkanı.",
      icon: "smartphone" as const,
    },
    {
      title: "Güneş Sensörü",
      description: "Güneşli havalarda otomatik olarak devreye girerek enerji tasarrufu sağlar.",
      icon: "sun" as const,
    },
    {
      title: "Rüzgar Sensörü",
      description: "Yüksek rüzgar hızı algılandığında ürününüzü otomatik olarak korur.",
      icon: "shield" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <ZipPerdeHero />
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Zip Perde"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          title="Kontrol ve Otomasyon"
          subtitle="Modern teknoloji ile donatılmış zip perde sistemlerimiz, konforunuz için tasarlandı"
          features={features}
        />
        
        {/* Alt Ürünler */}
        {/* <ZipPerdeProductCards /> */}
        
        {/* Referans Projeler */}
        <ReferenceProjects 
          serviceType="zip-screen"
          useTranslations={true}
        />
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
