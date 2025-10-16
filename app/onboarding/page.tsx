"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../components/ui/Button"

type Step = {
  id: number
  question: string
  type: "radio" | "slider" | "number" | "textarea"
  options?: string[]
  min?: number
  max?: number
}

const steps: Step[] = [
  {
    id: 1,
    question: "Wat is je grootste uitdaging nu?",
    type: "radio",
    options: [
      "Te weinig sales meetings in mijn agenda",
      "Handmatig cold emailing kost te veel tijd",
      "Lage reply rates op mijn outreach",
      "Ik mis follow-ups en verlies deals",
      "Mijn team schaalt niet mee met onze groei",
    ],
  },
  {
    id: 2,
    question: "Hoeveel uur per week besteed je nu aan cold outreach?",
    type: "slider",
    min: 0,
    max: 20,
  },
  {
    id: 3,
    question: "Hoeveel meetings wil je per maand boeken?",
    type: "number",
  },
  {
    id: 4,
    question: "Wat zou meer meetings voor jou betekenen?",
    type: "textarea",
  },
  {
    id: 5,
    question: "Laatste vraag: wanneer wil je starten?",
    type: "radio",
    options: [
      "Nu meteen — ik wil vandaag nog mijn eerste campagne draaien",
      "Deze week — ik moet eerst mijn leads op orde krijgen",
      "Volgende maand — ik wil eerst meer weten",
    ],
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, any>>({
    2: 5,
    3: 10,
  })

  const currentStepData = steps.find(s => s.id === currentStep)!
  const progress = (currentStep / steps.length) * 100

  const handleNext = async () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      // TODO: Save to Supabase
      router.push("/onboarding-complete")
    }
  }

  const canProceed = () => {
    const answer = answers[currentStep]
    if (currentStepData.type === "radio") return !!answer
    if (currentStepData.type === "number") return answer > 0
    return true // textarea & slider always can proceed
  }

  const getEmotionalFeedback = () => {
    if (currentStep !== 2) return null
    const hours = answers[2] || 5
    if (hours <= 2) return "Dat is weinig — je laat waarschijnlijk kansen liggen."
    if (hours <= 5) return "Dat is tijd die je beter kan besteden aan deals sluiten."
    if (hours <= 10) return "Dat is bijna een halve werkweek. Stel je voor wat je kan bereiken als dat geautomatiseerd wordt."
    return "Dat is onhoudbaar. Automation kan je letterlijk dagen per week teruggeven."
  }

  const getTargetFeedback = () => {
    if (currentStep !== 3) return null
    const target = answers[3] || 10
    return `Met Level2B boeken onze klanten gemiddeld ${Math.round(target * 1.5)} meetings per maand. Stel je voor wat dat betekent voor je pipeline.`
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-600 transition-all duration-300" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <p className="mt-2 text-sm text-slate-500">Stap {currentStep} van {steps.length}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">{currentStepData.question}</h2>

          {currentStepData.type === "radio" && (
            <div className="space-y-3">
              {currentStepData.options!.map(option => (
                <label 
                  key={option} 
                  className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition"
                >
                  <input 
                    type="radio" 
                    name={`step-${currentStep}`}
                    value={option}
                    checked={answers[currentStep] === option}
                    onChange={e => setAnswers({...answers, [currentStep]: e.target.value})}
                    className="w-4 h-4 text-brand-600 mt-1"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}

          {currentStepData.type === "slider" && (
            <div>
              <input 
                type="range" 
                min={currentStepData.min} 
                max={currentStepData.max}
                value={answers[currentStep] || currentStepData.min}
                onChange={e => setAnswers({...answers, [currentStep]: Number(e.target.value)})}
                className="w-full"
              />
              <p className="mt-2 text-center text-lg font-semibold">{answers[currentStep] || currentStepData.min} uur/week</p>
              
              {getEmotionalFeedback() && (
                <p className="mt-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                  {getEmotionalFeedback()}
                </p>
              )}
            </div>
          )}

          {currentStepData.type === "number" && (
            <div>
              <input 
                type="number" 
                value={answers[currentStep] || ""}
                onChange={e => setAnswers({...answers, [currentStep]: Number(e.target.value)})}
                className="w-full p-3 border border-slate-300 rounded-lg text-lg"
                min="1"
                placeholder="10"
              />
              {getTargetFeedback() && (
                <p className="mt-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                  {getTargetFeedback()}
                </p>
              )}
            </div>
          )}

          {currentStepData.type === "textarea" && (
            <textarea 
              value={answers[currentStep] || ""}
              onChange={e => setAnswers({...answers, [currentStep]: e.target.value})}
              placeholder="Denk aan je omzet, je team, je stress-level. Wat verandert er als je agenda iedere week vol zit met gekwalificeerde prospects?"
              rows={5}
              className="w-full p-3 border border-slate-300 rounded-lg"
            />
          )}

          <Button 
            onClick={handleNext}
            disabled={!canProceed()}
            className="mt-6 w-full"
            size="lg"
          >
            {currentStep === steps.length ? "Maak mijn account aan" : "Volgende"}
          </Button>
        </div>
      </div>
    </div>
  )
}
