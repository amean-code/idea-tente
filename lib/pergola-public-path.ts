/**
 * `/pergola/` altındaki public yolu, `NEXT_PUBLIC_PERGOLA_IMAGE_BASE` tanımlıysa Tigris/CDN üzerinde tam URL'ye çevirir.
 */
export function pergolaPublicSrc(legacyPath: string): string {
  const base = process.env.NEXT_PUBLIC_PERGOLA_IMAGE_BASE?.trim().replace(/\/$/, "")
  if (!base || !legacyPath.startsWith("/pergola/")) {
    return legacyPath
  }

  const relative = legacyPath.slice("/pergola/".length)
  if (!relative || relative.includes("..")) {
    return legacyPath
  }

  const encoded = relative
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/")

  return `${base}/${encoded}`
}

/**
 * CSS `background-image: url(...)` için güvenli tek tırnaklı url üretir.
 */
export function pergolaBackgroundUrl(legacyPath: string): string {
  return pergolaPublicSrc(legacyPath).replace(/'/g, "%27")
}
