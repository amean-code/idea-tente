"use client"

import { useState, useEffect, memo, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, Phone, MoreHorizontal, Instagram, Facebook, Linkedin, Youtube, ChevronDown } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { contactInfo } from "@/lib/contact-info"

/**
 * Basit dropdown menü komponenti
 */
interface SimpleDropdownProps {
  trigger: string
  isScrolled: boolean
  children: React.ReactNode
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({ trigger, isScrolled, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
          isScrolled 
            ? 'text-gray-800 hover:bg-primary/10 hover:text-primary' 
            : 'text-white hover:bg-white/10 hover:text-primary'
        }`}
      >
        {trigger}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 z-[100]">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
            {children}
    </div>
    </div>
      )}
    </div>
)
}

// Memoized mobile menu content - sadece çeviriler değiştiğinde güncellenir
const MobileMenuContent = memo(({ 
  translations,
  menuDescriptions,
  t,
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
  menuDescriptions: {
    pergola: string
    glass: string
    winterGarden: string
    sunBreaker: string
    zipScreen: string
    catalog: string
    arDemo: string
    export: string
    getQuote: string
    about: string
    references: string
    blog: string
    contact: string
  }
  t: (key: string) => string
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
              <h2 className="text-2xl font-bold text-gray-800">{t("nav.menu")}</h2>
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
                {/* Pergola - Ana kategori */}
                <div className="space-y-2">
                  <Link
                    href="/pergola"
                    className="block p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-gray-800 group-hover:text-primary">{pergolaSystems}</div>
                    <div className="text-xs text-gray-600">{menuDescriptions.pergola}</div>
                  </Link>
                  <Link
                    href="/pergola/bioklimatik-sistemler"
                    className="block p-3 ml-4 rounded-lg hover:bg-gray-100 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-gray-800 group-hover:text-primary text-sm">{t("nav.pergolaBioclimatic")}</div>
                    <div className="text-xs text-gray-600">{t("nav.pergolaBioclimaticDesc")}</div>
                  </Link>
                  <Link
                    href="/pergola/motorlu-sistemler"
                    className="block p-3 ml-4 rounded-lg hover:bg-gray-100 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-gray-800 group-hover:text-primary text-sm">{t("nav.pergolaMotorized")}</div>
                    <div className="text-xs text-gray-600">{t("nav.pergolaMotorizedDesc")}</div>
                  </Link>
                </div>
                {/* Cam Sistemleri - Ana kategori */}
                <div className="space-y-2">
                  <div className="font-medium text-gray-800 mb-2">{glassSystems}</div>
                  <Link
                    href="/cam-sistemleri/giyotin-cam-sistemleri"
                    className="block p-3 ml-4 rounded-lg hover:bg-gray-100 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-gray-800 group-hover:text-primary text-sm">{t("glassSystems.products.surmeCam.title")}</div>
                    <div className="text-xs text-gray-600">Kolay açılır kapanır mekanizma</div>
                  </Link>
                  <Link
                    href="/cam-sistemleri/surme-cam"
                    className="block p-3 ml-4 rounded-lg hover:bg-gray-100 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-gray-800 group-hover:text-primary text-sm">{t("glassSystems.slidingGlass.hero.title")}</div>
                    <div className="text-xs text-gray-600">Panoramik manzara, kolay sürme</div>
                  </Link>
                </div>
                <Link
                  href="/kis-bahcesi"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{winterGarden}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.winterGarden}</div>
                </Link>
                <Link
                  href="/gunes-kiriclari"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{sunBreakers}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.sunBreaker}</div>
                </Link>
                <Link
                  href="/zip-perde"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{zipScreen}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.zipScreen}</div>
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
                  <div className="font-medium text-gray-800 group-hover:text-primary">{catalog}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.catalog}</div>
                </Link>
                <Link
                  href="/ar-demo"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{arDemo}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.arDemo}</div>
                </Link>
                <Link
                  href="/export"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{exportText}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.export}</div>
                </Link>
                <Link
                  href="/teklif-al"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{getQuote}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.getQuote}</div>
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
                  <div className="font-medium text-gray-800 group-hover:text-primary">{t("nav.about")}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.about}</div>
                </Link>
                <Link
                  href="/referanslar"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{t("nav.references")}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.references}</div>
                </Link>
                <Link
                  href="/blog"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{t("nav.blog")}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.blog}</div>
                </Link>
                <Link
                  href="/iletisim"
                  className="block p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-800 group-hover:text-primary">{contact}</div>
                  <div className="text-sm text-gray-600">{menuDescriptions.contact}</div>
                </Link>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t("nav.languageSelection")}</span>
                <LanguageSwitcher theme="light" position="top" />
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
      <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md py-1 px-4 transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full bg-white/80' : 'opacity-100 translate-y-0 bg-white/10'
      }`}>
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link 
              href={contactInfo.social.instagram} 
              target="_blank" 
              className="text-white hover:text-primary transition-colors drop-shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link 
              href={contactInfo.social.facebook} 
              target="_blank" 
              className="text-white hover:text-primary transition-colors drop-shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link 
              href={contactInfo.social.linkedin} 
              target="_blank" 
              className="text-white hover:text-primary transition-colors drop-shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link 
              href={contactInfo.social.youtube} 
              target="_blank" 
              className="text-white hover:text-primary transition-colors drop-shadow-md"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="default" asChild className="bg-green-500 hover:bg-green-600 text-white">
              <Link href={contactInfo.whatsapp.primary} target="_blank" className="flex items-center">
                <Image 
                  src="/wp-icon.webp" 
                  alt="WhatsApp" 
                  width={16}
                  height={16}
                  className="mr-2"
                />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'top-0 bg-white/80 backdrop-blur-md' 
          : 'top-8 bg-white/10 backdrop-blur-md'
      }`} style={{ overflow: 'visible' }}>
        <div className="container mx-auto px-4" style={{ overflow: 'visible' }}>
          <div className="flex h-16 items-center justify-between relative" style={{ overflow: 'visible' }}>
            {/* Logo - Header'ın dışına taşabilir, büyütülmüş */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 relative z-10"
              style={{ overflow: 'visible', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <div className="relative" style={{ overflow: 'visible' }}>
                <Image 
                  src="/idea-logo.webp" 
                  alt="IDEA Logo" 
                  width={200}
                  height={80}
                  className="w-auto object-contain"
                  style={{ 
                    height: '80px',
                    transform: 'translateY(8px)',
                    maxWidth: 'none'
                  }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
                {/* Pergola - Dropdown Menu */}
              <SimpleDropdown trigger={navTranslations.pergolaSystems} isScrolled={isScrolled}>
                <div className="w-[500px] p-6">
                  <Link
                    href="/pergola"
                    className="block p-3 rounded-md hover:bg-primary/10 border-b mb-3"
                  >
                    <div className="text-sm font-bold text-gray-800">{t("nav.pergolaMain")}</div>
                    <p className="text-sm text-gray-600">{t("nav.pergolaMainDesc")}</p>
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/pergola/bioklimatik-sistemler" className="block p-3 rounded-md hover:bg-primary/10">
                      <div className="text-sm font-medium text-gray-800">{t("nav.pergolaBioclimatic")}</div>
                      <p className="text-xs text-gray-600">{t("nav.pergolaBioclimaticDesc")}</p>
                    </Link>
                    <Link href="/pergola/motorlu-sistemler" className="block p-3 rounded-md hover:bg-primary/10">
                      <div className="text-sm font-medium text-gray-800">{t("nav.pergolaMotorized")}</div>
                      <p className="text-xs text-gray-600">{t("nav.pergolaMotorizedDesc")}</p>
                    </Link>
                  </div>
                </div>
              </SimpleDropdown>

              {/* Cam Sistemleri - Dropdown Menu */}
              <SimpleDropdown trigger={navTranslations.glassSystems} isScrolled={isScrolled}>
                <div className="w-[500px] p-6">
                  <Link
                    href="/cam-sistemleri"
                    className="block p-3 rounded-md hover:bg-primary/10 border-b mb-3"
                  >
                    <div className="text-sm font-bold text-gray-800">{t("nav.glassSystems")}</div>
                    <p className="text-sm text-gray-600">{t("nav.menuDescriptions.glass")}</p>
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/cam-sistemleri/giyotin-cam-sistemleri" className="block p-3 rounded-md hover:bg-primary/10">
                      <div className="text-sm font-medium text-gray-800">{t("glassSystems.products.surmeCam.title")}</div>
                      <p className="text-xs text-gray-600">Kolay açılır kapanır mekanizma</p>
                    </Link>
                    <Link href="/cam-sistemleri/surme-cam" className="block p-3 rounded-md hover:bg-primary/10">
                      <div className="text-sm font-medium text-gray-800">{t("glassSystems.slidingGlass.hero.title")}</div>
                      <p className="text-xs text-gray-600">Panoramik manzara, kolay sürme</p>
                    </Link>
                  </div>
                </div>
              </SimpleDropdown>

                    <Link
                      href="/kis-bahcesi"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.winterGarden}
                    </Link>

                    <Link
                      href="/gunes-kiriclari"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.sunBreakers}
                    </Link>

                    <Link
                      href="/zip-perde"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.zipScreen}
                    </Link>

                    <Link
                      href="/katalog"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.catalog}
                    </Link>

                    <Link
                      href="/ar-demo"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.arDemo}
                    </Link>

                    <Link
                      href="/export"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.export}
                    </Link>

                    <Link
                      href="/iletisim"
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-primary/10 hover:text-primary-600' : 'text-white hover:bg-white/10 hover:text-primary'
                      }`}
                    >
                      {navTranslations.contact}
                    </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher theme={isScrolled ? "light" : "dark"} />

              {/* Main Menu button */}
              <Button
                variant="ghost"
                size="sm"
                className={`drop-shadow-md transition-colors ${
                  isScrolled ? 'text-gray-800 hover:bg-primary/10' : 'text-white hover:bg-white/10'
                }`}
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
            menuDescriptions={{
              pergola: t("nav.menuDescriptions.pergola"),
              glass: t("nav.menuDescriptions.glass"),
              winterGarden: t("nav.menuDescriptions.winterGarden"),
              sunBreaker: t("nav.menuDescriptions.sunBreaker"),
              zipScreen: t("nav.menuDescriptions.zipScreen"),
              catalog: t("nav.menuDescriptions.catalog"),
              arDemo: t("nav.menuDescriptions.arDemo"),
              export: t("nav.menuDescriptions.export"),
              getQuote: t("nav.menuDescriptions.getQuote"),
              about: t("nav.menuDescriptions.about"),
              references: t("nav.menuDescriptions.references"),
              blog: t("nav.menuDescriptions.blog"),
              contact: t("nav.menuDescriptions.contact")
            }}
            t={t}
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </div>
      </header>
    </>
  )
}
