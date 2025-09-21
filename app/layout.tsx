import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pergola & Cam Sistemleri | Premium Outdoor Solutions",
  description:
    "Türkiye'nin önde gelen IDEA, cam sistemleri, kış bahçesi ve güneş kırıcı üreticisi. Oteller, restoranlar ve konutlar için premium çözümler.",
  keywords: "IDEA, cam sistemleri, kış bahçesi, güneş kırıcı, zip perde, outdoor, tente",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
