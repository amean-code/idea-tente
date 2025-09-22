"use client"

import { useState, useEffect, memo, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, MessageCircle, Phone, MoreHorizontal } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { contactInfo } from "@/lib/contact-info"

// Memoized dropdown content components - sadece çeviriler değiştiğinde güncellenir
const PergolaDropdownContent = memo(({ 
  bioclimaticTitle, 
  bioclimaticDesc 
}: { 
  bioclimaticTitle: string
  bioclimaticDesc: string
}) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[400px]">
      <NavigationMenuLink asChild>
        <Link
          href="/pergola/biyoklimatik"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <div className="text-sm font-medium leading-none">{bioclimaticTitle}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {bioclimaticDesc}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  </NavigationMenuContent>
))
PergolaDropdownContent.displayName = "PergolaDropdownContent"

const GlassDropdownContent = memo(({ 
  glassTitle, 
  glassDesc 
}: { 
  glassTitle: string
  glassDesc: string
}) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[400px]">
      <NavigationMenuLink asChild>
        <Link
          href="/cam-sistemleri"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <div className="text-sm font-medium leading-none">{glassTitle}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {glassDesc}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  </NavigationMenuContent>
))
GlassDropdownContent.displayName = "GlassDropdownContent"

// Memoized mobile menu content - sadece çeviriler değiştiğinde güncellenir
const MobileMenuContent = memo(({ 
  translations,
  isMenuOpen, 
  setIsMenuOpen 
}: { 
  translations: {
    products: string
    services: string
    company: string
    pergolaSystems: string
    glassSystems: string
    winterGarden: string
    sunBreakers: string
    zipScreen: string
    catalog: string
    arDemo: string
    export: string
    getQuote: string
    contact: string
  }
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}) => {
  const {
    products,
    services,
    company,
    pergolaSystems,
    glassSystems,
    winterGarden,
    sunBreakers,
    zipScreen,
    catalog,
    arDemo,
    export: exportText,
    getQuote,
    contact
  } = translations

  if (!isMenuOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Menü</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ana Kategoriler */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{products}</h3>
                <Link
                  href="/pergola"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{pergolaSystems}</div>
                  <div className="text-sm text-gray-600">Biyoklimatik IDEA sistemleri</div>
                </Link>
                <Link
                  href="/cam-sistemleri"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{glassSystems}</div>
                  <div className="text-sm text-gray-600">Frameless cam çözümleri</div>
                </Link>
                <Link
                  href="/kis-bahcesi"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{winterGarden}</div>
                  <div className="text-sm text-gray-600">4 mevsim konfor</div>
                </Link>
                <Link
                  href="/gunes-kiriclari"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{sunBreakers}</div>
                  <div className="text-sm text-gray-600">Güneş kontrol sistemleri</div>
                </Link>
                <Link
                  href="/zip-perde"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{zipScreen}</div>
                  <div className="text-sm text-gray-600">Rüzgar ve güneş koruması</div>
                </Link>
              </div>

              {/* Hizmetler */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{services}</h3>
                <Link
                  href="/katalog"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{catalog}</div>
                  <div className="text-sm text-gray-600">Ürün kataloğu indir</div>
                </Link>
                <Link
                  href="/ar-demo"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{arDemo}</div>
                  <div className="text-sm text-gray-600">AR ile görselleştir</div>
                </Link>
                <Link
                  href="/export"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{exportText}</div>
                  <div className="text-sm text-gray-600">İhracat ve distribütörlük</div>
                </Link>
                <Link
                  href="/teklif-al"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{getQuote}</div>
                  <div className="text-sm text-gray-600">Ücretsiz fiyat teklifi</div>
                </Link>
              </div>

              {/* Şirket */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{company}</h3>
                <Link
                  href="/hakkimizda"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">Hakkımızda</div>
                  <div className="text-sm text-gray-600">15 yıllık deneyim</div>
                </Link>
                <Link
                  href="/referanslar"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">Referanslar</div>
                  <div className="text-sm text-gray-600">5000+ başarılı proje</div>
                </Link>
                <Link
                  href="/blog"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">Blog</div>
                  <div className="text-sm text-gray-600">Outdoor yaşam rehberi</div>
                </Link>
                <Link
                  href="/iletisim"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-orange-600">{contact}</div>
                  <div className="text-sm text-gray-600">İletişim bilgileri</div>
                </Link>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Dil Seçimi</span>
                <LanguageSwitcher theme="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
MobileMenuContent.displayName = "MobileMenuContent"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const { t } = useLanguage()

  // Çevirileri memoize et - sadece dil değiştiğinde güncellenir
  const navTranslations = useMemo(() => ({
    pergolaSystems: t("nav.pergolaSystems"),
    glassSystems: t("nav.glassSystems"),
    winterGarden: t("nav.winterGarden"),
    sunBreakers: t("nav.sunBreakers"),
    zipScreen: t("nav.zipScreen"),
    catalog: t("nav.catalog"),
    arDemo: t("nav.arDemo"),
    export: t("nav.export"),
    contact: t("nav.contact"),
    getQuote: t("nav.getQuote"),
    products: t("nav.products"),
    services: t("nav.services"),
    company: t("nav.company"),
    bioclimaticTitle: t("nav.bioclimaticTitle"),
    bioclimaticDesc: t("nav.bioclimaticDesc"),
    glassTitle: t("nav.glassTitle"),
    glassDesc: t("nav.glassDesc"),
  }), [t])

  // Scroll event listener for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-40 bg-white/30 backdrop-blur-md py-1 px-4 transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-800 drop-shadow-sm">📧 {contactInfo.email.info}</span>
            <span className="text-gray-800 drop-shadow-sm">📞 {contactInfo.phone.display.primary}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="default" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href={contactInfo.whatsapp.primary} target="_blank">
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              asChild
              className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Link href="/teklif-al">
                <Phone className="h-3 w-3 mr-1" />
                {t("nav.getQuote")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-30 w-full transition-all duration-300 ${
        isScrolled 
          ? 'top-0 bg-white/30 backdrop-blur-md border-b border-gray-200' 
          : 'top-8 bg-white/30 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-gray-800 drop-shadow-sm">IDEA</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange-600 bg-transparent drop-shadow-sm">
                    {navTranslations.pergolaSystems}
                  </NavigationMenuTrigger>
                  <PergolaDropdownContent 
                    bioclimaticTitle={navTranslations.bioclimaticTitle}
                    bioclimaticDesc={navTranslations.bioclimaticDesc}
                  />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange-600 bg-transparent drop-shadow-sm">
                    {navTranslations.glassSystems}
                  </NavigationMenuTrigger>
                  <GlassDropdownContent 
                    glassTitle={navTranslations.glassTitle}
                    glassDesc={navTranslations.glassDesc}
                  />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/kis-bahcesi"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.winterGarden}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/gunes-kiriclari"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.sunBreakers}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/zip-perde"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.zipScreen}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/katalog"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.catalog}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/ar-demo"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.arDemo}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/export"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.export}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/iletisim"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 drop-shadow-sm"
                    >
                      {navTranslations.contact}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 relative z-[100]">
              {/* Language Switcher */}
              <LanguageSwitcher theme="dark" />

              {/* Main Menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-800 hover:bg-orange-50 drop-shadow-sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Full Screen Menu */}
          <MobileMenuContent 
            translations={{
              products: navTranslations.products,
              services: navTranslations.services,
              company: navTranslations.company,
              pergolaSystems: navTranslations.pergolaSystems,
              glassSystems: navTranslations.glassSystems,
              winterGarden: navTranslations.winterGarden,
              sunBreakers: navTranslations.sunBreakers,
              zipScreen: navTranslations.zipScreen,
              catalog: navTranslations.catalog,
              arDemo: navTranslations.arDemo,
              export: navTranslations.export,
              getQuote: navTranslations.getQuote,
              contact: navTranslations.contact,
            }}
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </div>
      </header>
    </>
  )
}
