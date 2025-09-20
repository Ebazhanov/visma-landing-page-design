import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/visma-hero.png')",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">VISMA</h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 text-balance">Global Reach. Local Advantage.</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Your trusted partner for MRO Mechanical, Electrical parts, Equipment and engineering solutions across Russia
          and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Explore Products
          </Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
