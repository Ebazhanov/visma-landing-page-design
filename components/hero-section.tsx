"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

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
        <p className="text-xl md:text-2xl text-foreground mb-8 text-balance">{t("hero.tagline")}</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">{t("hero.description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            {t("hero.exploreProducts")}
          </Button>
          <Button size="lg" variant="outline">
            {t("hero.contactUs")}
          </Button>
        </div>
      </div>
    </section>
  )
}
