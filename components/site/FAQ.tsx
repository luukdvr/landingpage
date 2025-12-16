"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does Level2B help me close more deals?",
    answer: "Level2B combines smart email templates with centralised lead tracking and real-time analytics. We automate time-consuming manual work so you can focus on closing deals. Result: better emails, more insight, more conversions.",
  },
  {
    question: "Can you read my emails?",
    answer: "No, we have no access to your inbox. Level2B only helps with generating emails and organising your leads. You retain full control over your data.",
  },
  {
    question: "What if I get little response?",
    answer: "The dashboard provides insight into your email performance and conversion rates. Our intelligent system learns what works and our support team helps you with messaging and best practices for optimal results.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. End-to-end encryption, GDPR-compliant, and you retain full control. See our security page for all details.",
  },
  {
    question: "How much does Level2B cost?",
    answer: "From £49/month. 14-day free trial, no credit card required. See our pricing page for all tiers and features.",
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
    question: "How quickly can I start?",
    answer: "Within 10 minutes of signing up you can add your first lead and generate emails. Onboarding takes less than 5 minutes.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-charcoal-50">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-charcoal-600">Everything you need to know about Level2B.</p>
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
