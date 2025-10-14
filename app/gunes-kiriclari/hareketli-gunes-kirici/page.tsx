"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Wifi, ArrowRight, Settings } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

/**
 * Hareketli Güneş Kırıcı ürün detay sayfası
 */
export default function MotorizedSunBreakerPage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Motorlu Sistem",
      description: "Otomatik açılır-kapanır",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Uzaktan Kumanda",
      description: "Akıllı kontrol sistemi",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Ayarlanabilir",
      description: "İhtiyaca göre pozisyon",
    },
  ]

  const specifications = [
    { label: "Motor Tipi", value: "Somfy / Nice" },
    { label: "Kontrol", value: "Uzaktan Kumanda + Sensör" },
    { label: "Açı Ayarı", value: "0-90 Derece" },
    { label: "Garanti", value: "10 Yıl" },
    { label: "Fiyat", value: "₺35.000'den başlayan" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              {t("products.sunBreakerSub.motorized.badge")}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              {t("products.sunBreakerSub.motorized.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("products.sunBreakerSub.motorized.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/gunes-kiriclari">Tüm Modeller</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Teknik Özellikler</h2>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold">{spec.label}</span>
                  <span className="text-primary">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Akıllı Güneş Kontrolü</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Motorlu güneş kırıcı ile maksimum konfor ve enerji tasarrufu.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/teklif-al">Ücretsiz Teklif Al</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

