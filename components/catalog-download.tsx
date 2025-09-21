import { Button } from "@/components/ui/button"
import { Download, FileText, Smartphone } from "lucide-react"

const catalogs = [
  {
    title: "Genel Katalog 2024",
    description: "Tüm ürün gamımızı içeren kapsamlı katalog",
    size: "15.2 MB",
    pages: "84 sayfa",
    languages: ["TR", "EN", "DE"],
    icon: FileText,
  },
  {
    title: "Pergola Sistemleri",
    description: "Biyoklimatik ve sabit pergola çözümleri",
    size: "8.7 MB",
    pages: "32 sayfa",
    languages: ["TR", "EN", "AR"],
    icon: FileText,
  },
  {
    title: "Cam Sistemleri",
    description: "Sürme ve katlanır cam sistem çözümleri",
    size: "6.3 MB",
    pages: "24 sayfa",
    languages: ["TR", "EN", "RU"],
    icon: FileText,
  },
  {
    title: "Mobil Katalog",
    description: "Mobil cihazlar için optimize edilmiş katalog",
    size: "4.1 MB",
    pages: "İnteraktif",
    languages: ["TR", "EN"],
    icon: Smartphone,
  },
]

export function CatalogDownload() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Katalog İndirme Merkezi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            İhtiyacınıza uygun katalog formatını seçin ve anında indirin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogs.map((catalog, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <catalog.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{catalog.title}</h3>
              <p className="text-muted-foreground mb-4">{catalog.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Boyut:</span>
                  <span className="font-medium">{catalog.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sayfa:</span>
                  <span className="font-medium">{catalog.pages}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Diller:</span>
                  <div className="flex space-x-1">
                    {catalog.languages.map((lang) => (
                      <span key={lang} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                İndir
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
