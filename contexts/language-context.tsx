"use client"

import { createContext, useContext, useState, useEffect, useMemo, useCallback, type ReactNode } from "react"
import { type Language, defaultLanguage, supportedLanguages } from "@/lib/i18n"
import { translations } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Çeviri cache'i - aynı key'ler için tekrar hesaplama yapmamak için
const translationCache = new Map<string, string>()

/**
 * Çeviri fonksiyonu - nested key desteği ile optimize edilmiş
 * @param key - Çeviri anahtarı (örn: "nav.pergolaSystems")
 * @param currentLanguage - Mevcut dil
 * @returns Çevrilmiş metin
 */
const getTranslation = (key: string, currentLanguage: Language): string => {
  const cacheKey = `${currentLanguage}:${key}`
  
  // Cache'den kontrol et
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!
  }

  const keys = key.split(".")
  let value: any = translations[currentLanguage]

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

  const result = value || key
  
  // Cache'e kaydet (maksimum 1000 çeviri cache'de tut)
  if (translationCache.size > 1000) {
    const firstKey = translationCache.keys().next().value
    translationCache.delete(firstKey)
  }
  translationCache.set(cacheKey, result)
  
  return result
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load language from localStorage on mount - sadece bir kez
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
    setIsInitialized(true)
  }, [])

  // Save language to localStorage when it changes - useCallback ile optimize edildi
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)

    // Update document direction for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [])

  // Translation function - useMemo ile optimize edildi
  const t = useCallback((key: string): string => {
    if (!isInitialized) return key // İlk yükleme sırasında key'i döndür
    return getTranslation(key, language)
  }, [language, isInitialized])

  // RTL kontrolü - useMemo ile optimize edildi
  const isRTL = useMemo(() => language === "ar", [language])

  // Context value - useMemo ile optimize edildi
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    isRTL
  }), [language, setLanguage, t, isRTL])

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
