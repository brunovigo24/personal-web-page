import type { ReactNode } from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Bruno Vigo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
    </html>
  )
}


import './globals.css'