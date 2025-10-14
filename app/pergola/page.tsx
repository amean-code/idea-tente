import { Header } from "@/components/header"
import { PergolaHero } from "@/components/pergola-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { PergolaProductCards } from "@/components/pergola-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"

/**
 * Pergola Sistemleri ana sayfası
 * Palmiye Global referans alınarak tasarlanmıştır
 */
export default function BiyoklimatikPergolaPage() {
  // Galeri görselleri
  const galleryImages = [
    "/pergola/pergola-kafe-aktif.jpeg",
    "/pergola/pergola-dıs-mekan.jpeg",
    "/pergola/pergola-ic-mekan.jpeg",
    "/pergola/pergola-kafe-1.jpg",
    "/pergola/pergola-dıs-gunes.jpeg",
    "/pergola/pergola-beyaz.jpg",
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
      title: "Garanti & Özellikler",
      icon: "layers" as const,
      items: [
        { label: "Motor Garantisi", value: "2 Yıl" },
        { label: "Mekanik Garanti", value: "2 Yıl" },
        { label: "Eğim", value: "Düz veya %5 Eğimli" },
      ]
    },
  ]

  // Özellikler ve avantajlar
  const features = [
    {
      title: "105° Dönebilen Lameller",
      description: "Eksenel olarak 105° açıda açılabilen lameller ile güneş ışığını ve havalandırmayı aynı anda kontrol edin.",
      icon: "sun" as const,
    },
    {
      title: "%100 Su Geçirmezlik",
      description: "Lamellerdeki oluklar sayesinde yağmur suları yan oluklara akarak taşıyıcı ayaklardan dışarı atılır.",
      icon: "rain" as const,
    },
    {
      title: "Sessiz Çalışma",
      description: "Triger kayışı ile güç aktarımı sağlanan sistem sessiz ve pürüzsüz çalışır.",
      icon: "volume" as const,
    },
    {
      title: "Isı ve Ses Yalıtımı",
      description: "Lamellere dolgu malzemesi eklenerek üstün ısı ve ses izolasyonu sağlanabilir.",
      icon: "thermometer" as const,
    },
    {
      title: "Uzaktan Kumanda Kontrolü",
      description: "Açılma-kapanma ve yağmur modu uzaktan kumanda ile kontrol edilir. Otomatik hata önleme sistemi entegre.",
      icon: "smartphone" as const,
    },
    {
      title: "Tüm Mevsim Uyumlu",
      description: "Teras, kafe, restoran, kış bahçesi ve salon çatılarında rahatlıkla kullanılabilir. Düz ve eğimli çalışma imkanı.",
      icon: "shield" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section - Palmiye tarzı */}
        <PergolaHero />
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Biyoklimatik Pergola"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          title="Akıllı Pergola Teknolojisi"
          subtitle="Modern yaşam için tasarlanmış biyoklimatik pergola sistemlerimizin sunduğu üstün özellikler"
          features={features}
        />
        
        {/* Ana Ürün Kartları */}
        <PergolaProductCards />
        
        {/* Etkileşimli Ürün Seçim Sihirbazı - Kaldırıldı */}
        {/* <PergolaSelectionWizard /> */}
        
        {/* Referans Projeler */}
        <ReferenceProjects 
          serviceType="bioclimatic-pergola"
          useTranslations={true}
        />
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
