"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download, Globe } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import { useLanguage } from "@/contexts/language-context"

/**
 * CTA (Call to Action) bölümü bileşeni
 * Kullanıcıları iletişime geçmeye teşvik eden ana çağrı bölümü
 */
export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {t("cta.title")}
          </h2>

          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href={contactInfo.whatsapp.primary} target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("cta.whatsappContact")}
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/teklif-al">{t("cta.quoteForm")}</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-primary-foreground/20">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/katalog">
                <Download className="mr-2 h-4 w-4" />
                {t("cta.downloadCatalog")}
              </Link>
            </Button>

            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/export#distributor-application">
                <Globe className="mr-2 h-4 w-4" />
                {t("cta.becomeDistributor")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
