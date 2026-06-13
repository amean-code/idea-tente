"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Check, RefreshCw, Save } from "lucide-react"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { AdminCoverPageOption, AdminCoverState } from "@/lib/admin-gallery-covers"
import { getPublicImageFolderName } from "@/lib/admin-folder-stats"
import type { GalleryKey } from "@/lib/gallery-config"
import { pergolaPublicSrc } from "@/lib/pergola-public-path"

interface AdminCoverManagerProps {
  initialState: AdminCoverState
}

/**
 * Ürün sayfalarının hero kapak fotoğraflarını seçme ve kaydetme paneli.
 */
export function AdminCoverManager({ initialState }: AdminCoverManagerProps) {
  const [pages, setPages] = useState(initialState.pages)
  const [availableImages, setAvailableImages] = useState(initialState.availableImages)
  const [canWrite, setCanWrite] = useState(initialState.canWrite)
  const [selectedGalleryKey, setSelectedGalleryKey] = useState<GalleryKey>(
    initialState.pages[0]?.galleryKey ?? ("bioklimatik-sistemler" as GalleryKey),
  )
  const [draftCoverPath, setDraftCoverPath] = useState(initialState.pages[0]?.coverPath ?? "")
  const [searchTerm, setSearchTerm] = useState("")
  const [message, setMessage] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isReloading, setIsReloading] = useState(false)

  const selectedPage = pages.find((page) => page.galleryKey === selectedGalleryKey)

  /**
   * Seçili sayfa değişince taslak kapak yolunu günceller.
   */
  const handleSelectPage = (galleryKey: GalleryKey) => {
    setSelectedGalleryKey(galleryKey)
    const page = pages.find((row) => row.galleryKey === galleryKey)
    setDraftCoverPath(page?.coverPath ?? "")
    setSearchTerm("")
    setMessage("")
  }

  const candidateImages = useMemo(() => {
    if (!selectedPage) {
      return []
    }

    const folderPaths = availableImages.filter(
      (imagePath) => getPublicImageFolderName(imagePath) === selectedPage.publicFolder,
    )
    const term = searchTerm.trim().toLocaleLowerCase("tr")

    return folderPaths
      .filter((imagePath) => imagePath.toLocaleLowerCase("tr").includes(term))
      .sort((first, second) => first.localeCompare(second, "tr"))
  }, [availableImages, searchTerm, selectedPage])

  /**
   * Kapak manifestini ve görsel listesini API'den yeniler.
   */
  const handleReload = async () => {
    setIsReloading(true)
    setMessage("")

    const response = await fetch("/api/admin/gallery-covers")
    const data = await response.json().catch(() => null)

    if (!response.ok || !data?.ok) {
      setMessage(data?.message ?? "Kapak verileri alınamadı.")
      setIsReloading(false)
      return
    }

    setPages(data.pages)
    setAvailableImages(data.availableImages)
    setCanWrite(data.canWrite)

    const currentPage = (data.pages as AdminCoverPageOption[]).find((page) => page.galleryKey === selectedGalleryKey)
    setDraftCoverPath(currentPage?.coverPath ?? "")
    setIsReloading(false)
  }

  /**
   * Seçili sayfa için kapak görselini manifest dosyasına kaydeder.
   */
  const handleSave = async () => {
    if (!draftCoverPath) {
      setMessage("Lütfen bir kapak görseli seçin.")
      return
    }

    setIsSaving(true)
    setMessage("")

    const response = await fetch("/api/admin/gallery-covers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        galleryKey: selectedGalleryKey,
        coverPath: draftCoverPath,
      }),
    })
    const data = await response.json().catch(() => null)

    if (!response.ok || !data?.ok) {
      setMessage(data?.message ?? "Kapak kaydedilemedi.")
      setIsSaving(false)
      return
    }

    setPages((current) =>
      current.map((page) =>
        page.galleryKey === selectedGalleryKey ? { ...page, coverPath: draftCoverPath } : page,
      ),
    )
    setMessage(data.message ?? "Kapak fotoğrafı kaydedildi. Site bir saat içinde güncellenir.")
    setIsSaving(false)
  }

  const hasUnsavedChanges = selectedPage?.coverPath !== draftCoverPath

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <AdminPageHeader
        title="Kapak Fotoğrafları"
        description="Her ürün sayfasının üstteki büyük hero görselini seçin. Kapak, o sayfanın klasöründeki fotoğraflardan seçilmelidir."
      />

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => void handleReload()} disabled={isReloading}>
          <RefreshCw className="mr-2 h-4 w-4" />
          {isReloading ? "Yenileniyor..." : "Yenile"}
        </Button>
        <Button onClick={() => void handleSave()} disabled={isSaving || !canWrite || !hasUnsavedChanges}>
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? "Kaydediliyor..." : "Kaydet"}
        </Button>
      </div>

      {!canWrite && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Kapak manifesti bu ortamda yazılamıyor olabilir. Kalıcı değişiklik için bucket yapılandırmasını kontrol edin.
        </div>
      )}

      {message && <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm">{message}</div>}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sayfa özeti</CardTitle>
          <CardDescription>Tüm ürün sayfalarının güncel kapak görseli.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Sayfa</th>
                <th className="py-2 pr-4 font-medium">URL</th>
                <th className="py-2 pr-4 font-medium">Klasörde</th>
                <th className="py-2 font-medium">Kapak</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr
                  key={page.galleryKey}
                  className={`cursor-pointer border-b border-slate-100 last:border-0 ${
                    page.galleryKey === selectedGalleryKey ? "bg-primary/5" : "hover:bg-slate-50"
                  }`}
                  onClick={() => handleSelectPage(page.galleryKey)}
                >
                  <td className="py-2.5 pr-4 font-medium text-gray-900">{page.label}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{page.pagePath}</td>
                  <td className="py-2.5 pr-4">
                    <Badge variant="secondary">{page.folderImageCount} görsel</Badge>
                  </td>
                  <td className="py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-14 overflow-hidden rounded bg-gray-100">
                        {page.coverPath && (
                          <Image
                            src={pergolaPublicSrc(page.coverPath)}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        )}
                      </div>
                      <span className="line-clamp-1 break-all text-xs text-gray-600">{page.coverPath}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {selectedPage && (
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>{selectedPage.label}</CardTitle>
              <CardDescription>
                {selectedPage.pagePath} · klasör: <span className="font-mono">{selectedPage.publicFolder}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Seçili kapak</p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                {draftCoverPath && (
                  <Image
                    src={pergolaPublicSrc(draftCoverPath)}
                    alt={selectedPage.label}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                )}
              </div>
              <p className="break-all text-xs text-gray-600">{draftCoverPath || "Henüz kapak seçilmedi"}</p>
              {hasUnsavedChanges && <Badge variant="outline">Kaydedilmemiş değişiklik</Badge>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kapak seç</CardTitle>
              <CardDescription>
                {selectedPage.publicFolder} klasöründeki görsellerden birini kapak olarak işaretleyin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Dosya adına göre ara..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <div className="max-h-[560px] space-y-2 overflow-auto pr-1">
                {candidateImages.map((imagePath) => {
                  const isSelected = draftCoverPath === imagePath
                  const isPublished = imagePath === selectedPage.coverPath

                  return (
                    <div
                      key={imagePath}
                      className={`flex items-center gap-3 rounded-xl border p-2 ${
                        isSelected ? "border-primary bg-primary/5" : "bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100"
                        onClick={() => setDraftCoverPath(imagePath)}
                      >
                        <Image src={pergolaPublicSrc(imagePath)} alt="" fill className="object-cover" sizes="80px" />
                      </button>
                      <div className="min-w-0 flex-1">
                        <p className="break-all text-xs text-gray-700">{imagePath}</p>
                        {isPublished && (
                          <Badge variant="secondary" className="mt-1 text-xs">
                            Yayında
                          </Badge>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        onClick={() => setDraftCoverPath(imagePath)}
                      >
                        {isSelected ? <Check className="h-4 w-4" /> : "Seç"}
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
