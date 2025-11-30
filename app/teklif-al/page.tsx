import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Award, Users, Zap, Shield, FileCheck, Headphones } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"
import Image from "next/image"

/**
 * Teklif al sayfası
 * Detaylı form ve işlem adımları ile teklif alma süreci
 */
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
      icon: FileCheck,
    },
    {
      number: "02",
      title: "Ücretsiz Keşif",
      description: "Uzmanlarımız yerinde inceleme yapar",
      icon: Users,
    },
    {
      number: "03",
      title: "Teklif Sunumu",
      description: "Size özel teklif hazırlanır",
      icon: Award,
    },
    {
      number: "04",
      title: "Uygulama",
      description: "Profesyonel montaj gerçekleştirilir",
      icon: Zap,
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: "15 Yıl Garanti",
      description: "Tüm ürünlerimizde uzun süreli garanti",
    },
    {
      icon: Award,
      title: "Ücretsiz Keşif",
      description: "Profesyonel yerinde inceleme",
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "15+ yıl deneyimli montaj ekibi",
    },
    {
      icon: Headphones,
      title: "7/24 Destek",
      description: "Her zaman yanınızdayız",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Arka plan görseli */}
        <div className="absolute inset-0">
          <Image
            src="/modern-bioclimatic-pergola-with-adjustable-louvers.jpg"
            alt="Teklif Al"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3D4247]/95 via-[#3D4247]/85 to-primary/30" />
        </div>

          <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Ücretsiz Keşif ve Teklif</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Size Özel <span className="text-primary">Teklif</span> Alın
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto text-gray-200">
              Uzman ekibimiz size en uygun çözümü sunmak için ücretsiz keşif yapıyor ve detaylı teklif hazırlıyor.
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">5000+</div>
                <div className="text-sm text-gray-300">Tamamlanan Proje</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">15+</div>
                <div className="text-sm text-gray-300">Yıl Deneyim</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">24</div>
                <div className="text-sm text-gray-300">Saat İçinde Dönüş</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold mb-1 text-primary">%100</div>
                <div className="text-sm text-gray-300">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sektördeki deneyimimiz ve müşteri odaklı yaklaşımımızla fark yaratıyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Teklif Alma Süreci
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 basit adımda projeniz için profesyonel teklif alın
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl font-bold text-xl mb-4 shadow-lg">
                    {step.number}
                    <step.icon className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground rounded-full p-1" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
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
                      <Input id="phone" type="tel" placeholder={contactInfo.phone.display.primary} required />
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

              <Card className="bg-gradient-to-br from-primary to-primary-700 text-primary-foreground border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-semibold text-lg">Ücretsiz Keşif Garantisi</span>
                  </div>
                  <p className="text-sm opacity-95 mb-4">
                    Teklif formunuzu gönderdikten sonra 24 saat içinde size ulaşıyor ve ücretsiz keşif randevusu
                    planlıyoruz.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>24 saat içinde geri dönüş</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Ücretsiz yerinde inceleme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Detaylı fiyat teklifi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hızlı İletişim Kartı */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Hızlı İletişim</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full" size="lg" variant="outline">
                    <a href={`tel:${contactInfo.phone.primary}`}>
                      <Phone className="h-5 w-5 mr-2" />
                      Hemen Ara
                    </a>
                  </Button>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                    <a href={contactInfo.whatsapp.quote} target="_blank" rel="noopener noreferrer">
                      <Image src="/wp-icon.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Güvenle Çalışın
              </h2>
              <p className="text-lg text-muted-foreground">
                Sektördeki lider konumumuz ve referanslarımızla güvence altındasınız
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">5000+</div>
                <p className="text-muted-foreground font-medium">Mutlu Müşteri</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">%98</div>
                <p className="text-muted-foreground font-medium">Memnuniyet Oranı</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground font-medium">Yıl Garanti</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
