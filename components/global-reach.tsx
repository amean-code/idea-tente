import { MapPin, Users, Award, TrendingUp } from "lucide-react"

const regions = [
  {
    name: "Avrupa",
    countries: ["Almanya", "Fransa", "İtalya", "İspanya", "Hollanda", "Belçika"],
    projects: "2000+",
    color: "bg-blue-500",
  },
  {
    name: "Orta Doğu",
    countries: ["BAE", "Suudi Arabistan", "Katar", "Kuveyt", "Lübnan"],
    projects: "1500+",
    color: "bg-green-500",
  },
  {
    name: "Afrika",
    countries: ["Güney Afrika", "Mısır", "Fas", "Tunus", "Cezayir"],
    projects: "800+",
    color: "bg-orange-500",
  },
  {
    name: "Asya-Pasifik",
    countries: ["Avustralya", "Japonya", "Singapur", "Malezya"],
    projects: "700+",
    color: "bg-purple-500",
  },
]

const stats = [
  {
    icon: MapPin,
    number: "50+",
    label: "Ülke",
    description: "Dünya çapında distribütör ağı",
  },
  {
    icon: Users,
    number: "200+",
    label: "Distribütör",
    description: "Güvenilir iş ortakları",
  },
  {
    icon: Award,
    number: "5000+",
    label: "Proje",
    description: "Başarıyla tamamlanan projeler",
  },
  {
    icon: TrendingUp,
    number: "%40",
    label: "Büyüme",
    description: "Yıllık ihracat artışı",
  },
]

export function GlobalReach() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Global Erişimimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dünya çapında güçlü distribütör ağımız ile premium IDEA sistemlerini her kıtaya ulaştırıyoruz
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 rounded-full ${region.color} mr-3`} />
                <h3 className="text-xl font-semibold text-foreground">{region.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">{region.projects}</span>
                <span className="text-sm text-muted-foreground ml-1">proje</span>
              </div>

              <div className="space-y-1">
                {region.countries.map((country, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground">
                    • {country}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
