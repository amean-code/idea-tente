import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SubProductsShowcase } from "@/components/sub-products-showcase"
import { CheckCircle, Thermometer, Shield, Zap, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const subProducts = [
  {
    id: "premium-kis-bahcesi",
    name: "Premium Kış Bahçesi",
    description: "Akıllı cam teknolojisi ve otomatik iklim kontrol sistemleri ile üstün konfor",
    image: "/premium-winter-garden-smart-glass.jpg",
    features: ["Akıllı Cam", "Otomatik Havalandırma", "Isı Pompası", "Uzaktan Kontrol"],
    badge: "En Popüler",
    href: "/kis-bahcesi/premium-kis-bahcesi",
  },
  {
    id: "standart-kis-bahcesi",
    name: "Standart Kış Bahçesi",
    description: "Kaliteli malzeme ve uygun fiyat ile ekonomik kış bahçesi çözümü",
    image: "/standard-winter-garden-double-glass.jpg",
    features: ["Çift Cam", "Manuel Havalandırma", "Termal Kesim", "10 Yıl Garanti"],
    href: "/kis-bahcesi/standart-kis-bahcesi",
  },
  {
    id: "lux-kis-bahcesi",
    name: "Lüks Kış Bahçesi",
    description: "Panoramik cam ve akıllı ev entegrasyonu ile en üst seviye konfor",
    image: "/luxury-winter-garden-panoramic-view.jpg",
    features: ["Panoramik Cam", "Akıllı Ev Entegrasyonu", "Gömme Isıtma", "Premium Malzeme"],
    badge: "Lüks",
    href: "/kis-bahcesi/lux-kis-bahcesi",
  },
]

export default function WinterGardenPage() {
  const features = [
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Termal İzolasyon",
      description: "Üstün yalıtım özellikleri ile enerji tasarrufu",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Dayanıklılık",
      description: "Hava koşullarına karşı maksimum direnç",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Akıllı Kontrol",
      description: "Otomatik iklim kontrol sistemleri",
    },
  ]

  const benefits = [
    "4 mevsim kullanım imkanı",
    "Enerji tasarrufu sağlar",
    "Yaşam alanınızı genişletir",
    "Mülk değerinizi artırır",
    "Doğal ışık alımı",
    "Sessiz ve konforlu ortam",
  ]

  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('/modern-winter-garden-glass-structure.jpg')"
          }}
        />
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-[url('/modern-winter-garden-glass-structure.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Premium Kış Bahçesi Çözümleri</Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              Kış Bahçesi ile <span className="text-primary">4 Mevsim Konfor</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Modern cam teknolojisi ile tasarlanan kış bahçeleri, yaşam alanınızı genişletir ve doğayla iç içe konforlu
              bir ortam sunar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Ücretsiz Keşif <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/katalog">Katalog İncele</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kış Bahçesi Özellikleri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En son teknoloji ile üretilen kış bahçelerimiz, konfor ve estetik mükemmelliği bir araya getirir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Benefits Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kış Bahçesi Avantajları</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden">
                <img
                  src="/luxury-winter-garden-interior-with-plants-and-furn.jpg"
                  alt="Kış Bahçesi İç Mekan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-sm text-muted-foreground">Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubProductsShowcase
        title="Kış Bahçesi Modelleri"
        subtitle="İhtiyaçlarınıza uygun kış bahçesi çözümlerini keşfedin ve yaşam alanınızı genişletin"
        products={subProducts}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hayalinizdeki Kış Bahçesini Gerçekleştirin</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size özel tasarım ve uygulama hizmeti sunuyor. Ücretsiz keşif için hemen iletişime geçin.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/iletisim">
              Hemen İletişime Geç <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
