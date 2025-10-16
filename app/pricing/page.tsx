import { Button } from "../../components/ui/Button"
import { Check } from "lucide-react"

export const metadata = {
  title: "Pricing — Level2B Sales Meetings Platform",
  description: "Transparent pricing for every team size. Starting at €49/month. 14-day free trial, no credit card required.",
}

const tiers = [
  {
    name: "Starter",
    price: "49",
    description: "For individual sales reps and founders",
    features: [
      "500 leads",
      "1,000 emails/month",
      "1 user",
      "Basic templates",
      "Email support",
      "Calendly integration",
    ],
    cta: "Start 14-day trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "149",
    description: "For growing sales teams",
    badge: "MOST POPULAR",
    features: [
      "2,500 leads",
      "10,000 emails/month",
      "3 users",
      "Unlimited templates + A/B testing",
      "Sentiment analysis",
      "Priority support + onboarding call",
      "CRM integrations (Zapier/HubSpot)",
    ],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "399",
    description: "For enterprise sales organizations",
    features: [
      "Unlimited leads",
      "50,000 emails/month",
      "10 users",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "SLA & Priority support",
    ],
  cta: "Start free trial",
    highlighted: false,
  },
]

const comparisonFeatures = [
  { name: "Leads", starter: "500", growth: "2.500", scale: "Onbeperkt" },
  { name: "Emails/maand", starter: "1.000", growth: "10.000", scale: "50.000" },
  { name: "Gebruikers", starter: "1", growth: "3", scale: "10" },
  { name: "AI Templates", starter: "✓", growth: "✓", scale: "✓" },
  { name: "A/B Testing", starter: "✗", growth: "✓", scale: "✓" },
  { name: "Sentiment Analysis", starter: "✗", growth: "✓", scale: "✓" },
  { name: "CRM Integraties", starter: "✗", growth: "✓", scale: "✓" },
  { name: "API Toegang", starter: "✗", growth: "✗", scale: "✓" },
  { name: "Dedicated Support", starter: "✗", growth: "✗", scale: "✓" },
]

const faqs = [
  {
    q: "Kan ik opzeggen?",
    a: "Ja, altijd. Geen lock-in, geen verplichtingen.",
  },
  {
    q: "Wat als ik meer emails nodig heb?",
    a: "Upgrade any time of betaal per extra batch. Neem contact op voor custom pricing.",
  },
  {
    q: "Is de trial echt gratis?",
    a: "Ja, geen creditcard, geen verplichtingen. 14 dagen vol toegang tot alle features van je tier.",
  },
  {
    q: "Wat gebeurt er na de trial?",
    a: "Je kiest zelf of je doorgaat. Geen automatische charging, geen verrassingen.",
  },
]

export default function PricingPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transparante pricing voor elke teamgrootte
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start met 14 dagen gratis. Geen creditcard nodig. Opzeggen kan altijd.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map(tier => (
              <div 
                key={tier.name}
                className={`relative bg-white rounded-2xl border-2 p-8 flex flex-col ${
                  tier.highlighted ? 'border-brand-600 shadow-xl' : 'border-slate-200'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex px-4 py-1 bg-brand-600 text-white text-sm font-semibold rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{tier.description}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">€{tier.price}</span>
                    <span className="text-slate-500">/maand</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="/start-trial" className="block">
                  <Button 
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Feature vergelijking</h2>
          
          <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">Starter</th>
                  <th className="py-4 px-6 text-center font-semibold">Growth</th>
                  <th className="py-4 px-6 text-center font-semibold">Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={feature.name} className={idx % 2 === 0 ? 'bg-slate-50' : ''}>
                    <td className="py-3 px-6 font-medium">{feature.name}</td>
                    <td className="py-3 px-6 text-center">{feature.starter}</td>
                    <td className="py-3 px-6 text-center">{feature.growth}</td>
                    <td className="py-3 px-6 text-center">{feature.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-600 to-accent-600">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Start vandaag nog met meer meetings</h2>
          <p className="text-lg text-white/90 mb-8">
            14 dagen gratis, alle features inbegrepen. Geen creditcard, geen verplichtingen.
          </p>
          <a href="/start-trial">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-50">
              Start gratis trial
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
