import { Clock, Phone, Mail, MapPin, Globe } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">İletişim Bilgileri</h2>
        <p className="text-muted-foreground text-lg">
          Uzman ekibimiz size en iyi hizmeti sunmak için hazır. Projeleriniz için profesyonel destek alın.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
            <p className="text-muted-foreground">
              Türkiye: {contactInfo.phone.display.primary}
              <br />
              International: {contactInfo.phone.display.secondary}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
            <p className="text-muted-foreground">
              Genel: {contactInfo.email.info}
              <br />
              İhracat: {contactInfo.email.export}
              <br />
              Destek: {contactInfo.email.support}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Adres</h3>
            <p className="text-muted-foreground">
              {contactInfo.company.fullName}
              <br />
              {contactInfo.address.full}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h3>
            <p className="text-muted-foreground">
              {contactInfo.workingHours.display.weekdays}
              <br />
              {contactInfo.workingHours.display.saturday}
              <br />
              {contactInfo.workingHours.display.sunday}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Dil Desteği</h3>
            <p className="text-muted-foreground">
              Türkçe, English, العربية
              <br />
              Deutsch, Français
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
