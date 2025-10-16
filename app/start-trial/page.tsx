"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"

export default function StartTrialPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: API call to /api/submit-trial
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Navigate to onboarding questionnaire
    router.push("/onboarding")
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Start je gratis trial</h1>
            <p className="text-slate-600">
              14 dagen vol toegang. Geen creditcard nodig.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email *"
              type="email"
              required
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
              placeholder="je@bedrijf.nl"
            />

            <Input
              label="Bedrijfsnaam *"
              type="text"
              required
              value={formData.company}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, company: e.target.value})}
              placeholder="Je bedrijf"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Functie *
              </label>
              <select
                required
                value={formData.role}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, role: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              >
                <option value="">Selecteer...</option>
                <option value="founder">Founder</option>
                <option value="sales-lead">Sales Lead</option>
                <option value="bdr">BDR</option>
                <option value="marketing">Marketing</option>
                <option value="other">Anders</option>
              </select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Bezig..." : "Start mijn trial"}
            </Button>

            <p className="text-sm text-slate-500 text-center">
              14 dagen gratis. Geen creditcard. Opzeggen kan altijd.
            </p>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Al een account?{" "}
          <a href="https://app.level2b.com/login" className="text-brand-600 hover:text-brand-700 font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
