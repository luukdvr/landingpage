"use client"
import { useState } from "react"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: API call to /api/submit-contact
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank you for your message!</h1>
          <p className="text-slate-600 mb-8">
            We will contact you within 24 hours.
          </p>
          <a href="/">
            <Button>Back to home</Button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Questions about Level2B? Interested in starting a free trial? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Naam *"
              type="text"
              required
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
              placeholder="Je volledige naam"
            />

            <Input
              label="Email *"
              type="email"
              required
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
              placeholder="je@bedrijf.nl"
            />

            <Input
              label="Bedrijf *"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Je bedrijfsnaam"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Teamgrootte *
              </label>
              <select
                required
                value={formData.teamSize}
                onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              >
                <option value="">Selecteer...</option>
                <option value="1-5">1–5 medewerkers</option>
                <option value="6-20">6–20 medewerkers</option>
                <option value="21-50">21–50 medewerkers</option>
                <option value="51+">51+ medewerkers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Bericht *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                placeholder="Vertel ons waar we je mee kunnen helpen..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Versturen..." : "Verstuur bericht"}
            </Button>

            <p className="text-sm text-slate-500 text-center">
              * Verplichte velden
            </p>
          </form>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Sales & Demo's</h3>
              <p className="text-slate-600 mb-2">
             Want to see Level2B in action? Start your free trial and experience the onboarding flow.
              </p>
              <a href="mailto:sales@level2b.com" className="text-brand-600 hover:text-brand-700">
                sales@level2b.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Support</h3>
              <p className="text-slate-600 mb-2">
                Technische vragen of hulp nodig?
              </p>
              <a href="mailto:support@level2b.com" className="text-brand-600 hover:text-brand-700">
                support@level2b.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
