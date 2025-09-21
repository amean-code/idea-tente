import { Header } from "@/components/header"
import { CatalogHero } from "@/components/catalog-hero"
import { CatalogDownload } from "@/components/catalog-download"
import { CatalogPreview } from "@/components/catalog-preview"
import { CatalogCategories } from "@/components/catalog-categories"

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CatalogHero />
        <CatalogDownload />
        <CatalogPreview />
        <CatalogCategories />
      </main>
    </div>
  )
}
