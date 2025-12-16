import { Frown, Clock, MessageSquareX } from "lucide-react"
import { Button } from "../../components/ui/Button"

const pains = [
  {
    icon: Frown,
    title: "Too few meetings in your diary?",
    description: "Manual cold emailing takes hours, delivers little response and you miss follow-ups. Your pipeline stays empty.",
  },
  {
    icon: Clock,
    title: "Lost time = lost deals",
    description: "Every day you don't do outreach, a competitor gets ahead. Sales is a numbers game — but you don't have time to play it.",
  },
  {
    icon: MessageSquareX,
    title: "Inconsistent messaging damages your brand",
    description: "Ad-hoc emails without strategy? Prospects notice. You appear unprofessional and lose trust.",
  },
]

export function PainPoints() {
  return (
    <section className="py-20 bg-charcoal-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Do you recognise this?</h2>
          <p className="text-xl text-charcoal-600">These problems cost you revenue every day.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map(p => {
            const Icon = p.icon
            return (
              <div key={p.title} className="bg-white p-8 rounded-xl border border-charcoal-200 hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 text-terracotta-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">{p.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/login">
            <Button size="lg">Let us solve it for you — start now</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
