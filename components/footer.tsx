import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl">IDEA</span>
            </div>
            <p className="text-sm text-foreground">
              Türkiye'nin önde gelen IDEA ve cam sistemleri üreticisi. Premium outdoor çözümler ile yaşam
              alanlarınızı genişletiyoruz.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href={contactInfo.social.facebook} aria-label="Facebook" target="_blank">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={contactInfo.social.instagram} aria-label="Instagram" target="_blank">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={contactInfo.social.linkedin} aria-label="LinkedIn" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ürünlerimiz</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/pergola" className="text-sm hover:text-primary transition-colors">
                Pergola Sistemleri
              </Link>
              <Link href="/cam-sistemleri" className="text-sm hover:text-primary transition-colors">
                Cam Sistemleri
              </Link>
              <Link href="/kis-bahcesi" className="text-sm hover:text-primary transition-colors">
                Kış Bahçesi
              </Link>
              <Link href="/gunes-kiriclari" className="text-sm hover:text-primary transition-colors">
                Güneş Kırıcılar
              </Link>
              <Link href="/zip-perde" className="text-sm hover:text-primary transition-colors">
                Zip Perde
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hizmetlerimiz</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/katalog" className="text-sm hover:text-primary transition-colors">
                Katalog İndir
              </Link>
              <Link href="/ar-demo" className="text-sm hover:text-primary transition-colors">
                AR Demo
              </Link>
              <Link href="/export" className="text-sm hover:text-primary transition-colors">
                Export & Distribütörlük
              </Link>
              <Link href="/teklif-al" className="text-sm hover:text-primary transition-colors">
                Teklif Al
              </Link>
              <Link href="/iletisim" className="text-sm hover:text-primary transition-colors">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{contactInfo.address.full}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>{contactInfo.phone.display.primary}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>{contactInfo.email.info}</span>
              </div>
              <Button asChild className="w-full">
                <Link href={contactInfo.whatsapp.primary} target="_blank">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp İletişim
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-foreground">© 2024 IDEA. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
