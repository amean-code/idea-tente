/**
 * S3 nesne anahtarının yaygın görsel uzantılarından birine sahip olup olmadığını kontrol eder.
 */
export function isImageObjectKey(key: string) {
  return /\.(jpe?g|png|gif|webp|avif|svg|bmp|tiff?|heic|heif)$/i.test(key)
}
