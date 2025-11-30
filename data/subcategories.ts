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
 */
export const getPergolaSubCategories = (): SubCategory[] => [
  {
    id: "bioklimatik-sistemler",
    name: "Bioklimatik Sistemler",
    description: "105° dönebilen lameller ile akıllı iklim kontrolü ve %100 su geçirmezlik",
    image: "/pergola/pergola-dıs-gunes.jpeg",
    features: ["105° Dönebilen Lamel", "Akıllı İklim", "Su Geçirmez", "Enerji Tasarrufu"],
    badge: "Popüler",
    href: "/pergola/bioklimatik-sistemler",
    parentProduct: "bioclimatic-pergola"
  },
  {
    id: "motorlu-sistemler", 
    name: "Motorlu Sistemler",
    description: "Sensör teknolojisi ve uzaktan kumanda ile tam otomatik kontrol",
    image: "/pergola/pergola-kafe-aktif.jpeg",
    features: ["Güneş Sensörü", "Rüzgar Sensörü", "Uzaktan Kumanda", "Sessiz Motor"],
    badge: "Premium",
    href: "/pergola/motorlu-sistemler",
    parentProduct: "bioclimatic-pergola"
  },
  {
    id: "rolling-roof",
    name: "Rolling Roof", 
    description: "Açılır kapanır tente sistemi ile esnek ve fonksiyonel pergola",
    image: "/pergola/pergola-render-siyah.jpg",
    features: ["Açılır Kapanır", "Dayanıklı Kumaş", "Motorlu Sistem", "Modern Tasarım"],
    badge: "Yeni",
    href: "/pergola/rolling-roof",
    parentProduct: "bioclimatic-pergola"
  }
]

/**
 * Cam Sistemleri alt kategorileri
 */
export const getGlassSystemsSubCategories = (): SubCategory[] => [
  {
    id: "surme-cam",
    name: "Sürme Cam Sistemleri",
    description: "Frameless sürme cam sistemleri ile kesintisiz manzara ve maksimum konfor",
    image: "/folding-glass-gallery-1.jpg",
    features: ["Frameless", "Sürme Sistem", "Temperli Cam", "Rüzgar Dayanımı"],
    badge: "Popüler",
    href: "/cam-sistemleri/surme-cam",
    parentProduct: "glass-systems"
  },
  {
    id: "katlanir-cam",
    name: "Katlanır Cam Sistemleri",
    description: "Accordion tarzı katlanır cam sistemleri ile geniş açılım imkanı",
    image: "/folding-glass-gallery-2.jpg",
    features: ["Katlanır", "Geniş Açılım", "Güvenlik Camı", "Özel Ölçü"],
    badge: "Premium",
    href: "/cam-sistemleri/katlanir-cam",
    parentProduct: "glass-systems"
  },
  {
    id: "sabit-cam",
    name: "Sabit Cam Sistemleri",
    description: "Sabit cam panelleri ile kalıcı koruma ve modern görünüm",
    image: "/giyotin-cam/giyotin-cam.png",
    features: ["Sabit Panel", "Yalıtım", "UV Koruma", "Kolay Bakım"],
    badge: "Ekonomik",
    href: "/cam-sistemleri/sabit-cam",
    parentProduct: "glass-systems"
  }
]

/**
 * Kış Bahçesi alt kategorileri
 */
export const getWinterGardenSubCategories = (): SubCategory[] => [
  {
    id: "premium-kis-bahcesi",
    name: "Premium Kış Bahçesi",
    description: "Akıllı cam teknolojisi ve otomatik havalandırma sistemi",
    image: "/pergola/pergola-render-siyah-gece.jpg",
    features: ["Akıllı Cam", "Otomatik Havalandırma", "Isı Pompası", "Uzaktan Kontrol"],
    badge: "Premium",
    href: "/kis-bahcesi/premium-kis-bahcesi",
    parentProduct: "winter-garden"
  },
  {
    id: "standart-kis-bahcesi",
    name: "Standart Kış Bahçesi",
    description: "Çift cam teknolojisi ve manuel havalandırma sistemi",
    image: "/pergola/pergola-ic-mekan.jpeg",
    features: ["Çift Cam", "Manuel Havalandırma", "Termal Kesim", "10 Yıl Garanti"],
    badge: "Ekonomik",
    href: "/kis-bahcesi/standart-kis-bahcesi",
    parentProduct: "winter-garden"
  },
  {
    id: "lux-kis-bahcesi",
    name: "Lux Kış Bahçesi",
    description: "Panoramik cam ve akıllı ev entegrasyonu ile lüks çözüm",
    image: "/pergola/pergola-beyaz.jpg",
    features: ["Panoramik Cam", "Akıllı Ev Entegrasyonu", "Gömme Isıtma", "Premium Malzeme"],
    badge: "Lüks",
    href: "/kis-bahcesi/lux-kis-bahcesi",
    parentProduct: "winter-garden"
  }
]

