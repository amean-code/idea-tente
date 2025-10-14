import { Header } from "@/components/header"
import { KisBahcesiHero } from "@/components/kis-bahcesi-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { KisBahcesiProductCards } from "@/components/kis-bahcesi-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"

/**
 * Kış Bahçesi ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function WinterGardenPage() {
  // Galeri görselleri
  const galleryImages = [
    "/pergola/pergola-kapak.jpeg",
    "/pergola/pergola-render-siyah-gece.jpg",
    "/pergola/pergola-render-siyah.jpg",
    "/pergola/pergola-ic-mekan.jpeg",
    "/pergola/pergola-kafe-aktif-2.jpg",
    "/pergola/pergola-beyaz.jpg",
  ]

  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Alan (min. - maks.)", value: "10 - 100 m²" },
        { label: "Yükseklik (maks.)", value: "350 cm" },
      ]
    },
    {
      title: "Ürün Standartları",
      icon: "settings" as const,
      items: [
        { label: "Cam Tipi", value: "Çift Cam / Low-E" },
        { label: "Profil", value: "Alüminyum" },
        { label: "Isı Yalıtımı", value: "Yüksek Performans" },
      ]
    },
    {
      title: "Renk Seçenekleri",
      icon: "palette" as const,
      items: [
        { label: "Profil Rengi", value: "RAL Renk Seçenekleri" },
        { label: "Cam", value: "Şeffaf / Tonlu" },
      ]
    },
    {
      title: "Ek Özellikler",
      icon: "layers" as const,
      items: [
        { label: "Ses Yalıtımı", value: "35-40 dB" },
        { label: "Enerji Tasarrufu", value: "%40'a kadar" },
      ]
    },
  ]

  // Özellikler ve avantajlar
  const features = [
    {
      title: "4 Mevsim Kullanım",
      description: "Üstün yalıtım özellikleri ile yaz ve kış mevsimlerinde konforlu kullanım sağlar.",
      icon: "thermometer" as const,
    },
    {
      title: "Enerji Tasarrufu",
      description: "Çift cam ve özel profil yapısı ile enerji tüketiminizi %40'a kadar azaltır.",
      icon: "battery" as const,
    },
    {
      title: "Ses Yalıtımı",
      description: "Özel cam ve profil sistemi ile dış gürültüleri minimize eder.",
      icon: "volume" as const,
    },
    {
      title: "Güvenlik",
      description: "Temperli cam ve sağlam alüminyum profil ile maksimum güvenlik sağlar.",
      icon: "shield" as const,
    },
    {
      title: "Otomatik Havalandırma",
      description: "Akıllı havalandırma sistemi ile taze hava sirkülasyonu sağlar.",
      icon: "wind" as const,
    },
    {
      title: "Akıllı Kontrol",
      description: "Mobil uygulama ile ısıtma, havalandırma ve aydınlatmayı kontrol edin.",
      icon: "smartphone" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <KisBahcesiHero />
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Kış Bahçesi"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          title="Konfor ve Teknoloji"
          subtitle="Modern kış bahçesi sistemlerimiz, maksimum konfor ve enerji verimliliği için tasarlandı"
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
