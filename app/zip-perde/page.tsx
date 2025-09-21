import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SubProductsShowcase } from "@/components/sub-products-showcase"
import { Wind, Shield, Volume2, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const subProducts = [
  {
    id: "motorlu-zip-perde",
    name: "Motorlu Zip Perde",
    description: "Uzaktan kumandalı motorlu zip perde sistemleri ile kolay kullanım",
    image: "/motorized-zip-screen-remote-control.jpg",
    features: ["Motorlu Sistem", "Uzaktan Kumanda", "Sessiz Çalışma", "Otomatik Durdurma"],
    price: "₺4.500",
    badge: "Popüler",
    href: "/zip-perde/motorlu-zip-perde",
  },
  {
    id: "manuel-zip-perde",
    name: "Manuel Zip Perde",
    description: "Ekonomik manuel zip perde sistemleri ile uygun fiyatlı çözüm",
    image: "/manual-zip-screen-system.jpg",
    features: ["Manuel Kullanım", "Ekonomik", "Dayanıklı Kumaş", "Kolay Montaj"],
    price: "₺2.800",
    badge: "Ekonomik",
    href: "/zip-perde/manuel-zip-perde",
  },
  {
    id: "akilli-zip-perde",
    name: "Akıllı Zip Perde",
    description: "Sensör kontrollü akıllı zip perde sistemleri ile otomatik güneş koruması",
    image: "/smart-zip-screen-sensor-control.jpg",
    features: ["Akıllı Sensör", "Otomatik Kontrol", "Rüzgar Sensörü", "Güneş Sensörü"],
    price: "₺7.200",
    badge: "Akıllı",
    href: "/zip-perde/akilli-zip-perde",
  },
]

export default function ZipScreenPage() {
  const features = [
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Rüzgar Dayanımı",
      description: "120 km/h rüzgar hızına kadar dayanıklılık",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "UV Koruması",
      description: "%95 UV koruma sağlar",
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      title: "Sessiz Çalışma",
      description: "Gürültüsüz motor teknolojisi",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Akıllı Kontrol",
      description: "Uzaktan kumanda ve sensör kontrolü",
    },
  ]

  const applications = [
    {
      title: "Restoran Terasları",
      description: "Açık hava yemek alanları için ideal çözüm",
      image: "/restaurant-terrace-with-zip-screen-system.jpg",
    },
    {
      title: "Otel Balkonları",
      description: "Misafir konforunu artıran perde sistemleri",
      image: "/hotel-balcony-with-zip-screen.jpg",
    },
    {
      title: "Konut Bahçeleri",
      description: "Ev bahçeleri için şık ve fonksiyonel çözümler",
      image: "/residential-garden-with-zip-screen.jpg",
    },
  ]

  const advantages = [
    "Kolay kullanım ve kontrol",
    "Dayanıklı kumaş teknolojisi",
    "Hızlı montaj imkanı",
    "Minimal bakım gereksinimi",
    "Geniş renk ve desen seçenekleri",
    "10 yıl garanti",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 to-teal-100">
        <div className="absolute inset-0 bg-[url('/modern-zip-screen-system-on-terrace.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Premium Zip Perde Sistemleri</Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              <span className="text-primary">Zip Perde</span> ile Konforlu Yaşam
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Rüzgara dayanıklı zip perde sistemleri ile açık alanlarınızı her mevsim kullanılabilir hale getirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Ücretsiz Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/katalog">Ürün Kataloğu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Zip Perde Özellikleri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En son teknoloji ile üretilen zip perde sistemlerimiz, dayanıklılık ve estetik mükemmelliği bir araya
              getirir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SubProductsShowcase
        title="Zip Perde Çeşitlerimiz"
        subtitle="İhtiyaçlarınıza uygun zip perde sistemini seçin ve açık alanlarınızı konforlu hale getirin"
        products={subProducts}
      />

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Uygulama Alanları</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Zip perde sistemleri çeşitli alanlarda kullanılabilir ve her ortama uygun çözümler sunar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Zip Perde Avantajları</h2>
              <p className="text-muted-foreground mb-8">
                Zip perde sistemleri ile açık alanlarınızı daha konforlu ve kullanışlı hale getirin.
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
              <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-200 rounded-2xl overflow-hidden">
                <img
                  src="/zip-screen-system-installation-process.jpg"
                  alt="Zip Perde Montajı"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Yıl Garanti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Zip Perde ile Açık Alanlarınızı Dönüştürün</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size özel çözümler sunuyor. Ücretsiz keşif ve teklif için hemen iletişime geçin.
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
