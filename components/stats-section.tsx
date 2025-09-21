const stats = [
  {
    number: "5000+",
    label: "Tamamlanan Proje",
  },
  {
    number: "50+",
    label: "İhracat Ülkesi",
  },
  {
    number: "20+",
    label: "Yıl Deneyim",
  },
  {
    number: "98%",
    label: "Müşteri Memnuniyeti",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg text-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
