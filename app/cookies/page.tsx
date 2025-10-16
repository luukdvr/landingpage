export const metadata = {
  title: "Cookie Policy — Level2B",
  description: "Level2B's cookie policy: which cookies we use and why.",
}

export default function CookiesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-8">
            <strong>Last updated:</strong> October 16, 2025
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. 
            They help the website recognize you and remember information about your visit.
          </p>

          <h2>Which cookies does Level2B use?</h2>

          <h3>1. Essential cookies (always active)</h3>
          <p>
            These cookies are necessary for Level2B to function:
          </p>
          <ul>
            <li><strong>Session cookies:</strong> To keep you logged in</li>
            <li><strong>Authentication tokens:</strong> To verify your identity</li>
            <li><strong>Security cookies:</strong> To prevent CSRF attacks</li>
          </ul>
          <p className="font-semibold">
            You cannot disable these cookies without losing Level2B functionality.
          </p>

          <h3>2. Analytics cookies (opt-in)</h3>
          <p>
            We use <strong>Plausible Analytics</strong> for privacy-friendly analytics:
          </p>
          <ul>
            <li>No tracking across websites</li>
            <li>No personal data collected</li>
            <li>GDPR-compliant</li>
            <li>No IP addresses stored</li>
          </ul>
          <p>
            You can disable these cookies via our cookie banner (bottom of the page).
          </p>

          <h3>3. No tracking cookies</h3>
          <p className="font-semibold">
            Level2B does NOT use:
          </p>
          <ul>
            <li>Third-party tracking cookies (Google Analytics, Facebook Pixel, etc.)</li>
            <li>Advertising cookies</li>
            <li>Cross-site tracking</li>
          </ul>

          <h2>Hoe beheer je cookies?</h2>

          <h3>Via onze cookie banner</h3>
          <p>
            Bij je eerste bezoek zie je een cookie banner. Je kan analytics cookies accepteren of weigeren.
          </p>

          <h3>Via je browser</h3>
          <p>
            Je kan cookies ook beheren via je browser instellingen:
          </p>
          <ul>
            <li><strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies</li>
            <li><strong>Firefox:</strong> Opties → Privacy en beveiliging → Cookies</li>
            <li><strong>Safari:</strong> Voorkeuren → Privacy → Cookies beheren</li>
          </ul>
          <p>
            Let op: het uitschakelen van essentiële cookies kan Level2B onbruikbaar maken.
          </p>

          <h2>Hoelang bewaren we cookies?</h2>
          <ul>
            <li><strong>Sessie cookies:</strong> Vervallen wanneer je je browser sluit</li>
            <li><strong>Authenticatie cookies:</strong> Maximaal 30 dagen</li>
            <li><strong>Analytics cookies:</strong> Maximaal 24 uur (Plausible)</li>
          </ul>

          <h2>Wijzigingen in deze policy</h2>
          <p>
            We kunnen deze cookie policy aanpassen. Check deze pagina regelmatig voor updates.
          </p>

          <h2>Contact</h2>
          <p>
            Vragen over cookies? Email: <a href="mailto:privacy@level2b.com">privacy@level2b.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
