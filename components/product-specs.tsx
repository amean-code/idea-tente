"use client"

import { useLanguage } from "@/contexts/language-context"

interface ProductSpecsProps {
  specs: Record<string, string>
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("productSpecs.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("productSpecs.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(specs).map(([key, value], index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-card rounded-lg border">
                <span className="font-medium text-foreground">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
