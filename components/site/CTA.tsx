import { Button } from "../../components/ui/Button"

export function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-700 rounded-2xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta-800/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to automate your sales?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Start with Level2B today. No credit card required. Begin free.
            </p>
            
            <a href="/login">
              <Button 
                size="lg" 
                className="bg-white text-terracotta-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl text-lg px-8 py-4"
              >
                Get Started Free
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
