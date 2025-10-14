/**
 * Referans Projeler Veri Yapısı
 * Tüm tamamlanmış projeler buradan yönetilir
 */

export interface Project {
  id: number
  slug: string // URL için
  isFeatured: boolean // Öne çıkan projeler için
  category: ProjectCategory
  client: string
  location: string
  year: string
  area: string
  image: string
  translations: {
    tr: ProjectTranslation
    en: ProjectTranslation
    ar: ProjectTranslation
    de: ProjectTranslation
    ru: ProjectTranslation
  }
}

export interface ProjectTranslation {
  title: string
  description: string
  features: string[]
}

export type ProjectCategory = "bioclimatic" | "sunBreakers" | "glassSystems" | "winterGarden" | "zipScreen"

/**
 * Tüm referans projeleri
 * Featured olanlar ana sayfada gösterilir
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: "luxury-resort-pergola-antalya",
    isFeatured: true,
    category: "bioclimatic",
    client: "Luxury Resort Chain",
    location: "Antalya, Türkiye",
    year: "2024",
    area: "2,500 m²",
    image: "/luxury-resort-pergola-installation.jpg",
    translations: {
      tr: {
        title: "Luxury Resort Pergola Complex",
        description: "5 yıldızlı resort için özel tasarım biyoklimatik pergola sistemi",
        features: ["Akıllı Kontrol", "LED Aydınlatma", "Yağmur Sensörü", "Rüzgar Sensörü"],
      },
      en: {
        title: "Luxury Resort Pergola Complex",
        description: "Custom-designed bioclimatic pergola system for a 5-star resort",
        features: ["Smart Control", "LED Lighting", "Rain Sensor", "Wind Sensor"],
      },
      ar: {
        title: "مجمع برجولا المنتجع الفاخر",
        description: "نظام برجولا بيوكليماتيك مصمم خصيصاً لمنتجع 5 نجوم",
        features: ["تحكم ذكي", "إضاءة LED", "مستشعر المطر", "مستشعر الرياح"],
      },
      de: {
        title: "Luxus-Resort-Pergola-Komplex",
        description: "Maßgeschneidertes bioklimatisches Pergola-System für ein 5-Sterne-Resort",
        features: ["Intelligente Steuerung", "LED-Beleuchtung", "Regensensor", "Windsensor"],
      },
      ru: {
        title: "Комплекс перголы для роскошного курорта",
        description: "Индивидуально разработанная биоклиматическая система перголы для 5-звездочного курорта",
        features: ["Умное управление", "LED освещение", "Датчик дождя", "Датчик ветра"],
      },
    },
  },
  {
    id: 2,
    slug: "corporate-headquarters-sun-breakers-istanbul",
    isFeatured: true,
    category: "sunBreakers",
    client: "Fortune 500 Company",
    location: "İstanbul, Türkiye",
    year: "2024",
    area: "8,000 m²",
    image: "/corporate-building-sun-breakers.jpg",
    translations: {
      tr: {
        title: "Corporate Headquarters Sun Protection",
        description: "Modern ofis binası için enerji verimli güneş kırıcı sistemleri",
        features: ["Otomatik Kontrol", "Enerji Tasarrufu", "Akıllı Sensörler", "Uzaktan Yönetim"],
      },
      en: {
        title: "Corporate Headquarters Sun Protection",
        description: "Energy-efficient sun breaker systems for modern office building",
        features: ["Automatic Control", "Energy Saving", "Smart Sensors", "Remote Management"],
      },
      ar: {
        title: "حماية الشمس للمقر الرئيسي للشركة",
        description: "أنظمة كاسرات الشمس الموفرة للطاقة لمبنى مكاتب حديث",
        features: ["تحكم تلقائي", "توفير الطاقة", "مستشعرات ذكية", "إدارة عن بعد"],
      },
      de: {
        title: "Sonnenschutz für Firmenzentrale",
        description: "Energieeffiziente Sonnenschutzsysteme für modernes Bürogebäude",
        features: ["Automatische Steuerung", "Energieeinsparung", "Intelligente Sensoren", "Fernverwaltung"],
      },
      ru: {
        title: "Солнцезащита для корпоративной штаб-квартиры",
        description: "Энергоэффективные системы солнцезащиты для современного офисного здания",
        features: ["Автоматическое управление", "Экономия энергии", "Умные датчики", "Удаленное управление"],
      },
    },
  },
  {
    id: 3,
    slug: "seaside-restaurant-glass-systems-bodrum",
    isFeatured: true,
    category: "glassSystems",
    client: "Premium Restaurant Group",
    location: "Bodrum, Türkiye",
    year: "2023",
    area: "800 m²",
    image: "/seaside-restaurant-glass-systems.jpg",
    translations: {
      tr: {
        title: "Seaside Restaurant Glass Systems",
        description: "Deniz manzaralı restoran için panoramik cam sistemleri",
        features: ["Panoramik Görünüm", "Rüzgar Koruması", "Kolay Temizlik", "UV Koruması"],
      },
      en: {
        title: "Seaside Restaurant Glass Systems",
        description: "Panoramic glass systems for seaside restaurant with ocean views",
        features: ["Panoramic View", "Wind Protection", "Easy Cleaning", "UV Protection"],
      },
      ar: {
        title: "أنظمة الزجاج لمطعم على البحر",
        description: "أنظمة زجاجية بانورامية لمطعم على البحر مع إطلالات على المحيط",
        features: ["منظر بانورامي", "حماية من الرياح", "سهولة التنظيف", "حماية من الأشعة فوق البنفسجية"],
      },
      de: {
        title: "Glassysteme für Strandrestaurant",
        description: "Panoramische Glassysteme für Strandrestaurant mit Meerblick",
        features: ["Panoramablick", "Windschutz", "Einfache Reinigung", "UV-Schutz"],
      },
      ru: {
        title: "Стеклянные системы для прибрежного ресторана",
        description: "Панорамные стеклянные системы для прибрежного ресторана с видом на океан",
        features: ["Панорамный вид", "Защита от ветра", "Легкая очистка", "Защита от УФ"],
      },
    },
  },
  {
    id: 4,
    slug: "private-villa-winter-garden-cesme",
    isFeatured: true,
    category: "winterGarden",
    client: "Private Villa Owner",
    location: "Çeşme, Türkiye",
    year: "2023",
    area: "150 m²",
    image: "/private-villa-winter-garden.jpg",
    translations: {
      tr: {
        title: "Private Villa Winter Garden",
        description: "Özel villa için lüks kış bahçesi tasarımı",
        features: ["Akıllı Cam", "Isı Kontrolü", "Otomatik Havalandırma", "Premium Malzeme"],
      },
      en: {
        title: "Private Villa Winter Garden",
        description: "Luxury winter garden design for private villa",
        features: ["Smart Glass", "Temperature Control", "Automatic Ventilation", "Premium Materials"],
      },
      ar: {
        title: "حديقة شتوية لفيلا خاصة",
        description: "تصميم حديقة شتوية فاخرة لفيلا خاصة",
        features: ["زجاج ذكي", "التحكم في درجة الحرارة", "تهوية تلقائية", "مواد متميزة"],
      },
      de: {
        title: "Wintergarten für Privatvilla",
        description: "Luxuriöses Wintergarten-Design für Privatvilla",
        features: ["Intelligentes Glas", "Temperaturkontrolle", "Automatische Belüftung", "Premium-Materialien"],
      },
      ru: {
        title: "Зимний сад для частной виллы",
        description: "Роскошный дизайн зимнего сада для частной виллы",
        features: ["Умное стекло", "Контроль температуры", "Автоматическая вентиляция", "Премиум материалы"],
      },
    },
  },
  {
    id: 5,
    slug: "shopping-mall-pergola-izmir",
    isFeatured: false,
    category: "bioclimatic",
    client: "Shopping Mall Group",
    location: "İzmir, Türkiye",
    year: "2023",
    area: "1,200 m²",
    image: "/shopping-mall-pergola.jpg",
    translations: {
      tr: {
        title: "AVM Açık Hava Alanı Pergola",
        description: "Alışveriş merkezi açık hava alanı için modern biyoklimatik pergola",
        features: ["Geniş Alan Kaplaması", "Otomatik Lamel", "LED Sistem", "Dayanıklı Yapı"],
      },
      en: {
        title: "Shopping Mall Open Area Pergola",
        description: "Modern bioclimatic pergola for shopping mall open area",
        features: ["Wide Area Coverage", "Automatic Louvers", "LED System", "Durable Structure"],
      },
      ar: {
        title: "برجولا المنطقة المفتوحة لمركز التسوق",
        description: "برجولا بيوكليماتيك حديثة لمنطقة مفتوحة في مركز التسوق",
        features: ["تغطية واسعة المساحة", "شرائح تلقائية", "نظام LED", "بنية متينة"],
      },
      de: {
        title: "Pergola für Einkaufszentrum-Freifläche",
        description: "Moderne bioklimatische Pergola für Einkaufszentrum-Freifläche",
        features: ["Großflächige Abdeckung", "Automatische Lamellen", "LED-System", "Robuste Struktur"],
      },
      ru: {
        title: "Пергола открытой зоны торгового центра",
        description: "Современная биоклиматическая пергола для открытой зоны торгового центра",
        features: ["Широкое покрытие площади", "Автоматические жалюзи", "LED система", "Прочная конструкция"],
      },
    },
  },
  {
    id: 6,
    slug: "hotel-pool-area-zip-screen-marmaris",
    isFeatured: false,
    category: "zipScreen",
    client: "Boutique Hotel",
    location: "Marmaris, Türkiye",
    year: "2023",
    area: "600 m²",
    image: "/hotel-pool-zip-screen.jpg",
    translations: {
      tr: {
        title: "Otel Havuz Alanı Zip Perde",
        description: "Butik otel havuz alanı için şık zip perde sistemleri",
        features: ["Rüzgar Dayanımlı", "UV Koruma", "Kolay Kullanım", "Modern Tasarım"],
      },
      en: {
        title: "Hotel Pool Area Zip Screen",
        description: "Elegant zip screen systems for boutique hotel pool area",
        features: ["Wind Resistant", "UV Protection", "Easy Operation", "Modern Design"],
      },
      ar: {
        title: "ستارة زيب لمنطقة حمام السباحة بالفندق",
        description: "أنظمة ستارة زيب أنيقة لمنطقة حمام السباحة في فندق بوتيك",
        features: ["مقاومة للرياح", "حماية من الأشعة فوق البنفسجية", "سهولة التشغيل", "تصميم حديث"],
      },
      de: {
        title: "Zip-Screen für Hotel-Poolbereich",
        description: "Elegante Zip-Screen-Systeme für Boutique-Hotel-Poolbereich",
        features: ["Windbeständig", "UV-Schutz", "Einfache Bedienung", "Modernes Design"],
      },
      ru: {
        title: "Zip-экран для зоны бассейна отеля",
        description: "Элегантные системы zip-экрана для зоны бассейна бутик-отеля",
        features: ["Ветроустойчивый", "УФ защита", "Простота управления", "Современный дизайн"],
      },
    },
  },
  {
    id: 7,
    slug: "cafe-terrace-glass-folding-ankara",
    isFeatured: false,
    category: "glassSystems",
    client: "Cafe Chain",
    location: "Ankara, Türkiye",
    year: "2022",
    area: "300 m²",
    image: "/cafe-glass-folding-system.jpg",
    translations: {
      tr: {
        title: "Kafe Terası Katlanır Cam Sistem",
        description: "Kafe terası için estetik katlanır cam çözümleri",
        features: ["Tam Açılabilir", "Kompakt Katlanma", "Termal Cam", "Sessiz Mekanizma"],
      },
      en: {
        title: "Cafe Terrace Folding Glass System",
        description: "Aesthetic folding glass solutions for cafe terrace",
        features: ["Fully Openable", "Compact Folding", "Thermal Glass", "Silent Mechanism"],
      },
      ar: {
        title: "نظام الزجاج القابل للطي لشرفة المقهى",
        description: "حلول زجاجية قابلة للطي جمالية لشرفة المقهى",
        features: ["قابل للفتح بالكامل", "طي مدمج", "زجاج حراري", "آلية صامتة"],
      },
      de: {
        title: "Faltglas-System für Café-Terrasse",
        description: "Ästhetische Faltglas-Lösungen für Café-Terrasse",
        features: ["Vollständig zu öffnen", "Kompaktes Falten", "Thermoglas", "Leiser Mechanismus"],
      },
      ru: {
        title: "Складная стеклянная система для террасы кафе",
        description: "Эстетичные складные стеклянные решения для террасы кафе",
        features: ["Полностью открывается", "Компактное складывание", "Термостекло", "Тихий механизм"],
      },
    },
  },
  {
    id: 8,
    slug: "office-building-sun-breakers-bursa",
    isFeatured: false,
    category: "sunBreakers",
    client: "Tech Company",
    location: "Bursa, Türkiye",
    year: "2022",
    area: "3,500 m²",
    image: "/office-sun-breakers.jpg",
    translations: {
      tr: {
        title: "Ofis Binası Güneş Kırıcı Sistemleri",
        description: "Teknoloji şirketi kampüsü için enerji verimli güneş kırıcılar",
        features: ["Enerji Verimliliği", "Otomasyonlu", "Bakım Kolaylığı", "Modern Görünüm"],
      },
      en: {
        title: "Office Building Sun Breaker Systems",
        description: "Energy-efficient sun breakers for tech company campus",
        features: ["Energy Efficiency", "Automated", "Easy Maintenance", "Modern Appearance"],
      },
      ar: {
        title: "أنظمة كاسر الشمس لمبنى المكاتب",
        description: "كاسرات الشمس الموفرة للطاقة لحرم شركة التكنولوجيا",
        features: ["كفاءة الطاقة", "آلي", "صيانة سهلة", "مظهر حديث"],
      },
      de: {
        title: "Sonnenschutz-Systeme für Bürogebäude",
        description: "Energieeffiziente Sonnenschutzanlagen für Tech-Firmencampus",
        features: ["Energieeffizienz", "Automatisiert", "Einfache Wartung", "Modernes Aussehen"],
      },
      ru: {
        title: "Системы солнцезащиты для офисного здания",
        description: "Энергоэффективная солнцезащита для кампуса технологической компании",
        features: ["Энергоэффективность", "Автоматизированный", "Легкое обслуживание", "Современный вид"],
      },
    },
  },
]

/**
 * Öne çıkan projeleri filtreler
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.isFeatured)
}

/**
 * Kategoriye göre projeleri filtreler
 */
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((project) => project.category === category)
}

/**
 * ID'ye göre proje getirir
 */
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id)
}

/**
 * Slug'a göre proje getirir
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug)
}

/**
 * Kategori sayılarını döndürür
 */
export const getProjectCountByCategory = (): Record<ProjectCategory, number> => {
  return projects.reduce(
    (acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1
      return acc
    },
    {} as Record<ProjectCategory, number>,
  )
}

