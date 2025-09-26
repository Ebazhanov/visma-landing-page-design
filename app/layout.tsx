import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "VISMA – Industrial Automation & Engineering Parts Supplier",
  description: "VISMA supplies industrial automation and engineering parts, offering expert services and global partnerships. Explore our innovative solutions and a wide range of leading brands in automation, logistics, and engineering.",
  generator: "v0.app",
  keywords: [
    "VISMA",
    "industrial automation",
    "engineering parts",
    "automation supplier",
    "engineering services",
    "global partnerships",
    "logistics",
    "industrial brands",
    "automation solutions"
  ],
  authors: [{ name: "VISMA", url: "https://ooovisma.ru" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#0a2540",
  openGraph: {
    title: "VISMA – Industrial Automation & Engineering Parts Supplier",
    description: "VISMA supplies industrial automation and engineering parts, offering expert services and global partnerships. Explore our innovative solutions and a wide range of leading brands in automation, logistics, and engineering.",
    url: "https://ooovisma.ru",
    siteName: "VISMA",
    images: [
      {
        url: "https://ooovisma.ru/images/visma-hero.png",
        width: 1200,
        height: 630,
        alt: "VISMA Industrial Automation & Engineering Parts Supplier"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VISMA – Industrial Automation & Engineering Parts Supplier",
    description: "VISMA supplies industrial automation and engineering parts, offering expert services and global partnerships.",
    images: ["https://ooovisma.ru/images/visma-hero.png"]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif' }}>
        <Suspense fallback={null}>
          <LanguageProvider>{children}</LanguageProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
