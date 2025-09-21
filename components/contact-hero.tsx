"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">{t("contact.subtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-background/80 backdrop-blur-sm rounded-lg border">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("contact.phone")}</h3>
              <p className="text-muted-foreground text-center">
                +90 212 XXX XX XX
                <br />
                +90 532 XXX XX XX
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-background/80 backdrop-blur-sm rounded-lg border">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("contact.email")}</h3>
              <p className="text-muted-foreground text-center">
                info@pergolasystems.com
                <br />
                export@pergolasystems.com
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-background/80 backdrop-blur-sm rounded-lg border">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("contact.address")}</h3>
              <p className="text-muted-foreground text-center">
                Organize Sanayi Bölgesi
                <br />
                İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
