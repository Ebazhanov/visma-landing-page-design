"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VISMA</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t("footer.services.mro")}</li>
              <li>{t("footer.services.electrical")}</li>
              <li>{t("footer.services.engineering")}</li>
              <li>{t("footer.services.consulting")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t("nav.about")}</li>
              <li>{t("nav.partnerships")}</li>
              <li>Quality Assurance</li>
              <li>{t("nav.contact")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Russia Market</p>
              <p>Technical Support</p>
              <p>{t("footer.partnershipInquiries")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 VISMA. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