/**
 * Güneş Kırıcı alt kategorileri
 */
export const getSunBreakerSubCategories = (): SubCategory[] => [
  {
    id: "sabit-gunes-kirici",
    name: "Sabit Güneş Kırıcı",
    description: "Sabit alüminyum güneş kırıcı sistemleri",
    image: "/pergola/pergola-dıs-gunes-2.jpeg",
    features: ["Alüminyum Profil", "Özel Renk", "Kolay Montaj", "Uzun Ömür"],
    badge: "Ekonomik",
    href: "/gunes-kiriclari/sabit-gunes-kirici",
    parentProduct: "sun-breakers"
  },
  {
    id: "hareketli-gunes-kirici",
    name: "Hareketli Güneş Kırıcı",
    description: "Motorlu ve ayarlanabilir güneş kırıcı sistemleri",
    image: "/pergola/pergola-kafe-aktif-2.jpg",
    features: ["Motorlu Kontrol", "Akıllı Sensör", "Uzaktan Kumanda", "Otomatik"],
    badge: "Akıllı",
    href: "/gunes-kiriclari/hareketli-gunes-kirici",
    parentProduct: "sun-breakers"
  },
  {
    id: "dikey-gunes-kirici",
    name: "Dikey Güneş Kırıcı",
    description: "Cephe entegrasyonlu dikey güneş kırıcı sistemleri",
    image: "/pergola/pergola-kafe-gorsel.jpg",
    features: ["Cephe Entegrasyonu", "Estetik Tasarım", "Enerji Tasarrufu", "Modern Görünüm"],
    badge: "Modern",
    href: "/gunes-kiriclari/dikey-gunes-kirici",
    parentProduct: "sun-breakers"
  }
]

/**
 * Zip Perde alt kategorileri
 */
export const getZipScreenSubCategories = (): SubCategory[] => [
  {
    id: "motorlu-zip-perde",
    name: "Motorlu Zip Perde",
    description: "Motorlu sistem ve uzaktan kumanda ile kolay kullanım",
    image: "/zip-perde/zip-perde-2.jpeg",
    features: ["Motorlu Sistem", "Uzaktan Kumanda", "Sessiz Çalışma", "Otomatik Durdurma"],
    badge: "Premium",
    href: "/zip-perde/motorlu-zip-perde",
    parentProduct: "zip-screen"
  },
  {
    id: "manuel-zip-perde",
    name: "Manuel Zip Perde",
    description: "Manuel kullanım ile ekonomik çözüm",
    image: "/zip-perde/zip-perde-4.jpeg",
    features: ["Manuel Kullanım", "Ekonomik", "Dayanıklı Kumaş", "Kolay Montaj"],
    badge: "Ekonomik",
    href: "/zip-perde/manuel-zip-perde",
    parentProduct: "zip-screen"
  },
  {
    id: "akilli-zip-perde",
    name: "Akıllı Zip Perde",
    description: "Akıllı sensörler ile otomatik kontrol",
    image: "/zip-perde/zip-perde-8.jpeg",
    features: ["Akıllı Sensör", "Otomatik Kontrol", "Rüzgar Sensörü", "Güneş Sensörü"],
    badge: "Akıllı",
    href: "/zip-perde/akilli-zip-perde",
    parentProduct: "zip-screen"
  }
]

/**
 * Belirli bir ana ürüne ait alt kategorileri getir
 * @param parentProductId - Ana ürün ID'si
 * @returns Alt kategori listesi
 */
export const getSubCategoriesByParent = (parentProductId: string): SubCategory[] => {
  switch (parentProductId) {
    case "bioclimatic-pergola":
      return getPergolaSubCategories()
    case "glass-systems":
      return getGlassSystemsSubCategories()
    case "winter-garden":
      return getWinterGardenSubCategories()
    case "sun-breakers":
      return getSunBreakerSubCategories()
    case "zip-screen":
      return getZipScreenSubCategories()
    default:
      return []
  }
}

/**
 * Tüm alt kategorileri getir
 * @returns Tüm alt kategoriler
 */
export const getAllSubCategories = (): SubCategory[] => {
  return [
    ...getPergolaSubCategories(),
    ...getGlassSystemsSubCategories(),
    ...getWinterGardenSubCategories(),
    ...getSunBreakerSubCategories(),
    ...getZipScreenSubCategories()
  ]
}
