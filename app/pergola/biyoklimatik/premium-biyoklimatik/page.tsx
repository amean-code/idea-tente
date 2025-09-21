import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Smartphone, Lightbulb, Shield, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { contactInfo } from "@/lib/contact-info"

export default function PremiumBiyoklimatikPage() {
  const technicalSpecs = {
    "Genel Özellikler": {
      Malzeme: "Alüminyum 6063-T5",
      "Lamel Kalınlığı": "2.0mm (Premium)",
      "Profil Kalınlığı": "3.0mm",
      "Maksimum Genişlik": "8000mm",
      "Maksimum Derinlik": "5000mm",
      "Renk Seçenekleri": "RAL renk kartelası + Ahşap görünüm",
    },
    "Motorlu Sistem": {
      "Motor Tipi": "Somfy RTS 24V",
      Kumanda: "Uzaktan kumanda + Akıllı telefon",
      "Açılma Süresi": "60 saniye (tam açılma)",
      "Ses Seviyesi": "< 45 dB",
      "Güç Tüketimi": "150W",
    },
    Dayanıklılık: {
      "Rüzgar Dayanımı": "150 km/h",
      "Kar Yükü": "200 kg/m²",
      "Sıcaklık Aralığı": "-30°C / +70°C",
      "UV Dayanımı": "Class A",
      Garanti: "15 yıl",
    },
    "LED Aydınlatma": {
      "LED Tipi": "RGB + Beyaz",
      Güç: "24W/m",
      "Renk Sıcaklığı": "2700K - 6500K",
      Dimmer: "0-100% ayarlanabilir",
      Kontrol: "Mobil uygulama",
    },
  }

  const gallery = [
    "/premium-bioclimatic-pergola-with-led-lighting.jpg",
    "/premium-pergola-night-lighting-ambiance.jpg",
    "/premium-pergola-motorized-louvers-detail.jpg",
    "/premium-pergola-smart-control-panel.jpg",
    "/premium-pergola-luxury-outdoor-dining.jpg",
    "/premium-pergola-weather-protection-closed.jpg",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="absolute inset-0 bg-[url('/premium-bioclimatic-pergola-with-led-lighting.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Premium Seri</Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">Premium Biyoklimatik Pergola</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Motorlu lamel sistemi, RGB LED aydınlatma ve akıllı kontrol özellikleri ile lüks outdoor yaşamın zirvesi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Fiyat Teklifi Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/iletisim">Showroom'u Ziyaret Et</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Özellikler</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Settings className="h-6 w-6" />,
                    title: "Motorlu Lamel Sistemi",
                    description: "Somfy motorlu sistem ile 0-135° arası hassas ayar",
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6" />,
                    title: "RGB LED Aydınlatma",
                    description: "16 milyon renk seçeneği ile ambiyans aydınlatma",
                  },
                  {
                    icon: <Smartphone className="h-6 w-6" />,
                    title: "Akıllı Kontrol",
                    description: "Mobil uygulama ile uzaktan tam kontrol",
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Otomatik Güvenlik",
                    description: "Rüzgar ve yağmur sensörleri ile otomatik koruma",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/premium-pergola-motorized-louvers-detail.jpg"
                alt="Premium Motorlu Lamel Detayı"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">15 Yıl</span>
                  <span className="text-sm text-muted-foreground">Garanti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Teknik Özellikler</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium biyoklimatik pergola sisteminin detaylı teknik özellikleri
            </p>
          </div>

          <Tabs defaultValue="genel" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="genel">Genel</TabsTrigger>
              <TabsTrigger value="motor">Motor</TabsTrigger>
              <TabsTrigger value="dayaniklilik">Dayanıklılık</TabsTrigger>
              <TabsTrigger value="led">LED</TabsTrigger>
            </TabsList>

            {Object.entries(technicalSpecs).map(([category, specs], index) => (
              <TabsContent key={category} value={["genel", "motor", "dayaniklilik", "led"][index]}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Galeri</h2>
            <p className="text-muted-foreground">Premium biyoklimatik pergola uygulamalarımızdan örnekler</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-video bg-gray-100 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Premium Pergola ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Premium Biyoklimatik Pergola Fiyat Teklifi</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            ₺45.000'den başlayan fiyatlarla premium biyoklimatik pergola sistemleri. Ücretsiz keşif ve proje çizimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/teklif-al">
                Ücretsiz Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href={`tel:${contactInfo.phone.primary}`}>Hemen Ara: {contactInfo.phone.display.primary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
