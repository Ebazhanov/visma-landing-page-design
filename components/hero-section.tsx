"use client"

import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/global-logistics.png')",
          filter: "brightness(1.08) contrast(1.08) blur(0.5px)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "rgba(245, 245, 245, 0.95)", // soft blend to match background
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
        }}
      />
      {/* Additional overlay for better text readability and seamless blend */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(245,245,245,1) 0%, rgba(245,245,245,0.7) 10%, rgba(245,245,245,0.7) 90%, rgba(245,245,245,1) 100%)"
      }} />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-8 text-balance">VISMA</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-10 text-balance">{t("hero.tagline")}</p>
        <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto text-pretty">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Removed Explore Products and Contact Us buttons */}
        </div>
      </div>
    </section>
  )
}
