const testimonials = [
  {
    quote: "Within 2 weeks I had 12 new meetings. Level2B has transformed our sales process.",
    author: "Jan",
    role: "SaaS Founder",
  },
  {
    quote: "Finally a tool that delivers: more meetings, less hassle.",
    author: "Lisa",
    role: "Sales Lead",
  },
  {
    quote: "The smart templates feel human. Our reply rate has doubled.",
    author: "Mark",
    role: "BDR",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What our customers say</h2>
          <p className="text-xl text-charcoal-600">Real results from sales professionals like you.</p>
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
