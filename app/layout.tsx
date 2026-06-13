import type React from "react"
import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { ConditionalSiteChrome } from "@/components/conditional-site-chrome"
import "./globals.css"

/**
 * Barlow yazı tipi konfigürasyonu
 * Google Fonts'tan yüklenen Barlow yazı tipinin ağırlıkları ve ayarları
 */
const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pergola & Cam Sistemleri | Premium Outdoor Solutions",
  description:
    "Türkiye'nin önde gelen IDEA, cam sistemleri, kış bahçesi ve güneş kırıcı üreticisi. Oteller, restoranlar ve konutlar için premium çözümler.",
  keywords: "IDEA, cam sistemleri, kış bahçesi, güneş kırıcı, zip perde, outdoor, tente",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/idea-logo.webp", sizes: "167x161", type: "image/webp" },
      { url: "/icon-192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/icon-512.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: "/idea-logo.webp",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`font-sans ${barlow.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <ConditionalSiteChrome>{children}</ConditionalSiteChrome>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
