"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Star, ArrowRight, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StandardBiyoklimatikPage() {
  const features = [
    "Manuel lamella kontrol sistemi",
    "Dayanıklı alüminyum yapı",
    "Su geçirmez tasarım",
    "Kolay montaj",
    "5 yıl garanti",
    "Özelleştirilebilir boyutlar",
  ]

  const specifications = {
    Malzeme: "Alüminyum 6063-T5",
    "Lamella Kalınlığı": "1.2mm",
    "Maksimum Genişlik": "6m",
    "Maksimum Derinlik": "4m",
    "Rüzgar Dayanımı": "120 km/h",
    "Kar Yükü": "150 kg/m²",
    Garanti: "5 Yıl",
  }

  const applications = ["Konut bahçeleri", "Cafe ve restoranlar", "Küçük ticari alanlar", "Balkon ve teraslar"]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/standard-bioclimatic-pergola-manual-system.jpg"
            alt="Standart Biyoklimatik Pergola"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Standart Seri</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Standart Biyoklimatik Pergola</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
              Uygun fiyatlı, güvenilir ve fonksiyonel çözüm
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara
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

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Standart Seri Özellikleri</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kaliteli malzeme ve güvenilir tasarım ile uygun fiyatlı çözüm
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="specs">Teknik Özellikler</TabsTrigger>
                  <TabsTrigger value="applications">Uygulama Alanları</TabsTrigger>
                  <TabsTrigger value="gallery">Galeri</TabsTrigger>
                </TabsList>

                <TabsContent value="specs" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Teknik Detaylar</h3>
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
                        src="/standard-pergola-technical-drawing.jpg"
                        alt="Teknik Çizim"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="applications" className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applications.map((application, index) => (
                      <Card key={index} className="text-center p-6">
                        <CardContent className="p-0">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="h-8 w-8 text-orange-500" />
                          </div>
                          <h3 className="font-semibold text-lg">{application}</h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer">
                        <Image
                          src={`/standard-pergola-gallery-${i}.jpg`}
                          alt={`Standart Pergola ${i}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Standart Biyoklimatik Pergola</h2>
            <p className="text-xl mb-8 opacity-90">Uygun fiyatlı, kaliteli çözüm için hemen iletişime geçin</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" variant="secondary" className="flex-1">
                <Phone className="mr-2 h-5 w-5" />
                0850 XXX XX XX
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Teklif Al
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">Ücretsiz keşif ve proje danışmanlığı</p>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Diğer Pergola Modelleri</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-[250px]">
                    <Image
                      src="/premium-bioclimatic-pergola-with-led-lighting.jpg"
                      alt="Premium Biyoklimatik"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Premium Biyoklimatik</h3>
                    <p className="text-muted-foreground mb-4">Motorlu sistem, LED aydınlatma ve akıllı kontrol</p>
                    <Link href="/pergola/biyoklimatik/premium-biyoklimatik">
                      <Button className="w-full group-hover:bg-orange-500">
                        İncele <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-[250px]">
                    <Image
                      src="/smart-bioclimatic-pergola-iot-control.jpg"
                      alt="Akıllı Biyoklimatik"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Akıllı Biyoklimatik</h3>
                    <p className="text-muted-foreground mb-4">IoT teknolojisi ve otomatik hava durumu kontrolü</p>
                    <Link href="/pergola/biyoklimatik/akilli-biyoklimatik">
                      <Button className="w-full group-hover:bg-orange-500">
                        İncele <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
