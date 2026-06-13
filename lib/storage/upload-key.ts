import { randomUUID } from "node:crypto"
import { SITE_PUBLIC_PREFIX } from "@/lib/site-storage-keys"

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

/**
 * Ürün galerisi klasörüne yükleme için `site/public/{folder}/...` nesne anahtarı üretir.
 */
export function buildSitePublicUploadObjectKey(publicFolder: string, originalFilename: string) {
  const folder = publicFolder
    .trim()
    .replace(/[^\w.\-]+/g, "_")
    .replace(/^\.+/, "")
    .replace(/\/+/g, "")
    .slice(0, 80)

  if (!folder) {
    throw new Error("publicFolder zorunlu.")
  }

  const cleaned = originalFilename.trim()
  const safe =
    cleaned
      .replace(/[^\w.\-]+/g, "_")
      .replace(/^\.+/, "")
      .replace(/\.{2,}/g, ".")
      .slice(0, 120) || "file"

  return `${SITE_PUBLIC_PREFIX}${folder}/${Date.now()}-${randomUUID()}-${safe}`
}

/**
 * `site/public/` nesne anahtarını tarayıcı public yoluna çevirir.
 */
export function sitePublicObjectKeyToPublicPath(key: string): string | null {
  if (!key.startsWith(SITE_PUBLIC_PREFIX)) {
    return null
  }
  const relative = key.slice(SITE_PUBLIC_PREFIX.length)
  if (!relative || relative.includes("..")) {
    return null
  }
  return `/${relative}`
}
