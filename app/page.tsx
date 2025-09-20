import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BrandsSection } from "@/components/brands-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <Footer />
    </main>
  )
}
