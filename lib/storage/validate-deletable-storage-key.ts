import { SITE_PUBLIC_PREFIX } from "@/lib/site-storage-keys"
import { isImageObjectKey } from "@/lib/storage/image-object-key"

/**
 * Admin panelinden silinebilecek bucket anahtarının güvenli ve geçerli olup olmadığını doğrular.
 */
export function validateDeletableSitePublicObjectKey(key: string): string | null {
  const trimmedKey = key.trim()

  if (!trimmedKey) {
    return "Silinecek dosya anahtarı gerekli."
  }

  if (!trimmedKey.startsWith(SITE_PUBLIC_PREFIX)) {
    return "Yalnızca site/public/ altındaki görseller silinebilir."
  }

  if (trimmedKey.includes("..")) {
    return "Geçersiz dosya yolu."
  }

  const relativePath = trimmedKey.slice(SITE_PUBLIC_PREFIX.length)
  if (!relativePath || relativePath.endsWith("/")) {
    return "Geçersiz dosya yolu."
  }

  if (!isImageObjectKey(trimmedKey)) {
    return "Yalnızca görsel dosyalar silinebilir."
  }

  return null
}
