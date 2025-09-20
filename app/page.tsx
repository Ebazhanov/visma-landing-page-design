import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BrandsSection } from "@/components/brands-section"
import { VisionSection } from "@/components/vision-section"
import { ValueSection } from "@/components/value-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <VisionSection />
      <ValueSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
