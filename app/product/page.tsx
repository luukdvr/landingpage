import { Button } from "../../components/ui/Button"
import { MessageSquare, Sparkles, Calendar, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Cold Email Automation That Books Sales Meetings | Level2B",
  description: "Automate your cold outreach with AI. Level2B sends personalized emails and books meetings via Calendly — so you can focus on closing deals.",
  openGraph: {
    title: "Level2B — Cold Email Automation for More Meetings",
    images: ["/og-product.png"],
    description: "AI-powered outreach that turns leads into meetings."
  },
}

const features = [
  {
    icon: MessageSquare,
    title: "Cold Email Outreach, on autopilot",
    description: "See at a glance which emails have been sent, who replied, and their sentiment. Filter by status, sentiment, date — so you can quickly act on warm leads.",
  },
  {
    icon: Sparkles,
    title: "AI Templates that convert",
    description: "Generate professional, personalized templates in seconds. Our AI understands B2B sales and writes emails that actually get read. Adjust the tone or use as-is.",
  },
  {
    icon: Calendar,
    title: "From reply to meeting in 1 click",
    description: "Positive reply? Level2B automatically sends your Calendly link. The lead picks a time, you get the notification. No more back-and-forth emails.",
  },
  {
    icon: TrendingUp,
    title: "Insight into what works",
    description: "Open rates, reply rates, conversion funnel. See which templates perform and optimize your campaigns for maximum ROI. Data-driven sales outreach.",
  },
]

export default function ProductPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Cold Email Outreach, on autopilot
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Level2B automates your entire cold email workflow — from lead import to meeting booking. 
            You focus on closing deals, we handle the pipeline.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-20">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              const isEven = idx % 2 === 0
              
              return (
                <div 
                  key={feature.title}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <Icon className="w-12 h-12 text-brand-600 mb-4" />
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-slate-600 text-lg">{feature.description}</p>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
                      <p className="text-slate-400">Screenshot: {feature.title}</p>
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
          <h2 className="text-3xl font-bold mb-6">Klaar om meer meetings te boeken?</h2>
          <p className="text-slate-600 mb-8">
            Probeer Level2B 14 dagen gratis. Geen creditcard, geen verplichtingen.
          </p>
          <a href="/start-trial">
            <Button size="lg">Probeer het zelf — start je trial</Button>
          </a>
        </div>
      </section>
    </div>
  )
}
