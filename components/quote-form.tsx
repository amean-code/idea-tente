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

export function QuoteForm() {
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
      "bioclimatic": "Biyoklimatik Pergola",
      "fixed": "Sabit Pergola",
      "glass": "Cam Sistemleri",
      "winter-garden": "Kış Bahçesi",
      "sun-breaker": "Güneş Kırıcı",
      "zip-screen": "Zip Perde",
      "combination": "Kombinasyon"
    }
    
    const projectTypeMap: { [key: string]: string } = {
      "residential": "Konut",
      "commercial": "Ticari",
      "hotel": "Otel/Restaurant",
      "office": "Ofis",
      "public": "Kamu"
    }
    
    const budgetMap: { [key: string]: string } = {
      "10k-25k": "€10,000 - €25,000",
      "25k-50k": "€25,000 - €50,000",
      "50k-100k": "€50,000 - €100,000",
      "100k+": "€100,000+",
      "discuss": "Görüşülür"
    }
    
    const timelineMap: { [key: string]: string } = {
      "asap": "En kısa sürede",
      "1-3months": "1-3 ay",
      "3-6months": "3-6 ay",
      "6months+": "6 ay+",
      "planning": "Planlama aşamasında"
    }
    
    // Mail içeriğini oluştur
    const subject = `Teklif Talebi: ${formData.name}`
    const body = `
TEKLİF TALEBİ BİLGİLERİ

Kişisel Bilgiler:
─────────────────
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Şirket: ${formData.company || "Belirtilmemiş"}
Ülke: ${formData.country || "Belirtilmemiş"}

Proje Detayları:
─────────────────
Ürün Tipi: ${productTypeMap[formData.productType] || "Belirtilmemiş"}
Proje Tipi: ${projectTypeMap[formData.projectType] || "Belirtilmemiş"}
Alan: ${formData.area ? formData.area + " m²" : "Belirtilmemiş"}
Bütçe: ${budgetMap[formData.budget] || "Belirtilmemiş"}
Zaman Çizelgesi: ${timelineMap[formData.timeline] || "Belirtilmemiş"}

Proje Açıklaması:
─────────────────
${formData.description || "Belirtilmemiş"}

Haber Bülteni: ${formData.newsletter ? "Evet" : "Hayır"}
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
        <h2 className="text-2xl font-bold text-foreground">Teklif Talep Formu</h2>
      </div>

      <p className="text-muted-foreground mb-8">
        Projeniz için detaylı teklif almak üzere aşağıdaki formu doldurun. 24 saat içinde size geri dönüş yapacağız.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Ad Soyad *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">E-posta *</Label>
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
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="company">Şirket</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="country">Ülke *</Label>
            <Select onValueChange={(value) => handleInputChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Ülke seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">Türkiye</SelectItem>
                <SelectItem value="de">Almanya</SelectItem>
                <SelectItem value="fr">Fransa</SelectItem>
                <SelectItem value="it">İtalya</SelectItem>
                <SelectItem value="es">İspanya</SelectItem>
                <SelectItem value="ae">BAE</SelectItem>
                <SelectItem value="sa">Suudi Arabistan</SelectItem>
                <SelectItem value="other">Diğer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="productType">Ürün Tipi *</Label>
            <Select onValueChange={(value) => handleInputChange("productType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Ürün seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bioclimatic">Biyoklimatik Pergola</SelectItem>
                <SelectItem value="fixed">Sabit Pergola</SelectItem>
                <SelectItem value="glass">Cam Sistemleri</SelectItem>
                <SelectItem value="winter-garden">Kış Bahçesi</SelectItem>
                <SelectItem value="sun-breaker">Güneş Kırıcı</SelectItem>
                <SelectItem value="zip-screen">Zip Perde</SelectItem>
                <SelectItem value="combination">Kombinasyon</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="projectType">Proje Tipi</Label>
            <Select onValueChange={(value) => handleInputChange("projectType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Proje tipi seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Konut</SelectItem>
                <SelectItem value="commercial">Ticari</SelectItem>
                <SelectItem value="hotel">Otel/Restaurant</SelectItem>
                <SelectItem value="office">Ofis</SelectItem>
                <SelectItem value="public">Kamu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="area">Alan (m²)</Label>
            <Input
              id="area"
              value={formData.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
              placeholder="Örn: 25"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="budget">Bütçe Aralığı</Label>
            <Select onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Bütçe seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10k-25k">€10,000 - €25,000</SelectItem>
                <SelectItem value="25k-50k">€25,000 - €50,000</SelectItem>
                <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                <SelectItem value="100k+">€100,000+</SelectItem>
                <SelectItem value="discuss">Görüşülür</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timeline">Zaman Çizelgesi</Label>
            <Select onValueChange={(value) => handleInputChange("timeline", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Zaman seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">En kısa sürede</SelectItem>
                <SelectItem value="1-3months">1-3 ay</SelectItem>
                <SelectItem value="3-6months">3-6 ay</SelectItem>
                <SelectItem value="6months+">6 ay+</SelectItem>
                <SelectItem value="planning">Planlama aşamasında</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Proje Detayları</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Projeniz hakkında detaylı bilgi verin..."
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
            Ürün güncellemeleri ve özel teklifler hakkında bilgilendirilmek istiyorum
          </Label>
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Mail className="h-4 w-4 mr-2" />
          Teklif İçin Mail At
        </Button>
      </form>
    </div>
  )
}
