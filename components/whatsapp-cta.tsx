import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/lib/contact-info"

export function WhatsAppCTA() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white mt-8">
      <div className="flex items-center mb-4">
        <MessageCircle className="h-8 w-8 mr-3" />
        <h3 className="text-2xl font-bold">Hızlı İletişim</h3>
      </div>

      <p className="mb-6 text-green-50">
        Anında yanıt almak için WhatsApp üzerinden bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaya hazır!
      </p>

      <div className="space-y-4">
        <Button className="w-full bg-white text-green-600 hover:bg-green-50" size="lg" asChild>
          <a href={contactInfo.whatsapp.primary} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" />
            Türkiye WhatsApp
          </a>
        </Button>

        <Button className="w-full bg-white text-green-600 hover:bg-green-50" size="lg" asChild>
          <a href={contactInfo.whatsapp.primary} target="_blank" rel="noopener noreferrer">
            <Phone className="h-5 w-5 mr-2" />
            International WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-green-100 mt-4">Çalışma saatleri: {contactInfo.workingHours.display.weekdays} (GMT+3)</p>
    </div>
  )
}
