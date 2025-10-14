"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type Language } from "@/lib/i18n"
import { useState } from "react"

/**
 * Dil değiştirme dropdown komponenti
 * Header'da kullanılmak üzere tema desteği ile geliştirilmiş
 */

interface LanguageSwitcherProps {
  variant?: "ghost" | "default" | "outline"
  size?: "sm" | "default" | "lg"
  showText?: boolean
  theme?: "light" | "dark"
}

export function LanguageSwitcher({
  variant = "ghost",
  size = "sm",
  showText = true,
  theme = "light",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Dil değiştirme işleyicisi
   * @param code - Seçilen dil kodu
   */
  const handleLanguageChange = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  const currentLang = languages[language]

  return (
    <div className="relative inline-block">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={`flex items-center gap-2 transition-colors ${
              theme === "dark" 
                ? "text-white hover:text-white/80 hover:bg-white/10 drop-shadow-md" 
                : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
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
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="min-w-[220px] !bg-white !border-2 !border-red-500 !shadow-2xl rounded-lg overflow-hidden"
          sideOffset={8}
          side="bottom"
          forceMount={isOpen ? true : undefined}
        >
        <div className="p-4 !bg-yellow-300 !text-black font-bold text-center">
          TEST: DROPDOWN GÖRÜNÜYOR MU?<br/>
          isOpen: {String(isOpen)}
        </div>
        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
          Dil Seçin / Select Language
        </div>
        <div className="py-1">
          {Object.entries(languages).map(([code, lang]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`cursor-pointer flex items-center justify-between px-3 py-2.5 transition-colors mx-1 my-0.5 rounded ${
                language === code 
                  ? "bg-orange-50 text-orange-600 font-medium" 
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </div>
              {language === code && (
                <Check className="h-4 w-4 text-orange-600 flex-shrink-0" />
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
