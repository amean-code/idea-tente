import { ProductHero } from "@/components/product-hero"
import { ProductFeatures } from "@/components/product-features"
import { ProductGallery } from "@/components/product-gallery"
import { ProductSpecs } from "@/components/product-specs"
import { RelatedProducts } from "@/components/related-products"
import { ProductCTA } from "@/components/product-cta"
import { SubProductsShowcase } from "@/components/sub-products-showcase"

const camSistemleriData = {
  title: "Cam Sistemleri",
  subtitle: "Frameless cam çözümleri ile kesintisiz manzara",
  description:
    "Sürme cam sistemlerimiz ile mekanlarınızı dış etkenlere karşı korurken, manzaranızdan ödün vermeden konforunuzu artırın. Frameless tasarım ile modern ve şık görünüm.",
  heroImage: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
  features: [
    {
      title: "Frameless Tasarım",
      description: "Kesintisiz manzara için çerçevesiz cam sistemleri",
      icon: "shield" as const,
    },
    {
      title: "Sürme Sistem",
      description: "Kolay açılır kapanır sürme mekanizması",
      icon: "settings" as const,
    },
    {
      title: "Güvenlik Camı",
      description: "Temperli güvenlik camı ile maksimum güvenlik",
      icon: "award" as const,
    },
    {
      title: "Hava Koşulları",
      description: "Rüzgar, yağmur ve soğuğa karşı mükemmel koruma",
      icon: "wind" as const,
    },
    {
      title: "Kolay Temizlik",
      description: "Self-cleaning cam teknolojisi ile kolay bakım",
      icon: "lightbulb" as const,
    },
    {
      title: "Özel Ölçü",
      description: "İhtiyaçlarınıza göre özel ölçü üretim",
      icon: "smartphone" as const,
    },
  ],
  gallery: [
    "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
    "/luxury-modern-pergola-with-glass-panels-by-pool-at.jpg",
    "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
  ],
  specs: {
    "Cam Kalınlığı": "8mm Temperli Cam",
    "Profil Malzemesi": "Alüminyum 6063-T5",
    "Maksimum Panel Genişliği": "3000mm",
    "Maksimum Panel Yüksekliği": "3000mm",
    "Rüzgar Dayanımı": "150 km/h",
    "Su Geçirmezlik": "IP65",
    "Renk Seçenekleri": "RAL renk kartelası",
    Garanti: "10 yıl",
  },
}

const subProducts = [
  {
    id: "surme-cam",
    name: "Sürme Cam Sistemleri",
    description: "Frameless sürme cam sistemleri ile kesintisiz manzara ve maksimum konfor",
    image: "/frameless-sliding-glass-system-terrace.jpg",
    features: ["Frameless", "Sürme Sistem", "Temperli Cam", "Rüzgar Dayanımı"],
    badge: "Popüler",
    href: "/cam-sistemleri/surme-cam",
  },
  {
    id: "katlanir-cam",
    name: "Katlanır Cam Sistemleri",
    description: "Accordion tarzı katlanır cam sistemleri ile geniş açılım imkanı",
    image: "/folding-glass-system-restaurant.jpg",
    features: ["Katlanır", "Geniş Açılım", "Güvenlik Camı", "Özel Ölçü"],
    href: "/cam-sistemleri/katlanir-cam",
  },
  {
    id: "sabit-cam",
    name: "Sabit Cam Sistemleri",
    description: "Sabit cam panelleri ile kalıcı koruma ve modern görünüm",
    image: "/fixed-glass-panels-modern-building.jpg",
    features: ["Sabit Panel", "Yalıtım", "UV Koruma", "Kolay Bakım"],
    href: "/cam-sistemleri/sabit-cam",
  },
]

export default function CamSistemleriPage() {
  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('/frameless-glass-sliding-system--modern-terrace-wit.jpg')"
          }}
        />
      </div>
      
      <main className="relative z-10">
        <ProductHero
          title={camSistemleriData.title}
          subtitle={camSistemleriData.subtitle}
          description={camSistemleriData.description}
          heroImage={camSistemleriData.heroImage}
        />
        <ProductFeatures features={camSistemleriData.features} />

        <SubProductsShowcase
          title="Cam Sistemi Çeşitlerimiz"
          subtitle="İhtiyaçlarınıza uygun cam sistemi çözümlerini keşfedin"
          products={subProducts}
        />

        <ProductGallery images={camSistemleriData.gallery} />
        <ProductSpecs specs={camSistemleriData.specs} />
        <ProductCTA productName="Cam Sistemleri" />
        <RelatedProducts currentProduct="cam-sistemleri" />
      </main>
    </div>
  )
}
