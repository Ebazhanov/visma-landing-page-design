"use client"

import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("contact.title")}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
              <a
                href="mailto:visma@ooovisma.ru"
                className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                visma@ooovisma.ru
              </a>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Management</h3>
              <a
                href="mailto:manager@ooovisma.ru"
                className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                manager@ooovisma.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
