"use client"

import { MapPin } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import { useLanguage } from "@/contexts/language-context"

/**
 * İletişim harita bileşeni
 * Google Maps ile şirket konumunu gösterir
 */
export function ContactMap() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("contact.mapBadge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contact.mapTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactInfo.company.shortName} - {t("contact.mapSubtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-card rounded-xl p-6 border text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">{t("contact.addressCard")}</h3>
              <p className="text-sm text-muted-foreground">
                {contactInfo.address.full}
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border text-center">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{t("contact.transportCard")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.transportInfo")}
                <br />
                {t("contact.parkingInfo")}
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border text-center">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{t("contact.showroomCard")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.showroomInfo")}
                <br />
                {t("contact.appointmentInfo")}
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0364485820896!2d30.733891976092583!3d36.86968867224231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390f5e8c8a8a9%3A0x1234567890abcdef!2sYenig%C3%B6l%20Mah.%2C%20%C4%B0zzet%20Uzun%20Filiz%20Sok.%20No%3A75%2C%2007070%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="IDEA Tente Konum"
            />
          </div>

          {/* Yol Tarifi Butonu */}
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir//Yenigöl+Mah.+İzzet+Uzun+Filiz+Sok.+No:75+Muratpaşa+Antalya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <MapPin className="h-5 w-5" />
              {t("contact.getDirections")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


