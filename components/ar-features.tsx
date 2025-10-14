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

/**
 * AR Demo özellikleri bölümü - modern kart tasarımı
 */
export function ARFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            AR Demo Özellikleri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Gelişmiş artırılmış gerçeklik teknolojisi ile IDEA sistemlerimizi deneyimleyin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-100 transition-colors">
                <feature.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
