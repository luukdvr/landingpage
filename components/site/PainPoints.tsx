import { Frown, Clock, MessageSquareX } from "lucide-react"
import { Button } from "../../components/ui/Button"

const pains = [
  {
    icon: Frown,
    title: "Too few meetings on your calendar?",
    description: "Manual cold emailing takes hours, gets little response, and you miss follow-ups. Your pipeline stays empty.",
  },
  {
    icon: Clock,
    title: "Lost time = lost deals",
    description: "Every day you don't do outreach, a competitor gets ahead. Sales is a numbers game — but you don't have time to play it.",
  },
  {
    icon: MessageSquareX,
    title: "Inconsistent messaging hurts your brand",
    description: "Ad-hoc emails without strategy? Prospects notice. You seem unprofessional and lose trust.",
  },
]

export function PainPoints() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Do you recognize this?</h2>
          <p className="mt-2 text-slate-600">These problems cost you revenue every day.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map(p => {
            const Icon = p.icon
            return (
              <div key={p.title} className="bg-white p-6 rounded-xl border border-slate-200">
                <Icon className="w-10 h-10 text-brand-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm">{p.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-10 text-center">
          <a href="/start-trial">
            <Button>Let us solve it for you — start your trial now</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
