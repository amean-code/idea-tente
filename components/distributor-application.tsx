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

export function DistributorApplication() {
  const { t } = useLanguage()
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
    <section id="distributor-application" className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("distributor.application.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("distributor.application.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("distributor.application.contactInfo")}</CardTitle>
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
                  <CardTitle>{t("distributor.application.applicationProcess")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <span className="text-sm">{t("distributor.application.process.step1")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <span className="text-sm">{t("distributor.application.process.step2")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <span className="text-sm">{t("distributor.application.process.step3")}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <span className="text-sm">{t("distributor.application.process.step4")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t("distributor.application.form.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">{t("distributor.application.form.companyName")} *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">{t("distributor.application.form.contactPerson")} *</Label>
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
                        <Label htmlFor="email">{t("distributor.application.form.email")} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("distributor.application.form.phone")} *</Label>
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
                        <Label htmlFor="country">{t("distributor.application.form.country")} *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("distributor.application.form.selectCountry")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="germany">Almanya</SelectItem>
                            <SelectItem value="france">Fransa</SelectItem>
                            <SelectItem value="italy">İtalya</SelectItem>
                            <SelectItem value="spain">İspanya</SelectItem>
                            <SelectItem value="uae">BAE</SelectItem>
                            <SelectItem value="saudi">Suudi Arabistan</SelectItem>
                            <SelectItem value="other">Diğer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">{t("distributor.application.form.city")} *</Label>
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
                        <Label htmlFor="experience">{t("distributor.application.form.experience")}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("distributor.application.form.selectExperience")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 yıl</SelectItem>
                            <SelectItem value="3-5">3-5 yıl</SelectItem>
                            <SelectItem value="6-10">6-10 yıl</SelectItem>
                            <SelectItem value="10+">10+ yıl</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="marketSize">{t("distributor.application.form.marketSize")}</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, marketSize: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("distributor.application.form.selectMarket")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="local">Yerel</SelectItem>
                            <SelectItem value="regional">Bölgesel</SelectItem>
                            <SelectItem value="national">Ulusal</SelectItem>
                            <SelectItem value="international">Uluslararası</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("distributor.application.form.message")}</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder={t("distributor.application.form.messagePlaceholder")}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      {t("distributor.application.form.submit")}
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
