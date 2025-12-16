import { Frown, Clock, MessageSquareX } from "lucide-react"
import { Button } from "../../components/ui/Button"

const pains = [
  {
    icon: Frown,
    title: "Te weinig meetings in je agenda?",
    description: "Handmatige cold emailing kost uren, levert weinig respons op en je mist follow-ups. Je pipeline blijft leeg.",
  },
  {
    icon: Clock,
    title: "Verloren tijd = verloren deals",
    description: "Elke dag dat je geen outreach doet, loopt een concurrent voor. Sales is een nummerspel — maar jij hebt geen tijd om het te spelen.",
  },
  {
    icon: MessageSquareX,
    title: "Inconsistente messaging schaadt je merk",
    description: "Ad-hoc emails zonder strategie? Prospects merken het op. Je oogt onprofessioneel en verliest vertrouwen.",
  },
]

export function PainPoints() {
  return (
    <section className="py-20 bg-charcoal-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Herken je dit?</h2>
          <p className="text-xl text-charcoal-600">Deze problemen kosten je elke dag omzet.</p>
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
            <Button size="lg">Laat ons het voor je oplossen — start nu</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
