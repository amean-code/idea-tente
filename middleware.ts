import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = ["en", "ar", "de", "ru"].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the preferred language from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language")
    let preferredLanguage = "tr" // default to Turkish

    if (acceptLanguage) {
      if (acceptLanguage.includes("en")) preferredLanguage = "en"
      else if (acceptLanguage.includes("ar")) preferredLanguage = "ar"
      else if (acceptLanguage.includes("de")) preferredLanguage = "de"
      else if (acceptLanguage.includes("ru")) preferredLanguage = "ru"
    }

    // Only redirect for non-Turkish languages
    if (preferredLanguage !== "tr" && pathname === "/") {
      return NextResponse.redirect(new URL(`/${preferredLanguage}${pathname}`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
