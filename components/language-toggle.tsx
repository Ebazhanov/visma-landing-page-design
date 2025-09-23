"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ru" : "en")}
      className="text-primary-foreground hover:text-accent hover:bg-primary/20"
    >
      {language === "en" ? "RU" : "EN"}
    </Button>
  )
}
