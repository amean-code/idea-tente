import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, MessageCircle, Download } from "lucide-react"

export function ExportHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/global-business-world-map-with-modern-pergola-sys.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Global
            <span className="text-primary"> Distribütör </span>
            Ağımıza Katılın
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-pretty">
            50+ ülkede güvenilir iş ortaklarımızla birlikte premium IDEA ve cam sistemlerini dünya çapında sunuyoruz
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="#distributor-application">
                <MessageCircle className="mr-2 h-5 w-5" />
                Distribütör Başvurusu
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Link href="/export-katalog">
                <Download className="mr-2 h-5 w-5" />
                Export Katalog
              </Link>
            </Button>
          </div>

          <div className="pt-8 text-center">
            <p className="text-lg text-gray-300">
              <span className="text-primary font-semibold">20+ yıl</span> deneyim •{" "}
              <span className="text-primary font-semibold">50+ ülke</span> •{" "}
              <span className="text-primary font-semibold">5000+ proje</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
