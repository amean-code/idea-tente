"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Smartphone, Wifi, Cloud, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function SmartBiyoklimatikPage() {
  const smartFeatures = [
    "IoT sensör teknolojisi",
    "Otomatik hava durumu kontrolü",
    "Mobil uygulama kontrolü",
    "Sesli komut desteği",
    "Uzaktan erişim",
    "Enerji tasarrufu algoritması",
    "Bakım hatırlatıcıları",
    "Güvenlik kamera entegrasyonu",
  ]

  const specifications = {
    "Kontrol Sistemi": "IoT Tabanlı Akıllı Kontrol",
    Sensörler: "Hava Durumu, Işık, Hareket",
    Bağlantı: "WiFi, Bluetooth, 4G",
    Uygulama: "iOS & Android",
    "Sesli Kontrol": "Alexa, Google Assistant",
    "Güç Tüketimi": "Ultra Düşük (5W standby)",
    Garanti: "10 Yıl Sistem + 3 Yıl Elektronik",
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/smart-bioclimatic-pergola-iot-control.jpg"
            alt="Akıllı Biyoklimatik Pergola"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">Akıllı Teknoloji</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Akıllı Biyoklimatik Pergola</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">Geleceğin teknolojisi ile otomatik konfor</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Demo İzle
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Teklif Al
              </Button>
            </div>
          </div>
        </section>

        {/* Smart Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Akıllı Özellikler</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                IoT teknolojisi ile tam otomatik kontrol ve enerji tasarrufu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-blue-200 transition-all hover:shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {index % 4 === 0 && <Wifi className="h-8 w-8 text-blue-500" />}
                      {index % 4 === 1 && <Cloud className="h-8 w-8 text-purple-500" />}
                      {index % 4 === 2 && <Smartphone className="h-8 w-8 text-blue-500" />}
                      {index % 4 === 3 && <CheckCircle className="h-8 w-8 text-purple-500" />}
                    </div>
                    <h3 className="font-semibold text-lg">{feature}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="app" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="app">Mobil Uygulama</TabsTrigger>
                  <TabsTrigger value="sensors">Sensör Teknolojisi</TabsTrigger>
                  <TabsTrigger value="automation">Otomasyon</TabsTrigger>
                  <TabsTrigger value="specs">Teknik Özellikler</TabsTrigger>
                </TabsList>

                <TabsContent value="app" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-6">Akıllı Kontrol Uygulaması</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Uzaktan tam kontrol</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Otomatik programlama</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Enerji tüketimi takibi</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Bakım hatırlatıcıları</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-[400px]">
                      <Image
                        src="/smart-pergola-mobile-app-interface.jpg"
                        alt="Mobil Uygulama"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sensors" className="mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="text-center p-6">
                      <CardContent className="p-0">
                        <Cloud className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">Hava Durumu Sensörü</h4>
                        <p className="text-sm text-muted-foreground">Yağmur, rüzgar ve sıcaklık otomatik algılama</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center p-6">
                      <CardContent className="p-0">
                        <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="h-6 w-6 bg-yellow-500 rounded-full" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Işık Sensörü</h4>
                        <p className="text-sm text-muted-foreground">Güneş ışığı yoğunluğuna göre otomatik ayarlama</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center p-6">
                      <CardContent className="p-0">
                        <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="h-6 w-6 bg-red-500 rounded-full animate-pulse" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Hareket Sensörü</h4>
                        <p className="text-sm text-muted-foreground">
                          Güvenlik ve enerji tasarrufu için hareket algılama
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="automation" className="mt-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">Tam Otomatik Sistem</h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Yapay zeka algoritmaları ile öğrenen ve adapte olan sistem
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      "Yağmur algılandığında otomatik kapanma",
                      "Güneş açısına göre lamella ayarı",
                      "Rüzgar hızına göre güvenlik modu",
                      "Kullanım alışkanlıklarını öğrenme",
                    ].map((feature, index) => (
                      <Card key={index} className="p-6 text-center">
                        <CardContent className="p-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                            {index + 1}
                          </div>
                          <p className="font-medium">{feature}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Teknik Özellikler</h3>
                      <div className="space-y-4">
                        {Object.entries(specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-3 border-b">
                            <span className="font-medium">{key}:</span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/smart-pergola-system-diagram.jpg"
                        alt="Sistem Diyagramı"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Geleceğin Pergolası</h2>
            <p className="text-xl mb-8 opacity-90">Akıllı teknoloji ile konforun yeni tanımı</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" variant="secondary" className="flex-1">
                <Phone className="mr-2 h-5 w-5" />
                Demo Talep Et
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Özel Teklif
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">Ücretsiz demo ve kurulum danışmanlığı</p>
          </div>
        </section>
      </main>
    </div>
  )
}
