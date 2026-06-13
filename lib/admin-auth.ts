import { createHash, timingSafeEqual } from "crypto"
import { cookies } from "next/headers"
import type { NextRequest, NextResponse } from "next/server"

export const adminSessionCookieName = "pergola_admin_session"

const sessionMaxAge = 60 * 60 * 8

interface AdminCredentials {
  email?: string
  password?: string
}

/**
 * Admin giriş bilgilerini ortam değişkenlerinden okur.
 */
function getAdminCredentials(): AdminCredentials {
  return {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  }
}

/**
 * İki değeri zamanlama saldırılarına daha dayanıklı şekilde karşılaştırır.
 */
function safeCompare(firstValue: string, secondValue: string): boolean {
  const firstBuffer = Buffer.from(firstValue)
  const secondBuffer = Buffer.from(secondValue)

  if (firstBuffer.length !== secondBuffer.length) {
    return false
  }

  return timingSafeEqual(firstBuffer, secondBuffer)
}

/**
 * Admin oturum çerezinde saklanacak imzalı token değerini üretir.
 */
function createAdminSessionToken(): string {
  const { email, password } = getAdminCredentials()
  const sessionSecret = process.env.ADMIN_SESSION_SECRET ?? password

  if (!email || !password || !sessionSecret) {
    return ""
  }

  return createHash("sha256").update(`${email}:${sessionSecret}`).digest("hex")
}

/**
 * Formdan gelen admin bilgilerini .env değerleriyle karşılaştırır.
 */
export function verifyAdminCredentials(email: string, password: string): boolean {
  const adminCredentials = getAdminCredentials()

  if (!adminCredentials.email || !adminCredentials.password) {
    return false
  }

  const normalizedEmail = email.trim()
  const normalizedPassword = password.trim()

  return (
    safeCompare(normalizedEmail, adminCredentials.email) &&
    safeCompare(normalizedPassword, adminCredentials.password)
  )
}

/**
 * Route handler isteğindeki admin session çerezinin geçerli olup olmadığını kontrol eder.
 */
export function isAdminRequestAuthenticated(request: NextRequest): boolean {
  const sessionToken = request.cookies.get(adminSessionCookieName)?.value ?? ""
  const expectedSessionToken = createAdminSessionToken()

  if (!sessionToken || !expectedSessionToken) {
    return false
  }

  return safeCompare(sessionToken, expectedSessionToken)
}

/**
 * Server component içinde admin session çerezinin geçerli olup olmadığını kontrol eder.
 */
export async function isAdminCookieAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(adminSessionCookieName)?.value ?? ""
  const expectedSessionToken = createAdminSessionToken()

  if (!sessionToken || !expectedSessionToken) {
    return false
  }

  return safeCompare(sessionToken, expectedSessionToken)
}

/**
 * Başarılı girişten sonra admin session çerezini yanıta ekler.
 */
export function setAdminSessionCookie(response: NextResponse): void {
  response.cookies.set(adminSessionCookieName, createAdminSessionToken(), {
    httpOnly: true,
    maxAge: sessionMaxAge,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
}

/**
 * Çıkış işlemi sırasında admin session çerezini temizler.
 */
export function clearAdminSessionCookie(response: NextResponse): void {
  response.cookies.set(adminSessionCookieName, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
}
