"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import { useLanguage } from "@/contexts/language-context"

// Çeviriler - sayfa içinde tanımlı
const translations = {
  tr: {
    title: "Distribütör Başvuru Formu",
    subtitle: "Global ağımıza katılmak için başvuru formunu doldurun. En kısa sürede sizinle iletişime geçeceğiz.",
    contactInfo: "İletişim Bilgileri",
    applicationProcess: "Başvuru Süreci",
    form: {
      title: "Başvuru Formu",
      companyName: "Şirket Adı",
      contactPerson: "İletişim Kişisi",
      email: "E-posta",
      phone: "Telefon",
      country: "Ülke",
      city: "Şehir",
      experience: "Sektör Deneyimi",
      marketSize: "Pazar Büyüklüğü",
      message: "Mesajınız",
      submit: "Başvuru Gönder",
      selectCountry: "Ülke seçin",
      selectExperience: "Deneyim süresi",
      selectMarket: "Hedef pazar",
      messagePlaceholder: "Şirketiniz ve hedefleriniz hakkında bilgi verin..."
    },
    process: {
      step1: "Başvuru formu",
      step2: "Değerlendirme",
      step3: "Görüşme",
      step4: "Anlaşma"
    },
    countries: {
      germany: "Almanya",
      france: "Fransa",
      italy: "İtalya",
      spain: "İspanya",
      uae: "BAE",
      saudi: "Suudi Arabistan",
      other: "Diğer"
    },
    experience: {
      "0-2": "0-2 yıl",
      "3-5": "3-5 yıl",
      "6-10": "6-10 yıl",
      "10+": "10+ yıl"
    },
    marketSize: {
      local: "Yerel",
      regional: "Bölgesel",
      national: "Ulusal",
      international: "Uluslararası"
    }
  },
  en: {
    title: "Distributor Application Form",
    subtitle: "Fill out the application form to join our global network. We will contact you as soon as possible.",
    contactInfo: "Contact Information",
    applicationProcess: "Application Process",
    form: {
      title: "Application Form",
      companyName: "Company Name",
      contactPerson: "Contact Person",
      email: "Email",
      phone: "Phone",
      country: "Country",
      city: "City",
      experience: "Industry Experience",
      marketSize: "Market Size",
      message: "Your Message",
      submit: "Submit Application",
      selectCountry: "Select country",
      selectExperience: "Experience duration",
      selectMarket: "Target market",
      messagePlaceholder: "Tell us about your company and goals..."
    },
    process: {
      step1: "Application form",
      step2: "Evaluation",
      step3: "Interview",
      step4: "Agreement"
    },
    countries: {
      germany: "Germany",
      france: "France",
      italy: "Italy",
      spain: "Spain",
      uae: "UAE",
      saudi: "Saudi Arabia",
      other: "Other"
    },
    experience: {
      "0-2": "0-2 years",
      "3-5": "3-5 years",
      "6-10": "6-10 years",
      "10+": "10+ years"
    },
    marketSize: {
      local: "Local",
      regional: "Regional",
      national: "National",
      international: "International"
    }
  },
  de: {
    title: "Händler-Bewerbungsformular",
    subtitle: "Füllen Sie das Bewerbungsformular aus, um unserem globalen Netzwerk beizutreten. Wir werden uns so schnell wie möglich bei Ihnen melden.",
    contactInfo: "Kontaktinformationen",
    applicationProcess: "Bewerbungsprozess",
    form: {
      title: "Bewerbungsformular",
      companyName: "Firmenname",
      contactPerson: "Ansprechpartner",
      email: "E-Mail",
      phone: "Telefon",
      country: "Land",
      city: "Stadt",
      experience: "Branchenerfahrung",
      marketSize: "Marktgröße",
      message: "Ihre Nachricht",
      submit: "Bewerbung absenden",
      selectCountry: "Land auswählen",
      selectExperience: "Erfahrungsdauer",
      selectMarket: "Zielmarkt",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Unternehmen und Ihren Zielen..."
    },
    process: {
      step1: "Bewerbungsformular",
      step2: "Bewertung",
      step3: "Interview",
      step4: "Vereinbarung"
    },
    countries: {
      germany: "Deutschland",
      france: "Frankreich",
      italy: "Italien",
      spain: "Spanien",
      uae: "VAE",
      saudi: "Saudi-Arabien",
      other: "Andere"
    },
    experience: {
      "0-2": "0-2 Jahre",
      "3-5": "3-5 Jahre",
      "6-10": "6-10 Jahre",
      "10+": "10+ Jahre"
    },
    marketSize: {
      local: "Lokal",
      regional: "Regional",
      national: "National",
      international: "International"
    }
  },
  ar: {
    title: "نموذج طلب الموزع",
    subtitle: "املأ نموذج الطلب للانضمام إلى شبكتنا العالمية. سنتواصل معك في أقرب وقت ممكن.",
    contactInfo: "معلومات الاتصال",
    applicationProcess: "عملية التقديم",
    form: {
      title: "نموذج الطلب",
      companyName: "اسم الشركة",
      contactPerson: "الشخص المسؤول",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      country: "البلد",
      city: "المدينة",
      experience: "الخبرة في القطاع",
      marketSize: "حجم السوق",
      message: "رسالتك",
      submit: "إرسال الطلب",
      selectCountry: "اختر البلد",
      selectExperience: "مدة الخبرة",
      selectMarket: "السوق المستهدف",
      messagePlaceholder: "أخبرنا عن شركتك وأهدافك..."
    },
    process: {
      step1: "نموذج الطلب",
      step2: "التقييم",
      step3: "المقابلة",
      step4: "الاتفاق"
    },
    countries: {
      germany: "ألمانيا",
      france: "فرنسا",
      italy: "إيطاليا",
      spain: "إسبانيا",
      uae: "الإمارات",
      saudi: "السعودية",
      other: "أخرى"
    },
    experience: {
      "0-2": "0-2 سنة",
      "3-5": "3-5 سنوات",
      "6-10": "6-10 سنوات",
      "10+": "10+ سنوات"
    },
    marketSize: {
      local: "محلي",
      regional: "إقليمي",
      national: "وطني",
      international: "دولي"
    }
  }
}

