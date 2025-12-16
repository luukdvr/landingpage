import { Mail, Users, TrendingUp, Calendar, Clock, Building2 } from "lucide-react"

const valueProps = [
  {
    icon: Mail,
    title: "Intelligent Email Outreach",
    description: "Generate personalised emails with our smart assistant. Add context and company information for optimal results. Save your best templates for reuse.",
  },
  {
    icon: Users,
    title: "Centralised Lead Database",
    description: "Manage all your leads in one place. Tag, filter and organise prospects. Add notes, track activities and maintain conversation history.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Real-time insight into your sales pipeline. Track conversion rates, lead sources, email performance and more. Visualise trends and optimise your strategy.",
  },
  {
    icon: Calendar,
    title: "Integrated Calendar",
    description: "Connect your Calendly account and manage all sales meetings from one dashboard. Automatic synchronisation and clear planning overview.",
  },
  {
    icon: Clock,
    title: "Complete Activity Timeline",
    description: "See all interactions with leads in one timeline. Emails, notes, meetings and status changes. Never miss an important follow-up again.",
  },
  {
    icon: Building2,
    title: "Multi-Organisation Support",
    description: "Manage multiple companies or teams within one account. Perfect for agencies or businesses with different divisions.",
  },
]

export function ValueProps() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-terracotta-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need to grow</h2>
          <p className="text-xl text-charcoal-600">Powerful features that transform your sales process</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map(vp => {
            const Icon = vp.icon
            return (
              <div key={vp.title} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-charcoal-100">
                <div className="w-14 h-14 bg-terracotta-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-terracotta-600" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{vp.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{vp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
