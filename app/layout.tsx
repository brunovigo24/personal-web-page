import type { ReactNode } from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Lora, Roboto_Mono } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Bruno Vigo",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.variable} ${lora.variable} ${robotoMono.variable} font-sans`}>{children}</body>
    </html>
  )
}
