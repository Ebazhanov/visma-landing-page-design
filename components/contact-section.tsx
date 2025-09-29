"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center justify-center text-center w-full lg:items-end lg:text-right lg:pr-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t("contact.title")}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{t("contact.subtitle")}</p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src="/images/connect-communication.png"
                    alt="Digital communication and connectivity"
                    className="w-80 h-60 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
              {/* Email Addresses */}
              <div className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <a
                  href="mailto:visma@ooovisma.ru"
                  className="text-secondary hover:text-secondary/80 transition-colors text-sm block text-center break-all mb-2"
                >
                  visma@ooovisma.ru
                </a>
                <a
                  href="mailto:manager@ooovisma.ru"
                  className="text-secondary hover:text-secondary/80 transition-colors text-sm block text-center break-all"
                >
                  manager@ooovisma.ru
                </a>
              </div>
              {/* Phone */}
              <div className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center text-card-foreground">Phone</h3>
                <a
                  href="tel:+74951234567"
                  className="text-secondary hover:text-secondary/80 transition-colors text-sm block text-center"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card backdrop-blur-sm rounded-2xl border border-border p-8 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{t("contact.office.title")}</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-foreground text-lg font-medium">{t("contact.office.address")}</p>
                  <p className="text-muted-foreground text-sm">{t("contact.office.fullAddress")}</p>
                </div>
                <p className="text-muted-foreground max-w-md mx-auto lg:mx-0">{t("contact.office.description")}</p>
              </div>

              <div className="w-full">
                <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=38.0736%2C54.8986&z=16&text=Индустриальный%20район%2C%20Ступино%2C%20Московская%20область%2C%20142800%2C%20Россия"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="VISMA Office Location in Stupino, Moscow Region"
                    className="rounded-xl"
                  />
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <a
                    href="https://yandex.ru/maps/?ll=38.0736%2C54.8986&z=16&text=Индустриальный%20район%2C%20Ступино%2C%20Московская%20область%2C%20142800%2C%20Россия"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {t("contact.office.viewOnMaps")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
