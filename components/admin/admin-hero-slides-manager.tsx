"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ArrowDown, ArrowUp, Plus, RefreshCw, Save, Trash2 } from "lucide-react"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { pergolaPublicSrc } from "@/lib/pergola-public-path"

/**
 * Ana sayfa kahraman slaytlarını görsel seçerek düzenleme paneli.
 */
export function AdminHeroSlidesManager() {
  const [slides, setSlides] = useState<string[]>([])
  const [availableImages, setAvailableImages] = useState<string[]>([])
  const [canWrite, setCanWrite] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [message, setMessage] = useState("")
  const [isBusy, setIsBusy] = useState(false)

  const slideSet = useMemo(() => new Set(slides), [slides])

  /**
   * Kahraman slayt listesini ve kullanılabilir görselleri sunucudan yükler.
   */
  const reload = useCallback(async () => {
    setMessage("")
    setIsBusy(true)

    const heroRes = await fetch("/api/admin/pergola-hero")
    const heroData = await heroRes.json().catch(() => null)

    if (!heroRes.ok) {
      setMessage(heroData?.message ?? "Slayt verisi alınamadı.")
      setIsBusy(false)
      return
    }

    setSlides(Array.isArray(heroData.slides) ? heroData.slides : [])
    setCanWrite(Boolean(heroData.canWrite))
    setAvailableImages(
      Array.isArray(heroData.bucketPergolaPaths) ? heroData.bucketPergolaPaths : [],
    )
    setIsBusy(false)
  }, [])

  useEffect(() => {
    void reload()
  }, [reload])

  const filteredImages = useMemo(() => {
    const term = searchTerm.trim().toLocaleLowerCase("tr")
    return availableImages.filter((imagePath) => {
      const notInSlides = !slideSet.has(imagePath)
      const matches = !term || imagePath.toLocaleLowerCase("tr").includes(term)
      return notInSlides && matches
    })
  }, [availableImages, searchTerm, slideSet])

  /**
   * Görseli slayt listesinin sonuna ekler.
   */
  const addSlide = (imagePath: string) => {
    if (slideSet.has(imagePath)) {
      return
    }
    setSlides((current) => [...current, imagePath])
    setMessage("")
  }

  /**
   * Slayt sırasını yukarı veya aşağı taşır.
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
   * Slayt listesini sunucuya kaydeder.
   */
  const saveSlides = async () => {
    setIsBusy(true)
    setMessage("")

    const response = await fetch("/api/admin/pergola-hero", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slides }),
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      setMessage(data?.message ?? "Kayıt başarısız.")
      setIsBusy(false)
      return
    }

    setMessage("Ana sayfa slaytları kaydedildi. Site bir saat içinde güncellenir.")
    setIsBusy(false)
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <AdminPageHeader
        title="Ana Sayfa Slaytları"
        description="Ana sayfada dönen büyük arka plan görsellerini seçin ve sıralayın. Önce Görsel Yükle bölümünden fotoğraf ekleyebilirsiniz."
      />

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => void reload()} disabled={isBusy}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Yenile
        </Button>
        <Button onClick={() => void saveSlides()} disabled={isBusy || slides.length === 0 || !canWrite}>
          <Save className="mr-2 h-4 w-4" />
          Kaydet
        </Button>
      </div>

      {!canWrite && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Bu ortamda slayt dosyası yazılamıyor olabilir. Production için bucket yapılandırmasını kontrol edin.
        </div>
      )}

      {message && <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm">{message}</div>}

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Aktif slaytlar ({slides.length})</CardTitle>
            <CardDescription>Üstteki görsel ana sayfada ilk gösterilir. Ok tuşlarıyla sırayı değiştirin.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {slides.map((imagePath, index) => (
              <div key={`${imagePath}-${index}`} className="flex gap-3 rounded-xl border bg-white p-3 shadow-sm">
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image src={pergolaPublicSrc(imagePath)} alt="" fill className="object-cover" sizes="96px" />
                </div>
                <div className="min-w-0 flex-1">
                  <Badge variant="secondary" className="mb-1">
                    Sıra {index + 1}
                  </Badge>
                  <p className="break-all text-xs text-gray-600">{imagePath}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Button size="icon" variant="outline" onClick={() => moveSlide(index, -1)} disabled={index === 0}>
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => moveSlide(index, 1)}
                    disabled={index === slides.length - 1}
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => setSlides(slides.filter((_, i) => i !== index))}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            {slides.length === 0 && (
              <p className="rounded-lg bg-muted/40 p-4 text-sm text-muted-foreground">Henüz slayt yok. Sağdan görsel ekleyin.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Görsel ekle</CardTitle>
            <CardDescription>Bucket veya yerel klasördeki mevcut görsellerden slayta ekleyin.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Dosya adına göre ara..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className="max-h-[520px] space-y-2 overflow-auto pr-1">
              {filteredImages.slice(0, 80).map((imagePath) => (
                <div key={imagePath} className="flex items-center gap-3 rounded-lg border bg-white p-2">
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded bg-gray-100">
                    <Image src={pergolaPublicSrc(imagePath)} alt="" fill className="object-cover" sizes="64px" />
                  </div>
                  <p className="min-w-0 flex-1 break-all text-xs text-gray-700">{imagePath}</p>
                  <Button size="sm" variant="outline" onClick={() => addSlide(imagePath)}>
                    <Plus className="mr-1 h-3 w-3" />
                    Ekle
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
