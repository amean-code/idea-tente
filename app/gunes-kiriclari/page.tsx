import { Header } from "@/components/header"
import { GunesKiriclariHero } from "@/components/gunes-kiriclari-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { GunesKiriclariProductCards } from "@/components/gunes-kiriclari-product-cards"
import { ReferenceProjects } from "@/components/reference-projects"
import { ContactSection } from "@/components/contact-section"
import { getGalleryImages } from "@/lib/gallery-config"

/**
 * Güneş kırıcıları galerisini ortak manifest dosyasından okur.
 */
const galleryImages = getGalleryImages("gunes-kiriclari")

/**
 * Güneş Kırıcıları ana sayfası
 * Palmiye Global Platinum ürün sayfası konseptinde tasarlanmıştır
 */
export default function SunBreakersPage() {
  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Genişlik (maks.)", value: "500 cm" },
        { label: "Yükseklik (maks.)", value: "400 cm" },
      ]
    },
    {
      title: "Ürün Standartları",
      icon: "settings" as const,
      items: [
        { label: "Malzeme", value: "Alüminyum" },
        { label: "Kontrol", value: "Manuel / Motorlu" },
        { label: "Tip", value: "Sabit / Hareketli" },
      ]
    },
    {
      title: "Renk Seçenekleri",
      icon: "palette" as const,
      items: [
        { label: "Profil Rengi", value: "RAL Renk Paleti" },
        { label: "Kaplama", value: "Ahşap Desenli / Mat" },
      ]
    },
    {
      title: "Ek Özellikler",
      icon: "layers" as const,
      items: [
        { label: "UV Koruma", value: "%95'e kadar" },
        { label: "Enerji Tasarrufu", value: "%30'a kadar" },
      ]
    },
  ]

  // Özellikler ve avantajlar
  const features = [
    {
      title: "UV Koruma",
      description: "Güneşin zararlı ışınlarını %95'e kadar engelleyerek iç mekanı korur.",
      icon: "sun" as const,
    },
    {
      title: "Enerji Tasarrufu",
      description: "Güneş kontrolü ile klimatizasyon maliyetlerini %30'a kadar azaltır.",
      icon: "battery" as const,
    },
    {
      title: "Estetik Cephe",
      description: "Modern mimari tasarıma katkı sağlayan şık ve işlevsel cephe çözümü.",
      icon: "check" as const,
    },
    {
      title: "Mahremiyet",
      description: "Dış görüş engellemesi ile özel alanlarınızı korur.",
      icon: "lock" as const,
    },
    {
      title: "Akıllı Kontrol",
      description: "Motorlu sistemlerde güneş sensörü ile otomatik açılma kapanma.",
      icon: "smartphone" as const,
    },
    {
      title: "Dayanıklılık",
      description: "Hava koşullarına karşı yüksek dayanıklı alüminyum profil.",
      icon: "shield" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <GunesKiriclariHero />
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Güneş Kırıcıları"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          title="Akıllı Güneş Kontrolü"
          subtitle="Enerji verimliliği ve konfor için tasarlanmış güneş kırıcı sistemleri"
          features={features}
        />
        
        {/* Alt Ürünler */}
        {/* <GunesKiriclariProductCards /> */}
        
        {/* Referans Projeler */}
        <ReferenceProjects 
          serviceType="sun-breakers"
          useTranslations={true}
        />
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
