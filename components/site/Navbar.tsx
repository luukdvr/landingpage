import Link from "next/link"
import { Button } from "../../components/ui/Button"

const links = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L2B</span>
          </div>
          <span className="font-semibold text-slate-900">Level2B</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              className="text-sm text-slate-700 hover:text-slate-900 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button variant="secondary" size="sm">Contact</Button>
          </Link>
          <Link href="/start-trial">
            <Button size="sm">Start free trial</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
