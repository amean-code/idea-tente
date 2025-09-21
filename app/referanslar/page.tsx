import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function ReferencesPage() {
  const projects = [
    {
      title: "Luxury Resort Antalya",
      location: "Antalya, Türkiye",
      year: "2023",
      category: "Otel & Resort",
      image: "/luxury-resort-pergola-installation.jpg",
      description: "200 m² biyoklimatik pergola sistemi ile resort alanı modernizasyonu",
      features: ["Biyoklimatik Pergola", "LED Aydınlatma", "Akıllı Kontrol"],
    },
    {
      title: "Corporate Headquarters",
      location: "İstanbul, Türkiye",
      year: "2023",
      category: "Kurumsal",
      image: "/corporate-building-sun-breakers.jpg",
      description: "Ofis binası cephe güneş kırıcı sistemleri uygulaması",
      features: ["Güneş Kırıcı", "Enerji Tasarrufu", "Modern Tasarım"],
    },
    {
      title: "Seaside Restaurant",
      location: "İzmir, Türkiye",
      year: "2022",
      category: "Restoran",
      image: "/seaside-restaurant-glass-systems.jpg",
      description: "Deniz manzaralı restoran cam sistemleri ve pergola uygulaması",
      features: ["Cam Sistemleri", "Zip Perde", "Rüzgar Dayanımı"],
    },
    {
      title: "Private Villa Complex",
      location: "Bodrum, Türkiye",
      year: "2022",
      category: "Konut",
      image: "/private-villa-winter-garden.jpg",
      description: "Özel villa kompleksi kış bahçesi ve pergola projeleri",
      features: ["Kış Bahçesi", "Premium Malzeme", "Özel Tasarım"],
    },
    {
      title: "Shopping Mall Terrace",
      location: "Ankara, Türkiye",
      year: "2021",
      category: "Ticari",
      image: "/shopping-mall-terrace-pergola.jpg",
      description: "AVM teras alanı pergola ve gölgelendirme sistemleri",
      features: ["Büyük Açıklık", "Dayanıklı Yapı", "Estetik Tasarım"],
    },
    {
      title: "Beach Club Project",
      location: "Çeşme, Türkiye",
      year: "2021",
      category: "Eğlence",
      image: "/beach-club-pergola-systems.jpg",
      description: "Beach club alanı pergola ve zip perde sistemleri",
      features: ["Deniz Dayanımı", "Büyük Boyut", "Hızlı Montaj"],
    },
  ]

  const categories = [
    { name: "Tümü", count: projects.length },
    { name: "Otel & Resort", count: 1 },
    { name: "Kurumsal", count: 1 },
    { name: "Restoran", count: 1 },
    { name: "Konut", count: 1 },
    { name: "Ticari", count: 1 },
    { name: "Eğlence", count: 1 },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Referanslarımız</Badge>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              <span className="text-primary">5000+</span> Başarılı Proje
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Türkiye ve dünya genelinde gerçekleştirdiğimiz projelerle outdoor yaşam alanlarına değer katıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">İhracat Ülkesi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">%98</div>
              <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">4.9</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Proje Detayları
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siz de Referanslarımıza Katılın</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Binlerce başarılı projenin ardından, sırada sizin hayalinizdeki outdoor yaşam alanı var.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/teklif-al">
              Projenizi Başlatın <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
