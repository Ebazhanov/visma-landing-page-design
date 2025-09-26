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
