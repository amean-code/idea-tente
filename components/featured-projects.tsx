"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Award, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    id: 1,
    title: "Luxury Resort Pergola Complex",
    location: "Antalya, Türkiye",
    year: "2024",
    category: "Biyoklimatik Pergola",
    image: "/luxury-resort-pergola-installation.jpg",
    description: "5 yıldızlı resort için özel tasarım biyoklimatik pergola sistemi",
    features: ["Akıllı Kontrol", "LED Aydınlatma", "Yağmur Sensörü", "Rüzgar Sensörü"],
    area: "2,500 m²",
    client: "Luxury Resort Chain",
  },
  {
    id: 2,
    title: "Corporate Headquarters Sun Protection",
    location: "İstanbul, Türkiye",
    year: "2024",
    category: "Güneş Kırıcıları",
    image: "/corporate-building-sun-breakers.jpg",
    description: "Modern ofis binası için enerji verimli güneş kırıcı sistemleri",
    features: ["Otomatik Kontrol", "Enerji Tasarrufu", "Akıllı Sensörler", "Uzaktan Yönetim"],
    area: "8,000 m²",
    client: "Fortune 500 Company",
  },
  {
    id: 3,
    title: "Seaside Restaurant Glass Systems",
    location: "Bodrum, Türkiye",
    year: "2023",
    category: "Cam Sistemleri",
    image: "/seaside-restaurant-glass-systems.jpg",
    description: "Deniz manzaralı restoran için panoramik cam sistemleri",
    features: ["Panoramik Görünüm", "Rüzgar Koruması", "Kolay Temizlik", "UV Koruması"],
    area: "800 m²",
    client: "Premium Restaurant Group",
  },
  {
    id: 4,
    title: "Private Villa Winter Garden",
    location: "Çeşme, Türkiye",
    year: "2023",
    category: "Kış Bahçesi",
    image: "/private-villa-winter-garden.jpg",
    description: "Özel villa için lüks kış bahçesi tasarımı",
    features: ["Akıllı Cam", "Isı Kontrolü", "Otomatik Havalandırma", "Premium Malzeme"],
    area: "150 m²",
    client: "Private Villa Owner",
  },
]

const promotionalContent = [
  {
    icon: Award,
    title: "15 Yıl Garanti",
    description: "Tüm ürünlerimizde uzun süreli garanti",
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Sertifikalı montaj ve servis ekibi",
  },
  {
    icon: MapPin,
    title: "Türkiye Geneli",
    description: "81 ilde hizmet ağımız",
  },
]

export function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const project = featuredProjects[currentProject]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-orange-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200">
            Öne Çıkan Projeler
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Gerçekleştirdiğimiz
            <span className="text-orange-500 block">Başarı Hikayeleri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            5000+ projelik deneyimimizle, Türkiye'nin dört bir yanında hayata geçirdiğimiz özel tasarım çözümlerimizi
            keşfedin.
          </p>
        </motion.div>

        {/* Featured Project Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Image */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 hover:bg-white/30">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </motion.button>

              {/* Project Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3 bg-orange-500 hover:bg-orange-600">{project.category}</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 hover:bg-white/30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 hover:bg-white/30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={`details-${currentProject}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="outline" className="mb-3 text-orange-600 border-orange-200">
                {project.category}
              </Badge>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{project.area}</div>
                <div className="text-sm text-muted-foreground">Toplam Alan</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{project.year}</div>
                <div className="text-sm text-muted-foreground">Tamamlanma</div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-3">Özellikler</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 group">
              Proje Detaylarını İncele
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mb-16">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject ? "bg-orange-500 w-8" : "bg-orange-200"
              }`}
            />
          ))}
        </div>

        {/* Promotional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {promotionalContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Hayalinizdeki Projeyi Gerçekleştirelim</h3>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            15 yıllık deneyimimiz ve uzman ekibimizle, size özel çözümler sunuyoruz. Ücretsiz keşif ve teklif için hemen
            iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              Ücretsiz Keşif Talep Et
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Referans Projelerimizi İncele
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
