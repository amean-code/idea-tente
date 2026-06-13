import { Header } from "@/components/header"
import { GunesKiriclariHero } from "@/components/gunes-kiriclari-hero"
import { ProductDetailGallery } from "@/components/product-detail-gallery"
import { ProductDetailSpecs } from "@/components/product-detail-specs"
import { ProductDetailFeatures } from "@/components/product-detail-features"
import { GunesKiriclariProductCards } from "@/components/gunes-kiriclari-product-cards"
import { ContactSection } from "@/components/contact-section"

export interface GunesKiriciPageViewProps {
  galleryImages: string[]
  coverImage: string
}

/**
 * Güneş Kırıcıları ana sayfası (görünüm)
 */
export function GunesKiriciPageView({ galleryImages, coverImage }: GunesKiriciPageViewProps) {
  // Teknik özellikler
  const specs = [
    {
      title: "Boyutlar",
      icon: "ruler" as const,
      items: [
        { label: "Genişlik (min. - maks.)", value: "70 - 600 cm" },
        { label: "Yükseklik (min. - maks.)", value: "100 - 600 cm" },
      ]
    },
    {
      title: "Ürün Standartları",
      icon: "settings" as const,
      items: [
        { label: "Malzeme", value: "Alüminyum 6063-T6 F25" },
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
      description: "Güneş ışığını kontrollü şekilde yöneterek iç mekan konforunu artırır.",
      icon: "sun" as const,
    },
    {
      title: "Enerji Verimliliği",
      description: "Güneş kontrolü sayesinde iç mekan hava dengesine katkı sağlar.",
      icon: "battery" as const,
    },
    {
      title: "Estetik Cephe",
      description: "Modern mimari ile uyumlu şık ve fonksiyonel cephe görünümü sunar.",
      icon: "check" as const,
    },
    {
      title: "Görsel Konfor",
      description: "Işık geçirgenliğini korurken dış görünürlüğü kontrollü hale getirir.",
      icon: "eyeClosed" as const,
    },
    {
      title: "Akıllı Kontrol",
      description: "Motorlu sistem seçenekleri ile otomasyon ve kolay kullanım imkanı sunar.",
      icon: "smartphone" as const,
    },
    {
      title: "Dayanıklılık",
      description: "Alüminyum yapısı ve dayanıklı profilleriyle uzun ömürlü kullanım sunar.",
      icon: "shield" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <GunesKiriclariHero imageSrc={coverImage} />
        
        {/* Galeri */}
        <ProductDetailGallery
          images={galleryImages}
          productName="Güneş Kırıcıları"
        />
        
        {/* Teknik Özellikler */}
        <ProductDetailSpecs categories={specs} />
        
        {/* Özellikler ve Avantajlar */}
        <ProductDetailFeatures
          title="Güneş Kontrolü"
          subtitle="Enerji verimliliği ve konfor için tasarlanmış güneş kırıcı sistemleri"
          features={features}
        />
        
        {/* Alt Ürünler */}
        {/* <GunesKiriclariProductCards /> */}
        
        {/* İletişim Bölümü */}
        <ContactSection />
      </main>
    </div>
  )
}
