/** Görsel sunum modu: `local` = public/, `proxy` = /api/site-assets, `bucket` = doğrudan URL. */
export type AssetDeliveryMode = "local" | "proxy" | "bucket"

/**
 * Ortam değişkenlerinden görsel sunum modunu okur; özel bucket için varsayılan `proxy`.
 */
export function readAssetDeliveryMode(): AssetDeliveryMode {
  const configured = process.env.NEXT_PUBLIC_ASSET_DELIVERY?.trim().toLowerCase()

  if (configured === "local" || configured === "proxy" || configured === "bucket") {
    return configured
  }

  if (process.env.NEXT_PUBLIC_ASSET_BASE?.trim()) {
    return "proxy"
  }

  return "local"
}

/**
 * Public statik yolunu (`/klasor/dosya.webp`) site görselleri için kullanılabilir URL'ye çevirir.
 */
export function publicAssetSrc(legacyPath: string): string {
  if (!legacyPath || legacyPath.startsWith("http://") || legacyPath.startsWith("https://")) {
    return legacyPath
  }

  if (!legacyPath.startsWith("/")) {
    return legacyPath
  }

  const relative = legacyPath.slice(1)
  if (!relative || relative.includes("..")) {
    return legacyPath
  }

  const encoded = relative
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/")

  const delivery = readAssetDeliveryMode()

  if (delivery === "local") {
    return legacyPath
  }

  if (delivery === "proxy") {
    return `/api/site-assets/${encoded}`
  }

  const base =
    process.env.NEXT_PUBLIC_ASSET_BASE?.trim().replace(/\/$/, "") ??
    process.env.NEXT_PUBLIC_PERGOLA_IMAGE_BASE?.trim().replace(/\/$/, "")

  if (!base) {
    return legacyPath
  }

  return `${base}/${encoded}`
}

/**
 * `/pergola/` ve diğer public görseller için URL üretir (`publicAssetSrc` ile aynı).
 */
export function pergolaPublicSrc(legacyPath: string): string {
  return publicAssetSrc(legacyPath)
}

/**
 * CSS `background-image: url(...)` için güvenli tek tırnaklı url üretir.
 */
export function pergolaBackgroundUrl(legacyPath: string): string {
  return publicAssetSrc(legacyPath).replace(/'/g, "%27")
}
