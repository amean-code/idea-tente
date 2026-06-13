import type { LucideIcon } from "lucide-react"
import { Frame, Home, Images, Upload } from "lucide-react"

/** Admin sidebar menü öğesi tanımı. */
export interface AdminNavItem {
  href: string
  label: string
  description: string
  icon: LucideIcon
}

/** Müşteri dostu admin panel menüsü. */
export const adminNavItems: AdminNavItem[] = [
  {
    href: "/admin",
    label: "Sayfa Galerileri",
    description: "Ürün sayfalarındaki görselleri seçin, sıralayın ve kaydedin.",
    icon: Images,
  },
  {
    href: "/admin/yukle",
    label: "Görsel Yönetimi",
    description: "Fotoğraf yükleyin veya bucket'tan silin.",
    icon: Upload,
  },
  {
    href: "/admin/kapaklar",
    label: "Kapak Fotoğrafları",
    description: "Ürün sayfalarının üst hero görselini değiştirin.",
    icon: Frame,
  },
  {
    href: "/admin/anasayfa",
    label: "Ana Sayfa Slaytları",
    description: "Ana sayfadaki büyük arka plan görsellerinin sırasını düzenleyin.",
    icon: Home,
  },
]

/**
 * Verilen yola karşılık gelen menü öğesini döndürür.
 */
export function getAdminNavItem(pathname: string): AdminNavItem | undefined {
  if (pathname === "/admin") {
    return adminNavItems[0]
  }

  return adminNavItems.find((item) => item.href !== "/admin" && pathname.startsWith(item.href))
}
