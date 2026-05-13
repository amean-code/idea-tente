"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { FileImage, ImageUp, LogOut, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/** Sunucunun döndürdüğü önizleme URL ömrü yoksa kullanılan varsayılan süre (saniye). */
const defaultPreviewExpiresSecondsFallback = 3600

/** `/api/admin/storage` GET yanıtındaki tek nesne satırı. */
interface AdminStorageItem {
  key: string
  size: number
  lastModified: string | null
  isImage: boolean
  publicUrl: string
  previewUrl: string | null
}

/** `/api/admin/storage` GET JSON gövdesi. */
interface AdminStorageListResponse {
  ok: boolean
  message?: string
  bucket?: string
  prefix?: string
  previewExpiresIn?: number
  items?: AdminStorageItem[]
  isTruncated?: boolean
  nextContinuationToken?: string | null
}

/**
 * Admin oturumuyla Tigris bucket’ta nesne listeler, görsel önizleme ve dosya yükleme sağlar.
 */
export function AdminBucketManager() {
  const router = useRouter()
  const [prefix, setPrefix] = useState("uploads/")
  const [items, setItems] = useState<AdminStorageItem[]>([])
  const [nextContinuationToken, setNextContinuationToken] = useState<string | null>(null)
  const [bucketName, setBucketName] = useState("")
  const [previewExpiresIn, setPreviewExpiresIn] = useState(3600)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null)

  /**
   * Sunucudan önek ve isteğe bağlı devam belirtecine göre nesne dilimini yükler.
   */
  const loadPage = useCallback(async (opts: { reset: boolean; continuationToken?: string | null }) => {
    setIsLoading(true)
    setMessage("")

    const params = new URLSearchParams()
    if (prefix.trim()) {
      params.set("prefix", prefix.trim())
    }
    params.set("maxKeys", "48")

    if (!opts.reset && opts.continuationToken) {
      params.set("continuationToken", opts.continuationToken)
    }

    const response = await fetch(`/api/admin/storage?${params.toString()}`)
    const data = (await response.json().catch(() => null)) as AdminStorageListResponse | null

    if (!response.ok || !data?.ok) {
      setMessage(data?.message ?? "Liste alınamadı.")
      setIsLoading(false)
      return
    }

    const chunk = data.items ?? []

    setBucketName(data.bucket ?? "")
    setPreviewExpiresIn(data.previewExpiresIn ?? defaultPreviewExpiresSecondsFallback)
    setNextContinuationToken(data.nextContinuationToken ?? null)

    if (opts.reset) {
      setItems(chunk)
    } else {
      setItems((previous) => [...previous, ...chunk])
    }

    setIsLoading(false)
  }, [prefix])

  /**
   * Listeyi sıfırdan yeniler (önek değişince veya Yenile’de kullanılır).
   */
  const handleRefresh = async () => {
    setNextContinuationToken(null)
    await loadPage({ reset: true })
  }

  /**
   * Sayfalanmış listede bir sonraki grubu ekler.
   */
  const handleLoadMore = async () => {
    if (!nextContinuationToken) {
      return
    }
    const token = nextContinuationToken
    await loadPage({ reset: false, continuationToken: token })
  }

  const initialFetched = useRef(false)

  /**
   * Sayfa açılışında ilk nesne dilimini tek seferlik getirir.
   */
  useEffect(() => {
    if (initialFetched.current) {
      return
    }
    initialFetched.current = true
    void loadPage({ reset: true })
  }, [loadPage])

  /**
   * Seçilen dosyayı admin storage API’sine yükler ve listeyi yeniler.
   */
  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const input = form.elements.namedItem("file") as HTMLInputElement | null
    const file = input?.files?.[0]

    if (!file) {
      setMessage("Lütfen bir dosya seçin.")
      return
    }

    setIsUploading(true)
    setMessage("")

    const body = new FormData()
    body.append("file", file)

    const response = await fetch("/api/admin/storage", {
      method: "POST",
      body,
    })
    const data = await response.json().catch(() => null)

    if (!response.ok) {
      setMessage(data?.message ?? "Yükleme başarısız.")
      setIsUploading(false)
      return
    }

    setMessage(data?.message ?? `Yüklendi: ${data?.key ?? ""}`)
    setIsUploading(false)
    form.reset()
    await handleRefresh()
  }

  /**
   * Admin oturumunu kapatır.
   */
  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.refresh()
  }

  /**
   * Görsel satırına tıklanınca presigned veya public URL ile büyük önizleme açar.
   */
  const openPreview = (item: AdminStorageItem) => {
    const src = item.previewUrl || item.publicUrl
    if (!src) {
      return
    }
    setPreview({ src, title: item.key })
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-10 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">Admin Panel</p>
            <h1 className="text-3xl font-bold text-gray-900">Bucket — Görsel yönetimi</h1>
            <p className="mt-2 text-gray-600">
              Tigris bucket’a yükleme yapın; özel okuma politikasında önizleme için kısa süreli imzalı URL kullanılır
              (~{Math.max(1, Math.round(previewExpiresIn / 60))} dk).
            </p>
            {bucketName && (
              <p className="mt-2 text-sm text-muted-foreground">
                Bucket: <span className="font-mono text-gray-800">{bucketName}</span>
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/pergola">Pergola</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/admin">Galeri</Link>
            </Button>
            <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
              <RefreshCw className="mr-2 h-4 w-4" />
              {isLoading ? "Yükleniyor..." : "Yenile"}
            </Button>
            <Button variant="outline" onClick={handleLogout}>
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

        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageUp className="h-5 w-5" />
                Görsel yükle
              </CardTitle>
              <CardDescription>Dosya sunucu üzerinden Tigris’e yüklenir (`uploads/` altında benzersiz anahtar).</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleUpload}>
                <div className="space-y-2">
                  <Label htmlFor="bucket-file">Dosya</Label>
                  <Input id="bucket-file" name="file" type="file" accept="image/*" required />
                </div>
                <Button type="submit" className="w-full" disabled={isUploading}>
                  {isUploading ? "Yükleniyor..." : "Bucket’a yükle"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bucket içeriği</CardTitle>
              <CardDescription>
                Önek ile filtreleyin; önizlemeler presigned URL ile çalışır. İlk açılışta listeyi yüklemek için
                &quot;Yenile&quot;e basın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="prefix">Önek (prefix)</Label>
                  <Input
                    id="prefix"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    placeholder="uploads/"
                  />
                </div>
                <Button type="button" variant="secondary" onClick={handleRefresh} disabled={isLoading}>
                  Listeyi getir
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className="flex gap-3 rounded-xl border bg-white p-3 text-left shadow-sm transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => {
                      if (item.isImage) {
                        openPreview(item)
                      }
                    }}
                    disabled={!item.isImage || (!item.previewUrl && !item.publicUrl)}
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      {item.isImage && item.previewUrl ? (
                        <Image src={item.previewUrl} alt={item.key} fill className="object-cover" unoptimized />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                          <FileImage className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="line-clamp-2 break-all text-xs font-medium text-gray-900">{item.key}</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary">{item.size} B</Badge>
                        {!item.isImage && <Badge variant="outline">Görsel değil</Badge>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {items.length === 0 && !isLoading && (
                <p className="rounded-lg bg-muted/40 p-4 text-sm text-muted-foreground">
                  Henüz kayıt yok. Önek ayarlayıp &quot;Listeyi getir&quot; veya üstteki &quot;Yenile&quot;i kullanın.
                </p>
              )}

              {nextContinuationToken && (
                <Button type="button" variant="outline" className="w-full" onClick={handleLoadMore} disabled={isLoading}>
                  Daha fazla
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={Boolean(preview)} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-[95vw] p-4 sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Önizleme</DialogTitle>
            <DialogDescription className="break-all">{preview?.title}</DialogDescription>
          </DialogHeader>
          {preview?.src && (
            <div className="relative h-[75vh] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image src={preview.src} alt={preview.title} fill className="object-contain" unoptimized />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
