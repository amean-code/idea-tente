import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Middleware - Dil yönetimi ve cookie senkronizasyonu
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Get language from cookie or header
  const languageCookie = request.cookies.get("language")?.value
  const pathname = request.nextUrl.pathname

  // Supported locales
  const locales = ["en", "ar", "de", "ru"]
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Set default language cookie if not exists
  if (!languageCookie) {
    // Get the preferred language from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language")
    let preferredLanguage = "tr" // default to Turkish

    if (acceptLanguage) {
      if (acceptLanguage.includes("en")) preferredLanguage = "en"
      else if (acceptLanguage.includes("ar")) preferredLanguage = "ar"
      else if (acceptLanguage.includes("de")) preferredLanguage = "de"
      else if (acceptLanguage.includes("ru")) preferredLanguage = "ru"
    }

    // Set cookie for future requests
    response.cookies.set("language", preferredLanguage, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    })

    // Only redirect for non-Turkish languages
    if (preferredLanguage !== "tr" && pathname === "/" && pathnameIsMissingLocale) {
      return NextResponse.redirect(new URL(`/${preferredLanguage}${pathname}`, request.url))
    }
  }

  return response
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
