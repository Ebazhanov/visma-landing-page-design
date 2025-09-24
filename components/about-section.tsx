"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Wrench, Zap, Cog, DraftingCompass as Drafting } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Who we are section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary mb-12 text-balance">{t("about.title")}</h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
              <p className="text-card-foreground">
                <strong>{t("about.point1")}</strong>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
              <p className="text-card-foreground">{t("about.point2")}</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
              <p className="text-card-foreground">
                {/* Render the link for both languages using dangerouslySetInnerHTML */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("about.point3").replace(
                      /(Engineering Services & Design \|Neilsoft|Инженерные услуги и проектирование \|Neilsoft)/g,
                      '<a href="https://neilsoft.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">$1</a>'
                    ),
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Partnership section */}
        <Card className="bg-background border-border">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-3xl font-bold text-secondary mb-4">{t("about.partner")}</div>
                <div className="space-y-2 text-card-foreground">
                  <p className="font-semibold">{t("about.partnerServices")}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-16 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-bold text-sm">{t("about.partnerLabel")}</span>
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
                <Wrench className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("about.services.mro")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.services.mroDesc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("about.services.electrical")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.services.electricalDesc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cog className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("about.services.equipment")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.services.equipmentDesc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Drafting className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("about.services.engineering")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.services.engineeringDesc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
