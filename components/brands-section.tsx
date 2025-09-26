"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function BrandsSection() {
  const { t } = useLanguage()

  const brands = [
    { name: "NITTA", logo: "/images/nitta-logo.png", alt: "NITTA Invention & Innovation Logo" },
    { name: "FESTO", logo: "/images/brands/festo.png", alt: "FESTO Logo" },
    { name: "Rockwell Automation", logo: "/images/brands/rockwell.png", alt: "Rockwell Automation Logo" },
    { name: "Nordson", logo: "/images/brands/nordson.png", alt: "Nordson Corporation Logo" },
    { name: "Camozzi", logo: "/images/brands/camozzi.png", alt: "Camozzi Automation Logo" },
    { name: "Flexatec", logo: "/images/brands/flexatec.png", alt: "Flexatec Logo" },
    { name: "Rexroth", logo: "/images/brands/rexroth.png", alt: "Rexroth Bosch Group Logo" },
    { name: "Siemens", logo: "/images/brands/siemens.png", alt: "Siemens Logo" },
    { name: "McMaster-Carr", logo: "/images/brands/mcmaster-carr.png", alt: "McMaster-Carr Logo" },
    { name: "Warner Electric", logo: "/images/brands/warner-electric.png", alt: "Warner Electric Parts Logo" },
    { name: "Osprey Corporation", logo: "/images/brands/osprey.webp", alt: "Osprey Corporation Logo" },
    { name: "PBC Linear", logo: "/images/brands/pbc-linear.jpeg", alt: "PBC Linear Logo" },
    { name: "Parker Legris", logo: "/images/brands/parker-legris.png", alt: "Parker Legris Logo" },
    { name: "SMC", logo: "/images/brands/smc.webp", alt: "SMC Corporation Logo" },
    { name: "Duff Norton", logo: "/images/brands/duff-norton-blue.png", alt: "Duff Norton Logo" },
    { name: "NSK", logo: "/images/brands/nsk.png", alt: "NSK Motion & Control Logo" },
    { name: "Thomson", logo: "/images/brands/thomson.png", alt: "Thomson Linear Motion Logo" },
  ]

  const newBrands = [
    { name: "Abb", logo: "/images/new_brands/Abb.png", alt: "Abb Logo" },
    { name: "Danfoss", logo: "/images/new_brands/Danfoss.png", alt: "Danfoss Logo" },
    { name: "Dodge", logo: "/images/new_brands/Dodge.png", alt: "Dodge Logo" },
    { name: "Eaton", logo: "/images/new_brands/Eaton.png", alt: "Eaton Logo" },
    { name: "Fife", logo: "/images/new_brands/Fife.png", alt: "Fife Logo" },
    { name: "NTN", logo: "/images/new_brands/NTN.png", alt: "NTN Logo" },
    { name: "Nippon", logo: "/images/new_brands/Nippon.png", alt: "Nippon Logo" },
    { name: "banner", logo: "/images/new_brands/banner.png", alt: "Banner Logo" },
    { name: "fanuc", logo: "/images/new_brands/fanuc.png", alt: "Fanuc Logo" },
    { name: "gates", logo: "/images/new_brands/gates.png", alt: "Gates Logo" },
    { name: "lily", logo: "/images/new_brands/lily.png", alt: "Lily Logo" },
    { name: "mcgill", logo: "/images/new_brands/mcgill.png", alt: "McGill Logo" },
    { name: "nachi", logo: "/images/new_brands/nachi.png", alt: "Nachi Logo" },
    { name: "nord", logo: "/images/new_brands/nord.png", alt: "Nord Logo" },
    { name: "omron", logo: "/images/new_brands/omron.png", alt: "Omron Logo" },
    { name: "phoenix", logo: "/images/new_brands/phoenix.png", alt: "Phoenix Logo" },
    { name: "relex", logo: "/images/new_brands/relex.png", alt: "Relex Logo" },
    { name: "schneider", logo: "/images/new_brands/schneider.png", alt: "Schneider Logo" },
    { name: "sew", logo: "/images/new_brands/sew.png", alt: "SEW Logo" },
    { name: "skf", logo: "/images/new_brands/skf.png", alt: "SKF Logo" },
    { name: "sumitomo", logo: "/images/new_brands/sumitomo.png", alt: "Sumitomo Logo" },
    { name: "tsujikawa", logo: "/images/new_brands/tsujikawa.png", alt: "Tsujikawa Logo" },
    { name: "turck", logo: "/images/new_brands/turck.png", alt: "Turck Logo" },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Instrument Images Grid - Responsive */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {[...Array(21)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-2 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200"
              >
                <Image
                  src={`/images/instrument/${i+1}.png`}
                  alt={`Instrument ${i+1}`}
                  width={100}
                  height={100}
                  className="w-full h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] object-contain rounded"
                  style={{objectFit: 'contain', borderRadius: '8px'}}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Product Range Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-balance">{t("brands.title")}</h2>
            <p className="text-xl text-amber-600 font-semibold text-balance">{t("brands.subtitle")}</p>
          </div>
        </div>
        {/* Brand Logos Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {[...brands, ...newBrands].map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-2 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.alt}
                width={200}
                height={80}
                className="w-full h-auto max-w-[120px] object-contain rounded"
                style={{objectFit: 'contain', borderRadius: '8px'}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
