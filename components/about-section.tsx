import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Who we are section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary mb-12 text-balance">Who we are...</h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
              <p className="text-card-foreground">
                <strong>VISMA is a flexible, trustful and financially strong technical MRO supplier.</strong>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
              <p className="text-card-foreground">
                Established as a supplier of spare parts, VISMA is now a fast-growing company in the wholesale market
                throughout Russia.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
              <p className="text-card-foreground">
                We offer our customers MRO Mechanical, Electrical parts, Equipment as well as engineering solutions
                together with our partner <span className="text-secondary font-semibold">Neilsoft</span> Engineering
                India <span className="text-secondary underline">(Engineering Services & Design |Neilsoft)</span> to
                deliver efficient solutions to our esteemed customers.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership section */}
        <Card className="bg-background border-border">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-3xl font-bold text-secondary mb-4">Neilsoft</div>
                <div className="space-y-2 text-card-foreground">
                  <p className="font-semibold">Industrial Machinery & Equipment | Manufacturing Automation |</p>
                  <p className="font-semibold">Bulk Material handling | General Engineering & Fabrication</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-16 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-bold text-sm">PARTNER</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">MRO Mechanical</h3>
              <p className="text-sm text-muted-foreground">Comprehensive mechanical parts and solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Electrical Parts</h3>
              <p className="text-sm text-muted-foreground">Quality electrical components and systems</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Equipment</h3>
              <p className="text-sm text-muted-foreground">Industrial equipment and machinery</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-secondary rounded" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Engineering Solutions</h3>
              <p className="text-sm text-muted-foreground">Custom engineering and design services</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
