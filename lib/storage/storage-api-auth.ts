import type { NextRequest } from "next/server"

/**
 * `STORAGE_API_SECRET` tanımlıysa istek başlığındaki gizli anahtarı doğrular; tanımsızsa geliştirme kolaylığı için geçer.
 */
export function isStorageApiRequestAuthorized(request: NextRequest) {
  const secret = process.env.STORAGE_API_SECRET?.trim()
  if (!secret) {
    return true
  }

  const headerSecret = request.headers.get("x-storage-secret")?.trim()
  const auth = request.headers.get("authorization")?.trim()
  const bearer = auth?.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : ""

  return headerSecret === secret || bearer === secret
}
