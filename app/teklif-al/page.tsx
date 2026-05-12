"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Award, Users, Zap, Shield, FileCheck, Headphones } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

/**
 * Teklif al sayfası
 * Detaylı form ve işlem adımları ile teklif alma süreci
 */
export default function QuotePage() {
  const { t } = useLanguage()

  const services = [
    t("quoteForm.productTypes.bioclimatic"),
    t("quoteForm.productTypes.glass"),
    t("quoteForm.productTypes.winterGarden"),
    t("quoteForm.productTypes.sunBreaker"),
    t("quoteForm.productTypes.zipScreen"),
    t("quoteForm.productTypes.combination"),
  ]

  const steps = [
    {
      number: "01",
      title: t("quotePage.process.steps.form.title"),
      description: t("quotePage.process.steps.form.description"),
      icon: FileCheck,
    },
    {
      number: "02",
      title: t("quotePage.process.steps.inspection.title"),
      description: t("quotePage.process.steps.inspection.description"),
      icon: Users,
    },
    {
      number: "03",
      title: t("quotePage.process.steps.presentation.title"),
      description: t("quotePage.process.steps.presentation.description"),
      icon: Award,
    },
    {
      number: "04",
      title: t("quotePage.process.steps.implementation.title"),
      description: t("quotePage.process.steps.implementation.description"),
      icon: Zap,
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: t("quotePage.advantages.warranty.title"),
      description: t("quotePage.advantages.warranty.description"),
    },
    {
      icon: Award,
      title: t("quotePage.advantages.freeInspection.title"),
      description: t("quotePage.advantages.freeInspection.description"),
    },
    {
      icon: Users,
      title: t("quotePage.advantages.expertTeam.title"),
      description: t("quotePage.advantages.expertTeam.description"),
    },
    {
      icon: Headphones,
      title: t("quotePage.advantages.support.title"),
      description: t("quotePage.advantages.support.description"),
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Arka plan görseli */}
        <div className="absolute inset-0">
          <Image
            src="/modern-bioclimatic-pergola-with-adjustable-louvers.webp"
            alt="Teklif Al"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D4247]/95 via-[#3D4247]/85 to-primary/30" />
        </div>

          <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{t("quotePage.hero.badge")}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              {t("quotePage.hero.title")} <span className="text-primary">{t("quotePage.hero.titleHighlight")}</span> {t("quotePage.hero.titleSuffix")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto text-gray-200">
              {t("quotePage.hero.subtitle")}
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">5000+</div>
                <div className="text-sm text-gray-300">{t("quotePage.hero.stats.completedProjects")}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">15+</div>
                <div className="text-sm text-gray-300">{t("quotePage.hero.stats.yearsExperience")}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">24</div>
                <div className="text-sm text-gray-300">{t("quotePage.hero.stats.responseTime")}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">%100</div>
                <div className="text-sm text-gray-300">{t("quotePage.hero.stats.satisfaction")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("quotePage.advantages.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("quotePage.advantages.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("quotePage.process.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("quotePage.process.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl font-bold text-xl mb-4 shadow-lg">
                    {step.number}
                    <step.icon className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground rounded-full p-1" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("quotePage.form.title")}</CardTitle>
                  <p className="text-muted-foreground">
                    {t("quotePage.form.subtitle")}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t("quotePage.form.firstName")} *</Label>
                      <Input id="firstName" placeholder={t("quotePage.form.firstNamePlaceholder")} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t("quotePage.form.lastName")} *</Label>
                      <Input id="lastName" placeholder={t("quotePage.form.lastNamePlaceholder")} required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("quotePage.form.phone")} *</Label>
                      <Input id="phone" type="tel" placeholder={contactInfo.phone.display.primary} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("quotePage.form.email")}</Label>
                      <Input id="email" type="email" placeholder="ornek@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">{t("quotePage.form.city")} *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("quotePage.form.cityPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="istanbul">{t("quotePage.form.cities.istanbul")}</SelectItem>
                        <SelectItem value="ankara">{t("quotePage.form.cities.ankara")}</SelectItem>
                        <SelectItem value="izmir">{t("quotePage.form.cities.izmir")}</SelectItem>
                        <SelectItem value="bursa">{t("quotePage.form.cities.bursa")}</SelectItem>
                        <SelectItem value="antalya">{t("quotePage.form.cities.antalya")}</SelectItem>
                        <SelectItem value="other">{t("quotePage.form.cities.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>{t("quotePage.form.interestedProducts")} *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`service-${index}`} />
                          <Label htmlFor={`service-${index}`} className="text-sm">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">{t("quotePage.form.applicationArea")}</Label>
                    <Input id="area" type="number" placeholder={t("quotePage.form.areaPlaceholder")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">{t("quotePage.form.budget")}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("quotePage.form.budgetPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-25000">{t("quotePage.form.budgets.0-25000")}</SelectItem>
                        <SelectItem value="25000-50000">{t("quotePage.form.budgets.25000-50000")}</SelectItem>
                        <SelectItem value="50000-100000">{t("quotePage.form.budgets.50000-100000")}</SelectItem>
                        <SelectItem value="100000+">{t("quotePage.form.budgets.100000+")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("quotePage.form.additionalInfo")}</Label>
                    <Textarea id="message" placeholder={t("quotePage.form.additionalInfoPlaceholder")} rows={4} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="text-sm">
                      <a href="/kvkk" className="text-primary hover:underline">
                        KVKK Aydınlatma Metni
                      </a>
                      {' '}{t("quotePage.form.privacy")}
                    </Label>
                  </div>

                  <Button size="lg" className="w-full">
                    {t("quotePage.form.submit")}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("quotePage.contactInfo.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{t("quotePage.contactInfo.phone")}</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.phone.display.primary}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{t("quotePage.contactInfo.email")}</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.email.info}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{t("quotePage.contactInfo.address")}</div>
                      <div className="text-sm text-muted-foreground">
                        {contactInfo.address.full}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{t("quotePage.contactInfo.workingHours")}</div>
                      <div className="text-sm text-muted-foreground">
                        {contactInfo.workingHours.display.weekdays}
                        <br />
                        {contactInfo.workingHours.display.saturday}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary-700 text-primary-foreground border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-semibold text-lg">{t("quotePage.guarantee.title")}</span>
                  </div>
                  <p className="text-sm opacity-95 mb-4">
                    {t("quotePage.guarantee.description")}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{t("quotePage.guarantee.response")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{t("quotePage.guarantee.inspection")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{t("quotePage.guarantee.quote")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hızlı İletişim Kartı */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{t("quotePage.quickContact.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full" size="lg" variant="outline">
                    <a href={`tel:${contactInfo.phone.primary}`}>
                      <Phone className="h-5 w-5 mr-2" />
                      {t("quotePage.quickContact.call")}
                    </a>
                  </Button>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                    <a href={contactInfo.whatsapp.quote} target="_blank" rel="noopener noreferrer">
                      <Image src="/wp-icon.webp" alt="WhatsApp" width={20} height={20} className="mr-2" />
                      {t("quotePage.quickContact.whatsapp")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("quotePage.trust.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("quotePage.trust.subtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">5000+</div>
                <p className="text-muted-foreground font-medium">{t("quotePage.trust.happyCustomers")}</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">%98</div>
                <p className="text-muted-foreground font-medium">{t("quotePage.trust.satisfactionRate")}</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground font-medium">{t("quotePage.trust.warranty")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
