"use client"

import { Phone, Mail, MapPin, Clock, Award, Users, Shield, ArrowRight, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { contactInfo } from "@/lib/contact-info"

/**
 * IDEA Systems'e özgü iletişim bölümü
 * Tüm sayfalarda kullanılabilir
 */
export function PergolaContactSection() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      title: t("contactSection.methods.phone.title"),
      description: t("contactSection.methods.phone.description"),
      action: t("contactSection.methods.phone.action"),
      href: `tel:${contactInfo.phone.primary}`,
      primary: true
    },
    {
      icon: MessageCircle,
      title: t("contactSection.methods.whatsapp.title"),
      description: t("contactSection.methods.whatsapp.description"),
      action: t("contactSection.methods.whatsapp.action"),
      href: `https://wa.me/${contactInfo.whatsapp}`,
      primary: true
    },
    {
      icon: Mail,
      title: t("contactSection.methods.email.title"),
      description: t("contactSection.methods.email.description"),
      action: t("contactSection.methods.email.action"),
      href: `mailto:${contactInfo.email}`,
      primary: false
    },
    {
      icon: Calendar,
      title: t("contactSection.methods.appointment.title"),
      description: t("contactSection.methods.appointment.description"),
      action: t("contactSection.methods.appointment.action"),
      href: "/teklif-al",
      primary: false
    }
  ]

  const stats = [
    { icon: Users, value: "5000+", label: t("contactSection.stats.happyCustomers") },
    { icon: Award, value: "15", label: t("contactSection.stats.yearsExperience") },
    { icon: Shield, value: "%98", label: t("contactSection.stats.satisfaction") },
    { icon: MapPin, value: "81", label: t("contactSection.stats.provinces") }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        {/* Ana Başlık */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            {t("contactSection.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("contactSection.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("contactSection.subtitle")}
          </p>
        </div>

        {/* İletişim Yöntemleri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                method.primary
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border hover:border-primary/50'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-full mb-4 ${
                  method.primary 
                    ? 'bg-primary-foreground/20' 
                    : 'bg-primary/10'
                }`}>
                  <method.icon className={`h-6 w-6 ${
                    method.primary ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                
                <h3 className={`font-semibold mb-2 ${
                  method.primary ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {method.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  method.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {method.description}
                </p>
                
                <Button
                  asChild
                  size="sm"
                  className={`w-full ${
                    method.primary
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  <a href={method.href}>
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* İletişim Bilgileri */}
        <div className="bg-background rounded-2xl p-8 border shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* İletişim Bilgileri */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t("contactSection.info.title")}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{contactInfo.phone.primary}</div>
                    <div className="text-sm text-muted-foreground">{t("contactSection.info.phone")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{contactInfo.email}</div>
                    <div className="text-sm text-muted-foreground">{t("contactSection.info.email")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{t("contactSection.info.country")}</div>
                    <div className="text-sm text-muted-foreground">{t("contactSection.info.provinces")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t("contactSection.workingHours.title")}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{t("contactSection.workingHours.weekdays")}</div>
                    <div className="text-sm text-muted-foreground">{t("contactSection.workingHours.weekdaysTime")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{t("contactSection.workingHours.saturday")}</div>
                    <div className="text-sm text-muted-foreground">{t("contactSection.workingHours.saturdayTime")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{t("contactSection.workingHours.sunday")}</div>
                    <div className="text-sm text-muted-foreground">{t("contactSection.workingHours.sundayTime")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hızlı Erişim */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t("contactSection.quickAccess.title")}</h3>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/teklif-al">
                    <Award className="mr-2 h-4 w-4" />
                    {t("contactSection.quickAccess.getQuote")}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/referanslar">
                    <Users className="mr-2 h-4 w-4" />
                    {t("contactSection.quickAccess.references")}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/katalog">
                    <Shield className="mr-2 h-4 w-4" />
                    {t("contactSection.quickAccess.downloadCatalog")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
