export const metadata = {
  title: "Privacy Policy — Level2B",
  description: "Level2B's privacy policy: how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-8">
            <strong>Last updated:</strong> October 16, 2025
          </p>

          <h2>1. What data do we collect?</h2>
          <p>
            At Level2B, we collect the following data:
          </p>
          <ul>
            <li><strong>Account data:</strong> Email, name, company name, role</li>
            <li><strong>Lead data:</strong> Leads you upload (names, emails, companies)</li>
            <li><strong>Campaign data:</strong> Email templates, sent emails, responses</li>
            <li><strong>Usage data:</strong> How you use Level2B (analytics, feature usage)</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information</li>
          </ul>

          <h2>2. How do we use this data?</h2>
          <p>
            We use your data exclusively for:
          </p>
          <ul>
            <li><strong>Product features:</strong> Cold email automation, sentiment analysis, meeting booking</li>
            <li><strong>Support:</strong> To help you with technical questions and issues</li>
            <li><strong>Analytics:</strong> To improve our product and fix bugs</li>
            <li><strong>Communication:</strong> Product updates, new features (opt-out available)</li>
          </ul>
          <p className="font-semibold">
            We never sell data to third parties. Never.
          </p>

          <h2>3. Data encryption and security</h2>
          <ul>
            <li><strong>End-to-end encryption:</strong> All your data is encrypted with AES-256</li>
            <li><strong>In transit:</strong> TLS 1.3 for all network communication</li>
            <li><strong>At rest:</strong> All data in databases is encrypted</li>
            <li><strong>Access control:</strong> Only you have access to your data. We cannot view it.</li>
          </ul>

          <h2>4. Email access</h2>
          <p>
            Level2B uses OAuth tokens to send emails on your behalf. We ask for your explicit permission for:
          </p>
          <ul>
            <li>Sending cold emails on your behalf</li>
            <li>Monitoring responses to these emails (for meeting booking and sentiment analysis)</li>
          </ul>
          <p className="font-semibold">
            We do NOT read your inbox. We have NO access to personal or internal emails. 
            Alleen campagne-gerelateerde replies worden gemonitord, en alleen na jouw toestemming.
          </p>

          <h2>5. Data delen met derden</h2>
          <p>
            We delen je data alleen met:
          </p>
          <ul>
            <li><strong>Infrastructuur providers:</strong> Servers, databases (bijv. Supabase, Vercel)</li>
            <li><strong>Email providers:</strong> Voor het versturen van emails (Gmail/Outlook via OAuth)</li>
            <li><strong>Analytics tools:</strong> Plausible Analytics (privacy-first, geen tracking)</li>
          </ul>
          <p>
            Al deze partijen zijn GDPR-compliant en contractueel verplicht om je data te beschermen.
          </p>

          <h2>6. Jouw rechten (GDPR)</h2>
          <p>
            Je hebt de volgende rechten:
          </p>
          <ul>
            <li><strong>Recht op inzage (Article 15):</strong> Download al je data</li>
            <li><strong>Recht op correctie (Article 16):</strong> Pas je gegevens aan</li>
            <li><strong>Recht op verwijdering (Article 17):</strong> Verwijder je account + alle data</li>
            <li><strong>Recht op beperking (Article 18):</strong> Pauzeer data verwerking</li>
            <li><strong>Recht op bezwaar (Article 21):</strong> Stop specifieke data verwerking</li>
          </ul>
          <p>
            Contact: <a href="mailto:privacy@level2b.com">privacy@level2b.com</a>
          </p>

          <h2>7. Data retentie</h2>
          <ul>
            <li><strong>Actieve accounts:</strong> Data wordt bewaard zolang je account actief is</li>
            <li><strong>Verwijderde accounts:</strong> Binnen 30 dagen permanent verwijderd</li>
            <li><strong>Backups:</strong> Maximaal 90 dagen voor disaster recovery</li>
          </ul>

          <h2>8. Cookies</h2>
          <p>
            Level2B gebruikt minimale cookies. Zie onze <a href="/cookies">Cookie Policy</a> voor details.
          </p>

          <h2>9. Wijzigingen in deze policy</h2>
          <p>
            We kunnen deze privacy policy aanpassen. Belangrijke wijzigingen communiceren we via email.
          </p>

          <h2>10. Contact</h2>
          <p>
            Vragen over privacy? Email ons: <a href="mailto:privacy@level2b.com">privacy@level2b.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
