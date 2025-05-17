import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Loulou & Joujou Clown | Animation festive professionnelle",
  description:
    "Duo de clowns professionnels pour l'animation de vos événements : anniversaires, mariages, fêtes d'entreprise. Réservez votre animation festive dès maintenant !",
  openGraph: {
    title: "Loulou & Joujou Clown | Animation festive professionnelle",
    description:
      "Duo de clowns professionnels pour l'animation de vos événements : anniversaires, mariages, fêtes d'entreprise. Réservez votre animation festive dès maintenant !",
    url: "https://loulou-joujou-clown.vercel.app",
    siteName: "Loulou & Joujou Clown",
    locale: "fr_FR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <Suspense>
          <main className="min-h-screen">{children}</main>
        </Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
