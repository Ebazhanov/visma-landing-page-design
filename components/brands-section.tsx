import Image from "next/image"

export function BrandsSection() {
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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Product Range Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-balance">Product Range - SHOP TRUSTED BRANDS</h2>
            <p className="text-xl text-amber-600 font-semibold text-balance">
              CHOICE OF MANUFACTURERS AVAILABLE THROUGH THE ONE NETWORK
            </p>
          </div>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.alt}
                width={200}
                height={80}
                className="h-10 w-auto object-contain filter hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
