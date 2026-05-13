/**
 * Ürün alt kategorileri için merkezi veri dosyası
 * Ana ürünlerin alt kategorilerini organize eder
 */

export interface SubCategory {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  badge: string
  price?: string
  href: string
  parentProduct: string // Ana ürün ID'si
}

/**
 * Pergola alt kategorileri
 * @param t - Çeviri fonksiyonu
 * @returns Pergola alt kategori listesi
 */
export const getPergolaSubCategories = (t: any): SubCategory[] => [
  {
    id: "bioklimatik-sistemler",
    name: t("nav.pergolaBioclimatic"),
    description: t("nav.pergolaBioclimaticDesc"),
    image: "/pergola/pergola-dıs-gunes.webp",
    features: [
      t("pergolaProducts.bioclimatic.features.rotatable"),
      "Akıllı İklim",
      "Su Geçirmez",
      "Enerji Tasarrufu",
    ],
    badge: t("products.badges.popular"),
    href: "/pergola/bioklimatik-sistemler",
    parentProduct: "bioclimatic-pergola"
  },
  {
    id: "motorlu-sistemler", 
    name: t("nav.pergolaMotorized"),
    description: t("nav.pergolaMotorizedDesc"),
    image: "/pergola/pergola-kafe-aktif.webp",
    features: ["Güneş Sensörü", "Rüzgar Sensörü", "Uzaktan Kumanda", "Sessiz Motor"],
    badge: t("products.badges.premium"),
    href: "/pergola/motorlu-sistemler",
    parentProduct: "bioclimatic-pergola"
  }
]

/**
 * Cam Sistemleri alt kategorileri
 * @param t - Çeviri fonksiyonu
 * @returns Cam sistemleri alt kategori listesi
 */
export const getGlassSystemsSubCategories = (t: any): SubCategory[] => [
  {
    id: "surme-cam",
    name: t("nav.glassSliding"),
    description: t("nav.glassSlidingDesc"),
    image: "/folding-glass-gallery-1.webp",
    features: ["Frameless", "Sürme Sistem", "Temperli Cam", "Rüzgar Dayanımı"],
    badge: t("products.badges.popular"),
    href: "/cam-sistemleri/surme-cam",
    parentProduct: "glass-systems"
  },
  {
    id: "katlanir-cam",
    name: t("nav.glassFolding"),
    description: t("nav.glassFoldingDesc"),
    image: "/folding-glass-gallery-2.webp",
    features: ["Katlanır", "Geniş Açılım", "Güvenlik Camı", "Özel Ölçü"],
    badge: t("products.badges.premium"),
    href: "/cam-sistemleri/katlanir-cam",
    parentProduct: "glass-systems"
  },
  {
    id: "sabit-cam",
    name: t("nav.glassFixed"),
    description: t("nav.glassFixedDesc"),
    image: "/giyotin-cam/giyotin-cam-sistemleri-restorant-dis-acik-3.webp",
    features: ["Sabit Panel", "Yalıtım", "UV Koruma", "Kolay Bakım"],
    badge: t("products.badges.efficient"),
    href: "/cam-sistemleri/sabit-cam",
    parentProduct: "glass-systems"
  }
]

/**
 * Kış Bahçesi alt kategorileri
 * @param t - Çeviri fonksiyonu
 * @returns Kış bahçesi alt kategori listesi
 */
export const getWinterGardenSubCategories = (t: any): SubCategory[] => [
  {
    id: "premium-kis-bahcesi",
    name: t("nav.winterGardenPremium"),
    description: t("nav.winterGardenPremiumDesc"),
    image: "/pergola/pergola-render-siyah-gece.webp",
    features: ["Akıllı Cam", "Otomatik Havalandırma", "Isı Pompası", "Uzaktan Kontrol"],
    badge: t("products.badges.premium"),
    href: "/kis-bahcesi/premium-kis-bahcesi",
    parentProduct: "winter-garden"
  },
  {
    id: "standart-kis-bahcesi",
    name: t("nav.winterGardenStandard"),
    description: t("nav.winterGardenStandardDesc"),
    image: "/pergola/pergola-ic-mekan.webp",
    features: ["Çift Cam", "Manuel Havalandırma", "Termal Kesim", "10 Yıl Garanti"],
    badge: t("products.badges.efficient"),
    href: "/kis-bahcesi/standart-kis-bahcesi",
    parentProduct: "winter-garden"
  },
  {
    id: "lux-kis-bahcesi",
    name: t("nav.winterGardenLux"),
    description: t("nav.winterGardenLuxDesc"),
    image: "/pergola/pergola-beyaz.webp",
    features: ["Panoramik Cam", "Akıllı Ev Entegrasyonu", "Gömme Isıtma", "Premium Malzeme"],
    badge: t("products.badges.premium"),
    href: "/kis-bahcesi/lux-kis-bahcesi",
    parentProduct: "winter-garden"
  }
]

