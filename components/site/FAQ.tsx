"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does Level2B get you more meetings?",
    answer: "Level2B combines AI templates with automated follow-ups and Calendly integration. We remove manual work and let your leads book meetings instantly. Result: more responses, less time, more meetings.",
  },
  {
    question: "Can you read my emails?",
    answer: "No, only reply monitoring with your permission, and only for cold email responses. No inbox access. You retain full control over your data.",
  },
  {
    question: "What if I get no replies?",
    answer: "Dashboard helps you optimize templates; our AI learns what works. Plus, our support team helps with messaging and best practices.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. End-to-end encryption, GDPR-compliant, and you retain full control. See our security page for all details.",
  },
  {
    question: "How much does Level2B cost?",
    answer: "From €49/month. 14-day free trial, no credit card required. See our pricing page for all tiers and features.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, always. No lock-in contracts, no obligations.",
  },
  {
    question: "What integrations do you offer?",
    answer: "Calendly (meetings), Gmail/Outlook (email), Zapier/HubSpot (CRM). More integrations are on the roadmap.",
  },
  {
    question: "How fast can I start?",
    answer: "Within 10 minutes after signup you can launch your first campaign. Onboarding takes less than 5 minutes.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-slate-600">Everything you need to know about Level2B.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
