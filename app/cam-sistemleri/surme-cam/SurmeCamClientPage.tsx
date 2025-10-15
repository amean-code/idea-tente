"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, Star, Award, Shield, Zap, Ruler, Palette, Phone, Mail, MapPin } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export default function SurmeCamClientPage() {
  const specifications = [
    { label: "Profil Kalınlığı", value: "60mm - 75mm" },
    { label: "Cam Kalınlığı", value: "20mm - 28mm" },
    { label: "Maksimum Genişlik", value: "8000mm" },
    { label: "Maksimum Yükseklik", value: "2800mm" },
    { label: "Ray Sistemi", value: "Çift ray" },
    { label: "Kanat Ağırlığı", value: "Max 150kg" },
    { label: "Açılım Oranı", value: "%90" },
    { label: "Ses Yalıtımı", value: "42 dB" },
  ]

  const features = [
    "Sessiz sürme sistemi",
    "Çift ray teknolojisi",
    "Otomatik kapanma",
    "Çocuk kilidi",
    "Rüzgar kilidi",
    "Kolay temizlik",
  ]

  const materials = [
    { name: "Profil", detail: "6063-T5 Alüminyum, anodize kaplama" },
    { name: "Cam", detail: "Temperli cam, güvenlik filmi" },
    { name: "Ray", detail: "Paslanmaz çelik ray sistemi" },
    { name: "Tekerlek", detail: "Yüksek kalite rulman sistemi" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary-600">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/cam-sistemleri" className="hover:text-primary-600">
              Cam Sistemleri
            </Link>
            <span>/</span>
            <span className="text-foreground">Sürme Cam</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Button asChild variant="ghost" className="mb-6 p-0 h-auto">
                <Link
                  href="/cam-sistemleri"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary-600"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Cam Sistemlerine Dön
                </Link>
              </Button>

              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Popüler
                </Badge>
                <Badge variant="outline">Sessiz Çalışma</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Sürme Cam Sistemleri</h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Pratik kullanım ve estetik tasarımı bir araya getiren sürme cam sistemleri. Sessiz çalışma ve dayanıklı
                yapısıyla uzun yıllar hizmet verir.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    <Check className="w-3 h-3 mr-1" />
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-primary-foreground">
                  <Link href="/teklif-al">
                    Teklif Al
                    <Phone className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/iletisim">
                    İletişime Geç
                    <Mail className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/sliding-glass-hero.jpg" alt="Sürme Cam Sistemleri" fill className="object-cover" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">₺35.000</div>
                  <div className="text-sm text-muted-foreground">m² başlangıç</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="specifications" className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Teknik Özellikler
              </TabsTrigger>
              <TabsTrigger value="materials" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Malzemeler
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                        <div className="text-sm text-muted-foreground">{spec.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materials.map((material, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{material.name}</h3>
                        <p className="text-muted-foreground">{material.detail}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Projeniz İçin Teklif Alın</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz size en uygun çözümü sunmak için hazır. Ücretsiz keşif ve detaylı teklif için iletişime
              geçin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-primary-foreground">
                <Link href="/teklif-al">
                  <Award className="w-5 h-5 mr-2" />
                  Ücretsiz Teklif Al
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`tel:${contactInfo.phone.primary}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                15 Yıl Garanti
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Hızlı Montaj
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Türkiye Geneli
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
