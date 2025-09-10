import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "La Tavola - Restaurante Italiano Tradicional",
  description:
    "20 anos de tradição em massas artesanais. Sabores que conquistam sua noite. Faça sua reserva pelo WhatsApp.",
  generator: "v0.app",
  keywords: ["restaurante italiano", "massas artesanais", "La Tavola", "reservas", "culinária italiana"],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
