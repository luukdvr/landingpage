import { Button } from "../../components/ui/Button"

export function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-gradient-to-br from-brand-600 to-accent-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to fill your calendar with qualified meetings?
          </h2>
          
          <p className="text-lg text-white/90 mb-8">
            Try Level2B free for 14 days. No credit card required. Cancel anytime.
          </p>
          
          <a href="/start-trial">
            <Button 
              size="lg" 
              className="bg-white text-brand-600 hover:bg-slate-50"
            >
              Start free trial
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
