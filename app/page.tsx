import { Hero } from "../components/site/Hero"
import { PainPoints } from "../components/site/PainPoints"
import { ValueProps } from "../components/site/ValueProps"
import { HowItWorks } from "../components/site/HowItWorks"
import { Metrics } from "../components/site/Metrics"
import { Testimonials } from "../components/site/Testimonials"
import { FAQ } from "../components/site/FAQ"
import { CTA } from "../components/site/CTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <ValueProps />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
