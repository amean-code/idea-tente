import { randomUUID } from "node:crypto"

/**
 * Orijinal dosya adından güvenli bir S3 nesne anahtarı (`uploads/...`) üretir.
 */
export function buildUploadObjectKey(originalFilename: string) {
  const cleaned = originalFilename.trim()
  const safe =
    cleaned
      .replace(/[^\w.\-]+/g, "_")
      .replace(/^\.+/, "")
      .replace(/\.{2,}/g, ".")
      .slice(0, 120) || "file"

  return `uploads/${Date.now()}-${randomUUID()}-${safe}`
}
