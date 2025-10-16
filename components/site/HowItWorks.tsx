import { Upload, Sparkles, Send, CalendarCheck } from "lucide-react"
import { Button } from "../../components/ui/Button"

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Import your leads",
    description: "Upload a CSV or integrate with your CRM (Zapier/HubSpot). Level2B automatically fetches name, email, company, and other fields.",
    quote: '"Setup in 2 minutes" — Jan, Founder',
  },
  {
    icon: Sparkles,
    step: "2",
    title: "Choose or generate a template",
    description: "AI helps you write a strong cold email in 30 seconds — personalized, professional, to-the-point. Or choose an existing template.",
    quote: null,
  },
  {
    icon: Send,
    step: "3",
    title: "Start your campaign",
    description: "Level2B sends emails on your schedule, automatically follows up if there's no response, and monitors all replies. You see real-time updates in your dashboard.",
    quote: null,
  },
  {
    icon: CalendarCheck,
    step: "4",
    title: "Book meetings",
    description: "Positive replies automatically get your Calendly link → the lead picks a time → meeting appears in your calendar. That simple.",
    quote: "On average, 8 meetings per campaign for our customers.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-slate-600">From leads to meetings in 4 simple steps.</p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isEven = idx % 2 === 0
            
            return (
              <div 
                key={step.step} 
                className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm">
                      {step.step}
                    </span>
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  
                  {step.quote && (
                    <p className="text-sm italic text-slate-500">{step.quote}</p>
                  )}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
                    <p className="text-slate-400 text-sm">Screenshot Step {step.step}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/start-trial">
            <Button size="lg">Ready to get started? Start your trial</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
