import { Button } from "@/components/ui/button"
import { Play, Eye } from "lucide-react"

const arDemos = [
  {
    title: "Biyoklimatik Pergola",
    description: "Akıllı lamelli sistem AR demosu",
    image: "/modern-bioclimatic-pergola-with-adjustable-louvers.jpg",
    category: "Pergola",
  },
  {
    title: "Cam Sistemleri",
    description: "Frameless cam çözümleri AR demosu",
    image: "/frameless-glass-sliding-system--modern-terrace-wit.jpg",
    category: "Cam",
  },
  {
    title: "Kış Bahçesi",
    description: "Kapalı alan çözümleri AR demosu",
    image: "/winter-garden-conservatory-with-glass-roof--indoor.jpg",
    category: "Kış Bahçesi",
  },
  {
    title: "Güneş Kırıcı",
    description: "Güneş koruma sistemleri AR demosu",
    image: "/modern-sun-breaker-louver-system-on-building-facad.jpg",
    category: "Güneş Kırıcı",
  },
]

export function ARGallery() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            AR Demo Galerisi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Farklı ürün kategorilerimizi artırılmış gerçeklik ile keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arDemos.map((demo, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={demo.image || "/placeholder.svg"}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="lg" className="bg-primary/90 hover:bg-primary">
                    <Play className="h-5 w-5 mr-2" />
                    AR Demo
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {demo.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{demo.title}</h3>
                <p className="text-muted-foreground mb-4">{demo.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Eye className="h-4 w-4 mr-2" />
                  AR Demo Başlat
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
