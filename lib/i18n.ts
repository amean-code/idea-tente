export const languages = {
  tr: {
    name: "Türkçe",
    flag: "🇹🇷",
    code: "tr",
  },
  en: {
    name: "English",
    flag: "🇺🇸",
    code: "en",
  },
  ar: {
    name: "العربية",
    flag: "🇸🇦",
    code: "ar",
  },
  de: {
    name: "Deutsch",
    flag: "🇩🇪",
    code: "de",
  },
  ru: {
    name: "Русский",
    flag: "🇷🇺",
    code: "ru",
  },
} as const

export type Language = keyof typeof languages
export const defaultLanguage: Language = "tr"
export const supportedLanguages = Object.keys(languages) as Language[]
