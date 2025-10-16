import { Button } from "../../components/ui/Button"
import { Target, Heart, Zap } from "lucide-react"

export const metadata = {
  title: "About Level2B — Mission, Team, and Values",
  description: "Level2B makes sales outreach accessible for every B2B business. Discover our story and why we do what we do.",
}

export default function AboutPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Sales outreach for everyone
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe good leads shouldn't be lost due to manual processes. 
            That's why we automate cold email outreach — without losing the human touch.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our mission</h2>
            <p className="text-lg text-slate-600 mb-8">
              Level2B makes sales outreach accessible for every B2B business. We believe good leads 
              shouldn't be lost due to manual processes — that's why we automate it without losing the 
              human touch.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Too many sales teams lose time on repetitive work: writing emails, tracking follow-ups, 
              scheduling meetings. That time is better spent on what really matters: building relationships 
              and closing deals.
            </p>
            <p className="text-lg text-slate-600">
              With Level2B, we automate the grunt work so sales professionals can focus on 
              what they do best: selling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-slate-600">
                Open about data, security, pricing. No hidden fees, no surprises. 
                What you see is what you get.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-100 text-accent-600 mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer success</h3>
              <p className="text-slate-600">
                Jouw groei is ons succes. We investeren in support, onboarding en features die 
                écht impact maken op je resultaten.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-slate-600">
                Sales evolueert, en wij evolueren mee. We luisteren naar feedback en bouwen 
                continu nieuwe features die het verschil maken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8">Ons verhaal</h2>
          
          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  2024
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">De start</h3>
                <p className="text-slate-600">
                  Level2B werd opgericht uit frustratie met bestaande sales tools. Te complex, te duur, 
                  en gefocust op grote enterprises. Wij wilden iets bouwen voor groeibedrijven: simpel, 
                  effectief, betaalbaar.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                  2025
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Schalen & leren</h3>
                <p className="text-slate-600">
                  500+ meetings geboekt voor onze klanten, 100+ teams die Level2B dagelijks gebruiken. 
                  We leren elke dag bij en investeren in features die écht impact maken.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold">
                  Roadmap
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">De toekomst</h3>
                <p className="text-slate-600">
                  API toegang, meer CRM-integraties, enterprise features, en AI-powered insights die 
                  je helpen nog slimmere campagnes te draaien. We zijn net begonnen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-600 to-accent-600 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Wil je deel uitmaken van ons verhaal?</h2>
          <p className="text-lg text-white/90 mb-8">
            Start je trial en ervaar zelf hoe Level2B je sales proces transformeert.
          </p>
          <a href="/start-trial">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-50">
              Start gratis trial
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