/**
 * Güneş Kırıcı alt kategorileri
 * @param t - Çeviri fonksiyonu
 * @returns Güneş kırıcı alt kategori listesi
 */
export const getSunBreakerSubCategories = (t: any): SubCategory[] => [
  {
    id: "sabit-gunes-kirici",
    name: t("nav.sunBreakerFixed"),
    description: t("nav.sunBreakerFixedDesc"),
    image: "/pergola/pergola-dıs-gunes-2.webp",
    features: ["Alüminyum Profil", "Özel Renk", "Kolay Montaj", "Uzun Ömür"],
    badge: t("products.badges.efficient"),
    href: "/gunes-kiriclari/sabit-gunes-kirici",
    parentProduct: "sun-breakers"
  },
  {
    id: "hareketli-gunes-kirici",
    name: t("nav.sunBreakerMotorized"),
    description: t("nav.sunBreakerMotorizedDesc"),
    image: "/pergola/pergola-kafe-aktif-2.webp",
    features: ["Motorlu Kontrol", "Akıllı Sensör", "Uzaktan Kumanda", "Otomatik"],
    badge: t("products.badges.premium"),
    href: "/gunes-kiriclari/hareketli-gunes-kirici",
    parentProduct: "sun-breakers"
  },
  {
    id: "dikey-gunes-kirici",
    name: t("nav.sunBreakerVertical"),
    description: t("nav.sunBreakerVerticalDesc"),
    image: "/pergola/pergola-kafe-gorsel.webp",
    features: ["Cephe Entegrasyonu", "Estetik Tasarım", "Enerji Tasarrufu", "Modern Görünüm"],
    badge: t("products.badges.premium"),
    href: "/gunes-kiriclari/dikey-gunes-kirici",
    parentProduct: "sun-breakers"
  }
]

/**
 * Zip Perde alt kategorileri
 * @param t - Çeviri fonksiyonu
 * @returns Zip perde alt kategori listesi
 */
export const getZipScreenSubCategories = (t: any): SubCategory[] => [
  {
    id: "motorlu-zip-perde",
    name: t("nav.zipScreenMotorized"),
    description: t("nav.zipScreenMotorizedDesc"),
    image: "/zip-perde/zip-perde-2.webp",
    features: ["Motorlu Sistem", "Uzaktan Kumanda", "Sessiz Çalışma", "Otomatik Durdurma"],
    badge: t("products.badges.premium"),
    href: "/zip-perde/motorlu-zip-perde",
    parentProduct: "zip-screen"
  },
  {
    id: "manuel-zip-perde",
    name: t("nav.zipScreenManual"),
    description: t("nav.zipScreenManualDesc"),
    image: "/zip-perde/zip-perde-4.webp",
    features: ["Manuel Kullanım", "Ekonomik", "Dayanıklı Kumaş", "Kolay Montaj"],
    badge: t("products.badges.efficient"),
    href: "/zip-perde/manuel-zip-perde",
    parentProduct: "zip-screen"
  },
  {
    id: "akilli-zip-perde",
    name: t("nav.zipScreenSmart"),
    description: t("nav.zipScreenSmartDesc"),
    image: "/zip-perde/zip-perde-8.webp",
    features: ["Akıllı Sensör", "Otomatik Kontrol", "Rüzgar Sensörü", "Güneş Sensörü"],
    badge: t("products.badges.premium"),
    href: "/zip-perde/akilli-zip-perde",
    parentProduct: "zip-screen"
  }
]

/**
 * Belirli bir ana ürüne ait alt kategorileri getir
 * @param parentProductId - Ana ürün ID'si
 * @param t - Çeviri fonksiyonu
 * @returns Alt kategori listesi
 */
export const getSubCategoriesByParent = (parentProductId: string, t: any): SubCategory[] => {
  switch (parentProductId) {
    case "bioclimatic-pergola":
      return getPergolaSubCategories(t)
    case "glass-systems":
      return getGlassSystemsSubCategories(t)
    case "winter-garden":
      return getWinterGardenSubCategories(t)
    case "sun-breakers":
      return getSunBreakerSubCategories(t)
    case "zip-screen":
      return getZipScreenSubCategories(t)
    default:
      return []
  }
}

/**
 * Tüm alt kategorileri getir
 * @param t - Çeviri fonksiyonu
 * @returns Tüm alt kategoriler
 */
export const getAllSubCategories = (t: any): SubCategory[] => {
  return [
    ...getPergolaSubCategories(t),
    ...getGlassSystemsSubCategories(t),
    ...getWinterGardenSubCategories(t),
    ...getSunBreakerSubCategories(t),
    ...getZipScreenSubCategories(t)
  ]
}
