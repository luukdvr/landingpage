import { Button } from "../../components/ui/Button"
import { CheckCircle } from "lucide-react"

export default function OnboardingCompletePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welkom bij Level2B!
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            Je bent 3 stappen verwijderd van je eerste sales meeting.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold mb-4">Volgende stappen:</h2>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="w-5 h-5 text-brand-600 mt-0.5" />
                <span>Upload je eerste leads (CSV)</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="w-5 h-5 text-brand-600 mt-0.5" />
                <span>Genereer een AI-template</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="w-5 h-5 text-brand-600 mt-0.5" />
                <span>Start je campagne</span>
              </label>
            </div>
          </div>

          <a href="https://app.level2b.com/dashboard">
            <Button size="lg" className="mb-4">
              Naar mijn dashboard
            </Button>
          </a>

          <p className="text-sm text-slate-500">
            Hulp nodig?{" "}
            <a href="/contact" className="text-brand-600 hover:text-brand-700">
              Chat met ons
            </a>
            {" "}of bekijk onze{" "}
            <a href="/how-it-works" className="text-brand-600 hover:text-brand-700">
              setup guide
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
