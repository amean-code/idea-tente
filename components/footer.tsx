import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-primary/5 to-primary/10 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-white shadow-md">
                <Image
                  src="/idea-logo.jpg"
                  alt="IDEA Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-3xl text-gray-900 group-hover:text-primary transition-colors">IDEA</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Türkiye'nin önde gelen pergola ve cam sistemleri üreticisi. Premium outdoor çözümler ile yaşam
              alanlarınızı genişletiyoruz.
            </p>
            <div className="flex space-x-2">
              <Link 
                href={contactInfo.social.facebook} 
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </Link>
              <Link 
                href={contactInfo.social.instagram} 
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </Link>
              <Link 
                href={contactInfo.social.linkedin} 
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </Link>
              <Link 
                href={contactInfo.social.youtube} 
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl text-gray-900">Ürünlerimiz</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/pergola" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Pergola Sistemleri
              </Link>
              <Link href="/cam-sistemleri" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Cam Sistemleri
              </Link>
              <Link href="/kis-bahcesi" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Kış Bahçesi
              </Link>
              <Link href="/gunes-kiriclari" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Güneş Kırıcılar
              </Link>
              <Link href="/zip-perde" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Zip Perde
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl text-gray-900">Hizmetlerimiz</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/katalog" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Katalog İndir
              </Link>
              <Link href="/ar-demo" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                AR Demo
              </Link>
              <Link href="/export" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Export & Distribütörlük
              </Link>
              <Link href="/teklif-al" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Teklif Al
              </Link>
              <Link href="/referanslar" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                Referanslar
              </Link>
              <Link href="/iletisim" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary mr-2"></span>
                İletişim
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl text-gray-900">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-gray-600 leading-relaxed">{contactInfo.address.full}</span>
              </div>
              <div className="flex items-start space-x-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-gray-600">{contactInfo.phone.display.primary}</span>
              </div>
              <div className="flex items-start space-x-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-gray-600">{contactInfo.email.info}</span>
              </div>
              <Link 
                href={contactInfo.whatsapp.primary} 
                target="_blank"
                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp İletişim
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">© 2025 <span className="font-semibold text-gray-900">IDEA</span>. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
