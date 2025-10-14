"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  /**
   * Form gönderildiğinde Gmail web arayüzünde yeni sekme açar
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Konu başlıkları mapping
    const subjectMap: { [key: string]: string } = {
      "product-info": "Ürün Bilgisi",
      "technical": "Teknik Destek",
      "distributor": "Distribütörlük",
      "warranty": "Garanti",
      "installation": "Montaj",
      "other": "Diğer"
    }
    
    // Mail içeriğini oluştur
    const subject = `İletişim: ${subjectMap[formData.subject] || "Genel Bilgi"}`
    const body = `
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone || "Belirtilmemiş"}
Konu: ${subjectMap[formData.subject] || "Diğer"}

Mesaj:
${formData.message}
    `.trim()
    
    // Gmail web arayüzü linki oluştur ve yeni sekmede aç
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email.info)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailLink, '_blank')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-card rounded-lg p-8 border">
      <div className="flex items-center mb-6">
        <Mail className="h-6 w-6 text-primary mr-3" />
        <h2 className="text-2xl font-bold text-foreground">Genel İletişim</h2>
      </div>

      <p className="text-muted-foreground mb-8">
        Sorularınız, önerileriniz veya genel bilgi talepleriniz için aşağıdaki formu kullanabilirsiniz.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="contact-name">Ad Soyad *</Label>
            <Input
              id="contact-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="contact-email">E-posta *</Label>
            <Input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="contact-phone">Telefon</Label>
            <Input
              id="contact-phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="subject">Konu *</Label>
            <Select onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Konu seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product-info">Ürün Bilgisi</SelectItem>
                <SelectItem value="technical">Teknik Destek</SelectItem>
                <SelectItem value="distributor">Distribütörlük</SelectItem>
                <SelectItem value="warranty">Garanti</SelectItem>
                <SelectItem value="installation">Montaj</SelectItem>
                <SelectItem value="other">Diğer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Mesajınız *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Mail className="h-4 w-4 mr-2" />
          Mail At
        </Button>
      </form>
    </div>
  )
}
