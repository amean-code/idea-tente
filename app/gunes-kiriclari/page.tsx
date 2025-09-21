import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SubProductsShowcase } from "@/components/sub-products-showcase"
import { Sun, Shield, Settings, ArrowRight, TrendingDown } from "lucide-react"
import Link from "next/link"

const subProducts = [
  {
    id: "sabit-gunes-kirici",
    name: "Sabit Güneş Kırıcı",
    description: "Dayanıklı alüminyum profil güneş kırıcı sistemleri ile kalıcı güneş kontrolü",
    image: "/fixed-aluminum-sun-breaker-system.jpg",
    features: ["Alüminyum Profil", "Özel Renk", "Kolay Montaj", "Uzun Ömür"],
    badge: "Ekonomik",
    href: "/gunes-kiriclari/sabit-gunes-kirici",
  },
  {
    id: "hareketli-gunes-kirici",
    name: "Hareketli Güneş Kırıcı",
    description: "Motorlu ve ayarlanabilir güneş kontrol sistemleri ile akıllı güneş yönetimi",
    image: "/motorized-adjustable-sun-breaker.jpg",
    features: ["Motorlu Kontrol", "Akıllı Sensör", "Uzaktan Kumanda", "Otomatik"],
    badge: "Akıllı",
    href: "/gunes-kiriclari/hareketli-gunes-kirici",
  },
  {
    id: "dikey-gunes-kirici",
    name: "Dikey Güneş Kırıcı",
    description: "Cephe güneş kontrol çözümleri ile estetik ve fonksiyonel tasarım",
    image: "/vertical-facade-sun-control-system.jpg",
    features: ["Cephe Entegrasyonu", "Estetik Tasarım", "Enerji Tasarrufu", "Modern Görünüm"],
    href: "/gunes-kiriclari/dikey-gunes-kirici",
  },
]

export default function SunBreakersPage() {
  const systems = [
    {
      title: "Sabit Güneş Kırıcı",
      description: "Alüminyum profil güneş kırıcı sistemleri",
      image: "/placeholder-877r8.png",
      features: ["Dayanıklı alüminyum", "Özel renk seçenekleri", "Kolay montaj"],
    },
    {
      title: "Hareketli Güneş Kırıcı",
      description: "Motorlu ve ayarlanabilir güneş kontrol sistemleri",
      image: "/placeholder-0d2gt.png",
      features: ["Motorlu kontrol", "Akıllı sensörler", "Uzaktan kumanda"],
    },
    {
      title: "Dikey Güneş Kırıcı",
      description: "Cephe güneş kontrol çözümleri",
      image: "/placeholder-m8vgm.png",
      features: ["Cephe entegrasyonu", "Estetik tasarım", "Enerji tasarrufu"],
    },
  ]

  const benefits = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Güneş Kontrolü",
      description: "İstenmeyen güneş ışınlarını engeller",
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Enerji Tasarrufu",
      description: "Klima maliyetlerini %40'a kadar azaltır",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "UV Koruması",
      description: "Zararlı UV ışınlarından koruma",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Ayarlanabilir",
      description: "İhtiyaca göre açı ayarlaması",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('/placeholder-mipvm.png')"
          }}
        />
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="absolute inset-0 bg-[url('/placeholder-mipvm.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Güneş Kontrol Sistemleri</Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              <span className="text-primary">Güneş Kırıcı</span> Sistemleri
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Modern güneş kırıcı sistemleri ile binalarınızı güneşin zararlı etkilerinden koruyun ve enerji tasarrufu
              sağlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/teklif-al">
                  Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/katalog">Ürün Kataloğu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Güneş Kırıcı Avantajları</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Güneş kırıcı sistemleri ile hem enerji tasarrufu sağlayın hem de yaşam konforunuzu artırın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Güneş Kırıcı Sistemleri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              İhtiyacınıza uygun güneş kırıcı sistemini seçin ve binalarınızı güneşin zararlı etkilerinden koruyun.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={system.image || "/placeholder.svg"}
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{system.title}</h3>
                  <p className="text-muted-foreground mb-4">{system.description}</p>
                  <div className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-transparent" variant="outline" asChild>
                    <Link href="/teklif-al">Detaylı Bilgi Al</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SubProducts Showcase Section */}
      <SubProductsShowcase
        title="Güneş Kırıcı Sistemleri"
        subtitle="İhtiyacınıza uygun güneş kırıcı sistemini seçin ve binalarınızı güneşin zararlı etkilerinden koruyun"
        products={subProducts}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Güneş Kırıcı Sistemleri ile Enerji Tasarrufu Yapın</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizden ücretsiz keşif ve teklif alın. Size en uygun güneş kırıcı sistemini birlikte belirleyelim.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/iletisim">
              Ücretsiz Keşif Talep Et <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
