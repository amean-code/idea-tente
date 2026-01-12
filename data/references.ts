/**
 * Referans projeleri için merkezi veri dosyası
 * Hizmet türüne göre filtreleme yapılabilir
 */

export interface Reference {
  id: string
  title: string
  location: string
  year: string
  category: string
  service: string[] // Hangi hizmetler kullanıldı
  image: string
  description: string
  features: string[]
  rating: number
  client?: string
}

/**
 * Tüm referans projelerini döndüren fonksiyon
 * @param t - Çeviri fonksiyonu (opsiyonel)
 * @returns Referans projeleri listesi
 */
export const getAllReferences = (t?: any): Reference[] => {
  // Category mapping için çeviri fonksiyonu
  const getCategory = (categoryKey: string): string => {
    if (!t) return categoryKey
    const categoryMap: Record<string, string> = {
      "Otel & Resort": t("references.filters.hotel"),
      "Konut": t("references.filters.residential"),
      "Ticari": t("references.filters.commercial"),
      "Eğlence": t("references.filters.entertainment"),
      "Kurumsal": t("references.filters.corporate"),
      "Restoran": t("references.filters.restaurant"),
    }
    return categoryMap[categoryKey] || categoryKey
  }

  return [
  // Pergola Projeleri
  {
    id: "luxury-resort-pergola",
    title: "Luxury Resort Antalya",
    location: "Antalya, Türkiye",
    year: "2023",
    category: getCategory("Otel & Resort"),
    service: ["bioclimatic-pergola"],
    image: "/luxury-resort-pergola-installation.jpg",
    description: "200 m² bioklimatik pergola sistemi ile resort alanı modernizasyonu",
    features: ["Bioklimatik Pergola", "LED Aydınlatma", "Akıllı Kontrol"],
    rating: 4.9,
    client: "Antalya Resort Group"
  },
  {
    id: "villa-complex-pergola",
    title: "Private Villa Complex",
    location: "Bodrum, Türkiye", 
    year: "2022",
    category: getCategory("Konut"),
    service: ["bioclimatic-pergola", "winter-garden"],
    image: "/private-villa-pergola-complex.jpg",
    description: "Özel villa kompleksi pergola ve kış bahçesi projeleri",
    features: ["Premium Pergola", "Akıllı Sistem", "Özel Tasarım"],
    rating: 4.8,
    client: "Bodrum Villa Group"
  },
  {
    id: "shopping-mall-pergola",
    title: "Shopping Mall Terrace",
    location: "Ankara, Türkiye",
    year: "2021", 
    category: getCategory("Ticari"),
    service: ["bioclimatic-pergola"],
    image: "/shopping-mall-terrace-pergola.jpg",
    description: "AVM teras alanı pergola ve gölgelendirme sistemleri",
    features: ["Büyük Açıklık", "Dayanıklı Yapı", "Estetik Tasarım"],
    rating: 4.7,
    client: "Ankara Shopping Center"
  },
  {
    id: "beach-club-pergola",
    title: "Beach Club Project",
    location: "Çeşme, Türkiye",
    year: "2021",
    category: getCategory("Eğlence"), 
    service: ["bioclimatic-pergola", "zip-screen"],
    image: "/beach-club-pergola-systems.jpg",
    description: "Beach club alanı pergola ve zip perde sistemleri",
    features: ["Deniz Dayanımı", "Büyük Boyut", "Hızlı Montaj"],
    rating: 4.9,
    client: "Çeşme Beach Club"
  },

  // Cam Sistemleri Projeleri
  {
    id: "corporate-glass-systems",
    title: "Corporate Headquarters",
    location: "İstanbul, Türkiye",
    year: "2023",
    category: getCategory("Kurumsal"),
    service: ["glass-systems", "sun-breakers"],
    image: "/corporate-building-glass-systems.jpg", 
    description: "Ofis binası cam sistemleri ve güneş kırıcı uygulaması",
    features: ["Frameless Cam", "Enerji Tasarrufu", "Modern Tasarım"],
    rating: 4.8,
    client: "İstanbul Corporate Group"
  },
  {
    id: "seaside-restaurant-glass",
    title: "Seaside Restaurant",
    location: "İzmir, Türkiye",
    year: "2022",
    category: getCategory("Restoran"),
    service: ["glass-systems", "zip-screen"],
    image: "/seaside-restaurant-glass-systems.jpg",
    description: "Deniz manzaralı restoran cam sistemleri uygulaması",
    features: ["Katlanır Cam", "Rüzgar Dayanımı", "Deniz Manzarası"],
    rating: 4.9,
    client: "İzmir Restaurant Group"
  },

  // Kış Bahçesi Projeleri
  {
    id: "luxury-winter-garden",
    title: "Luxury Winter Garden Villa",
    location: "Bursa, Türkiye",
    year: "2023",
    category: getCategory("Konut"),
    service: ["winter-garden"],
    image: "/luxury-winter-garden-villa.jpg",
    description: "Lüks villa kış bahçesi ve akıllı iklim kontrolü",
    features: ["Premium Malzeme", "Akıllı Sistem", "4 Mevsim Kullanım"],
    rating: 4.9,
    client: "Bursa Luxury Villas"
  },

  // Güneş Kırıcı Projeleri
  {
    id: "office-building-sun-breakers",
    title: "Modern Office Building",
    location: "İzmir, Türkiye",
    year: "2022",
    category: getCategory("Kurumsal"),
    service: ["sun-breakers"],
    image: "/modern-office-sun-breakers.jpg",
    description: "Modern ofis binası güneş kırıcı sistemleri",
    features: ["Enerji Tasarrufu", "Modern Tasarım", "UV Koruması"],
    rating: 4.7,
    client: "İzmir Business Center"
  },

  // Zip Perde Projeleri
  {
    id: "hotel-terrace-zip-screen",
    title: "Hotel Terrace Project",
    location: "Antalya, Türkiye",
    year: "2023",
    category: getCategory("Otel & Resort"),
    service: ["zip-screen"],
    image: "/hotel-terrace-zip-screen.jpg",
    description: "Otel teras alanı zip perde sistemleri",
    features: ["Motorlu Sistem", "Rüzgar Dayanımı", "Sessiz Çalışma"],
    rating: 4.8,
    client: "Antalya Hotel Group"
  },

  // Karma Projeler
  {
    id: "complete-outdoor-solution",
    title: "Complete Outdoor Solution",
    location: "Marmaris, Türkiye",
    year: "2023",
    category: getCategory("Konut"),
    service: ["bioclimatic-pergola", "glass-systems", "zip-screen"],
    image: "/complete-outdoor-solution.jpg",
    description: "Kapsamlı dış mekan çözümü: pergola, cam sistemleri ve zip perde",
    features: ["Entegre Sistem", "Premium Malzeme", "Akıllı Kontrol"],
    rating: 5.0,
    client: "Marmaris Luxury Resort"
  }
]
}

/**
 * Belirli bir hizmet türüne göre referansları filtrele
 * @param serviceType - Hizmet türü (bioclimatic-pergola, glass-systems, vb.)
 * @returns Filtrelenmiş referans listesi
 */
export const getReferencesByService = (serviceType: string): Reference[] => {
  return getAllReferences().filter(reference => 
    reference.service.includes(serviceType)
  )
}

/**
 * Kategoriye göre referansları filtrele
 * @param category - Kategori adı
 * @returns Filtrelenmiş referans listesi
 */
export const getReferencesByCategory = (category: string): Reference[] => {
  return getAllReferences().filter(reference => 
    reference.category === category
  )
}

/**
 * En yüksek puanlı referansları getir
 * @param limit - Kaç adet getirileceği
 * @returns Yüksek puanlı referanslar
 */
export const getTopRatedReferences = (limit: number = 6): Reference[] => {
  return getAllReferences()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}
