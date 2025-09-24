"use client"

import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
        style={{
          backgroundImage: "url('/images/visma-hero.png')",
          filter: "brightness(1.2) contrast(1.1)",
        }}
      />

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/10" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">VISMA</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-8 text-balance">{t("hero.tagline")}</p>
        <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Removed Explore Products and Contact Us buttons */}
        </div>
      </div>
    </section>
  )
}
