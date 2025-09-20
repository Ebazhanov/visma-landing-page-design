export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VISMA</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted technical MRO supplier with global reach and local advantage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>MRO Mechanical</li>
              <li>Electrical Parts</li>
              <li>Equipment Supply</li>
              <li>Engineering Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>About Us</li>
              <li>Partnerships</li>
              <li>Quality Assurance</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Russia Market</p>
              <p>Technical Support</p>
              <p>Partnership Inquiries</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 VISMA. All rights reserved. Global Reach. Local Advantage.</p>
        </div>
      </div>
    </footer>
  )
}
