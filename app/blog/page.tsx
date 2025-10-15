import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "2024 Pergola Trendleri: Modern Outdoor Yaşam",
      excerpt: "Bu yıl outdoor yaşam alanlarında öne çıkan pergola trendlerini ve tasarım yeniliklerini keşfedin.",
      image: "/modern-pergola-trends-2024.jpg",
      category: "Trendler",
      author: "Ahmet Yılmaz",
      date: "15 Mart 2024",
      readTime: "5 dk",
    },
    {
      title: "Biyoklimatik Pergola ile Enerji Tasarrufu",
      excerpt: "Akıllı lamel sistemleri sayesinde enerji maliyetlerinizi nasıl %40'a kadar azaltabileceğinizi öğrenin.",
      image: "/bioclimatic-pergola-energy-saving.jpg",
      category: "Teknoloji",
      author: "Elif Kaya",
      date: "10 Mart 2024",
      readTime: "7 dk",
    },
    {
      title: "Kış Bahçesi Bakım Rehberi",
      excerpt: "Kış bahçenizin uzun ömürlü olması için gerekli bakım adımları ve önemli ipuçları.",
      image: "/winter-garden-maintenance-guide.jpg",
      category: "Bakım",
      author: "Mehmet Demir",
      date: "5 Mart 2024",
      readTime: "6 dk",
    },
    {
      title: "Cam Sistemleri: Frameless vs Çerçeveli",
      excerpt: "Cam sistemlerinde frameless ve çerçeveli seçeneklerin avantajlarını karşılaştırıyoruz.",
      image: "/glass-systems-comparison.jpg",
      category: "Karşılaştırma",
      author: "Ayşe Özkan",
      date: "28 Şubat 2024",
      readTime: "8 dk",
    },
    {
      title: "Zip Perde Seçim Rehberi",
      excerpt: "İhtiyacınıza en uygun zip perde sistemini seçmek için bilmeniz gereken tüm detaylar.",
      image: "/zip-screen-selection-guide.jpg",
      category: "Rehber",
      author: "Can Arslan",
      date: "20 Şubat 2024",
      readTime: "4 dk",
    },
    {
      title: "Outdoor Alanlar için Aydınlatma İpuçları",
      excerpt: "Pergola ve outdoor alanlarınızı doğru aydınlatma ile nasıl daha etkileyici hale getirebilirsiniz.",
      image: "/outdoor-lighting-tips.jpg",
      category: "Tasarım",
      author: "Zeynep Yıldız",
      date: "15 Şubat 2024",
      readTime: "5 dk",
    },
  ]

  const categories = ["Tümü", "Trendler", "Teknoloji", "Bakım", "Karşılaştırma", "Rehber", "Tasarım"]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Arka Plan Görseli */}
        <div className="absolute inset-0 z-0">
          <img
            src="/pergola/pergola-beyaz.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/90 text-primary-foreground border-0 hover:bg-primary-700">Blog</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
              Outdoor Yaşam <span className="text-primary">Rehberiniz</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty max-w-2xl mx-auto">
              Pergola, cam sistemleri ve outdoor yaşam alanları hakkında uzman görüşleri, ipuçları ve trendler.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{posts[0].category}</Badge>
                  <h2 className="text-2xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {posts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {posts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {posts[0].readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${posts[0].title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Devamını Oku <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>Devamını Oku</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Blog Güncellemelerini Kaçırmayın</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Outdoor yaşam alanları hakkında en güncel içerikleri e-posta ile alın.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary">Abone Ol</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
