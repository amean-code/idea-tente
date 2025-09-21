/**
 * İletişim bilgileri konfigürasyon dosyası
 * Tüm telefon numaraları, e-posta adresleri ve sosyal medya linkleri buradan yönetilir
 */

export const contactInfo = {
  // Telefon Numaraları
  phone: {
    primary: "+90 555 123 45 67",
    secondary: "+90 212 123 45 67",
    whatsapp: "+90 555 123 45 67",
    display: {
      primary: "+90 555 123 45 67",
      secondary: "+90 212 123 45 67",
      whatsapp: "+90 555 123 45 67"
    }
  },

  // E-posta Adresleri
  email: {
    info: "info@idea.com",
    export: "export@idea.com",
    support: "destek@idea.com",
    sales: "satis@idea.com"
  },

  // Sosyal Medya Linkleri
  social: {
    instagram: "https://instagram.com/idea_pergola",
    facebook: "https://facebook.com/ideapergola",
    linkedin: "https://linkedin.com/company/idea-pergola",
    youtube: "https://youtube.com/@ideapergola",
    twitter: "https://twitter.com/idea_pergola"
  },

  // WhatsApp Linkleri
  whatsapp: {
    primary: "https://wa.me/905551234567",
    sales: "https://wa.me/905551234567?text=Merhaba, ürünleriniz hakkında bilgi almak istiyorum.",
    support: "https://wa.me/905551234567?text=Merhaba, destek almak istiyorum.",
    quote: "https://wa.me/905551234567?text=Merhaba, teklif almak istiyorum."
  },

  // Adres Bilgileri
  address: {
    street: "Organize Sanayi Bölgesi",
    city: "İstanbul",
    country: "Türkiye",
    postalCode: "34000",
    full: "Organize Sanayi Bölgesi, İstanbul, Türkiye"
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
    name: "IDEA",
    fullName: "IDEA Pergola ve Cam Sistemleri",
    description: "Türkiye'nin önde gelen IDEA ve cam sistemleri üreticisi",
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
