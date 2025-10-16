import "./globals.css"
import { ReactNode } from "react"
import { Navbar } from "../components/site/Navbar"
import { Footer } from "../components/site/Footer"

export const metadata = {
  title: "Level2B — Book more sales meetings",
  description: "AI-powered cold email outreach that turns leads into meetings. Automatiseer je cold emails en vul je agenda met gekwalificeerde prospects.",
  openGraph: { 
    title: "Level2B — Book more sales meetings", 
    images: ["/og-image.png"],
    description: "AI-powered cold email outreach that turns leads into meetings."
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
