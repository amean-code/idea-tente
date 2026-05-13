import { createReadStream } from "fs"
import { stat } from "fs/promises"
import fs from "fs"
import path from "path"
import { Readable } from "stream"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

/** İstekte kabul edilen PDF belge anahtarları (path traversal yok). */
const ALLOWED_IDS = new Set(["bioclimatic-technical", "bioclimatic-catalog"])

/**
 * public/E-KATALOG altındaki bioklimatik e-katalog PDF dosyasının tam yolunu döndürür.
 */
function getBioclimaticCatalogPath(): string {
  return path.join(process.cwd(), "public", "E-KATALOG", "IDEA-E-CATALOG-1.pdf")
}

/**
 * public altında adında "teknik" geçen klasördeki ilk PDF dosyasının mutlak yolunu bulur (klasör adı Unicode ile değişebilir).
 */
function getBioclimaticTechnicalPdfPath(): string {
  const publicDir = path.join(process.cwd(), "public")
  const dirName = fs.readdirSync(publicDir).find((name) => {
    if (!fs.statSync(path.join(publicDir, name)).isDirectory()) {
      return false
    }
    const lower = name.toLocaleLowerCase("tr-TR")
    return lower.includes("teknik")
  })
  if (!dirName) {
    throw new Error("Technical documents directory not found under public/")
  }
  const dirPath = path.join(publicDir, dirName)
  const pdfName = fs
    .readdirSync(dirPath)
    .find((f) => f.toLowerCase().endsWith(".pdf"))
  if (!pdfName) {
    throw new Error("No PDF found in technical documents directory")
  }
  return path.join(dirPath, pdfName)
}

/**
 * Belge kimliğine göre disk üzerindeki PDF mutlak yolunu çözümler.
 */
function resolvePdfAbsolutePath(id: string): string {
  if (id === "bioclimatic-catalog") {
    return getBioclimaticCatalogPath()
  }
  if (id === "bioclimatic-technical") {
    return getBioclimaticTechnicalPdfPath()
  }
  throw new Error("Unknown document id")
}

/**
 * Bioklimatik PDF'lerini sunar: mode=inline tarayıcıda açar, mode=attachment ile indirmeyi tetikler (mobil Safari dahil).
 */
export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  const mode = request.nextUrl.searchParams.get("mode") ?? "inline"

  if (!id || !ALLOWED_IDS.has(id)) {
    return NextResponse.json({ error: "Geçersiz belge." }, { status: 400 })
  }

  const disposition = mode === "attachment" ? "attachment" : "inline"

  let filePath: string
  try {
    filePath = resolvePdfAbsolutePath(id)
  } catch {
    return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 404 })
  }

  try {
    await stat(filePath)
  } catch {
    return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 404 })
  }

  const baseName = path.basename(filePath)
  const asciiName = baseName.replace(/[^\x20-\x7E]/g, "_")

  const nodeStream = createReadStream(filePath)
  const webStream = Readable.toWeb(nodeStream)

  return new NextResponse(webStream as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${disposition}; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(baseName)}`,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
