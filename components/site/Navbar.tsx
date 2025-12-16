import Link from "next/link"
import { Button } from "../../components/ui/Button"
import { Logo } from "../../components/ui/Logo"

const links = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
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
          <Link href="/login">
            <Button variant="secondary" size="sm">Log In</Button>
          </Link>
          <Link href="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
