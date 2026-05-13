"use client"

import { Clock, Phone, Mail, MapPin, Globe } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import { useLanguage } from "@/contexts/language-context"

/**
 * İletişim sayfasında telefon, e-posta, adres ve çalışma saatlerini çok dilli olarak gösterir.
 */
export function ContactInfo() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">{t("contactInfo.title")}</h2>
        <p className="text-muted-foreground text-lg">
          {t("contactInfo.subtitle")}
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{t("contactInfo.phone")}</h3>
            <p className="text-muted-foreground">
              {t("contactInfo.phoneFactory")} {contactInfo.phone.display.primary}
              <br />
              {t("contactInfo.phoneMobileWhatsapp")} {contactInfo.phone.display.secondary}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{t("contactInfo.email")}</h3>
            <p className="text-muted-foreground">
              {t("contactInfo.emailGeneral")} {contactInfo.email.info}
              <br />
              {t("contactInfo.emailExport")} {contactInfo.email.export}
              <br />
              {t("contactInfo.emailSupport")} {contactInfo.email.support}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{t("contactInfo.address")}</h3>
            <p className="text-muted-foreground">
              {contactInfo.company.fullName}
              <br />
              {contactInfo.address.full}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{t("contactInfo.workingHours")}</h3>
            <p className="text-muted-foreground">
              {contactInfo.workingHours.display.weekdays}
              <br />
              {contactInfo.workingHours.display.saturday}
              <br />
              {contactInfo.workingHours.display.sunday}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{t("contactInfo.languageSupport")}</h3>
            <p className="text-muted-foreground">
              {t("contactInfo.languages")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
