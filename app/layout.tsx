import "./globals.css"
import { ReactNode } from "react"
import { Navbar } from "../components/site/Navbar"
import { Footer } from "../components/site/Footer"

export const metadata = {
  title: "Level2B - Sales Automation Platform | CRM Software",
  description: "Increase your sales efficiency with Level2B's intelligent CRM. Automatic lead tracking, smart email templates, and data-driven insights for sales teams.",
  openGraph: { 
    title: "Level2B - Sales Automation Platform", 
    images: ["/og-image.png"],
    description: "Increase your sales efficiency with automated lead tracking, intelligent email outreach and data-driven insights.",
    url: "https://level2b.nl"
  },
  twitter: {
    card: "summary_large_image",
    title: "Level2B - Sales Automation Platform",
    description: "Intelligent CRM for sales teams"
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
