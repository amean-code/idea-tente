"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/lib/contact-info"
import { useLanguage } from "@/contexts/language-context"

export function WhatsAppCTA() {
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white mt-8">
      <div className="flex items-center mb-4">
        <MessageCircle className="h-8 w-8 mr-3" />
        <h3 className="text-2xl font-bold">{t("whatsappCTA.title")}</h3>
      </div>

      <p className="mb-6 text-green-50">
        {t("whatsappCTA.subtitle")}
      </p>

      <div className="space-y-4">
        <Button className="w-full bg-white text-green-600 hover:bg-green-50" size="lg" asChild>
          <a href={contactInfo.whatsapp.primary} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" />
            {t("whatsappCTA.turkiye")}
          </a>
        </Button>

        <Button className="w-full bg-white text-green-600 hover:bg-green-50" size="lg" asChild>
          <a href={contactInfo.whatsapp.primary} target="_blank" rel="noopener noreferrer">
            <Phone className="h-5 w-5 mr-2" />
            {t("whatsappCTA.international")}
          </a>
        </Button>
      </div>

      <p className="text-xs text-green-100 mt-4">{t("whatsappCTA.workingHours")} {contactInfo.workingHours.display.weekdays} (GMT+3)</p>
    </div>
  )
}
