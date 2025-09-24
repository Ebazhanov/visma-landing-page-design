"use client"

import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ValueSection() {
  const { t } = useLanguage()

  const values = [
    {
      title: t("value.reliability.title"),
      items: [t("value.reliability.point1"), t("value.reliability.point2")],
      color: "bg-orange-500",
    },
    {
      title: t("value.team.title"),
      items: [t("value.team.point1"), t("value.team.point2")],
      color: "bg-green-500",
    },
    {
      title: t("value.supply.title"),
      items: [t("value.supply.point1"), t("value.supply.point2")],
      color: "bg-yellow-500",
    },
    {
      title: t("value.savings.title"),
      items: [t("value.savings.point1"), t("value.savings.point2")],
      color: "bg-blue-500",
    },
  ]

  return (
    <section id="value" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{t("value.title")}</h2>
            <p className="text-xl text-blue-600 font-semibold">{t("value.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center mr-4`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{value.title}</h3>
                </div>

                <ul className="space-y-3">
                  {value.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
