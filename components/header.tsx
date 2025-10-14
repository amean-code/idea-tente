"use client"

import { useState, useEffect, memo, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
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
import { Menu, X, MessageCircle, Phone, MoreHorizontal, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { contactInfo } from "@/lib/contact-info"

// Memoized dropdown content components - sadece çeviriler değiştiğinde güncellenir
const PergolaDropdownContent: React.FC<{ t: any }> = ({ t }) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[500px]">
      <NavigationMenuLink asChild>
        <Link
          href="/pergola/biyoklimatik"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 border-b"
        >
          <div className="text-sm font-bold leading-none">{t("nav.pergolaMain")}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {t("nav.pergolaMainDesc")}
          </p>
        </Link>
      </NavigationMenuLink>
      {/* Alt Ürünler */}
      <div className="grid grid-cols-2 gap-3">
        <NavigationMenuLink asChild>
          <Link
            href="/pergola/biyoklimatik-sistemler"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.pergolaBioclimatic")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.pergolaBioclimaticDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/pergola/motorlu-sistemler"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.pergolaMotorized")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.pergolaMotorizedDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/pergola/rolling-roof"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.pergolaRolling")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.pergolaRollingDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  </NavigationMenuContent>
)

const GlassDropdownContent: React.FC<{ t: any }> = ({ t }) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[500px]">
      <NavigationMenuLink asChild>
        <Link
          href="/cam-sistemleri"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 border-b"
        >
          <div className="text-sm font-bold leading-none">{t("nav.glassMain")}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {t("nav.glassMainDesc")}
          </p>
        </Link>
      </NavigationMenuLink>
      {/* Alt Ürünler - Şimdilik kapalı */}
      {/* <div className="grid grid-cols-2 gap-3">
        <NavigationMenuLink asChild>
          <Link
            href="/cam-sistemleri/surme-cam"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.glassSliding")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.glassSlidingDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/cam-sistemleri/katlanir-cam"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.glassFolding")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.glassFoldingDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/cam-sistemleri/sabit-cam"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.glassFixed")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.glassFixedDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
      </div> */}
    </div>
  </NavigationMenuContent>
)

const WinterGardenDropdownContent: React.FC<{ t: any }> = ({ t }) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[500px]">
      <NavigationMenuLink asChild>
        <Link
          href="/kis-bahcesi"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 border-b"
        >
          <div className="text-sm font-bold leading-none">{t("nav.winterGardenMain")}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {t("nav.winterGardenMainDesc")}
          </p>
        </Link>
      </NavigationMenuLink>
      {/* Alt Ürünler - Şimdilik kapalı */}
      {/* <div className="grid grid-cols-2 gap-3">
        <NavigationMenuLink asChild>
          <Link
            href="/kis-bahcesi/premium-kis-bahcesi"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.winterGardenPremium")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.winterGardenPremiumDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/kis-bahcesi/standart-kis-bahcesi"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.winterGardenStandard")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.winterGardenStandardDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/kis-bahcesi/lux-kis-bahcesi"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.winterGardenLux")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.winterGardenLuxDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
      </div> */}
    </div>
  </NavigationMenuContent>
)

const SunBreakerDropdownContent: React.FC<{ t: any }> = ({ t }) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[500px]">
      <NavigationMenuLink asChild>
        <Link
          href="/gunes-kiriclari"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 border-b"
        >
          <div className="text-sm font-bold leading-none">{t("nav.sunBreakerMain")}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {t("nav.sunBreakerMainDesc")}
          </p>
        </Link>
      </NavigationMenuLink>
      {/* Alt Ürünler - Şimdilik kapalı */}
      {/* <div className="grid grid-cols-2 gap-3">
        <NavigationMenuLink asChild>
          <Link
            href="/gunes-kiriclari/sabit-gunes-kirici"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.sunBreakerFixed")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.sunBreakerFixedDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/gunes-kiriclari/hareketli-gunes-kirici"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.sunBreakerMotorized")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.sunBreakerMotorizedDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/gunes-kiriclari/dikey-gunes-kirici"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.sunBreakerVertical")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.sunBreakerVerticalDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
      </div> */}
    </div>
  </NavigationMenuContent>
)

