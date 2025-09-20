import Image from "next/image"

export function PartnershipSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VISMA maintains official supplier partnerships with leading manufacturers, ensuring access to premium
            industrial solutions and specialized products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Flexatec Partnership */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Official Supplier of Flexatec Belts</h3>
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
              <div className="space-y-3 text-sm text-gray-700">
                <p className="font-medium text-orange-600">
                  KFG® Conveyor Belts with Adhesive Backing for Diaper & Feminine Hygiene Manufacturing
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Easy glue removal - eco-friendly adhesive backing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>99.99% contamination removal efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>FDA compliant - meets 21 CFR 177.2600 standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Available in flat and toothed belt configurations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ABIX Partnership */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Official Supplier of ABIX Belting Products</h3>
                <div className="flex items-center">
                  <span className="text-red-600 font-bold text-lg">ABIX</span>
                  <span className="text-gray-600 text-sm ml-1">CORPORATION</span>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="font-medium text-blue-600">Timing Belts and Special Conveyor Belts</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <ul className="space-y-1">
                    <li>• Neoprene Synchronous</li>
                    <li>• Urethane Open End</li>
                    <li>• Urethane Kevlar™</li>
                    <li>• Urethane Round Belts</li>
                    <li>• Poly-V Belts</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Timing Pulleys</li>
                    <li>• Conveyor Belts</li>
                    <li>• V-Belts & Flat Belts</li>
                    <li>• Hoses & Accessories</li>
                    <li>• Chains</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a
                    href="https://abixcorp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
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
