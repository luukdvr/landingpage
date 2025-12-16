const metrics = [
  {
    value: "10+ Hours",
    label: "Saved per week per sales rep",
  },
  {
    value: "3x",
    label: "Faster email outreach",
  },
  {
    value: "50+",
    label: "Smart templates available",
  },
  {
    value: "Real-time",
    label: "Analytics & insights dashboard",
  },
]

export function Metrics() {
  return (
    <section className="py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Level2B in numbers
          </h2>
          <p className="text-white/90 text-lg">Measurable impact on your sales process</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {metrics.map(m => (
            <div key={m.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {m.value}
              </div>
              <p className="text-white/90">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
