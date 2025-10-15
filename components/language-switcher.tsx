"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type Language } from "@/lib/i18n"
import { useState, useEffect, useRef } from "react"

/**
 * Dil değiştirme dropdown komponenti
 * Header'da kullanılmak üzere tema desteği ile geliştirilmiş
 */

interface LanguageSwitcherProps {
  variant?: "ghost" | "default" | "outline"
  size?: "sm" | "default" | "lg"
  showText?: boolean
  theme?: "light" | "dark"
  position?: "bottom" | "top"
}

export function LanguageSwitcher({
  variant = "ghost",
  size = "sm",
  showText = true,
  theme = "light",
  position = "bottom",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  /**
   * Dil değiştirme işleyicisi
   * @param code - Seçilen dil kodu
   */
  const handleLanguageChange = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  const currentLang = languages[language]

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative inline-block z-50">
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 transition-colors relative z-50 ${
          theme === "dark" 
            ? "text-white hover:text-white/80 hover:bg-white/10 drop-shadow-md" 
            : "text-gray-800 hover:text-primary hover:bg-primary/10"
        }`}
      >
        <span className="text-lg">{currentLang.flag}</span>
        {showText && (
          <>
            <span className="font-medium">{currentLang.code.toUpperCase()}</span>
            <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        )}
      </Button>
      
      {isOpen && (
        <div className={`absolute right-0 min-w-[220px] bg-white border shadow-lg rounded-lg overflow-hidden z-30 ${
          position === "top" 
            ? "bottom-full mb-2" 
            : "top-full mt-2"
        }`}>
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
            Dil Seçin / Select Language
          </div>
          <div className="py-1">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className={`w-full cursor-pointer flex items-center justify-between px-3 py-2.5 transition-colors mx-1 my-0.5 rounded ${
                  language === code 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
                {language === code && (
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
