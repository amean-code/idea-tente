import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Kalite Odaklılık",
      description: "En yüksek kalite standartlarında üretim yapıyoruz",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti bizim için en önemli öncelik",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Yenilikçilik",
      description: "Sürekli araştırma ve geliştirme ile yenilikçi çözümler",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Güvenilirlik",
      description: "15 yıllık deneyimimizle güvenilir hizmet",
    },
  ]

  const milestones = [
    { year: "2008", title: "Kuruluş", description: "IDEA ailesi kuruldu" },
    { year: "2012", title: "İlk İhracat", description: "Avrupa pazarına açıldık" },
    { year: "2018", title: "Teknoloji Yatırımı", description: "Akıllı sistemlere geçiş" },
    { year: "2023", title: "Sürdürülebilirlik", description: "Çevre dostu üretim başladı" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Hakkımızda</Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              <span className="text-primary">15 Yıllık</span> Deneyim ve Güven
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              2008 yılından bu yana outdoor yaşam alanları konusunda uzmanlaşmış, binlerce projeye imza atmış bir
              ekibiz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
              <p className="text-muted-foreground mb-6">
                IDEA, 2008 yılında outdoor yaşam alanlarına yenilikçi çözümler getirmek amacıyla kuruldu.
                Kuruluşumuzdan bu yana, kaliteli malzeme, uzman işçilik ve müşteri odaklı hizmet anlayışımızla sektörde
                öncü konuma geldik.
              </p>
              <p className="text-muted-foreground mb-8">
                Bugün 50+ ülkeye ihracat yapan, 5000+ tamamlanmış projeye sahip bir firma olarak, outdoor yaşam
                alanlarında Türkiye'nin en güvenilir markalarından biri haline geldik.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">İhracat Ülkesi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl overflow-hidden">
                <img
                  src="/company-headquarters-modern-building.jpg"
                  alt="IDEA Merkez Ofis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz, her projede kalite ve güven sağlamamızı mümkün kılıyor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tarihçemiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              15 yıllık yolculuğumuzda attığımız önemli adımlar ve ulaştığımız kilometre taşları.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bizimle Çalışmaya Hazır mısınız?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            15 yıllık deneyimimiz ve uzman ekibimizle hayalinizdeki outdoor yaşam alanını birlikte tasarlayalım.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/teklif-al">
              Projeni Başlat <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
