import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { QuoteForm } from "@/components/quote-form"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

/**
 * İletişim sayfası
 * İletişim bilgileri, formlar ve Google Maps haritası
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <ContactInfo />
                <WhatsAppCTA />
              </div>
              <div className="space-y-12">
                <QuoteForm />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <ContactMap />
      </main>
    </div>
  )
}
