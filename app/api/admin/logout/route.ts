import { NextResponse } from "next/server"
import { clearAdminSessionCookie } from "@/lib/admin-auth"

/**
 * Admin session çerezini temizleyerek kullanıcıyı panelden çıkarır.
 */
export async function POST() {
  const response = NextResponse.json({ message: "Çıkış yapıldı." })
  clearAdminSessionCookie(response)
  return response
}
