"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Thermometer, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star,
  Home,
  Sparkles,
  Maximize
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

/**
 * Lüks Kış Bahçesi ürün detay sayfası
 * Lüks kış bahçesi modelinin özelliklerini detaylı şekilde gösterir
 */
export default function LuxuryWinterGardenPage() {
  const { t } = useLanguage()

  /**
   * Lüks kış bahçesi özellikleri
   */
  const features = [
    {
      icon: <Maximize className="h-6 w-6" />,
      title: "Panoramik Cam",
      description: "Kesintisiz manzara için geniş cam yüzeyler",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Akıllı Ev Entegrasyonu",
      description: "Google Home ve Alexa uyumlu",
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Gömme Isıtma",
      description: "Zemin ısıtma sistemi entegrasyonu",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Malzeme",
      description: "En kaliteli profil ve cam teknolojisi",
    },
  ]

  /**
   * Lüks kış bahçesi teknik özellikleri
   */
  const specifications = [
    { label: "Cam Tipi", value: "Panoramik Güvenlik Camı" },
    { label: "Isı Yalıtımı", value: "U değeri: 0.4 W/m²K" },
    { label: "Ses Yalıtımı", value: "Rw: 45 dB" },
    { label: "Zemin Isıtma", value: "Entegre Sistem" },
    { label: "Akıllı Kontrol", value: "Google Home, Alexa" },
    { label: "Profil", value: "Premium Alüminyum" },
    { label: "Özel Tasarım", value: "Mevcut" },
    { label: "Garanti", value: "20 Yıl" },
  ]

  /**
   * Lüks kış bahçesi avantajları
   */
  const advantages = [
    "Panoramik cam ile kesintisiz manzara",
    "Akıllı ev sistemleri ile entegrasyon",
    "Zemin ısıtma sistemi",
    "20 yıl garanti",
    "Özel tasarım imkanı",
    "Premium kalite malzeme",
    "Maksimum enerji tasarrufu",
    "VIP montaj ve servis",
  ]

  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('/luxury-winter-garden-panoramic-view.webp')"
          }}
        />
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="absolute inset-0 bg-[url('/luxury-winter-garden-panoramic-view.webp')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              {t("products.winterGardenSub.luxury.badge")}
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              {t("products.winterGardenSub.luxury.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              {t("products.winterGardenSub.luxury.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Özel Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/iletisim">Danışmanlık Al</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Lüks Model Özellikleri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En üst seviye konfor ve estetik için tasarlanmış lüks kış bahçesi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Teknik Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-gray-700">{spec.label}</span>
                  <span className="text-primary font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Lüks Kış Bahçesi Avantajları</h2>
              <p className="text-muted-foreground mb-8">
                Premium malzeme ve teknoloji ile en üst seviye yaşam konforu.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-200 rounded-2xl overflow-hidden">
                <img
                  src="/luxury-winter-garden-panoramic-view.webp"
                  alt="Lüks Kış Bahçesi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20</div>
                  <div className="text-sm text-muted-foreground">Yıl Garanti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lüks Kış Bahçenizi Özel Tasarlayın
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            VIP müşterilerimize özel tasarım ve uygulama hizmeti. Hayalinizdeki lüks kış bahçesi için bizimle görüşün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/teklif-al">
                Özel Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/kis-bahcesi">Tüm Modelleri Gör</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

