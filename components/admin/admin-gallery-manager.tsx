"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ArrowDown, ArrowUp, Check, Folder, Plus, RefreshCw, Save, Trash2 } from "lucide-react"
import { AdminFolderStatsCard } from "@/components/admin/admin-folder-stats-card"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { AdminGalleryState, EditableGalleryConfig } from "@/lib/admin-gallery"
import { buildGalleryFolderStats, getPublicImageFolderName } from "@/lib/admin-folder-stats"
import { pergolaPublicSrc } from "@/lib/pergola-public-path"

interface AdminGalleryManagerProps {
  initialState: AdminGalleryState
}

interface AvailableImageGroup {
  folderName: string
  images: string[]
}

/**
 * Admin panelinde seçili galeriye ait görsel ekleme, silme ve sıralama işlemlerini yönetir.
 */
export function AdminGalleryManager({ initialState }: AdminGalleryManagerProps) {
  const galleryKeys = Object.keys(initialState.config.galleries)
  const [config, setConfig] = useState<EditableGalleryConfig>(initialState.config)
  const [availableImages, setAvailableImages] = useState(initialState.availableImages)
  const [canWriteConfig, setCanWriteConfig] = useState(initialState.canWriteConfig)
  const [selectedGalleryKey, setSelectedGalleryKey] = useState(galleryKeys[0] ?? "")
  const [searchTerm, setSearchTerm] = useState("")
  const [message, setMessage] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isReloading, setIsReloading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  /** Açıkken yalnızca seçili galeride henüz olmayan dosyalar listelenir. */
  const [onlyNotInGallery, setOnlyNotInGallery] = useState(false)

  const selectedGallery = config.galleries[selectedGalleryKey]
  const selectedImages = selectedGallery?.images ?? []

  const folderStats = useMemo(
    () => buildGalleryFolderStats(availableImages, config),
    [availableImages, config],
  )

  /**
   * Seçili galerideki görsel yollarını hızlı arama için küme olarak tutar.
   */
  const selectedImageSet = useMemo(() => new Set(selectedImages), [selectedImages])

  /**
   * Arama metnine uyan tüm public görselleri listeler; istenirse galeride olanlar gizlenir.
   */
  const filteredPublicImagesForPicker = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase("tr")

    return availableImages.filter((imagePath) => {
      const matchesSearchTerm = imagePath.toLocaleLowerCase("tr").includes(normalizedSearchTerm)
      const isAlreadyInGallery = selectedImageSet.has(imagePath)
      const passesGalleryFilter = !onlyNotInGallery || !isAlreadyInGallery
      return matchesSearchTerm && passesGalleryFilter
    })
  }, [availableImages, onlyNotInGallery, searchTerm, selectedImageSet])

  /**
   * Public görselleri klasör adına göre gruplayarak admin listesinde ayrı bölümler oluşturur.
   */
  const groupedAvailableImages = useMemo<AvailableImageGroup[]>(() => {
    const imageGroups = new Map<string, string[]>()

    filteredPublicImagesForPicker.forEach((imagePath) => {
      const folderName = getPublicImageFolderName(imagePath)
      const folderImages = imageGroups.get(folderName) ?? []
      imageGroups.set(folderName, [...folderImages, imagePath])
    })

    return Array.from(imageGroups.entries()).map(([folderName, images]) => ({
      folderName,
      images,
    }))
  }, [filteredPublicImagesForPicker])

  /**
   * Seçili galerinin görsel dizisini tek noktadan günceller.
   */
  const updateSelectedGalleryImages = (images: string[]) => {
    setConfig((currentConfig) => ({
      ...currentConfig,
      galleries: {
        ...currentConfig.galleries,
        [selectedGalleryKey]: {
          ...currentConfig.galleries[selectedGalleryKey],
          images,
        },
      },
    }))
  }

  /**
   * Görseli seçili galeriye en sona ekler.
   */
  const handleAddImage = (imagePath: string) => {
    if (selectedImageSet.has(imagePath)) {
      return
    }
    updateSelectedGalleryImages([...selectedImages, imagePath])
    setMessage("")
  }

  /**
   * Tıklanan görseli büyük önizleme modalında açar.
   */
  const handlePreviewImage = (imagePath: string) => {
    setPreviewImage(imagePath)
  }

  /**
   * Görseli seçili galeriden kaldırır.
   */
  const handleRemoveImage = (imagePath: string) => {
    updateSelectedGalleryImages(selectedImages.filter((selectedImage) => selectedImage !== imagePath))
    setMessage("")
  }

  /**
   * Görseli seçili galeride yukarı veya aşağı taşır.
   */
  const handleMoveImage = (index: number, direction: -1 | 1) => {
    const nextIndex = index + direction

    if (nextIndex < 0 || nextIndex >= selectedImages.length) {
      return
    }

    const nextImages = [...selectedImages]
    const [movedImage] = nextImages.splice(index, 1)
    nextImages.splice(nextIndex, 0, movedImage)
    updateSelectedGalleryImages(nextImages)
    setMessage("")
  }

  /**
   * Görselin sıra numarası elle değiştirildiğinde ilgili görseli yazılan pozisyona taşır.
   */
  const handleOrderChange = (currentIndex: number, nextOrder: number) => {
    const nextIndex = Math.max(0, Math.min(selectedImages.length - 1, nextOrder - 1))

    if (currentIndex === nextIndex) {
      return
    }

    const nextImages = [...selectedImages]
    const [movedImage] = nextImages.splice(currentIndex, 1)
    nextImages.splice(nextIndex, 0, movedImage)
    updateSelectedGalleryImages(nextImages)
    setMessage("")
  }

  /**
   * Seçili galerinin güncel görsel sırasını API üzerinden manifest dosyasına kaydeder.
   */
  const handleSave = async () => {
    setIsSaving(true)
    setMessage("")

    const response = await fetch("/api/admin/gallery", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        galleryKey: selectedGalleryKey,
        images: selectedImages,
      }),
    })
    const data = await response.json().catch(() => null)

    if (!response.ok) {
      setMessage(data?.message ?? "Galeri kaydedilemedi.")
      setIsSaving(false)
      return
    }

    setConfig(data.config)
    setMessage(data.message ?? "Galeri kaydedildi.")
    setIsSaving(false)
  }

  /**
   * Admin API'den manifest ve public görsel listesini yeniden yükler.
   */
  const handleReload = async () => {
    setIsReloading(true)
    setMessage("")

    const response = await fetch("/api/admin/gallery")
    const data = await response.json().catch(() => null)

    if (!response.ok) {
      setMessage(data?.message ?? "Galeri verileri alınamadı.")
      setIsReloading(false)
      return
    }

    setConfig(data.config)
    setAvailableImages(data.availableImages)
    setCanWriteConfig(data.canWriteConfig)
    setIsReloading(false)
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <AdminPageHeader
        title="Sayfa Galerileri"
        description="Her ürün sayfasında gösterilecek fotoğrafları seçin, sıralayın ve kaydedin. Yeni fotoğraf için önce Görsel Yükle bölümünü kullanın."
      />

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={handleReload} disabled={isReloading}>
          <RefreshCw className="mr-2 h-4 w-4" />
          {isReloading ? "Yenileniyor..." : "Yenile"}
        </Button>
      </div>

        {!canWriteConfig && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            Manifest dosyası bu ortamda yazılabilir görünmüyor. Vercel production ortamında dosya değişiklikleri kalıcı
            olmaz; kalıcı yönetim için değişiklikleri yerelde yapıp Git'e göndermeniz gerekir.
          </div>
        )}

        {message && <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm">{message}</div>}

      <AdminFolderStatsCard stats={folderStats} totalImages={availableImages.length} />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
              <CardTitle>Sayfa galerisi</CardTitle>
              <CardDescription>Görselleri yukarı/aşağı taşıyın veya galeriden çıkarın. Değişiklikten sonra Kaydet’e basın.</CardDescription>
                </div>
                <select
                  className="h-10 rounded-md border border-input bg-white px-3 text-sm"
                  value={selectedGalleryKey}
                  aria-label="Yönetilecek galeriyi seç"
                  onChange={(event) => setSelectedGalleryKey(event.target.value)}
                >
                  {Object.entries(config.galleries).map(([galleryKey, gallery]) => {
                    const folderStat = folderStats.find((stat) => stat.folder === gallery.publicFolder)

                    return (
                      <option key={galleryKey} value={galleryKey}>
                        {gallery.label} — klasörde {folderStat?.folderImageCount ?? 0}, sayfada {gallery.images.length}
                      </option>
                    )
                  })}
                </select>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="secondary">{selectedImages.length} görsel</Badge>
                <Button onClick={handleSave} disabled={isSaving || selectedImages.length === 0 || !canWriteConfig}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Kaydediliyor..." : "Kaydet"}
                </Button>
              </div>

              <div className="space-y-3">
                {selectedImages.map((imagePath, index) => {
                  const existsInPublic = availableImages.includes(imagePath)

                  return (
                    <div
                      key={imagePath}
                      className="grid gap-3 rounded-xl border bg-white p-3 shadow-sm md:grid-cols-[88px_1fr_auto]"
                    >
                      <button
                        type="button"
                        className="relative h-20 w-20 overflow-hidden rounded-lg bg-gray-100 ring-offset-2 transition hover:ring-2 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        onClick={() => handlePreviewImage(imagePath)}
                        aria-label="Görseli büyük göster"
                      >
                        <Image src={pergolaPublicSrc(imagePath)} alt={imagePath} fill className="object-cover" sizes="80px" />
                      </button>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <label className="flex items-center gap-2 rounded-md border px-2 py-1 text-xs font-medium">
                            Sıra
                            <Input
                              className="h-7 w-16 px-2 text-xs"
                              type="number"
                              min={1}
                              max={selectedImages.length}
                              value={index + 1}
                              aria-label="Görsel sıra numarası"
                              onChange={(event) => handleOrderChange(index, Number(event.target.value))}
                            />
                          </label>
                          {!existsInPublic && <Badge variant="destructive">Dosya yok</Badge>}
                        </div>
                        <p className="mt-2 break-all text-sm text-gray-700">{imagePath}</p>
                      </div>
                      <div className="flex items-center gap-2 md:flex-col">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleMoveImage(index, -1)}
                          disabled={index === 0}
                          aria-label="Yukarı taşı"
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleMoveImage(index, 1)}
                          disabled={index === selectedImages.length - 1}
                          aria-label="Aşağı taşı"
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => handleRemoveImage(imagePath)}
                          aria-label="Sil"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Klasördeki görseller</CardTitle>
              <CardDescription>
                Yüklenmiş tüm fotoğraflar burada listelenir. Sağdaki + ile seçili sayfaya ekleyin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Switch
                    id="only-not-in-gallery"
                    checked={onlyNotInGallery}
                    onCheckedChange={(checked) => setOnlyNotInGallery(Boolean(checked))}
                  />
                  <Label htmlFor="only-not-in-gallery" className="cursor-pointer text-sm font-medium leading-snug">
                    Sadece galeride olmayanlar
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Toplam {availableImages.length} dosya taranıyor (jpg, jpeg, png, webp, gif, avif, svg, tif, bmp,
                  heic/heif).
                </p>
              </div>
              <Input
                placeholder="Dosya adına göre ara..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <div className="max-h-[720px] space-y-5 overflow-auto pr-2">
                {groupedAvailableImages.map((group) => (
                  <section key={group.folderName} className="space-y-3">
                    <div className="sticky top-0 z-10 flex items-center justify-between rounded-lg border bg-gray-50/95 px-3 py-2 backdrop-blur">
                      <div className="flex min-w-0 items-center gap-2">
                        <Folder className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate text-sm font-semibold text-gray-800">{group.folderName}</span>
                      </div>
                      <Badge variant="secondary">{group.images.length}</Badge>
                    </div>
                    {group.images.map((imagePath) => {
                      const isInSelectedGallery = selectedImageSet.has(imagePath)

                      return (
                        <div
                          key={imagePath}
                          className="grid grid-cols-[72px_1fr_auto] gap-3 rounded-xl border bg-white p-3"
                        >
                          <button
                            type="button"
                            className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100 ring-offset-2 transition hover:ring-2 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            onClick={() => handlePreviewImage(imagePath)}
                            aria-label="Görseli büyük göster"
                          >
                            <Image src={pergolaPublicSrc(imagePath)} alt={imagePath} fill className="object-cover" sizes="64px" />
                          </button>
                          <div className="min-w-0 self-center">
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              {isInSelectedGallery && (
                                <Badge variant="secondary" className="text-xs">
                                  Galeride
                                </Badge>
                              )}
                            </div>
                            <p className="break-all text-sm text-gray-700">{imagePath}</p>
                          </div>
                          <Button
                            size="icon"
                            variant={isInSelectedGallery ? "secondary" : "outline"}
                            disabled={isInSelectedGallery}
                            onClick={() => handleAddImage(imagePath)}
                            aria-label={isInSelectedGallery ? "Zaten galeride" : "Ekle"}
                          >
                            {isInSelectedGallery ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </Button>
                        </div>
                      )
                    })}
                  </section>
                ))}
                {groupedAvailableImages.length === 0 && (
                  <p className="rounded-lg bg-gray-100 p-4 text-sm text-gray-600">
                    {onlyNotInGallery
                      ? "Aramaya uyan ve galeride olmayan görsel bulunamadı. Anahtarı kapatıp tüm klasörü görebilirsiniz."
                      : "Aramaya uyan görsel bulunamadı."}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

      <Dialog open={Boolean(previewImage)} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="max-w-[95vw] p-4 sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Görsel Önizleme</DialogTitle>
            <DialogDescription className="break-all">{previewImage}</DialogDescription>
          </DialogHeader>
          {previewImage && (
            <div className="relative h-[75vh] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image src={pergolaPublicSrc(previewImage)} alt={previewImage} fill className="object-contain" sizes="95vw" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
