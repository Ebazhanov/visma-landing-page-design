"use client"

import { useLanguage } from "@/contexts/language-context"

export function VisionSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">{t("vision.title")}</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">{t("vision.point1")}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">{t("vision.point2")}</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl font-semibold text-navy-900 italic">{t("vision.tagline")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
