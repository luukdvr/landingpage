import { Upload, Sparkles, Send, TrendingUp } from "lucide-react"
import { Button } from "../../components/ui/Button"

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Voeg je leads toe",
    description: "Upload een CSV of koppel je CRM. Level2B importeert automatisch naam, email, bedrijf en andere velden.",
    quote: '"Setup in 2 minuten" — Jan, Founder',
  },
  {
    icon: Sparkles,
    step: "2",
    title: "Genereer AI emails",
    description: "Onze AI helpt je in 30 seconden een sterke email te schrijven — gepersonaliseerd, professioneel, to-the-point. Of kies een bestaande template.",
    quote: null,
  },
  {
    icon: Send,
    step: "3",
    title: "Track je outreach",
    description: "Beheer al je emails, follow-ups en responses vanuit één dashboard. Zie real-time updates en analytics over je campagnes.",
    quote: null,
  },
  {
    icon: TrendingUp,
    step: "4",
    title: "Optimaliseer met data",
    description: "Track conversie rates, lead sources, email performance en meer. Gebruik insights om je strategie te verbeteren en meer deals te sluiten.",
    quote: "Gemiddeld 3x betere response rate voor onze klanten.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hoe het werkt</h2>
          <p className="text-xl text-charcoal-600">Van leads naar deals in 4 simpele stappen.</p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isEven = idx % 2 === 0
            
            return (
              <div 
                key={step.step} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-600 text-white font-bold">
                      {step.step}
                    </span>
                    <Icon className="w-8 h-8 text-terracotta-600" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-charcoal-600 mb-4 leading-relaxed">{step.description}</p>
                  
                  {step.quote && (
                    <p className="text-sm italic text-charcoal-500 bg-terracotta-50 p-4 rounded-lg border-l-4 border-terracotta-600">{step.quote}</p>
                  )}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gradient-to-br from-terracotta-50 to-white rounded-xl border border-charcoal-200 shadow-lg flex items-center justify-center">
                    <p className="text-charcoal-400 text-sm">Level2B Dashboard - Stap {step.step}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/login">
            <Button size="lg">Klaar om te starten? Begin nu gratis</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
