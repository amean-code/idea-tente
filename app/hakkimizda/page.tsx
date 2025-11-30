import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/company-headquarters-modern-building.jpg"
            alt="IDEA Merkez Ofis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D4247]/90 via-[#3D4247]/70 to-[#3D4247]/50" />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <Award className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">2008'den Bugüne</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              <span className="text-white">15 Yıllık</span><br />
              <span className="text-white">Deneyim ve Güven</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
              2008 yılından bu yana outdoor yaşam alanları konusunda uzmanlaşmış, binlerce projeye imza atmış bir ekibiz. 
              <span className="text-white font-semibold"> 50+ ülkeye ihracat</span> yapan, sektörün lider firması.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5000+</div>
                <div className="text-sm font-semibold text-white/90">Tamamlanan Proje</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm font-semibold text-white/90">İhracat Ülkesi</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
                <div className="text-sm font-semibold text-white/90">Yıl Deneyim</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/teklif-al">
                  <Users className="h-5 w-5 mr-2" />
                  Bizimle Çalışın
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link href="/referanslar">
                  <Award className="h-5 w-5 mr-2" />
                  Referanslarımız
                </Link>
              </Button>
            </div>
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
              <div className="aspect-video bg-card rounded-lg overflow-hidden border">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Değerlerimiz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              İş yapış şeklimizi belirleyen temel değerlerimiz, her projede kalite ve güven sağlamamızı mümkün kılıyor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tarihçemiz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              15 yıllık yolculuğumuzda attığımız önemli adımlar ve ulaştığımız kilometre taşları.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-lg font-bold text-lg mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="font-bold mb-3 text-foreground">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{milestone.description}</p>
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
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Bizimle Çalışmaya Hazır mısınız?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-xl text-pretty">
            15 yıllık deneyimimiz ve uzman ekibimizle hayalinizdeki outdoor yaşam alanını birlikte tasarlayalım.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <Link href="/teklif-al">
              Projeni Başlat <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
