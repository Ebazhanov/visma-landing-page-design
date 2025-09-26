"use client"

import { useLanguage } from "@/contexts/language-context"
import { Target, Globe } from "lucide-react"

export function VisionSection() {
  const { t } = useLanguage()

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("vision.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-card-foreground leading-relaxed font-medium">{t("vision.point1")}</p>
                </div>
              </div>
            </div>

            <div className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-card-foreground leading-relaxed font-medium">{t("vision.point2")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Image - Responsive, after blocks */}
          <div className="w-full flex justify-center items-center mb-12 px-2 sm:px-0">
            <img
              src="/images/Our Mission.png"
              alt="Our Mission"
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto object-contain rounded-xl shadow-lg"
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
