const metrics = [
  {
    value: "500+",
    label: "Sales meetings booked this month",
  },
  {
    value: "4x",
    label: "More replies than manual emailing",
  },
  {
    value: "2 hours",
    label: "Saved per day per sales rep",
  },
]

export function Metrics() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {metrics.map(m => (
            <div key={m.label}>
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                {m.value}
              </div>
              <p className="text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