export function DistributorApplication() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.tr
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    experience: "",
    marketSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Distributor application:", formData)
  }

  return (
    <section
      id="distributor-application"
      className="scroll-mt-28 py-20 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.contactInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.phone.display.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Send className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.email.export}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.applicationProcess}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <span className="text-sm">{t.process.step1}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <span className="text-sm">{t.process.step2}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <span className="text-sm">{t.process.step3}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <span className="text-sm">{t.process.step4}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t.form.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">{t.form.companyName} *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">{t.form.contactPerson} *</Label>
                        <Input
                          id="contactPerson"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.form.phone} *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">{t.form.country} *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.selectCountry} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="germany">{t.countries.germany}</SelectItem>
                            <SelectItem value="france">{t.countries.france}</SelectItem>
                            <SelectItem value="italy">{t.countries.italy}</SelectItem>
                            <SelectItem value="spain">{t.countries.spain}</SelectItem>
                            <SelectItem value="uae">{t.countries.uae}</SelectItem>
                            <SelectItem value="saudi">{t.countries.saudi}</SelectItem>
                            <SelectItem value="other">{t.countries.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">{t.form.city} *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">{t.form.experience}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.selectExperience} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">{t.experience["0-2"]}</SelectItem>
                            <SelectItem value="3-5">{t.experience["3-5"]}</SelectItem>
                            <SelectItem value="6-10">{t.experience["6-10"]}</SelectItem>
                            <SelectItem value="10+">{t.experience["10+"]}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="marketSize">{t.form.marketSize}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, marketSize: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.selectMarket} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="local">{t.marketSize.local}</SelectItem>
                            <SelectItem value="regional">{t.marketSize.regional}</SelectItem>
                            <SelectItem value="national">{t.marketSize.national}</SelectItem>
                            <SelectItem value="international">{t.marketSize.international}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.form.message}</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder={t.form.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      {t.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
