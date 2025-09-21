"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function TestLangPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Dil Test Sayfası</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Mevcut Dil: {language}</h2>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Dil Değiştirici:</h3>
          <LanguageSwitcher />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Test Çevirileri:</h3>
          <div className="space-y-2">
            <p><strong>nav.pergolaSystems:</strong> {t("nav.pergolaSystems")}</p>
            <p><strong>nav.glassSystems:</strong> {t("nav.glassSystems")}</p>
            <p><strong>nav.contact:</strong> {t("nav.contact")}</p>
            <p><strong>hero.title:</strong> {t("hero.title")}</p>
            <p><strong>hero.subtitle:</strong> {t("hero.subtitle")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
