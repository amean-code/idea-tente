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

  const result: string = typeof value === 'string' ? value : key
  
  // Cache'e kaydet (maksimum 1000 çeviri cache'de tut)
  if (translationCache.size > 1000) {
    const firstKey = translationCache.keys().next().value
    if (firstKey) {
      translationCache.delete(firstKey)
    }
  }
  translationCache.set(cacheKey, result)
  
  return result
}

/**
 * Dil provider bileşeni
 * Hydration hatasını önlemek için client-side mounted kontrolü ile
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  // Client-side mounting kontrolü - hydration için
  useEffect(() => {
    setMounted(true)
    
    // Cookie ve localStorage'dan dil yükle
    if (typeof window !== 'undefined') {
      // Önce cookie'den deneyelim (middleware ile senkron)
      const cookieLanguage = document.cookie
        .split('; ')
        .find(row => row.startsWith('language='))
        ?.split('=')[1]
      
      // Sonra localStorage'a bakalım
      const savedLanguage = cookieLanguage || localStorage.getItem("language")
      
      if (savedLanguage && supportedLanguages.includes(savedLanguage as Language)) {
        const validLanguage = savedLanguage as Language
        setLanguageState(validLanguage)
        // RTL ayarını uygula
        document.documentElement.dir = validLanguage === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = validLanguage
      }
    }
  }, [])

  // Save language to localStorage and cookie when it changes
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    
    if (typeof window !== 'undefined') {
      // localStorage'a kaydet
      localStorage.setItem("language", lang)
      
      // Cookie'ye de kaydet (middleware ile senkron)
      document.cookie = `language=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
    }

    // Update document direction for RTL languages
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = lang
    }
  }, [])

  // Translation function
  const t = useCallback((key: string): string => {
    return getTranslation(key, language)
  }, [language])

  // RTL kontrolü
  const isRTL = useMemo(() => language === "ar", [language])

  // Context value
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    isRTL
  }), [language, setLanguage, t, isRTL])

  // Hydration için: Server ve client'ta aynı içeriği render et
  // Client-side mounted olana kadar defaultLanguage kullan
  if (!mounted) {
    const defaultContextValue = {
      language: defaultLanguage,
      setLanguage,
      t,
      isRTL: false
    }
    return <LanguageContext.Provider value={defaultContextValue}>{children}</LanguageContext.Provider>
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

/**
 * Dil context hook'u
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
