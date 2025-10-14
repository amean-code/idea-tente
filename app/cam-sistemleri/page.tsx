import { Header } from "@/components/header"
import { CamSistemleriHero } from "@/components/cam-sistemleri-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { CamSistemleriProductCards } from "@/components/cam-sistemleri-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"

/**
 * Cam Sistemleri ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function CamSistemleriPage() {
  // Galeri görselleri
  const galleryImages = [
    "/giyotin-cam/ev-giyotin.jpeg",
    "/giyotin-cam/kafe-giyotin-cam.jpeg",
    "/giyotin-cam/villa-giyotin2.jpg",
    "/giyotin-cam/kafe-giyotin-2.png",
    "/giyotin-cam/giyotin-kose.png",
    "/giyotin-cam/giyotin-cam.png",
  ]

  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Genişlik (maks.)", value: "600 cm" },
        { label: "Yükseklik (maks.)", value: "300 cm" },
      ]
    },
    {
      title: "Ürün Standartları",
      icon: "settings" as const,
      items: [
        { label: "Cam Tipi", value: "Temperli / Lamine" },
        { label: "Cam Kalınlığı", value: "8-10 mm" },
        { label: "Sistem", value: "Sürme / Katlanır" },
      ]
    },
    {
      title: "Renk Seçenekleri",
      icon: "palette" as const,
      items: [
        { label: "Profil Rengi", value: "RAL Renk Seçenekleri" },
        { label: "Cam", value: "Şeffaf / Tonlu / Mat" },
      ]
    },
    {
      title: "Ek Özellikler",
      icon: "layers" as const,
      items: [
        { label: "Ses Yalıtımı", value: "30-35 dB" },
        { label: "Güvenlik", value: "Temperli Cam" },
      ]
    },
  ]

  // Özellikler ve avantajlar
  const features = [
    {
      title: "Frameless Tasarım",
      description: "Çerçevesiz minimalist tasarım ile panoramik manzara ve maksimum ışık geçirgenliği.",
      icon: "check" as const,
    },
    {
      title: "Kolay Kullanım",
      description: "Hafif ve sessiz sürme mekanizması ile kolayca açılıp kapanır.",
      icon: "settings" as const,
    },
    {
      title: "Hava Koşullarına Dayanıklı",
      description: "Rüzgar, yağmur ve kar gibi hava koşullarına karşı yüksek dayanım.",
      icon: "shield" as const,
    },
    {
      title: "Güvenlik Camı",
      description: "Temperli veya lamine cam seçenekleri ile maksimum güvenlik sağlar.",
      icon: "lock" as const,
    },
    {
      title: "Enerji Verimliliği",
      description: "Özel cam kaplama teknolojisi ile ısı yalıtımı ve enerji tasarrufu.",
      icon: "battery" as const,
    },
    {
      title: "Ses Yalıtımı",
      description: "Kalın cam yapısı ile dış gürültüleri minimize eder.",
      icon: "volume" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <CamSistemleriHero />
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Cam Sistemleri"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          title="Modern Cam Teknolojisi"
          subtitle="Güvenlik, estetik ve fonksiyonelliği bir arada sunan cam sistemleri"
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
