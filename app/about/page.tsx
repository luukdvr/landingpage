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
            We believe good leads shouldn&apos;t be lost due to manual processes. 
            That&apos;s why we automate cold email outreach — without losing the human touch.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our mission</h2>
            <p className="text-lg text-slate-600 mb-8">
              Level2B makes sales outreach accessible for every B2B business. We believe good leads 
              shouldn&apos;t be lost due to manual processes — that&apos;s why we automate it without losing the 
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
                Your growth is our success. We invest in support, onboarding, and features that 
                truly make an impact on your results.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-slate-600">
                Sales evolves, and we evolve with it. We listen to feedback and continuously build 
                new features that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8">Our story</h2>
          
          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  2024
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">The beginning</h3>
                <p className="text-slate-600">
                  Level2B was founded out of frustration with existing sales tools. Too complex, too expensive, 
                  and focused on large enterprises. We wanted to build something for growth companies: simple, 
                  effective, affordable.
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
                <h3 className="font-semibold text-lg mb-2">Scaling & learning</h3>
                <p className="text-slate-600">
                  500+ meetings booked for our customers, 100+ teams using Level2B daily. 
                  We learn every day and invest in features that truly make an impact.
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
                <h3 className="font-semibold text-lg mb-2">The future</h3>
                <p className="text-slate-600">
                  API access, more CRM integrations, enterprise features, and AI-powered insights that 
                  help you run even smarter campaigns. We&apos;re just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brand-600 to-accent-600 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to be part of our story?</h2>
          <p className="text-lg text-white/90 mb-8">
            Start your trial and experience for yourself how Level2B transforms your sales process.
          </p>
          <a href="/start-trial">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-50">
              Start free trial
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
