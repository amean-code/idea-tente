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
    image: "/pergola/pergola-kapak.webp",
    href: "/pergola/bioklimatik-sistemler",
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
      image: "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-3.webp",
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
    image: "/winter-garden-conservatory-with-glass-roof--indoor.webp",
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
    image: "/pergola/pergola-dıs-gunes.webp",
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
    image: "/zip-perde/zip-perde-2.webp",
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
    image: "/premium-winter-garden-smart-glass.webp",
    features: t("products.winterGardenSub.premium.features"),
    badge: t("products.winterGardenSub.premium.badge"),
    href: "/kis-bahcesi/premium-kis-bahcesi",
  },
  {
    id: "standart-kis-bahcesi",
    name: t("products.winterGardenSub.standard.title"),
    description: t("products.winterGardenSub.standard.description"),
    image: "/standard-winter-garden-double-glass.webp",
    features: t("products.winterGardenSub.standard.features"),
    badge: t("products.winterGardenSub.standard.badge"),
    href: "/kis-bahcesi/standart-kis-bahcesi",
  },
  {
    id: "lux-kis-bahcesi",
    name: t("products.winterGardenSub.luxury.title"),
    description: t("products.winterGardenSub.luxury.description"),
    image: "/luxury-winter-garden-panoramic-view.webp",
    features: t("products.winterGardenSub.luxury.features"),
    badge: t("products.winterGardenSub.luxury.badge"),
    href: "/kis-bahcesi/lux-kis-bahcesi",
  },
]

/**
 * Güneş Kırıcı alt ürünlerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Güneş kırıcı alt ürün listesi
 */
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
    image: "/pergola/pergola-dıs-gunes-2.webp",
    features: t("products.sunBreakerSub.fixed.features"),
    badge: t("products.sunBreakerSub.fixed.badge"),
    price: "₺15.000",
    href: "/gunes-kiriclari/sabit-gunes-kirici",
  },
  {
    id: "hareketli-gunes-kirici",
    name: t("products.sunBreakerSub.motorized.title"),
    description: t("products.sunBreakerSub.motorized.description"),
    image: "/pergola/pergola-render-siyah.webp",
    features: t("products.sunBreakerSub.motorized.features"),
    badge: t("products.sunBreakerSub.motorized.badge"),
    price: "₺35.000",
    href: "/gunes-kiriclari/hareketli-gunes-kirici",
  },
  {
    id: "dikey-gunes-kirici",
    name: t("products.sunBreakerSub.vertical.title"),
    description: t("products.sunBreakerSub.vertical.description"),
    image: "/pergola/pergola-render-siyah-gece.webp",
    features: t("products.sunBreakerSub.vertical.features"),
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
    image: "/zip-perde/zip-perde-3.webp",
    features: t("products.zipScreenSub.motorized.features"),
    price: "₺4.500",
    badge: t("products.zipScreenSub.motorized.badge"),
    href: "/zip-perde/motorlu-zip-perde",
  },
  {
    id: "manuel-zip-perde",
    name: t("products.zipScreenSub.manual.title"),
    description: t("products.zipScreenSub.manual.description"),
    image: "/zip-perde/zip-perde-4.webp",
    features: t("products.zipScreenSub.manual.features"),
    price: "₺2.800",
    badge: t("products.zipScreenSub.manual.badge"),
    href: "/zip-perde/manuel-zip-perde",
  },
  {
    id: "akilli-zip-perde",
    name: t("products.zipScreenSub.smart.title"),
    description: t("products.zipScreenSub.smart.description"),
    image: "/zip-perde/zip-perde-5.webp",
    features: t("products.zipScreenSub.smart.features"),
    price: "₺7.200",
    badge: t("products.zipScreenSub.smart.badge"),
    href: "/zip-perde/akilli-zip-perde",
  },
]

/**
 * Kış Bahçesi özelliklerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Kış bahçesi özellikleri
 */
export const getWinterGardenFeatures = (t: any) => t("products.winterGardenFeatures")

/**
 * Kış Bahçesi avantajlarını döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Kış bahçesi avantajları
 */
export const getWinterGardenBenefits = (t: any) => t("products.winterGardenBenefits")

/**
 * Güneş Kırıcı avantajlarını döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Güneş kırıcı avantajları
 */
export const getSunBreakerBenefits = (t: any) => t("products.sunBreakerBenefits")

/**
 * Zip Perde özelliklerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Zip perde özellikleri
 */
export const getZipScreenFeatures = (t: any) => t("products.zipScreenFeatures")

/**
 * Zip Perde uygulama alanlarını döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Zip perde uygulama alanları
 */
export const getZipScreenApplications = (t: any) => {
  const apps = t("products.zipScreenApplications")
  return apps.map((app: any, index: number) => ({
    ...app,
    image: ["/zip-perde/zip-perde-8.webp", "/zip-perde/zip-perde-9.webp", "/zip-perde/zip-perde-2.webp"][index]
  }))
}

/**
 * Zip Perde avantajlarını döndüren fonksiyon
 * @param t - Çeviri fonksiyonu
 * @returns Zip perde avantajları
 */
export const getZipScreenAdvantages = (t: any) => t("products.zipScreenAdvantages")

