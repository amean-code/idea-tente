import { NextRequest, NextResponse } from "next/server"
import { setAdminSessionCookie, verifyAdminCredentials } from "@/lib/admin-auth"

/**
 * Admin giriş formunu doğrular ve başarılıysa güvenli session çerezi üretir.
 */
export async function POST(request: NextRequest) {
  const { email: configuredEmail, password: configuredPassword } = {
    email: process.env.ADMIN_EMAIL?.trim(),
    password: process.env.ADMIN_PASSWORD?.trim(),
  }

  if (!configuredEmail || !configuredPassword) {
    return NextResponse.json(
      { message: "Admin girişi yapılandırılmamış. ADMIN_EMAIL ve ADMIN_PASSWORD tanımlayın." },
      { status: 503 },
    )
  }

  const body = await request.json().catch(() => null)
  const email = typeof body?.email === "string" ? body.email : ""
  const password = typeof body?.password === "string" ? body.password : ""

  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.json({ message: "E-posta veya şifre hatalı." }, { status: 401 })
  }

  const response = NextResponse.json({ message: "Giriş başarılı." })
  setAdminSessionCookie(response)
  return response
}
