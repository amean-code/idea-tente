"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { FileImage, ImageUp, RefreshCw, Trash2 } from "lucide-react"
import { AdminFolderStatsCard } from "@/components/admin/admin-folder-stats-card"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { GalleryUploadFolderOption } from "@/lib/admin-upload-folders"
import type { GalleryFolderStat } from "@/lib/admin-folder-stats"

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

interface AdminUploadManagerProps {
  folderOptions: GalleryUploadFolderOption[]
  initialFolderStats: GalleryFolderStat[]
  initialTotalImages: number
}

/**
 * Galeri klasörü seçerek görsel yükleme ve son yüklenen dosyaları önizleme paneli.
 */
export function AdminUploadManager({
  folderOptions,
  initialFolderStats,
  initialTotalImages,
}: AdminUploadManagerProps) {
  const [selectedFolder, setSelectedFolder] = useState(folderOptions[0]?.folder ?? "")
  const [folderStats, setFolderStats] = useState(initialFolderStats)
  const [totalImages, setTotalImages] = useState(initialTotalImages)
  const [items, setItems] = useState<AdminStorageItem[]>([])
  const [nextContinuationToken, setNextContinuationToken] = useState<string | null>(null)
  const [bucketName, setBucketName] = useState("")
  const [previewExpiresIn, setPreviewExpiresIn] = useState(3600)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<AdminStorageItem | null>(null)
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null)

  const listPrefix = selectedFolder ? `site/public/${selectedFolder}/` : "site/public/"

  /**
   * Tüm klasörlerin güncel görsel sayılarını API'den yeniler.
   */
  const refreshFolderStats = useCallback(async () => {
    const response = await fetch("/api/admin/folder-stats")
    const data = await response.json().catch(() => null)

    if (!response.ok || !Array.isArray(data?.stats)) {
      return
    }

    setFolderStats(data.stats)
    setTotalImages(typeof data.totalImages === "number" ? data.totalImages : totalImages)
  }, [totalImages])

  const selectedFolderStat = folderStats.find((stat) => stat.folder === selectedFolder)
  const selectedFolderImageCount = selectedFolderStat?.folderImageCount ?? 0

  /**
   * Seçili klasör önekine göre bucket nesnelerini sayfalı olarak yükler.
   */
  const loadPage = useCallback(
    async (opts: { reset: boolean; continuationToken?: string | null }) => {
      setIsLoading(true)
      setMessage("")

      const params = new URLSearchParams()
      params.set("prefix", listPrefix)
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
    },
    [listPrefix],
  )

  /**
   * Listeyi sıfırdan yeniler.
   */
  const handleRefresh = async () => {
    setNextContinuationToken(null)
    await loadPage({ reset: true })
    await refreshFolderStats()
  }

  /**
   * Sayfalanmış listede bir sonraki grubu ekler.
   */
  const handleLoadMore = async () => {
    if (!nextContinuationToken) {
      return
    }
    await loadPage({ reset: false, continuationToken: nextContinuationToken })
  }

  const initialFetched = useRef(false)

  useEffect(() => {
    initialFetched.current = false
  }, [listPrefix])

  /**
   * Klasör değişince veya ilk açılışta nesne listesini getirir.
   */
  useEffect(() => {
    if (initialFetched.current) {
      return
    }
    initialFetched.current = true
    void loadPage({ reset: true })
  }, [loadPage])

  /**
   * Seçilen dosyayı seçili galeri klasörüne yükler.
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

    if (!selectedFolder) {
      setMessage("Lütfen bir galeri klasörü seçin.")
      return
    }

    setIsUploading(true)
    setMessage("")

    const body = new FormData()
    body.append("file", file)
    body.append("publicFolder", selectedFolder)

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

    setMessage(
      data?.publicPath
        ? `Yüklendi: ${data.publicPath}. Sayfa Galerileri bölümünden galeriye ekleyebilirsiniz.`
        : (data?.message ?? `Yüklendi: ${data?.key ?? ""}`),
    )
    setIsUploading(false)
    form.reset()
    await handleRefresh()
  }

  /**
   * Onaylanan görseli bucket'tan kalıcı olarak siler.
   */
  const handleDelete = async () => {
    if (!itemToDelete) {
      return
    }

    setIsDeleting(true)
    setMessage("")

    const response = await fetch("/api/admin/storage", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: itemToDelete.key }),
    })
    const data = await response.json().catch(() => null)

    if (!response.ok) {
      setMessage(data?.message ?? "Silme başarısız.")
      setIsDeleting(false)
      return
    }

    setMessage(
      "Görsel silindi. Sayfa galerisinde hâlâ görünüyorsa Sayfa Galerileri bölümünden de kaldırın.",
    )
    setItemToDelete(null)
    setIsDeleting(false)

    if (preview?.title === itemToDelete.key) {
      setPreview(null)
    }

    setItems((current) => current.filter((item) => item.key !== itemToDelete.key))
    await refreshFolderStats()
  }

  /**
   * Görsel satırına tıklanınca büyük önizleme açar.
   */
  const openPreview = (item: AdminStorageItem) => {
    const src = item.previewUrl || item.publicUrl
    if (!src) {
      return
    }
    setPreview({ src, title: item.key })
  }

  const selectedFolderLabel =
    folderOptions.find((option) => option.folder === selectedFolder)?.label ?? selectedFolder

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <AdminPageHeader
        title="Görsel Yönetimi"
        description="Fotoğraf yükleyin veya bucket'tan silin. Silinen görsel sayfa galerisinde kalmışsa Sayfa Galerileri bölümünden de kaldırın."
      />

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => void handleRefresh()} disabled={isLoading}>
          <RefreshCw className="mr-2 h-4 w-4" />
          {isLoading ? "Yükleniyor..." : "Listeyi yenile"}
        </Button>
      </div>

      {message && (
        <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm" role="status">
          {message}
        </div>
      )}

      <AdminFolderStatsCard stats={folderStats} totalImages={totalImages} />

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageUp className="h-5 w-5" />
              Yeni görsel yükle
            </CardTitle>
            <CardDescription>Önce hangi ürün sayfası için olduğunu seçin, ardından dosyayı yükleyin.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleUpload}>
              <div className="space-y-2">
                <Label>Galeri klasörü</Label>
                <Select value={selectedFolder} onValueChange={setSelectedFolder}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Klasör seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {folderOptions.map((option) => {
                      const folderCount =
                        folderStats.find((stat) => stat.folder === option.folder)?.folderImageCount ?? 0

                      return (
                        <SelectItem key={option.folder} value={option.folder}>
                          {option.label} ({folderCount} görsel)
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Dosya <span className="font-mono">site/public/{selectedFolder || "…"}/</span> altına kaydedilir.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="upload-file">Fotoğraf</Label>
                <Input id="upload-file" name="file" type="file" accept="image/*" required />
              </div>
              <Button type="submit" className="w-full" disabled={isUploading || !selectedFolder}>
                {isUploading ? "Yükleniyor..." : "Yükle"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Klasördeki görseller</CardTitle>
            <CardDescription>
              <span className="font-medium text-gray-800">{selectedFolderLabel}</span> klasöründe{" "}
              <span className="font-semibold text-gray-900">{selectedFolderImageCount}</span> görsel var.
              {items.length < selectedFolderImageCount && (
                <span className="block text-xs">Liste sayfalıdır; tümünü görmek için &quot;Daha fazla göster&quot; kullanın.</span>
              )}
              {bucketName && (
                <span className="mt-1 block text-xs">
                  Depolama: {bucketName} · Önizleme süresi ~{Math.max(1, Math.round(previewExpiresIn / 60))} dk
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="relative flex gap-3 rounded-xl border bg-white p-3 shadow-sm transition hover:border-primary/40"
                >
                  <button
                    type="button"
                    className="flex min-w-0 flex-1 gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                      <Badge variant="secondary">{item.size} B</Badge>
                    </div>
                  </button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="shrink-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                    aria-label="Görseli sil"
                    disabled={!item.isImage || isDeleting}
                    onClick={() => setItemToDelete(item)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {items.length === 0 && !isLoading && (
              <p className="rounded-lg bg-muted/40 p-4 text-sm text-muted-foreground">
                Bu klasörde henüz görsel yok. Soldan yeni fotoğraf yükleyebilirsiniz.
              </p>
            )}

            {nextContinuationToken && (
              <Button type="button" variant="outline" className="w-full" onClick={() => void handleLoadMore()} disabled={isLoading}>
                Daha fazla göster
              </Button>
            )}
          </CardContent>
        </Card>
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
          {preview?.title && (
            <div className="flex justify-end">
              <Button
                type="button"
                variant="destructive"
                disabled={isDeleting}
                onClick={() => {
                  const item = items.find((row) => row.key === preview.title)
                  if (item) {
                    setPreview(null)
                    setItemToDelete(item)
                  }
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Bu görseli sil
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(itemToDelete)} onOpenChange={(open) => !open && !isDeleting && setItemToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Görseli silinsin mi?</AlertDialogTitle>
            <AlertDialogDescription className="break-all">
              Bu işlem geri alınamaz. Dosya bucket&apos;tan kalıcı olarak silinir:
              <span className="mt-2 block font-mono text-xs text-gray-800">{itemToDelete?.key}</span>
              Sayfa galerisinde kayıtlıysa oradan da kaldırmanız gerekir.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Vazgeç</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              disabled={isDeleting}
              onClick={(event) => {
                event.preventDefault()
                void handleDelete()
              }}
            >
              {isDeleting ? "Siliniyor..." : "Evet, sil"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
