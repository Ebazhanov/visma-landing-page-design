import { CheckCircle } from "lucide-react"

export function ValueSection() {
  const values = [
    {
      title: "RELIABILITY",
      items: ["Excellent references", "Reliable Partner"],
      color: "bg-orange-500",
    },
    {
      title: "TEAM",
      items: [
        "Professional Team with 15+ years international experience in FMCG companies to support your needs!",
        "Procurement MRO Category Management Support to maximize your business profitability.",
      ],
      color: "bg-green-500",
    },
    {
      title: "SUPPLY",
      items: ["Products, YOU ask we supply.", "Developed supply network (India, China, LAO, NA)."],
      color: "bg-yellow-500",
    },
    {
      title: "SAVINGS",
      items: [
        "Finding the best solutions, in solving your problems.",
        "Supporting to meet your Savings targets (Cost Avoidance, Cost Reduction/TCO, Working Capital).",
      ],
      color: "bg-blue-500",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Value</h2>
            <p className="text-xl text-blue-600 font-semibold">We're here to serve you, the ones who get it done!</p>
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
