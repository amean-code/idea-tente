import { Button } from "@/components/ui/button"
import { Eye, ZoomIn, Share2 } from "lucide-react"

export function CatalogPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Online Katalog Önizleme
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Katalogumuzun içeriğini indirmeden önce online olarak inceleyin
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 border">
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground text-lg">İnteraktif Katalog Görüntüleyici</p>
                <p className="text-sm text-muted-foreground mt-2">Flipbook formatında katalog önizleme</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Eye className="h-5 w-5 mr-2" />
                Tam Ekran Görüntüle
              </Button>
              <Button size="lg" variant="outline">
                <ZoomIn className="h-5 w-5 mr-2" />
                Yakınlaştır
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5 mr-2" />
                Paylaş
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
