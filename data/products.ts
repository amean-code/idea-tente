import { Zap, Shield, Star, Sun, Wind } from "lucide-react"

/**
 * Ürün tipi tanımı
 * Her ürünün temel özelliklerini içerir
 */
export interface Product {
  id: string
  title: string
  description: string
  image: string
  href: string
  features: string[]
  badge: string
  icon: any
}

/**
 * Tüm ürünlerin listesini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Ürün listesi
 */
export const getProducts = (t: any): Product[] => [
  {
    id: "bioclimatic-pergola",
    title: t("products.bioclimatic"),
    description: t("products.bioclimaticDesc"),
    image: "/pergola/pergola-kapak.jpeg",
    href: "/pergola/bioklimatik",
    features: [
      t("products.features.smartLouver"), 
      t("products.features.climateControl"), 
      t("products.features.ledLighting")
    ],
    badge: t("products.badges.popular"),
    icon: Zap,
  },
  {
    id: "glass-systems",
    title: t("products.glass"),
    description: t("nav.glassDesc"),
    image: "/giyotin-cam/giyotin-cam.png",
    href: "/cam-sistemleri",
    features: [
      t("products.features.framelessDesign"), 
      t("products.features.slidingSystem"), 
      t("products.features.safetyGlass")
    ],
    badge: t("products.badges.premium"),
    icon: Shield,
  },
  {
    id: "winter-garden",
    title: t("products.winterGarden"),
    description: t("products.winterGardenDesc"),
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
    href: "/kis-bahcesi",
    features: [
      t("products.features.fourSeasons"), 
      t("products.features.thermalInsulation"), 
      t("products.features.naturalLighting")
    ],
    badge: t("products.badges.new"),
    icon: Star,
  },
  {
    id: "sun-breakers",
    title: t("products.sunBreaker"),
    description: t("products.sunBreakerDesc"),
    image: "/pergola/pergola-dıs-gunes.jpeg",
    href: "/gunes-kiriclari",
    features: [
      t("products.features.sunControl"),
      t("products.features.energySaving"),
      t("products.features.uvProtection")
    ],
    badge: t("products.badges.efficient"),
    icon: Sun,
  },
  {
    id: "zip-screen",
    title: t("products.zipScreen"),
    description: t("products.zipScreenDesc"),
    image: "/zip-perde/zip-perde-2.jpeg",
    href: "/zip-perde",
    features: [
      t("products.features.windResistance"),
      t("products.features.uvProtection"),
      t("products.features.silentOperation")
    ],
    badge: t("products.badges.popular"),
    icon: Wind,
  },
]

/**
 * Kış Bahçesi alt ürünlerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Kış bahçesi alt ürün listesi
 */
export const getWinterGardenSubProducts = (t: any) => [
  {
    id: "premium-kis-bahcesi",
    name: t("products.winterGardenSub.premium.title"),
    description: t("products.winterGardenSub.premium.description"),
    image: "/premium-winter-garden-smart-glass.jpg",
    features: ["Akıllı Cam", "Otomatik Havalandırma", "Isı Pompası", "Uzaktan Kontrol"],
    badge: t("products.winterGardenSub.premium.badge"),
    href: "/kis-bahcesi/premium-kis-bahcesi",
  },
  {
    id: "standart-kis-bahcesi",
    name: t("products.winterGardenSub.standard.title"),
    description: t("products.winterGardenSub.standard.description"),
    image: "/standard-winter-garden-double-glass.jpg",
    features: ["Çift Cam", "Manuel Havalandırma", "Termal Kesim", "10 Yıl Garanti"],
    badge: t("products.winterGardenSub.standard.badge"),
    href: "/kis-bahcesi/standart-kis-bahcesi",
  },
  {
    id: "lux-kis-bahcesi",
    name: t("products.winterGardenSub.luxury.title"),
    description: t("products.winterGardenSub.luxury.description"),
    image: "/luxury-winter-garden-panoramic-view.jpg",
    features: ["Panoramik Cam", "Akıllı Ev Entegrasyonu", "Gömme Isıtma", "Premium Malzeme"],
    badge: t("products.winterGardenSub.luxury.badge"),
    href: "/kis-bahcesi/lux-kis-bahcesi",
  },
]

/**
 * Güneş Kırıcı alt ürünlerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Güneş kırıcı alt ürün listesi
 */
export const getSunBreakerSubProducts = (t: any) => [
  {
    id: "sabit-gunes-kirici",
    name: t("products.sunBreakerSub.fixed.title"),
    description: t("products.sunBreakerSub.fixed.description"),
    image: "/pergola/pergola-dıs-gunes-2.jpeg",
    features: ["Alüminyum Profil", "Özel Renk", "Kolay Montaj", "Uzun Ömür"],
    badge: t("products.sunBreakerSub.fixed.badge"),
    price: "₺15.000",
    href: "/gunes-kiriclari/sabit-gunes-kirici",
  },
  {
    id: "hareketli-gunes-kirici",
    name: t("products.sunBreakerSub.motorized.title"),
    description: t("products.sunBreakerSub.motorized.description"),
    image: "/pergola/pergola-render-siyah.jpg",
    features: ["Motorlu Kontrol", "Akıllı Sensör", "Uzaktan Kumanda", "Otomatik"],
    badge: t("products.sunBreakerSub.motorized.badge"),
    price: "₺35.000",
    href: "/gunes-kiriclari/hareketli-gunes-kirici",
  },
  {
    id: "dikey-gunes-kirici",
    name: t("products.sunBreakerSub.vertical.title"),
    description: t("products.sunBreakerSub.vertical.description"),
    image: "/pergola/pergola-render-siyah-gece.jpg",
    features: ["Cephe Entegrasyonu", "Estetik Tasarım", "Enerji Tasarrufu", "Modern Görünüm"],
    badge: t("products.sunBreakerSub.vertical.badge"),
    price: "₺25.000",
    href: "/gunes-kiriclari/dikey-gunes-kirici",
  },
]

