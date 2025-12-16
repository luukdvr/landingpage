import "./globals.css"
import { ReactNode } from "react"
import { Navbar } from "../components/site/Navbar"
import { Footer } from "../components/site/Footer"

export const metadata = {
  title: "Level2B - AI-Powered B2B Sales Automation | CRM Platform",
  description: "Verhoog je sales efficiency met Level2B's AI-powered CRM. Automatische lead tracking, AI email templates, en data-driven insights voor B2B sales teams.",
  openGraph: { 
    title: "Level2B - AI-Powered B2B Sales Automation", 
    images: ["/og-image.png"],
    description: "Verhoog je sales efficiency met geautomatiseerde lead tracking, AI email outreach en data-driven insights.",
    url: "https://level2b.nl"
  },
  twitter: {
    card: "summary_large_image",
    title: "Level2B - AI-Powered B2B Sales Automation",
    description: "AI-powered CRM voor B2B sales teams"
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
