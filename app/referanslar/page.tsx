import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
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
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Arka Plan Görseli */}
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-resort-pergola-installation.jpg"
            alt="Referans Projelerimiz"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
              <span className="text-primary">5000+</span> Başarılı Proje
            </h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty max-w-2xl mx-auto">
              Türkiye ve dünya genelinde gerçekleştirdiğimiz projelerle outdoor yaşam alanlarına değer katıyoruz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-primary-foreground">
                Teklif Al
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                İletişime Geç
              </Button>
            </div>
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
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* Çerçevesiz Minimalist Kart */}
                <div className="overflow-hidden">
                  {/* Resim Alanı */}
                  <div className="aspect-[16/10] overflow-hidden relative mb-5 rounded-2xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient Overlay - Hover'da görünür */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Kategori Badge - Hover'da görünür */}
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                      <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold px-4 py-2 rounded-xl">
                        {project.category}
                      </span>
                    </div>

                    {/* Alt bilgi - Hover'da görünür */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 text-white text-base">
                        <MapPin className="h-5 w-5" />
                        <span>{project.location}</span>
                        <span className="ml-auto text-sm opacity-90">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Başlık ve Açıklama */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Özellikler - Minimal gösterim */}
                    <div className="flex items-center gap-2.5 pt-2">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="text-sm text-gray-400">
                          +{project.features.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Hover'da görünen ok ikonu */}
                    <div className="pt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      <div className="flex items-center text-primary text-base font-medium">
                        <span>Detayları Görüntüle</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Siz de Referanslarımıza Katılın</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
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
