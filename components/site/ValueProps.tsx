import { Mail, Users, TrendingUp, Calendar, Clock, Building2 } from "lucide-react"

const valueProps = [
  {
    icon: Mail,
    title: "Slimme Email Outreach met AI",
    description: "Genereer gepersonaliseerde B2B emails met onze AI assistent. Voeg context en bedrijfsinfo toe voor optimale resultaten. Bewaar je beste templates voor hergebruik.",
  },
  {
    icon: Users,
    title: "Centrale Lead Database",
    description: "Beheer al je leads op één plek. Tag, filter en organiseer prospects. Voeg notes toe, track activiteiten en houd conversaties bij.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Beslissingen",
    description: "Real-time inzicht in je sales pipeline. Track conversie rates, lead sources, email performance en meer. Visualiseer trends en optimaliseer je strategie.",
  },
  {
    icon: Calendar,
    title: "Geïntegreerde Agenda",
    description: "Koppel je Calendly account en beheer alle sales meetings vanuit één dashboard. Automatische sync en overzichtelijke planning.",
  },
  {
    icon: Clock,
    title: "Compleet Activiteitenoverzicht",
    description: "Zie alle interacties met leads in één tijdlijn. Emails, notes, meetings en status changes. Mis nooit meer een belangrijke follow-up.",
  },
  {
    icon: Building2,
    title: "Multi-Organisatie Support",
    description: "Beheer meerdere bedrijven of teams binnen één account. Perfect voor agencies of bedrijven met verschillende divisies.",
  },
]

export function ValueProps() {
  return (
    <section id=\"features\" className=\"py-20 bg-gradient-to-b from-terracotta-50/30 to-white\">
      <div className=\"mx-auto max-w-7xl px-4\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-4xl md:text-5xl font-bold mb-4\">Alles wat je nodig hebt om te groeien</h2>
          <p className=\"text-xl text-charcoal-600\">AI-powered features die je sales proces transformeren</p>
        </div>
        
        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {valueProps.map(vp => {
            const Icon = vp.icon
            return (
              <div key={vp.title} className=\"bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-charcoal-100\">
                <div className=\"w-14 h-14 bg-terracotta-100 rounded-lg flex items-center justify-center mb-6\">
                  <Icon className=\"w-7 h-7 text-terracotta-600\" />
                </div>
                <h3 className=\"text-2xl font-bold text-charcoal-900 mb-4\">{vp.title}</h3>
                <p className=\"text-charcoal-600 leading-relaxed\">{vp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
