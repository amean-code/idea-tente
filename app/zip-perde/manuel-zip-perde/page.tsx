"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wind, Shield, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

/**
 * Manuel Zip Perde ürün detay sayfası
 */
export default function ManualZipScreenPage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Ekonomik",
      description: "Uygun fiyat avantajı",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Dayanıklı Kumaş",
      description: "%95 UV koruma",
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Kolay Kullanım",
      description: "Pratik manuel sistem",
    },
  ]

  const specifications = [
    { label: "Kullanım", value: "Manuel Zincir/Krank" },
    { label: "Kumaş", value: "%95 UV Korumalı" },
    { label: "Montaj", value: "Kolay Montaj" },
    { label: "Garanti", value: "10 Yıl" },
    { label: "Fiyat", value: "₺2.800'den başlayan" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              {t("products.zipScreenSub.manual.badge")}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              {t("products.zipScreenSub.manual.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("products.zipScreenSub.manual.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/zip-perde">Tüm Modeller</Link>
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

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Manuel Zip Perde ile Ekonomik Çözüm</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Uygun fiyat ile kaliteli zip perde sistemleri.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/teklif-al">Ücretsiz Teklif Al</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

