import { Button } from "../../components/ui/Button"
import { SecurityBadge } from "./SecurityBadge"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-terracotta-500 to-terracotta-700">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-800/30 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-32 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Level2B - AI-Powered B2B Sales Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Verhoog je sales efficiency met geautomatiseerde lead tracking, 
            AI email outreach en data-driven insights. Alles wat je nodig hebt om meer deals te sluiten.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">AI-gegenereerde email templates</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Automatische lead tracking</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Real-time analytics</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Calendly integratie</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-terracotta-600 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Start Gratis
            </a>
            <a 
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg border-2 border-white/30 backdrop-blur-sm transition-all duration-200"
            >
              Bekijk Features
            </a>
          </div>
          
          <div className="mt-8 flex justify-center">
            <SecurityBadge />
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8">
            <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
              <p className="text-white/60 text-sm">Level2B Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
