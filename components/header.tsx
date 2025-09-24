"use client"

import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">VISMA</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="hover:text-accent transition-colors">
            {t("nav.products")}
          </a>
          <a href="#partnerships" className="hover:text-accent transition-colors">
            {t("nav.partnerships")}
          </a>
          <a href="#vision" className="hover:text-accent transition-colors">
            Our Vision
          </a>
          <a href="#value" className="hover:text-accent transition-colors">
            Our Value
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
