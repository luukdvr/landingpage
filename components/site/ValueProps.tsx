import { Mail, Zap, Calendar, TrendingUp } from "lucide-react"

const valueProps = [
  {
    icon: Mail,
    title: "AI-personalized cold emails",
    description: "Upload your leads, choose a template, and Level2B sends personalized emails that actually get read — all in the background.",
  },
  {
    icon: Zap,
    title: "Automated follow-ups",
    description: "No response? Level2B follows up intelligently. You never forget a lead and maximize your response rate.",
  },
  {
    icon: Calendar,
    title: "Book meetings instantly via Calendly",
    description: "A positive reply? Level2B instantly shares your Calendly — the lead picks a time. You just make the call.",
  },
  {
    icon: TrendingUp,
    title: "Insight and control",
    description: "Dashboard with open rates, replies, sentiment analysis. You see what works and adjust. No black box.",
  },
]

export function ValueProps() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How Level2B fills your calendar</h2>
          <p className="mt-2 text-slate-600">Automate your outreach, maximize your meetings.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map(vp => {
            const Icon = vp.icon
            return (
              <div key={vp.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{vp.title}</h3>
                <p className="text-slate-600 text-sm">{vp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
