export const metadata = {
  title: "Terms of Service — Level2B",
  description: "Level2B's terms of service: usage, limits, and conditions.",
}

export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-8">
            <strong>Last updated:</strong> October 16, 2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using Level2B, you agree to these Terms of Service. 
            If you do not agree, do not use Level2B.
          </p>

          <h2>2. Acceptable Use Policy</h2>
          <p>
            You may NOT use Level2B for:
          </p>
          <ul>
            <li><strong>Spam:</strong> Unsolicited mass emailing to random recipients</li>
            <li><strong>Illegal activities:</strong> Phishing, fraud, malware distribution</li>
            <li><strong>Misleading content:</strong> False information, impersonation</li>
            <li><strong>Harassment:</strong> Intimidation, threats, discrimination</li>
          </ul>
          <p className="font-semibold">
            Violation leads to immediate account suspension without refund.
          </p>

          <h2>3. Fair Use Limits</h2>
          <p>
            Each tier has quotas (leads, emails/month, users). If exceeded:
          </p>
          <ul>
            <li>We will contact you first for an upgrade</li>
            <li>No immediate service interruption</li>
            <li>In case of abuse: throttling or suspension</li>
          </ul>

          <h2>4. Account Responsibility</h2>
          <ul>
            <li>You are responsible for activities under your account</li>
            <li>Keep your password safe</li>
            <li>In case of security breach: inform us immediately at <a href="mailto:security@level2b.com">security@level2b.com</a></li>
          </ul>

          <h2>5. Payment and Refunds</h2>
          <h3>Trial</h3>
          <ul>
            <li>14 days free, no credit card, no obligations</li>
            <li>After trial: you choose whether to continue</li>
          </ul>

          <h3>Betaald abonnement</h3>
          <ul>
            <li>Maandelijkse facturering, automatische verlenging</li>
            <li>Opzeggen kan altijd, met effect einde lopende maand</li>
            <li><strong>Geen refunds:</strong> We geven geen refunds voor gedeeltelijke maanden</li>
            <li>Downgrade mogelijk, nieuwe tier geldt vanaf volgende factuur</li>
          </ul>

          <h2>6. Cancellation Policy</h2>
          <ul>
            <li>Je kan op elk moment opzeggen via je account settings</li>
            <li>Geen opzegtermijn, geen fees</li>
            <li>Service blijft actief tot einde van de betaalde periode</li>
            <li>Je data blijft 30 dagen beschikbaar voor export</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <ul>
            <li><strong>Jouw content:</strong> Je behoudt alle rechten op je leads, emails, templates</li>
            <li><strong>Onze software:</strong> Level2B code, design, branding is ons eigendom</li>
            <li><strong>Feedback:</strong> Als je feedback geeft, mogen wij dat gebruiken om het product te verbeteren</li>
          </ul>

          <h2>8. Service Level & Availability</h2>
          <ul>
            <li>We streven naar 99.9% uptime</li>
            <li>Geen garantie op ononderbroken service (maintenance, outages kunnen voorkomen)</li>
            <li>We communiceren geplande maintenance via email + status page</li>
          </ul>

          <h2>9. Liability Limits</h2>
          <p>
            Level2B is geleverd "as is". We zijn niet aansprakelijk voor:
          </p>
          <ul>
            <li>Verloren omzet door gemiste emails of campagnes</li>
            <li>Data loss (maak altijd backups)</li>
            <li>Third-party service outages (Gmail, Calendly, etc.)</li>
          </ul>
          <p>
            Maximale liability: het bedrag dat je in de laatste 12 maanden hebt betaald.
          </p>

          <h2>10. Wijzigingen in deze Terms</h2>
          <p>
            We kunnen deze Terms aanpassen. Belangrijke wijzigingen communiceren we 30 dagen van tevoren.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            Deze Terms vallen onder Nederlands recht. Geschillen worden voorgelegd aan de rechtbank Amsterdam.
          </p>

          <h2>12. Contact</h2>
          <p>
            Vragen over deze Terms? Email: <a href="mailto:legal@level2b.com">legal@level2b.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
