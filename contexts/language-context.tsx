"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, defaultLanguage, supportedLanguages } from "@/lib/i18n"
import { translations } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)

    // Update document direction for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  // Translation function with nested key support
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) break
    }

    // Fallback to default language if translation not found
    if (value === undefined) {
      let fallbackValue: any = translations[defaultLanguage]
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k]
        if (fallbackValue === undefined) break
      }
      value = fallbackValue
    }

    return value || key
  }

  const isRTL = language === "ar"

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
