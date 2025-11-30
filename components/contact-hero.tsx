"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { contactInfo } from "@/lib/contact-info"
import Image from "next/image"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/company-headquarters-modern-building.jpg"
          alt="İletişim Arka Plan"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay - görsel üzerine koyu bir katman ekler */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D4247]/95 via-[#3D4247]/85 to-primary/20" />
      </div>

      {/* İçerik */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">İletişime Geçin</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-white/90 mb-8 text-pretty drop-shadow">{t("contact.subtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{t("contact.phone")}</h3>
              <p className="text-gray-700 text-center text-sm">
                {contactInfo.phone.display.primary}
                <br />
                {contactInfo.phone.display.secondary}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{t("contact.email")}</h3>
              <p className="text-gray-700 text-center text-sm">
                {contactInfo.email.info}
                <br />
                {contactInfo.email.export}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{t("contact.address")}</h3>
              <p className="text-gray-700 text-center text-sm">
                {contactInfo.address.street}
                <br />
                {contactInfo.address.city}, {contactInfo.address.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
