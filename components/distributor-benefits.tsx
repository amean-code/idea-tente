import { Handshake, TrendingUp, Shield, Headphones, Truck, Award } from "lucide-react"

const benefits = [
  {
    icon: Handshake,
    title: "Güçlü Ortaklık",
    description: "Uzun vadeli, karşılıklı kazançlı iş ortaklığı",
  },
  {
    icon: TrendingUp,
    title: "Yüksek Kar Marjı",
    description: "Rekabetçi fiyatlar ve cazip kar marjları",
  },
  {
    icon: Shield,
    title: "Bölge Koruması",
    description: "Özel bölge hakları ve rekabet koruması",
  },
  {
    icon: Headphones,
    title: "Teknik Destek",
    description: "7/24 teknik destek ve eğitim programları",
  },
  {
    icon: Truck,
    title: "Lojistik Çözümler",
    description: "Hızlı ve güvenli kargo çözümleri",
  },
  {
    icon: Award,
    title: "Pazarlama Desteği",
    description: "Katalog, broşür ve pazarlama materyalleri",
  },
]

export function DistributorBenefits() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Distribütör Avantajları
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            İş ortaklarımıza sunduğumuz kapsamlı destek ve avantajlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-pretty">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