const ZipScreenDropdownContent: React.FC<{ t: any }> = ({ t }) => (
  <NavigationMenuContent>
    <div className="grid gap-3 p-6 w-[500px]">
      <NavigationMenuLink asChild>
        <Link
          href="/zip-perde"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600 border-b"
        >
          <div className="text-sm font-bold leading-none">{t("nav.zipScreenMain")}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {t("nav.zipScreenMainDesc")}
          </p>
        </Link>
      </NavigationMenuLink>
      {/* Alt Ürünler - Şimdilik kapalı */}
      {/* <div className="grid grid-cols-2 gap-3">
        <NavigationMenuLink asChild>
          <Link
            href="/zip-perde/motorlu-zip-perde"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.zipScreenMotorized")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.zipScreenMotorizedDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/zip-perde/manuel-zip-perde"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.zipScreenManual")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.zipScreenManualDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            href="/zip-perde/akilli-zip-perde"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50"
          >
            <div className="text-sm font-medium leading-none">{t("nav.zipScreenSmart")}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {t("nav.zipScreenSmartDesc")}
            </p>
          </Link>
        </NavigationMenuLink>
      </div> */}
    </div>
  </NavigationMenuContent>
)

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
      <div className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md py-1 px-4 transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full bg-white/80' : 'opacity-100 translate-y-0 bg-white/10'
      }`}>
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link 
              href={contactInfo.social.instagram} 
              target="_blank" 
              className="text-white hover:text-orange-400 transition-colors drop-shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link 
              href={contactInfo.social.facebook} 
              target="_blank" 
              className="text-white hover:text-orange-400 transition-colors drop-shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link 
              href={contactInfo.social.linkedin} 
              target="_blank" 
              className="text-white hover:text-orange-400 transition-colors drop-shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link 
              href={contactInfo.social.youtube} 
              target="_blank" 
              className="text-white hover:text-orange-400 transition-colors drop-shadow-md"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="default" asChild className="bg-green-500 hover:bg-green-600 text-white">
              <Link href={contactInfo.whatsapp.primary} target="_blank" className="flex items-center">
                <Image 
                  src="/wp-icon.png" 
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

      <header className={`fixed left-0 right-0 z-30 w-full transition-all duration-300 ${
        isScrolled 
          ? 'top-0 bg-white/80 backdrop-blur-md' 
          : 'top-8 bg-white/10 backdrop-blur-md'
      }`} style={{ overflow: 'visible' }}>
        <div className="container mx-auto px-4" style={{ overflow: 'visible' }}>
          <div className="flex h-16 items-center justify-between" style={{ overflow: 'visible' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/idea-logo.jpg" 
                alt="IDEA Logo" 
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex" delayDuration={0}>
              <NavigationMenuList>
                {/* Pergola - Dropdown Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent drop-shadow-md ${
                      isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                    }`}
                  >
                    {navTranslations.pergolaSystems}
                  </NavigationMenuTrigger>
                  <PergolaDropdownContent t={t} />
                </NavigationMenuItem>

                {/* Cam Sistemleri - Direkt Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/cam-sistemleri"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.glassSystems}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Kış Bahçesi - Direkt Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/kis-bahcesi"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.winterGarden}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Güneş Kırıcıları - Direkt Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/gunes-kiriclari"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.sunBreakers}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Zip Perde - Direkt Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/zip-perde"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.zipScreen}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/katalog"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.catalog}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/ar-demo"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.arDemo}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/export"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.export}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/iletisim"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors drop-shadow-md ${
                        isScrolled ? 'text-gray-800 hover:bg-orange-50 hover:text-orange-600' : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {navTranslations.contact}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher theme={isScrolled ? "light" : "dark"} />

              {/* Main Menu button */}
              <Button
                variant="ghost"
                size="sm"
                className={`drop-shadow-md transition-colors ${
                  isScrolled ? 'text-gray-800 hover:bg-orange-50' : 'text-white hover:bg-white/10'
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
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </div>
      </header>
    </>
  )
}
