const testimonials = [
  {
    quote: "Within 2 weeks I had 12 new meetings. Level2B transformed our sales process.",
    author: "Jan",
    role: "SaaS Founder",
  },
  {
    quote: "Finally a tool that delivers: more meetings, less hassle.",
    author: "Lisa",
    role: "Sales Lead",
  },
  {
    quote: "The AI templates feel human. Our reply rate has doubled.",
    author: "Mark",
    role: "BDR",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What our customers say</h2>
          <p className="mt-2 text-slate-600">Real results from sales professionals like you.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.author} className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-slate-700 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="font-semibold text-brand-600">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
