import { Button } from "../../components/ui/Button"
import { Upload, Sparkles, Send, CalendarCheck } from "lucide-react"

export const metadata = {
  title: "Hoe Level2B Werkt — Van Leads naar Meetings in 4 Stappen",
  description: "Ontdek hoe Level2B je cold email outreach automatiseert. Import leads, genereer AI-templates, start campagnes en boek meetings — alles op autopilot.",
}

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Import je leads",
    description: "Upload een CSV of integreer met je CRM (Zapier/HubSpot). Level2B haalt automatisch naam, email, bedrijf en andere velden op.",
    quote: "\"Setup in 2 minuten\" — Jan, Founder",
    metric: null,
  },
  {
    icon: Sparkles,
    step: "2",
    title: "Kies of genereer een template",
    description: "AI helpt je binnen 30 seconden een sterke cold email te schrijven — gepersonaliseerd, professioneel, to-the-point. Of kies een bestaande template.",
    quote: null,
    metric: null,
  },
  {
    icon: Send,
    step: "3",
    title: "Start je campagne",
    description: "Level2B stuurt emails volgens jouw schema, volgt automatisch op bij geen reactie, en monitort alle responses. Jij ziet real-time updates in je dashboard.",
    quote: null,
    metric: null,
  },
  {
    icon: CalendarCheck,
    step: "4",
    title: "Boek meetings",
    description: "Positieve replies krijgen automatisch je Calendly link → de lead kiest een tijd → meeting verschijnt in je agenda. Zo simpel.",
    quote: null,
    metric: "Gemiddeld 8 meetings per campagne voor onze klanten.",
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Van leads naar meetings in 4 simpele stappen
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Level2B maakt cold email outreach eenvoudig. Geen technische kennis nodig, geen uren aan setup. 
            Start binnen 10 minuten.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-24">
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
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl">
                        {step.step}
                      </span>
                      <Icon className="w-8 h-8 text-brand-600" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                    <p className="text-slate-600 text-lg mb-6">{step.description}</p>
                    
                    {step.quote && (
                      <p className="text-slate-500 italic">{step.quote}</p>
                    )}
                    
                    {step.metric && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-lg text-sm font-medium">
                        ✓ {step.metric}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="aspect-[4/3] bg-white rounded-xl border border-slate-200 shadow-lg flex items-center justify-center">
                      <p className="text-slate-400">Screenshot Stap {step.step}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om te beginnen?</h2>
          <p className="text-slate-600 mb-8">
            Start je eerste campagne binnen 10 minuten. 14 dagen gratis, geen creditcard.
          </p>
          <a href="/start-trial">
            <Button size="lg">Start je trial</Button>
          </a>
        </div>
      </section>
    </div>
  )
}
