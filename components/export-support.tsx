import { FileText, Truck, Headphones, GraduationCap } from "lucide-react"

const supportServices = [
  {
    icon: FileText,
    title: "Dokümantasyon",
    description: "CE sertifikaları, teknik çizimler, montaj kılavuzları",
    items: ["CE Sertifikaları", "Teknik Çizimler", "Montaj Kılavuzları", "Garanti Belgeleri"],
  },
  {
    icon: Truck,
    title: "Lojistik",
    description: "Güvenli ambalaj, hızlı kargo, gümrük işlemleri",
    items: ["Özel Ambalaj", "Sigortalı Kargo", "Gümrük Desteği", "Takip Sistemi"],
  },
  {
    icon: Headphones,
    title: "Teknik Destek",
    description: "7/24 teknik destek, uzaktan yardım, problem çözme",
    items: ["7/24 Destek", "Uzaktan Yardım", "Video Konferans", "Hızlı Çözüm"],
  },
  {
    icon: GraduationCap,
    title: "Eğitim",
    description: "Ürün eğitimleri, satış teknikleri, pazarlama desteği",
    items: ["Ürün Eğitimi", "Satış Teknikleri", "Pazarlama Desteği", "Online Seminerler"],
  },
]

export function ExportSupport() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Kapsamlı Destek Hizmetleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            İş ortaklarımızın başarısı için sunduğumuz profesyonel destek hizmetleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportServices.map((service, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 text-pretty">{service.description}</p>

              <div className="space-y-2">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
