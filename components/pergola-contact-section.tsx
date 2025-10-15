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
      title: "Telefon",
      description: "Hemen arayın",
      action: "Ara",
      href: `tel:${contactInfo.phone.primary}`,
      primary: true
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Anında mesaj",
      action: "Mesaj Gönder",
      href: `https://wa.me/${contactInfo.whatsapp}`,
      primary: true
    },
    {
      icon: Mail,
      title: "E-posta",
      description: "Detaylı bilgi",
      action: "E-posta Gönder",
      href: `mailto:${contactInfo.email}`,
      primary: false
    },
    {
      icon: Calendar,
      title: "Randevu",
      description: "Ücretsiz keşif",
      action: "Randevu Al",
      href: "/teklif-al",
      primary: false
    }
  ]

  const stats = [
    { icon: Users, value: "5000+", label: "Mutlu Müşteri" },
    { icon: Award, value: "15", label: "Yıl Deneyim" },
    { icon: Shield, value: "%98", label: "Memnuniyet" },
    { icon: MapPin, value: "81", label: "İl Hizmeti" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        {/* Ana Başlık */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            İletişim
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Hayalinizdeki Projeyi Birlikte Gerçekleştirelim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            15 yıllık deneyimimiz ve uzman ekibimizle, size özel çözümler sunuyoruz. 
            Ücretsiz keşif ve detaylı teklif için hemen iletişime geçin.
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
              <h3 className="text-lg font-semibold text-foreground mb-4">İletişim Bilgileri</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{contactInfo.phone.primary}</div>
                    <div className="text-sm text-muted-foreground">Ana Telefon</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{contactInfo.email}</div>
                    <div className="text-sm text-muted-foreground">E-posta</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Türkiye Geneli</div>
                    <div className="text-sm text-muted-foreground">81 İl Hizmeti</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Pazartesi - Cuma</div>
                    <div className="text-sm text-muted-foreground">08:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Cumartesi</div>
                    <div className="text-sm text-muted-foreground">09:00 - 16:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Pazar</div>
                    <div className="text-sm text-muted-foreground">Kapalı</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hızlı Erişim */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Hızlı Erişim</h3>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/teklif-al">
                    <Award className="mr-2 h-4 w-4" />
                    Ücretsiz Teklif Al
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/referanslar">
                    <Users className="mr-2 h-4 w-4" />
                    Referans Projeler
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/katalog">
                    <Shield className="mr-2 h-4 w-4" />
                    Katalog İndir
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
