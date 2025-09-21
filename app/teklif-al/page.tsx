import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export default function QuotePage() {
  const services = [
    "Biyoklimatik Pergola",
    "Cam Sistemleri",
    "Kış Bahçesi",
    "Güneş Kırıcı",
    "Zip Perde",
    "Tente Sistemleri",
  ]

  const steps = [
    {
      number: "01",
      title: "Teklif Formu",
      description: "Detaylı bilgilerinizi paylaşın",
    },
    {
      number: "02",
      title: "Ücretsiz Keşif",
      description: "Uzmanlarımız yerinde inceleme yapar",
    },
    {
      number: "03",
      title: "Teklif Sunumu",
      description: "Size özel teklif hazırlanır",
    },
    {
      number: "04",
      title: "Uygulama",
      description: "Profesyonel montaj gerçekleştirilir",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/10 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Ücretsiz Teklif</Badge>
            <h1 className="text-4xl font-bold mb-6 text-balance">
              Size Özel <span className="text-primary">Teklif Alın</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Uzman ekibimiz size en uygun çözümü sunmak için ücretsiz keşif yapıyor ve detaylı teklif hazırlıyor.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Teklif Formu</CardTitle>
                  <p className="text-muted-foreground">
                    Lütfen aşağıdaki formu doldurun, size en kısa sürede dönüş yapalım.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ad *</Label>
                      <Input id="firstName" placeholder="Adınız" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Soyad *</Label>
                      <Input id="lastName" placeholder="Soyadınız" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" type="tel" placeholder="+90 555 123 45 67" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" placeholder="ornek@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Şehir *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Şehir seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="istanbul">İstanbul</SelectItem>
                        <SelectItem value="ankara">Ankara</SelectItem>
                        <SelectItem value="izmir">İzmir</SelectItem>
                        <SelectItem value="bursa">Bursa</SelectItem>
                        <SelectItem value="antalya">Antalya</SelectItem>
                        <SelectItem value="other">Diğer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>İlgilendiğiniz Ürünler *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`service-${index}`} />
                          <Label htmlFor={`service-${index}`} className="text-sm">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Uygulama Alanı (m²)</Label>
                    <Input id="area" type="number" placeholder="Yaklaşık metrekare" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Bütçe Aralığı</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Bütçe aralığı seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-25000">0 - 25.000 TL</SelectItem>
                        <SelectItem value="25000-50000">25.000 - 50.000 TL</SelectItem>
                        <SelectItem value="50000-100000">50.000 - 100.000 TL</SelectItem>
                        <SelectItem value="100000+">100.000 TL+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Ek Bilgiler</Label>
                    <Textarea id="message" placeholder="Projeniz hakkında detayları paylaşın..." rows={4} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="text-sm">
                      <a href="/kvkk" className="text-primary hover:underline">
                        KVKK Aydınlatma Metni
                      </a>
                      'ni okudum ve kabul ediyorum.
                    </Label>
                  </div>

                  <Button size="lg" className="w-full">
                    Teklif Talebimi Gönder
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>İletişim Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.phone.display.primary}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">E-posta</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.email.info}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Adres</div>
                      <div className="text-sm text-muted-foreground">
                        {contactInfo.address.full}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Çalışma Saatleri</div>
                      <div className="text-sm text-muted-foreground">
                        {contactInfo.workingHours.display.weekdays}
                        <br />
                        {contactInfo.workingHours.display.saturday}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-semibold">Ücretsiz Keşif Garantisi</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Teklif formunuzu gönderdikten sonra 24 saat içinde size ulaşıyor ve ücretsiz keşif randevusu
                    planlıyoruz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
