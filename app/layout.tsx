import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/idea-logo.jpg", sizes: "167x161", type: "image/jpeg" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/idea-logo.jpg",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