/**
 * Zip Perde alt ürünlerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Zip perde alt ürün listesi
 */
export const getZipScreenSubProducts = (t: any) => [
  {
    id: "motorlu-zip-perde",
    name: t("products.zipScreenSub.motorized.title"),
    description: t("products.zipScreenSub.motorized.description"),
    image: "/zip-perde/zip-perde-3.jpeg",
    features: ["Motorlu Sistem", "Uzaktan Kumanda", "Sessiz Çalışma", "Otomatik Durdurma"],
    price: "₺4.500",
    badge: t("products.zipScreenSub.motorized.badge"),
    href: "/zip-perde/motorlu-zip-perde",
  },
  {
    id: "manuel-zip-perde",
    name: t("products.zipScreenSub.manual.title"),
    description: t("products.zipScreenSub.manual.description"),
    image: "/zip-perde/zip-perde-4.jpeg",
    features: ["Manuel Kullanım", "Ekonomik", "Dayanıklı Kumaş", "Kolay Montaj"],
    price: "₺2.800",
    badge: t("products.zipScreenSub.manual.badge"),
    href: "/zip-perde/manuel-zip-perde",
  },
  {
    id: "akilli-zip-perde",
    name: t("products.zipScreenSub.smart.title"),
    description: t("products.zipScreenSub.smart.description"),
    image: "/zip-perde/zip-perde-5.jpeg",
    features: ["Akıllı Sensör", "Otomatik Kontrol", "Rüzgar Sensörü", "Güneş Sensörü"],
    price: "₺7.200",
    badge: t("products.zipScreenSub.smart.badge"),
    href: "/zip-perde/akilli-zip-perde",
  },
]

/**
 * Kış Bahçesi özellikleri
 */
export const winterGardenFeatures = [
  {
    title: "Termal İzolasyon",
    description: "Üstün yalıtım özellikleri ile enerji tasarrufu",
  },
  {
    title: "Dayanıklılık",
    description: "Hava koşullarına karşı maksimum direnç",
  },
  {
    title: "Akıllı Kontrol",
    description: "Otomatik iklim kontrol sistemleri",
  },
]

/**
 * Kış Bahçesi avantajları
 */
export const winterGardenBenefits = [
  "4 mevsim kullanım imkanı",
  "Enerji tasarrufu sağlar",
  "Yaşam alanınızı genişletir",
  "Mülk değerinizi artırır",
  "Doğal ışık alımı",
  "Sessiz ve konforlu ortam",
]

/**
 * Güneş Kırıcı avantajları
 */
export const sunBreakerBenefits = [
  {
    title: "Güneş Kontrolü",
    description: "İstenmeyen güneş ışınlarını engeller",
  },
  {
    title: "Enerji Tasarrufu",
    description: "Klima maliyetlerini %40'a kadar azaltır",
  },
  {
    title: "UV Koruması",
    description: "Zararlı UV ışınlarından koruma",
  },
  {
    title: "Ayarlanabilir",
    description: "İhtiyaca göre açı ayarlaması",
  },
]

/**
 * Zip Perde özellikleri
 */
export const zipScreenFeatures = [
  {
    title: "Rüzgar Dayanımı",
    description: "120 km/h rüzgar hızına kadar dayanıklılık",
  },
  {
    title: "UV Koruması",
    description: "%95 UV koruma sağlar",
  },
  {
    title: "Sessiz Çalışma",
    description: "Gürültüsüz motor teknolojisi",
  },
  {
    title: "Akıllı Kontrol",
    description: "Uzaktan kumanda ve sensör kontrolü",
  },
]

/**
 * Zip Perde uygulama alanları
 */
export const zipScreenApplications = [
  {
    title: "Restoran Terasları",
    description: "Açık hava yemek alanları için ideal çözüm",
    image: "/zip-perde/zip-perde-8.jpeg",
  },
  {
    title: "Otel Balkonları",
    description: "Misafir konforunu artıran perde sistemleri",
    image: "/zip-perde/zip-perde-9.jpeg",
  },
  {
    title: "Konut Bahçeleri",
    description: "Ev bahçeleri için şık ve fonksiyonel çözümler",
    image: "/zip-perde/zip-perde-2.jpeg",
  },
]

/**
 * Zip Perde avantajları
 */
export const zipScreenAdvantages = [
  "Kolay kullanım ve kontrol",
  "Dayanıklı kumaş teknolojisi",
  "Hızlı montaj imkanı",
  "Minimal bakım gereksinimi",
  "Geniş renk ve desen seçenekleri",
  "10 yıl garanti",
]

