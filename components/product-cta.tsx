import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

interface ProductCTAProps {
  productName: string
}

export function ProductCTA({ productName }: ProductCTAProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">{productName} için Teklif Alın</h2>

          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Uzman ekibimizle ücretsiz keşif yapın ve size özel teklif alın. Hemen iletişime geçin!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href={contactInfo.whatsapp.primary} target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp İletişim
              </Link>
            </Button>

            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href={`tel:${contactInfo.phone.primary}`}>
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/teklif-al">
                <Mail className="mr-2 h-5 w-5" />
                Teklif Formu
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
