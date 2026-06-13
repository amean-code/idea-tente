/** S3 bucket içinde statik site görsellerinin kök öneki (`public/` yapısını yansıtır). */
export const SITE_PUBLIC_PREFIX = "site/public/"

/** S3 bucket içinde JSON manifest dosyalarının öneki. */
export const SITE_MANIFEST_PREFIX = "site/manifests/"

/** Galeri sırası ve ürün galeri manifest anahtarı. */
export const GALLERY_CONFIG_OBJECT_KEY = `${SITE_MANIFEST_PREFIX}gallery-config.json`

/** Ana sayfa kahraman slayt manifest anahtarı. */
export const HERO_SLIDES_OBJECT_KEY = `${SITE_MANIFEST_PREFIX}pergola-hero-slides.json`

/** Ürün sayfası kapak görselleri manifest anahtarı. */
export const GALLERY_COVERS_OBJECT_KEY = `${SITE_MANIFEST_PREFIX}gallery-covers.json`

/** Eski pergola senkron öneki (geriye dönük uyumluluk). */
export const LEGACY_PERGOLA_PREFIX = "site/pergola/"

/**
 * Public URL yolunu (`/foo/bar.webp`) bucket nesne anahtarına çevirir.
 */
export function publicPathToSiteObjectKey(publicPath: string): string | null {
  if (!publicPath.startsWith("/") || publicPath.includes("..")) {
    return null
  }

  const relative = publicPath.slice(1)
  if (!relative) {
    return null
  }

  return `${SITE_PUBLIC_PREFIX}${relative}`
}

/**
 * Bucket nesne anahtarını tarayıcıda kullanılan public yola çevirir.
 */
export function siteObjectKeyToPublicPath(key: string): string | null {
  if (!key.startsWith(SITE_PUBLIC_PREFIX)) {
    return null
  }

  const relative = key.slice(SITE_PUBLIC_PREFIX.length)
  if (!relative || relative.includes("..")) {
    return null
  }

  return `/${relative}`
}
