"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function PartnershipSection() {
  const { t } = useLanguage()

  return (
    <section id="partnerships" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("partnership.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("partnership.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Flexatec Partnership */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{t("partnership.flexatec.title")}</h3>
                <div className="flex items-center">
                  <Image
                    src="/images/brands/flexatec.png"
                    alt="Flexatec"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4 text-base text-gray-700">
                <p className="font-medium text-orange-600 text-lg">{t("partnership.flexatec.description")}</p>
                <div className="mb-3">
                  <span className="font-semibold text-gray-800 text-lg">{t("partnership.flexatec.features")}</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base">{t("partnership.flexatec.feature4")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base">{t("partnership.flexatec.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base">{t("partnership.flexatec.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base">{t("partnership.flexatec.feature2")}</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                  <a
                    href="https://neilsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-base font-medium underline"
                    style={{ wordBreak: "break-word" }}
                  >
                    Engineering Services & Design | Neilsoft
                  </a>
                  <a
                    href="https://neilsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base font-semibold transition-colors"
                    style={{ minWidth: "100px", textAlign: "center" }}
                  >
                    PARTNER
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ABIX Partnership */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{t("partnership.abix.title")}</h3>
                <div className="flex items-center">
                  <span className="text-red-600 font-bold text-lg">ABIX</span>
                  <span className="text-gray-600 text-sm ml-1">CORPORATION</span>
                </div>
              </div>
              <div className="space-y-4 text-base text-gray-700">
                <p className="font-medium text-blue-600 text-lg">{t("partnership.abix.subtitle")}</p>
                <div className="mb-3">
                  <span className="font-semibold text-gray-800 text-lg">{t("partnership.abix.features")}</span>
                </div>
                <div className="grid grid-cols-1 gap-3 text-base">
                  <ul className="space-y-2">
                    <li>• {t("partnership.abix.feature1")}</li>
                    <li>• {t("partnership.abix.feature2")}</li>
                    <li>• {t("partnership.abix.feature3")}</li>
                    <li>• {t("partnership.abix.feature4")}</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a
                    href="https://abixcorp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-base font-medium"
                  >
                    Visit abixcorp.com →
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
