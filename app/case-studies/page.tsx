import { Button } from "../../components/ui/Button"
import { TrendingUp, Users, Target } from "lucide-react"

export const metadata = {
  title: "Success Stories — How Customers Book More Meetings with Level2B",
  description: "Discover how sales teams triple their meeting volume with Level2B's AI-powered cold email automation.",
}

const caseStudies = [
  {
    company: "TechStart BV",
    industry: "SaaS",
    icon: Target,
    headline: "How TechStart booked 32 meetings in 4 weeks with Level2B",
    metrics: {
      before: "2 meetings/month",
      after: "8 meetings/week",
      replyRate: "3% → 14%",
    },
    quote: "Level2B transformed our sales process. We always struggled with consistent outreach, but now everything runs on autopilot. Our pipeline is 3x bigger.",
    author: "Jan de Vries",
    role: "Founder & CEO",
    keyTakeaway: "By combining AI templates with automated follow-ups, reply rate increased by 350%. The meeting booking feature saved the team 10+ hours per week on scheduling.",
  },
  {
    company: "GrowthCo",
    industry: "B2B Marketing",
    icon: TrendingUp,
    headline: "From 5 to 25 meetings per month — GrowthCo's Level2B story",
    metrics: {
      before: "5 meetings/month",
      after: "25 meetings/month",
      replyRate: "6% → 18%",
    },
    quote: "As a small team, we didn't have time for manual cold emailing. Level2B gave us the scale of a large sales team, without the overhead.",
    author: "Lisa van Dam",
    role: "Head of Sales",
    keyTakeaway: "Sentiment analysis helped the team respond quickly to warm leads. With Calendly integration, 80% of positive replies were instantly converted into meetings.",
  },
  {
    company: "DataDrive",
    industry: "Analytics Platform",
    icon: Users,
    headline: "How DataDrive booked 50+ enterprise meetings in Q1",
    metrics: {
      before: "Manual outreach, inconsistent",
      after: "50+ enterprise meetings in 3 months",
      replyRate: "4% → 16%",
    },
    quote: "We tried to scale manually, but it was unsustainable. Level2B gave us the control and insights we needed to close enterprise deals.",
    author: "Mark Peters",
    role: "VP Sales",
    keyTakeaway: "A/B testing templates led to a 4x improvement in response rates. The team could focus on closing deals instead of writing emails.",
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Echte resultaten van sales teams zoals jij
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ontdek hoe onze klanten hun meeting volume hebben verdrievoudigd met Level2B's AI-powered automation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-20">
            {caseStudies.map((cs, idx) => {
              const Icon = cs.icon
              
              return (
                <div key={cs.company} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-brand-600" />
                      <div>
                        <h3 className="font-bold text-xl">{cs.company}</h3>
                        <p className="text-sm text-slate-500">{cs.industry}</p>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-6">{cs.headline}</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-slate-50 rounded-xl">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Voor Level2B</p>
                        <p className="font-bold text-lg">{cs.metrics.before}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Na Level2B</p>
                        <p className="font-bold text-lg text-accent-600">{cs.metrics.after}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Reply Rate</p>
                        <p className="font-bold text-lg text-brand-600">{cs.metrics.replyRate}</p>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-brand-600 pl-6 mb-6">
                      <p className="text-lg text-slate-700 italic mb-3">&ldquo;{cs.quote}&rdquo;</p>
                      <footer className="text-sm">
                        <strong>{cs.author}</strong>, {cs.role}
                      </footer>
                    </blockquote>
                    
                    <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                      <h4 className="font-semibold mb-2 text-accent-900">Key Takeaway</h4>
                      <p className="text-accent-800">{cs.keyTakeaway}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start jouw eigen succes verhaal</h2>
          <p className="text-slate-600 mb-8">
            Sluit je aan bij 100+ sales teams die meer meetings boeken met Level2B.
          </p>
          <a href="/start-trial">
            <Button size="lg">Start gratis trial</Button>
          </a>
        </div>
      </section>
    </div>
  )
}
