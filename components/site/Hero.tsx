import { Button } from "../../components/ui/Button"
import { SecurityBadge } from "./SecurityBadge"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 via-transparent to-accent-600/10 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-32 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Stop wasting time on manual outreach. Let AI book your sales meetings.
          </h1>
          
          <p className="mt-6 text-lg text-slate-600">
            Level2B automatically sends personalized cold emails to your leads and books meetings via Calendly —
            so you can focus on closing deals, not managing your inbox.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/start-trial">
              <Button size="lg">Start free trial</Button>
            </a>
            <a href="/how-it-works">
              <Button variant="secondary" size="lg">See how it works</Button>
            </a>
          </div>
          
          <div className="mt-8 flex justify-center">
            <SecurityBadge />
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-xl shadow-2xl border border-slate-200 bg-white p-8">
            <div className="aspect-video bg-gradient-to-br from-brand-50 to-accent-50 rounded-lg flex items-center justify-center">
              <p className="text-slate-400 text-sm">Dashboard Screenshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
