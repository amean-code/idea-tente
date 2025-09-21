import { Smartphone, Camera, Hand, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    title: "Mobil Cihazınızı Hazırlayın",
    description: "iOS 12+ veya Android 7+ işletim sistemli cihazınızla AR demo sayfasını açın.",
  },
  {
    icon: Camera,
    title: "Kamera İzni Verin",
    description: "Tarayıcınızdan kamera erişim iznini onaylayın ve kameranızı etkinleştirin.",
  },
  {
    icon: Hand,
    title: "Yüzeyi Tarayın",
    description: "Pergola yerleştirmek istediğiniz düz yüzeyi kameranızla tarayın.",
  },
  {
    icon: CheckCircle,
    title: "Pergolayı Yerleştirin",
    description: "Ekranda beliren pergolayı dokunarak istediğiniz konuma yerleştirin.",
  },
]

export function ARInstructions() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            AR Demo Nasıl Kullanılır?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Artırılmış gerçeklik deneyimini başlatmak için bu basit adımları takip edin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="h-8 w-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <div className="w-full h-0.5 bg-primary/20 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
