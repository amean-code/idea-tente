"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Mail } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import { useLanguage } from "@/contexts/language-context"

export function QuoteForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    productType: "",
    projectType: "",
    area: "",
    budget: "",
    timeline: "",
    description: "",
    newsletter: false,
  })

  /**
   * Form gönderildiğinde Gmail web arayüzünde yeni sekme açar
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Ürün tipi mapping
    const productTypeMap: { [key: string]: string } = {
      "bioclimatic": t("quoteForm.productTypes.bioclimatic"),
      "fixed": t("quoteForm.productTypes.fixed"),
      "glass": t("quoteForm.productTypes.glass"),
      "winter-garden": t("quoteForm.productTypes.winterGarden"),
      "sun-breaker": t("quoteForm.productTypes.sunBreaker"),
      "zip-screen": t("quoteForm.productTypes.zipScreen"),
      "combination": t("quoteForm.productTypes.combination")
    }
    
    const projectTypeMap: { [key: string]: string } = {
      "residential": t("quoteForm.projectTypes.residential"),
      "commercial": t("quoteForm.projectTypes.commercial"),
      "hotel": t("quoteForm.projectTypes.hotel"),
      "office": t("quoteForm.projectTypes.office"),
      "public": t("quoteForm.projectTypes.public")
    }
    
    const budgetMap: { [key: string]: string } = {
      "10k-25k": t("quoteForm.budgets.10k-25k"),
      "25k-50k": t("quoteForm.budgets.25k-50k"),
      "50k-100k": t("quoteForm.budgets.50k-100k"),
      "100k+": t("quoteForm.budgets.100k+"),
      "discuss": t("quoteForm.budgets.discuss")
    }
    
    const timelineMap: { [key: string]: string } = {
      "asap": t("quoteForm.timelines.asap"),
      "1-3months": t("quoteForm.timelines.1-3months"),
      "3-6months": t("quoteForm.timelines.3-6months"),
      "6months+": t("quoteForm.timelines.6months+"),
      "planning": t("quoteForm.timelines.planning")
    }
    
    // Mail içeriğini oluştur
    const subject = `${t("quoteForm.emailSubject")} ${formData.name}`
    const body = `
${t("quoteForm.emailBody.title")}

${t("quoteForm.emailBody.personalInfo")}
─────────────────
${t("contactForm.name")}: ${formData.name}
${t("contactForm.email")}: ${formData.email}
${t("contactForm.phone")}: ${formData.phone}
${t("quoteForm.company")}: ${formData.company || t("quoteForm.emailBody.notSpecified")}
${t("quoteForm.country")}: ${formData.country ? t(`quoteForm.countries.${formData.country}`) || formData.country : t("quoteForm.emailBody.notSpecified")}

${t("quoteForm.emailBody.projectDetails")}
─────────────────
${t("quoteForm.productType")}: ${productTypeMap[formData.productType] || t("quoteForm.emailBody.notSpecified")}
${t("quoteForm.projectType")}: ${projectTypeMap[formData.projectType] || t("quoteForm.emailBody.notSpecified")}
${t("quoteForm.area")}: ${formData.area ? formData.area + " m²" : t("quoteForm.emailBody.notSpecified")}
${t("quoteForm.budget")}: ${budgetMap[formData.budget] || t("quoteForm.emailBody.notSpecified")}
${t("quoteForm.timeline")}: ${timelineMap[formData.timeline] || t("quoteForm.emailBody.notSpecified")}

${t("quoteForm.emailBody.projectDescription")}:
─────────────────
${formData.description || t("quoteForm.emailBody.notSpecified")}

${t("quoteForm.emailBody.newsletterLabel")} ${formData.newsletter ? t("quoteForm.emailBody.yes") : t("quoteForm.emailBody.no")}
    `.trim()
    
    // Gmail web arayüzü linki oluştur ve yeni sekmede aç
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email.info)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailLink, '_blank')
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-card rounded-lg p-8 border">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-primary mr-3" />
        <h2 className="text-2xl font-bold text-foreground">{t("quoteForm.title")}</h2>
      </div>

      <p className="text-muted-foreground mb-8">
        {t("quoteForm.subtitle")}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">{t("quoteForm.name")} *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">{t("quoteForm.email")} *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="phone">{t("quoteForm.phone")} *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="company">{t("quoteForm.company")}</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="country">{t("quoteForm.country")} *</Label>
            <Select onValueChange={(value) => handleInputChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("quoteForm.countryPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">{t("quoteForm.countries.tr")}</SelectItem>
                <SelectItem value="de">{t("quoteForm.countries.de")}</SelectItem>
                <SelectItem value="fr">{t("quoteForm.countries.fr")}</SelectItem>
                <SelectItem value="it">{t("quoteForm.countries.it")}</SelectItem>
                <SelectItem value="es">{t("quoteForm.countries.es")}</SelectItem>
                <SelectItem value="ae">{t("quoteForm.countries.ae")}</SelectItem>
                <SelectItem value="sa">{t("quoteForm.countries.sa")}</SelectItem>
                <SelectItem value="other">{t("quoteForm.countries.other")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="productType">{t("quoteForm.productType")} *</Label>
            <Select onValueChange={(value) => handleInputChange("productType", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("quoteForm.productTypePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bioclimatic">{t("quoteForm.productTypes.bioclimatic")}</SelectItem>
                <SelectItem value="fixed">{t("quoteForm.productTypes.fixed")}</SelectItem>
                <SelectItem value="glass">{t("quoteForm.productTypes.glass")}</SelectItem>
                <SelectItem value="winter-garden">{t("quoteForm.productTypes.winterGarden")}</SelectItem>
                <SelectItem value="sun-breaker">{t("quoteForm.productTypes.sunBreaker")}</SelectItem>
                <SelectItem value="zip-screen">{t("quoteForm.productTypes.zipScreen")}</SelectItem>
                <SelectItem value="combination">{t("quoteForm.productTypes.combination")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="projectType">{t("quoteForm.projectType")}</Label>
            <Select onValueChange={(value) => handleInputChange("projectType", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("quoteForm.projectTypePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">{t("quoteForm.projectTypes.residential")}</SelectItem>
                <SelectItem value="commercial">{t("quoteForm.projectTypes.commercial")}</SelectItem>
                <SelectItem value="hotel">{t("quoteForm.projectTypes.hotel")}</SelectItem>
                <SelectItem value="office">{t("quoteForm.projectTypes.office")}</SelectItem>
                <SelectItem value="public">{t("quoteForm.projectTypes.public")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="area">{t("quoteForm.area")}</Label>
            <Input
              id="area"
              value={formData.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
              placeholder={t("quoteForm.areaPlaceholder")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="budget">{t("quoteForm.budget")}</Label>
            <Select onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("quoteForm.budgetPlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10k-25k">{t("quoteForm.budgets.10k-25k")}</SelectItem>
                <SelectItem value="25k-50k">{t("quoteForm.budgets.25k-50k")}</SelectItem>
                <SelectItem value="50k-100k">{t("quoteForm.budgets.50k-100k")}</SelectItem>
                <SelectItem value="100k+">{t("quoteForm.budgets.100k+")}</SelectItem>
                <SelectItem value="discuss">{t("quoteForm.budgets.discuss")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timeline">{t("quoteForm.timeline")}</Label>
            <Select onValueChange={(value) => handleInputChange("timeline", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("quoteForm.timelinePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">{t("quoteForm.timelines.asap")}</SelectItem>
                <SelectItem value="1-3months">{t("quoteForm.timelines.1-3months")}</SelectItem>
                <SelectItem value="3-6months">{t("quoteForm.timelines.3-6months")}</SelectItem>
                <SelectItem value="6months+">{t("quoteForm.timelines.6months+")}</SelectItem>
                <SelectItem value="planning">{t("quoteForm.timelines.planning")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">{t("quoteForm.description")}</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder={t("quoteForm.descriptionPlaceholder")}
            rows={4}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm">
            {t("quoteForm.newsletter")}
          </Label>
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Mail className="h-4 w-4 mr-2" />
          {t("quoteForm.submit")}
        </Button>
      </form>
    </div>
  )
}
