import { Shield, Lock, Eye, CheckCircle, FileText } from "lucide-react"
import { Button } from "../../components/ui/Button"

export const metadata = {
  title: "Security & Privacy — Level2B Data Protection",
  description: "Discover how Level2B protects your data with end-to-end encryption, GDPR compliance, and full control over your emails.",
}

export default function SecurityPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Shield className="w-16 h-16 text-brand-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Your data and emails are 100% safe
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Security and privacy are the foundation of Level2B. Read how we protect your data and 
            why you always retain full control.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No unauthorized access</h3>
              <p className="text-slate-600 text-sm">
                We cannot view or send your emails without explicit permission. 
                You always remain in control.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">End-to-end encryption</h3>
              <p className="text-slate-600 text-sm">
                All your data (leads, templates, email content) is encrypted with AES-256. 
                No one outside your account can access it.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reply monitoring only after opt-in</h3>
              <p className="text-slate-600 text-sm">
                After your permission, we monitor responses to your cold emails — solely to help you book meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8">Email toegang: wat we wel en niet doen</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 text-accent-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Wat we WEL doen
              </h3>
              <ul className="space-y-3 text-accent-800">
                <li className="flex gap-2">
                  <span className="text-accent-600">✓</span>
                  <span>Na jouw expliciete toestemming monitoren we reacties op cold emails om meetings te helpen boeken en sentiment te analyseren.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-600">✓</span>
                  <span>We gebruiken OAuth tokens om emails te versturen — jij blijft altijd in controle.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-600">✓</span>
                  <span>Je kan access revoken op elk moment via je settings.</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 text-red-900 flex items-center gap-2">
                <span className="text-2xl">✗</span>
                Wat we NIET doen
              </h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Wij lezen je inbox niet</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>We versturen geen emails zonder jouw akkoord</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>We delen nooit data met derden</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Geen toegang tot persoonlijke/interne emails — alleen campagne-gerelateerde replies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8">Controle is van jou</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Revoke access any time</h3>
              <p className="text-slate-600">
                Via je settings kan je op elk moment de toegang van Level2B intrekken. Direct effect, geen vragen gesteld.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Exporteer je volledige data</h3>
              <p className="text-slate-600">
                Download al je leads, templates, campagne data en analytics. Jouw data, jouw eigendom.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Verwijder je account + data in 1 klik</h3>
              <p className="text-slate-600">
                GDPR Article 17 (Right to erasure). Wij verwijderen alle data binnen 30 dagen, permanent.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Transparante audit logs</h3>
              <p className="text-slate-600">
                Zie exact wie wat heeft gedaan in je account. Volledige transparantie, volledige controle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8">Compliance & Audits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <FileText className="w-8 h-8 text-brand-600 mb-3" />
              <h3 className="font-semibold mb-2">GDPR Article 32</h3>
              <p className="text-slate-600 text-sm">
                Data security measures compliant met EU wetgeving
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <Shield className="w-8 h-8 text-brand-600 mb-3" />
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-slate-600 text-sm">
                Information security management (in progress)
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-brand-600 mb-3" />
              <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-slate-600 text-sm">
                Security, availability, processing integrity (roadmap)
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <Lock className="w-8 h-8 text-brand-600 mb-3" />
              <h3 className="font-semibold mb-2">Penetration Testing</h3>
              <p className="text-slate-600 text-sm">
                Regular security audits door externe experts
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-8">Security FAQ</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Kunnen jullie mijn Gmail wachtwoord zien?</h3>
              <p className="text-slate-600">
                Nee, we gebruiken OAuth tokens. Wij zien geen wachtwoorden, nooit. Je authoriseert Level2B via Google's veilige flow.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Wat gebeurt er met mijn leads?</h3>
              <p className="text-slate-600">
                Encrypted storage met AES-256, alleen jij hebt toegang. Wij kunnen ze niet zien en delen ze nooit met derden.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Kan Level2B emails versturen zonder mijn toestemming?</h3>
              <p className="text-slate-600">
                Absoluut niet. Elke campagne vereist jouw expliciete "send" actie. Wij kunnen niet namens jou mailen zonder je toestemming.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Hoe weet ik dat mijn data veilig is?</h3>
              <p className="text-slate-600">
                End-to-end encryptie, regular security audits, GDPR-compliant. Plus: deze transparante security page met volledige openheid over onze praktijken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-600 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nog vragen over security?</h2>
          <p className="text-lg text-white/90 mb-8">
            Ons security team staat klaar om al je vragen te beantwoorden.
          </p>
          <a href="mailto:security@level2b.com">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-50">
              Contact security team
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
