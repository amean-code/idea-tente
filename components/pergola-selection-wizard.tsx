"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Check,
  Box,
  Blocks,
  Square,
  RotateCw,
  FoldVertical,
  Lock,
  Minus,
  TrendingUp,
  Circle
} from "lucide-react"

/**
 * Modern step-by-step pergola seçim sihirbazı
 * Progress bar ve animasyonlu geçişler ile özgün tasarım
 */
export function PergolaSelectionWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedForm, setSelectedForm] = useState<string | null>(null)

  const steps = [
    {
      id: 0,
      title: "Malzeme Seçimi",
      description: "Pergolanız için ideal malzemeyi seçin",
      options: [
        { id: "aluminum", label: "Alüminyum Tavan", description: "Dayanıklı ve modern", icon: Box },
        { id: "fabric", label: "Kumaş Tavan", description: "Esnek ve estetik", icon: Blocks },
        { id: "glass", label: "Cam Tavan", description: "Şeffaf ve aydınlık", icon: Square }
      ]
    },
    {
      id: 1,
      title: "Sistem Tipi",
      description: "Tavan hareket sistemini belirleyin",
      options: [
        { id: "rotating-panel", label: "Döner Panelli", description: "0-135° ayarlanabilir", icon: RotateCw },
        { id: "folding-panel", label: "Katlanır Panelli", description: "Tam açılır kapanır", icon: FoldVertical },
        { id: "fixed-aluminum", label: "Sabit Sistem", description: "Bakım gerektirmez", icon: Lock }
      ]
    },
    {
      id: 2,
      title: "Tavan Formu",
      description: "Mimari yapınıza uygun formu seçin",
      options: [
        { id: "flat", label: "Düz Tavan", description: "Minimalist tasarım", icon: Minus },
        { id: "sloped", label: "Eğimli Tavan", description: "Su akışı optimum", icon: TrendingUp },
        { id: "curved", label: "Kavisli Tavan", description: "Modern estetik", icon: Circle }
      ]
    }
  ]

  /**
   * Sonraki adıma geç
   */
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  /**
   * Önceki adıma dön
   */
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  /**
   * Seçim yapıldığında değeri kaydet
   */
  const handleSelection = (value: string) => {
    if (currentStep === 0) setSelectedMaterial(value)
    if (currentStep === 1) setSelectedType(value)
    if (currentStep === 2) setSelectedForm(value)
  }

  /**
   * Mevcut adımın seçili değerini al
   */
  const getCurrentSelection = () => {
    if (currentStep === 0) return selectedMaterial
    if (currentStep === 1) return selectedType
    if (currentStep === 2) return selectedForm
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pergolanızı Özelleştirin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            3 adımda size özel pergola tasarımını oluşturun
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-300 ${
                    index < currentStep 
                      ? 'bg-orange-500 text-white' 
                      : index === currentStep 
                      ? 'bg-orange-500 text-white ring-4 ring-orange-200' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < currentStep ? <Check className="h-6 w-6" /> : index + 1}
                  </div>
                  {/* Step Label */}
                  <p className={`mt-2 text-sm font-medium text-center ${
                    index === currentStep ? 'text-orange-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                    index < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              {/* Step Info */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-10"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {steps[currentStep].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {steps[currentStep].description}
                </p>
              </motion.div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {steps[currentStep].options.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      onClick={() => handleSelection(option.id)}
                      className={`relative group p-8 rounded-2xl transition-all duration-300 ${
                        getCurrentSelection() === option.id
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl scale-105'
                          : 'bg-white text-gray-900 shadow-md hover:shadow-xl hover:scale-105'
                      }`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Selection Check Mark */}
                      {getCurrentSelection() === option.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Check className="h-5 w-5 text-orange-500" />
                        </motion.div>
                      )}
                      
                      {/* Icon with Animation */}
                      <motion.div 
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                          getCurrentSelection() === option.id
                            ? 'bg-white/20'
                            : 'bg-orange-100'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className={`h-8 w-8 ${
                          getCurrentSelection() === option.id ? 'text-white' : 'text-orange-600'
                        }`} />
                      </motion.div>
                      
                      {/* Content */}
                      <h4 className={`text-xl font-bold mb-2 ${
                        getCurrentSelection() === option.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {option.label}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        getCurrentSelection() === option.id ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {option.description}
                      </p>

                      {/* Hover Effect Border */}
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                        getCurrentSelection() === option.id
                          ? 'ring-2 ring-orange-300 ring-offset-2'
                          : 'group-hover:ring-2 group-hover:ring-orange-200'
                      }`} />
                    </motion.button>
                  )
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  variant="outline"
                  size="lg"
                  className={`${
                    currentStep === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Geri
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!getCurrentSelection()}
                    size="lg"
                    className={`${
                      !getCurrentSelection()
                        ? 'opacity-50 cursor-not-allowed bg-gray-300'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                    }`}
                  >
                    İleri
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    disabled={!getCurrentSelection()}
                    size="lg"
                    className={`${
                      !getCurrentSelection()
                        ? 'opacity-50 cursor-not-allowed bg-gray-300'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                    }`}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Teklif Al
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selection Summary */}
          {(selectedMaterial || selectedType || selectedForm) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Check className="h-5 w-5 text-orange-600 mr-2" />
                Seçimleriniz
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedMaterial && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-4 py-2.5 bg-white rounded-xl text-gray-700 font-medium border-2 border-orange-300 shadow-sm flex items-center gap-2"
                  >
                    <Check className="h-4 w-4 text-orange-600" />
                    {steps[0].options.find(o => o.id === selectedMaterial)?.label}
                  </motion.span>
                )}
                {selectedType && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="px-4 py-2.5 bg-white rounded-xl text-gray-700 font-medium border-2 border-orange-300 shadow-sm flex items-center gap-2"
                  >
                    <Check className="h-4 w-4 text-orange-600" />
                    {steps[1].options.find(o => o.id === selectedType)?.label}
                  </motion.span>
                )}
                {selectedForm && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2.5 bg-white rounded-xl text-gray-700 font-medium border-2 border-orange-300 shadow-sm flex items-center gap-2"
                  >
                    <Check className="h-4 w-4 text-orange-600" />
                    {steps[2].options.find(o => o.id === selectedForm)?.label}
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
