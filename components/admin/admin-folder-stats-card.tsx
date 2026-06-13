import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { GalleryFolderStat } from "@/lib/admin-folder-stats"

interface AdminFolderStatsCardProps {
  stats: GalleryFolderStat[]
  totalImages?: number
}

/**
 * Her ürün klasöründeki depolama ve sayfa görsel sayılarını özet tablo olarak gösterir.
 */
export function AdminFolderStatsCard({ stats, totalImages }: AdminFolderStatsCardProps) {
  const totalInFolders = stats.reduce((total, stat) => total + stat.folderImageCount, 0)
  const totalOnPages = stats.reduce((total, stat) => total + stat.galleryImageCount, 0)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Klasör özeti</CardTitle>
        <CardDescription>
          Hangi klasörde kaç görsel olduğunu ve sayfalarda kaçının yayında olduğunu görün.
          {typeof totalImages === "number" && (
            <span className="mt-1 block text-xs">
              Toplam {totalImages} görsel taranıyor · Klasörlerde {totalInFolders} · Sayfalarda {totalOnPages}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Ürün</th>
                <th className="py-2 pr-4 font-medium">Klasör</th>
                <th className="py-2 pr-4 font-medium">Klasörde</th>
                <th className="py-2 font-medium">Sayfada</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((stat) => (
                <tr key={stat.folder} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 pr-4 font-medium text-gray-900">{stat.label}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{stat.folder}</td>
                  <td className="py-2.5 pr-4">
                    <Badge variant="secondary">{stat.folderImageCount} görsel</Badge>
                  </td>
                  <td className="py-2.5">
                    <Badge variant={stat.galleryImageCount > 0 ? "default" : "outline"}>
                      {stat.galleryImageCount} yayında
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
