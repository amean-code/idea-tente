import { Cable as Cube, Palette, Ruler, Share2 } from "lucide-react"

const features = [
  {
    icon: Cube,
    title: "3D Görselleştirme",
    description: "Pergola sistemlerini 3 boyutlu olarak mekanınızda görün ve farklı açılardan inceleyin.",
  },
  {
    icon: Palette,
    title: "Renk Seçenekleri",
    description: "Farklı renk ve malzeme seçeneklerini anında değiştirin ve karşılaştırın.",
  },
  {
    icon: Ruler,
    title: "Ölçü Kontrolü",
    description: "Gerçek ölçülerde görüntüleme ile mekanınıza uygunluğunu kontrol edin.",
  },
  {
    icon: Share2,
    title: "Paylaşım",
    description: "AR görüntülerinizi kaydedin ve aileniz veya mimarınızla paylaşın.",
  },
]

export function ARFeatures() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            AR Demo Özellikleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Gelişmiş artırılmış gerçeklik teknolojisi ile IDEA sistemlerimizi deneyimleyin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
