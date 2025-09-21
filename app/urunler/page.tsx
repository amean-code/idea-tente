import { Header } from "@/components/header"
import { ProductsOverview } from "@/components/products-overview"

export default function UrunlerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Tüm Ürünlerimiz
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Premium kalitede IDEA ve cam sistemleri ile outdoor yaşam alanlarınızı genişletin
              </p>
            </div>
          </div>
        </section>
        <ProductsOverview />
      </main>
    </div>
  )
}
