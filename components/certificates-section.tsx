"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, ZoomIn } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

/**
 * Sertifikalar bölümü - Ana sayfada gösterilen sertifika galerisi
 */
export function CertificatesSection() {
  const { t } = useLanguage()
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  const certificates = [
    {
      id: 1,
      title: t("certificates.items.iso9001"),
      image: "/SERTİFİKALAR/İDEA TENTE ISO9001 copy.jpg",
      category: t("certificates.categories.quality"),
    },
    {
      id: 2,
      title: t("certificates.items.cePergola"),
      image: "/SERTİFİKALAR/İDEA TENTE CE BELGESİ (MOTORIZED PERGOLA SYSTEM) copy.jpg",
      category: t("certificates.categories.ce"),
    },
    {
      id: 3,
      title: t("certificates.items.ceGlass"),
      image: "/SERTİFİKALAR/İDEA TENTE CE BELGESİ (MOTORIZED GUILLOTINE GLASS SYSTEM) copy.jpg",
      category: t("certificates.categories.ce"),
    },
    {
      id: 4,
      title: t("certificates.items.conformityPergola"),
      image: "/SERTİFİKALAR/DECLERATION OF CONFORMITY (MOTORIZED PERGOLA SYSTEM).jpg",
      category: t("certificates.categories.conformity"),
    },
    {
      id: 5,
      title: t("certificates.items.conformityGlass"),
      image: "/SERTİFİKALAR/DECLERATION OF CONFORMITY (MOTORIZED GUILLOTINE GLASS SYSTEM).jpg",
      category: t("certificates.categories.conformity"),
    },
    {
      id: 6,
      title: t("certificates.items.designRegistration"),
      image: "/SERTİFİKALAR/TASARIM TESCİL.jpg",
      category: t("certificates.categories.design"),
    },
    {
      id: 7,
      title: t("certificates.items.designRegistrationGlass"),
      image: "/SERTİFİKALAR/TASARIM TESCİL BELGESİ GİYOTİN.jpg",
      category: t("certificates.categories.design"),
    },
    {
      id: 8,
      title: t("certificates.items.baibMembership"),
      image: "/SERTİFİKALAR/BAİB ÜYELİK BELGESİ.jpg",
      category: t("certificates.categories.membership"),
    },
  ]

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">{t("certificates.badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t("certificates.title")} <span className="text-primary">{t("certificates.titleHighlight")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t("certificates.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedCertificate(certificate.id)}
              >
                <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-md">
                      {certificate.category}
                    </span>
                  </div>

                  {/* Title on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-semibold">{certificate.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Certificate View */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl p-6">
              <div className="relative w-full" style={{ minHeight: "400px" }}>
                <Image
                  src={certificates.find((c) => c.id === selectedCertificate)?.image || ""}
                  alt={certificates.find((c) => c.id === selectedCertificate)?.title || ""}
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "80vh" }}
                />
              </div>
            </div>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors z-10"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </>
  )
}

