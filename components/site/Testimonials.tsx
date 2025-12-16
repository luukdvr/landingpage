const testimonials = [
  {
    quote: "Binnen 2 weken had ik 12 nieuwe meetings. Level2B heeft ons sales proces getransformeerd.",
    author: "Jan",
    role: "SaaS Founder",
  },
  {
    quote: "Eindelijk een tool die levert: meer meetings, minder gedoe.",
    author: "Lisa",
    role: "Sales Lead",
  },
  {
    quote: "De AI templates voelen menselijk aan. Onze reply rate is verdubbeld.",
    author: "Mark",
    role: "BDR",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Wat onze klanten zeggen</h2>
          <p className="text-xl text-charcoal-600">Echte resultaten van sales professionals zoals jij.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.author} className="bg-gradient-to-br from-terracotta-50 to-white p-8 rounded-xl border border-terracotta-100 hover:shadow-lg transition-shadow">
              <p className="text-charcoal-700 mb-6 italic text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-terracotta-600 flex items-center justify-center">
                  <span className="font-semibold text-white text-lg">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-charcoal-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
