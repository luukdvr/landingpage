import { Upload, Sparkles, Send, TrendingUp } from "lucide-react"
import { Button } from "../../components/ui/Button"

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Add your leads",
    description: "Upload a CSV or connect your CRM. Level2B automatically imports name, email, company and other fields.",
    quote: '"Set up in 2 minutes" — Jan, Founder',
  },
  {
    icon: Sparkles,
    step: "2",
    title: "Generate smart emails",
    description: "Our intelligent assistant helps you write a strong email in 30 seconds — personalised, professional, to-the-point. Or choose an existing template.",
    quote: null,
  },
  {
    icon: Send,
    step: "3",
    title: "Track your outreach",
    description: "Manage all your emails, follow-ups and responses from one dashboard. See real-time updates and analytics on your campaigns.",
    quote: null,
  },
  {
    icon: TrendingUp,
    step: "4",
    title: "Optimise with data",
    description: "Track conversion rates, lead sources, email performance and more. Use insights to improve your strategy and close more deals.",
    quote: "On average 3x better response rate for our customers.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-charcoal-600">From leads to deals in 4 simple steps.</p>
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
            <Button size="lg">Ready to start? Begin free now</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
