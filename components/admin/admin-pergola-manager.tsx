"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ArrowDown, ArrowUp, LogOut, Plus, RefreshCw, Save, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { EditableGalleryConfig } from "@/lib/admin-gallery"
import { bucketKeyToPergolaPublicPath } from "@/lib/pergola-bucket-server"

/** `/api/admin/storage` liste öğesi (yalnızca kullanılan alanlar). */
interface StorageListItem {
  key: string
  previewUrl: string | null
  isImage: boolean
}

/**
 * Bucket listesinden `/pergola/...` public yolunu türetir veya null döndürür.
 */
function storageItemToPergolaPath(item: StorageListItem): string | null {
  return bucketKeyToPergolaPublicPath(item.key)
}

/**
 * `publicFolder` değeri pergola olan galeri anahtarlarını döndürür.
 */
function getPergolaBackedGalleryKeys(config: EditableGalleryConfig): string[] {
  return Object.entries(config.galleries)
    .filter(([, gallery]) => gallery.publicFolder === "pergola")
    .map(([key]) => key)
}

/**
 * `site/pergola/` görsellerini ve pergola kaynaklı galerileri yönetir.
 */
export function AdminPergolaManager() {
  const router = useRouter()
  const [slides, setSlides] = useState<string[]>([])
  const [bucketItems, setBucketItems] = useState<StorageListItem[]>([])
  const [config, setConfig] = useState<EditableGalleryConfig | null>(null)
  const [selectedGalleryKey, setSelectedGalleryKey] = useState("")
  const [canWriteHero, setCanWriteHero] = useState(false)
  const [canWriteGallery, setCanWriteGallery] = useState(false)
  const [message, setMessage] = useState("")
  const [isBusy, setIsBusy] = useState(false)
  const [customSlidePath, setCustomSlidePath] = useState("")
  const [storageContinuation, setStorageContinuation] = useState<string | null>(null)

  const pergolaGalleryKeys = useMemo(
    () => (config ? getPergolaBackedGalleryKeys(config) : []),
    [config],
  )

  const selectedGalleryImages = config?.galleries[selectedGalleryKey]?.images ?? []

  const bucketPathsInSlides = useMemo(() => new Set(slides.filter((s) => s.startsWith("/pergola/"))), [slides])

  /**
   * Kahraman slaytları ve galeri yapılandırmasını sunucudan yeniler.
   */
  const reloadHeroAndGallery = useCallback(async () => {
    setMessage("")

    const [heroRes, galleryRes] = await Promise.all([fetch("/api/admin/pergola-hero"), fetch("/api/admin/gallery")])

    const heroData = await heroRes.json().catch(() => null)
    const galleryData = await galleryRes.json().catch(() => null)

    if (!heroRes.ok) {
      setMessage(heroData?.message ?? "Kahraman slayt verisi alınamadı.")
      return false
    }

    if (!galleryRes.ok) {
      setMessage(galleryData?.message ?? "Galeri verisi alınamadı.")
      return false
    }

    setSlides(Array.isArray(heroData.slides) ? heroData.slides : [])
    setCanWriteHero(Boolean(heroData.canWrite))
    setConfig(galleryData.config)
    setCanWriteGallery(Boolean(galleryData.canWriteConfig))

    const keys = getPergolaBackedGalleryKeys(galleryData.config as EditableGalleryConfig)
    if (keys.length > 0) {
      setSelectedGalleryKey((current) => (current && keys.includes(current) ? current : keys[0]))
    }

    return true
  }, [])

  /**
   * `site/pergola/` nesnelerinin bir sayfasını indirir.
   */
  const fetchBucketChunk = useCallback(async (continuationToken: string | null, append: boolean) => {
    const params = new URLSearchParams()
    params.set("prefix", "site/pergola/")
    params.set("maxKeys", "60")
    if (continuationToken) {
      params.set("continuationToken", continuationToken)
    }

    const storageRes = await fetch(`/api/admin/storage?${params}`)
    const storageData = await storageRes.json().catch(() => null)

    if (!storageRes.ok || !storageData?.ok) {
      setMessage(storageData?.message ?? "Bucket listesi alınamadı.")
      return
    }

    const chunk = (storageData.items ?? []) as StorageListItem[]
    setStorageContinuation(storageData.nextContinuationToken ?? null)
    if (append) {
      setBucketItems((previous) => [...previous, ...chunk])
    } else {
      setBucketItems(chunk)
    }
  }, [])

  /**
   * Tüm panelleri baştan yükler.
   */
  const reloadAll = useCallback(async () => {
    setIsBusy(true)
    const ok = await reloadHeroAndGallery()
    if (ok) {
      await fetchBucketChunk(null, false)
    }
    setIsBusy(false)
  }, [fetchBucketChunk, reloadHeroAndGallery])

  /**
   * Bucket listesinde bir sonraki sayfayı ekler.
   */
  const loadMoreBucket = useCallback(async () => {
    if (!storageContinuation) {
      return
    }
    setIsBusy(true)
    await fetchBucketChunk(storageContinuation, true)
    setIsBusy(false)
  }, [fetchBucketChunk, storageContinuation])

  useEffect(() => {
    void reloadAll()
  }, [reloadAll])

  /**
   * Kahraman slayt sırasını API ile kaydeder.
   */
  const saveHero = async () => {
    setIsBusy(true)
    setMessage("")
    const response = await fetch("/api/admin/pergola-hero", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slides }),
    })
    const data = await response.json().catch(() => null)
    if (!response.ok) {
      setMessage(data?.message ?? "Kahraman slaytları kaydedilemedi.")
      setIsBusy(false)
      return
    }
    setMessage(data?.message ?? "Kahraman slaytları kaydedildi.")
    setIsBusy(false)
    router.refresh()
  }

  /**
   * Seçili pergola galerisinin görsel listesini kaydeder.
   */
  const saveGallery = async () => {
    if (!selectedGalleryKey) {
      return
    }
    setIsBusy(true)
    setMessage("")
    const response = await fetch("/api/admin/gallery", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ galleryKey: selectedGalleryKey, images: selectedGalleryImages }),
    })
    const data = await response.json().catch(() => null)
    if (!response.ok) {
      setMessage(data?.message ?? "Galeri kaydedilemedi.")
      setIsBusy(false)
      return
    }
    setConfig(data.config)
    setMessage(data?.message ?? "Galeri kaydedildi.")
    setIsBusy(false)
    router.refresh()
  }

  /**
   * Slayt satırını yukarı veya aşaşı taşır.
   */
  const moveSlide = (index: number, delta: -1 | 1) => {
    const next = index + delta
    if (next < 0 || next >= slides.length) {
      return
    }
    const copy = [...slides]
    const [row] = copy.splice(index, 1)
    copy.splice(next, 0, row)
    setSlides(copy)
  }

  /**
   * Slaytı diziden kaldırır.
   */
  const removeSlide = (index: number) => {
    setSlides((previous) => previous.filter((_, itemIndex) => itemIndex !== index))
  }

  /**
   * Bucket'tan gelen pergola yolunu slayt listesine ekler (tekrar yok).
   */
  const addSlideFromPath = (path: string) => {
    if (!path || slides.includes(path)) {
      return
    }
    setSlides((previous) => [...previous, path])
  }

  /**
   * Metin kutusundan (giyotin vb.) slayt yolu ekler.
   */
  const addCustomSlide = () => {
    const trimmed = customSlidePath.trim()
    if (!trimmed.startsWith("/") || trimmed.includes("..")) {
      setMessage("Geçersiz yol. Örnek: /giyotin-cam/....webp")
      return
    }
    addSlideFromPath(trimmed)
    setCustomSlidePath("")
  }

  /**
   * Galeri görsel listesine bucket'tan yol ekler.
   */
  const addToGallery = (path: string) => {
    if (!config || !selectedGalleryKey || selectedGalleryImages.includes(path)) {
      return
    }
    setConfig({
      ...config,
      galleries: {
        ...config.galleries,
        [selectedGalleryKey]: {
          ...config.galleries[selectedGalleryKey],
          images: [...selectedGalleryImages, path],
        },
      },
    })
  }

  /**
   * Galeri görselini listeden çıkarır.
   */
  const removeFromGallery = (path: string) => {
    if (!config || !selectedGalleryKey) {
      return
    }
    setConfig({
      ...config,
      galleries: {
        ...config.galleries,
        [selectedGalleryKey]: {
          ...config.galleries[selectedGalleryKey],
          images: selectedGalleryImages.filter((imagePath) => imagePath !== path),
        },
      },
    })
  }

  /**
   * Galeri görsel sırasını değiştirir.
   */
  const moveGalleryImage = (index: number, delta: -1 | 1) => {
    const next = index + delta
    if (next < 0 || next >= selectedGalleryImages.length) {
      return
    }
    const copy = [...selectedGalleryImages]
    const [row] = copy.splice(index, 1)
    copy.splice(next, 0, row)
    if (!config) {
      return
    }
    setConfig({
      ...config,
      galleries: {
        ...config.galleries,
        [selectedGalleryKey]: {
          ...config.galleries[selectedGalleryKey],
          images: copy,
        },
      },
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-10 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">Admin Panel</p>
            <h1 className="text-3xl font-bold text-gray-900">Pergola bucket &amp; kahraman slaytları</h1>
            <p className="mt-2 text-muted-foreground">
              Görseller bucket'ta `site/pergola/` altında; senkron için:{" "}
              <code className="rounded bg-muted px-1 text-sm">pnpm sync:bucket-pergola</code>. Ön yüzde{" "}
              <code className="rounded bg-muted px-1 text-sm">NEXT_PUBLIC_PERGOLA_IMAGE_BASE</code> tanımlı olmalı.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin">Galeri</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/admin/bucket">Bucket</Link>
            </Button>
            <Button variant="outline" onClick={() => void reloadAll()} disabled={isBusy}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Yenile
            </Button>
            <Button variant="outline" onClick={() => void fetch("/api/admin/logout", { method: "POST" }).then(() => router.refresh())}>
              <LogOut className="mr-2 h-4 w-4" />
              Çıkış
            </Button>
          </div>
        </div>

        {message && (
          <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm" role="status">
            {message}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ana sayfa — kahraman slaytları</CardTitle>
              <CardDescription>
                `/pergola/...` yolları bucket’ta olmalı. Diğer public yollar (ör. giyotin) yerelde kalır.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Özel slayt yolu ekle</Label>
                <div className="flex gap-2">
                  <Input
                    value={customSlidePath}
                    onChange={(e) => setCustomSlidePath(e.target.value)}
                    placeholder="/giyotin-cam/....webp"
                  />
                  <Button type="button" variant="secondary" onClick={addCustomSlide}>
                    Ekle
                  </Button>
                </div>
              </div>

              <ul className="space-y-2">
                {slides.map((path, index) => (
                  <li
                    key={`${path}-${index}`}
                    className="flex items-center gap-2 rounded-lg border bg-white p-2 text-sm"
                  >
                    <span className="min-w-0 flex-1 break-all font-mono text-xs">{path}</span>
                    <Button size="icon" variant="outline" type="button" onClick={() => moveSlide(index, -1)} disabled={index === 0}>
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      type="button"
                      onClick={() => moveSlide(index, 1)}
                      disabled={index === slides.length - 1}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="destructive" type="button" onClick={() => removeSlide(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>

              <Button onClick={saveHero} disabled={isBusy || slides.length === 0 || !canWriteHero}>
                <Save className="mr-2 h-4 w-4" />
                Slaytları kaydet
              </Button>
              {!canWriteHero && (
                <p className="text-xs text-amber-700">Kahraman manifest dosyası bu ortamda yazılamıyor olabilir.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pergola klasörü galerileri</CardTitle>
              <CardDescription>Ürün sayfalarındaki pergola kaynaklı albümler (`gallery-config.json`).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Galeri</Label>
                <select
                  className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm"
                  value={selectedGalleryKey}
                  onChange={(e) => setSelectedGalleryKey(e.target.value)}
                >
                  {pergolaGalleryKeys.map((key) => (
                    <option key={key} value={key}>
                      {config?.galleries[key]?.label ?? key}
                    </option>
                  ))}
                </select>
              </div>

              <ul className="max-h-64 space-y-2 overflow-auto pr-1">
                {selectedGalleryImages.map((imagePath, index) => (
                  <li
                    key={imagePath}
                    className="flex items-center gap-2 rounded-lg border bg-muted/30 p-2 text-xs"
                  >
                    <span className="min-w-0 flex-1 break-all">{imagePath}</span>
                    <Button size="icon" variant="outline" type="button" onClick={() => moveGalleryImage(index, -1)} disabled={index === 0}>
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      type="button"
                      onClick={() => moveGalleryImage(index, 1)}
                      disabled={index === selectedGalleryImages.length - 1}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="destructive" type="button" onClick={() => removeFromGallery(imagePath)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>

              <Button onClick={saveGallery} disabled={isBusy || !selectedGalleryKey || selectedGalleryImages.length === 0 || !canWriteGallery}>
                <Save className="mr-2 h-4 w-4" />
                Galeriyi kaydet
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bucket — site/pergola/</CardTitle>
            <CardDescription>
              Aşağıdan slayt veya galeriye ekleyin. Önizlemeler imzalı URL ile gelir.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {bucketItems.map((item) => {
                const publicPath = storageItemToPergolaPath(item)
                if (!publicPath || !item.isImage) {
                  return null
                }
                const inSlide = bucketPathsInSlides.has(publicPath)
                const inGallery = selectedGalleryImages.includes(publicPath)

                return (
                  <div key={item.key} className="space-y-2 rounded-xl border bg-white p-3 shadow-sm">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
                      {item.previewUrl ? (
                        <Image src={item.previewUrl} alt={publicPath} fill className="object-cover" unoptimized />
                      ) : null}
                    </div>
                    <p className="line-clamp-2 break-all text-xs text-muted-foreground">{publicPath}</p>
                    <div className="flex flex-wrap gap-1">
                      <Button
                        size="sm"
                        variant={inSlide ? "secondary" : "outline"}
                        className="flex-1"
                        type="button"
                        disabled={inSlide}
                        onClick={() => addSlideFromPath(publicPath)}
                      >
                        <Plus className="mr-1 h-3 w-3" />
                        Slayt
                      </Button>
                      <Button
                        size="sm"
                        variant={inGallery ? "secondary" : "outline"}
                        className="flex-1"
                        type="button"
                        disabled={inGallery || !selectedGalleryKey}
                        onClick={() => addToGallery(publicPath)}
                      >
                        <Plus className="mr-1 h-3 w-3" />
                        Galeri
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>

            {storageContinuation && (
              <Button type="button" variant="outline" onClick={() => void loadMoreBucket()} disabled={isBusy}>
                Bucket’ta daha fazla
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
