"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Hoe helpt Level2B me meer deals te sluiten?",
    answer: "Level2B combineert AI email templates met centrale lead tracking en real-time analytics. We automatiseren tijdrovend handwerk zodat jij je kunt focussen op het sluiten van deals. Resultaat: betere emails, meer inzicht, meer conversies.",
  },
  {
    question: "Kunnen jullie mijn emails lezen?",
    answer: "Nee, we hebben geen toegang tot je inbox. Level2B helpt alleen met het genereren van emails en het organiseren van je leads. Je behoudt volledige controle over je data.",
  },
  {
    question: "Wat als ik weinig response krijg?",
    answer: "Het dashboard geeft inzicht in je email performance en conversie rates. Onze AI leert wat werkt en ons support team helpt je met messaging en best practices voor optimale resultaten.",
  },
  {
    question: "Is mijn data veilig?",
    answer: "Absoluut. End-to-end encryptie, GDPR-compliant, en je behoudt volledige controle. Zie onze security pagina voor alle details.",
  },
  {
    question: "Hoeveel kost Level2B?",
    answer: "Vanaf €49/maand. 14-dagen gratis trial, geen creditcard nodig. Bekijk onze pricing pagina voor alle tiers en features.",
  },
  {
    question: "Kan ik altijd opzeggen?",
    answer: "Ja, altijd. Geen lock-in contracten, geen verplichtingen.",
  },
  {
    question: "Welke integraties bieden jullie?",
    answer: "Calendly (meetings), Gmail/Outlook (email), Zapier/HubSpot (CRM). Meer integraties staan op de roadmap.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer: "Binnen 10 minuten na aanmelden kun je je eerste lead toevoegen en emails genereren. Onboarding duurt minder dan 5 minuten.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-charcoal-50">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Veelgestelde Vragen</h2>
          <p className="text-xl text-charcoal-600">Alles wat je moet weten over Level2B.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-charcoal-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-charcoal-50 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-terracotta-600 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-charcoal-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
