import { Header } from "@/components/header"
import { CatalogHero } from "@/components/catalog-hero"
import { CatalogDownload } from "@/components/catalog-download"
import { CatalogCategories } from "@/components/catalog-categories"

/**
 * Katalog sayfası
 * Tüm ürün kataloglarını listeler ve indirme imkanı sunar
 */
export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CatalogHero />
        <CatalogCategories />
        <CatalogDownload />
      </main>
    </div>
  )
}
