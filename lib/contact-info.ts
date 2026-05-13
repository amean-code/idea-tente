/**
 * İletişim bilgileri konfigürasyon dosyası
 * Tüm telefon numaraları, e-posta adresleri ve sosyal medya linkleri buradan yönetilir
 */

export const contactInfo = {
  // Telefon Numaraları
  phone: {
    primary: "+902422520008",
    secondary: "+905323670635",
    whatsapp: "+905323670635",
    display: {
      primary: "+90 242 252 00 08",
      secondary: "+90 532 367 06 35",
      whatsapp: "+90 532 367 06 35"
    }
  },

  // E-posta Adresleri
  email: {
    info: "idea@ideatente.com",
    idea: "idea@ideatente.com",
    export: "export@ideatente.com",
    support: "destek@ideatente.com",
    sales: "satis@ideatente.com"
  },

  // Sosyal Medya Linkleri
  social: {
    instagram: "https://www.instagram.com/ideapergola/",
    facebook: "https://www.facebook.com/ideatentegiyotincam",
    linkedin: "https://www.linkedin.com/in/idea-tente-giyotin-camsistemler-825280148/",
    youtube: "https://www.youtube.com/channel/UCwX-TkAJ-5jN_N80o0Tta5g",
    twitter: "https://twitter.com/idea_pergola"
  },

  // WhatsApp Linkleri
  whatsapp: {
    primary: "https://wa.me/905323670635",
    sales: "https://wa.me/905323670635?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum.",
    support: "https://wa.me/905323670635?text=Merhaba, destek almak istiyorum.",
    quote: "https://wa.me/905323670635?text=Merhaba, teklif almak istiyorum."
  },

  // Adres Bilgileri
  address: {
    street: "Yenigöl Mah. İzzet Uzun Filiz Sok. No:75",
    district: "Muratpaşa",
    city: "Antalya",
    country: "Türkiye",
    postalCode: "07000",
    full: "Yenigöl Mah. İzzet Uzun Filiz Sok. No:75 Muratpaşa / ANTALYA"
  },

  // Çalışma Saatleri
  workingHours: {
    weekdays: "08:00 - 18:00",
    saturday: "09:00 - 16:00",
    sunday: "Kapalı",
    display: {
      weekdays: "Pazartesi - Cuma: 08:00 - 18:00",
      saturday: "Cumartesi: 09:00 - 16:00",
      sunday: "Pazar: Kapalı"
    }
  },

  // Şirket Bilgileri
  company: {
    name: "İDEA TENTE",
    fullName: "İdea Tente Giyotin Cam Sistemleri San. ve Tic. Ltd. Şti.",
    shortName: "MERKEZ İDEA TENTE",
    description: "Antalya'nın önde gelen pergola ve cam sistemleri üreticisi",
    founded: "2008",
    experience: "15+ yıl"
  }
} as const

// Type definitions
export type ContactInfo = typeof contactInfo
export type PhoneNumbers = typeof contactInfo.phone
export type EmailAddresses = typeof contactInfo.email
export type SocialLinks = typeof contactInfo.social
export type WhatsAppLinks = typeof contactInfo.whatsapp
export type AddressInfo = typeof contactInfo.address
export type WorkingHours = typeof contactInfo.workingHours
export type CompanyInfo = typeof contactInfo.company
