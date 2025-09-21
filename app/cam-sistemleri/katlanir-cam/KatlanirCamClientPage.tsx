"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, Star, Award, Shield, Zap, Ruler, Palette, Settings, Phone, Mail, MapPin } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export default function KatlanirCamClientPage() {
  const specifications = [
    { label: "Profil Kalınlığı", value: "70mm - 85mm" },
    { label: "Cam Kalınlığı", value: "24mm - 32mm" },
    { label: "Maksimum Genişlik", value: "6000mm" },
    { label: "Maksimum Yükseklik", value: "3000mm" },
    { label: "Rüzgar Dayanımı", value: "Class C5" },
    { label: "Su Geçirmezlik", value: "Class E1200" },
    { label: "Hava Geçirmezlik", value: "Class A4" },
    { label: "Isı Geçirgenlik", value: "Uf: 1.4 W/m²K" },
  ]

  const features = [
    "Çift cam teknolojisi",
    "Alüminyum profil",
    "Otomatik kilit sistemi",
    "Rüzgar sensörü",
    "LED aydınlatma",
    "Uzaktan kumanda",
  ]

  const materials = [
    { name: "Profil", detail: "6063-T5 Alüminyum alaşım, elektrostatik toz boya" },
    { name: "Cam", detail: "Çift cam, Low-E kaplama, Argon gaz dolgu" },
    { name: "Conta", detail: "EPDM kauçuk conta, UV dayanımlı" },
    { name: "Aksesuar", detail: "Paslanmaz çelik vida ve bağlantı elemanları" },
  ]

  const gallery = [
    "/folding-glass-gallery-1.jpg",
    "/folding-glass-gallery-2.jpg",
    "/folding-glass-gallery-3.jpg",
    "/folding-glass-gallery-4.jpg",
    "/folding-glass-gallery-5.jpg",
    "/folding-glass-gallery-6.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-orange-600">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/cam-sistemleri" className="hover:text-orange-600">
              Cam Sistemleri
            </Link>
            <span>/</span>
            <span className="text-foreground">Katlanır Cam</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Button asChild variant="ghost" className="mb-6 p-0 h-auto">
                <Link
                  href="/cam-sistemleri"
                  className="flex items-center gap-2 text-muted-foreground hover:text-orange-600"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Cam Sistemlerine Dön
                </Link>
              </Button>

              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
                <Badge variant="outline">15 Yıl Garanti</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Katlanır Cam Sistemleri
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Mekanlarınızı açık havaya bağlayan, estetik ve fonksiyonel katlanır cam çözümleri. Yüksek kaliteli
                malzemeler ve ileri teknoloji ile üretilmiştir.
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
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
                <Image src="/folding-glass-hero.jpg" alt="Katlanır Cam Sistemleri" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">₺45.000</div>
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
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="specifications" className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Teknik Özellikler
              </TabsTrigger>
              <TabsTrigger value="materials" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Malzemeler
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Galeri
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
                        <div className="text-2xl font-bold text-orange-600 mb-2">{spec.value}</div>
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

            <TabsContent value="gallery">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Katlanır Cam Galeri ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-background">
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
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
                <Shield className="w-4 h-4 text-orange-600" />
                15 Yıl Garanti
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-600" />
                Hızlı Montaj
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                Türkiye Geneli
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
