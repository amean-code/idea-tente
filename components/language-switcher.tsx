"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type Language } from "@/lib/i18n"
import { useState } from "react"

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

  const handleLanguageChange = (code: Language) => {
    console.log("Changing language to:", code)
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`flex ${
            theme === "dark" ? "text-white hover:text-white/80 hover:bg-white/10 drop-shadow-md" : ""
          }`}
        >
          <Globe className="h-4 w-4 mr-2" />
          {showText && languages[language].code.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="z-[9999] min-w-[160px] relative"
        sideOffset={5}
        avoidCollisions={true}
        collisionPadding={10}
      >
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className={`cursor-pointer flex items-center ${
              language === code ? "bg-accent" : ""
            }`}
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
