import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">VISMA</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-accent transition-colors">
            About Us
          </a>
          <a href="#products" className="hover:text-accent transition-colors">
            Products
          </a>
          <a href="#partnerships" className="hover:text-accent transition-colors">
            Partnerships
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex">
          Get Quote
        </Button>
      </div>
    </header>
  )
}
