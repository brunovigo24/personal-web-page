"use client"

import { Github, Linkedin, Instagram, ArrowRight, Code } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"social" | "portfolio">("social")

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto space-y-6 py-12">
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center space-y-3">
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-blue-500/30">
            <Image src="/profile.png" alt="Bruno Vigo" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold font-mono">Bruno Vigo</h1>
            <p className="text-zinc-400 text-sm font-mono">Analista de Sistemas e Desenvolvedor de Software</p>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-4 mt-2 w-full">
            <p className="text-zinc-300 text-sm text-left">
              <span className="text-emerald-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;passion:{" "}
              <span className="text-amber-300">"Building elegant solutions to complex problems"</span>,
              <br />
              &nbsp;&nbsp;specialties: <span className="text-amber-300">"Modern web interfaces"</span>
              <br />
              {"}"};
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 rounded-lg overflow-hidden border border-zinc-800">
          <button
            onClick={() => setActiveTab("social")}
            className={`py-3 px-4 text-center transition-colors ${
              activeTab === "social"
                ? "bg-zinc-900 text-white"
                : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            Social
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`py-3 px-4 text-center transition-colors ${
              activeTab === "portfolio"
                ? "bg-zinc-900 text-white"
                : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            Portfólio
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          {activeTab === "social" && (
            <>
              <a
                href="https://github.com/brunovigo24"
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400">
                    <Github className="h-5 w-5" />
                  </div>
                  <span>GitHub</span>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>

              <a
                href="https://www.instagram.com/brunovigo_/"
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-pink-500">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <span>Instagram</span>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/bruno-vigo-506026206/"
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-blue-500">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span>LinkedIn</span>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>
            </>
          )}

          {activeTab === "portfolio" && (
            <Link
              href="/portfolio"
              className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-orange-500">
                  <Code className="h-5 w-5" />
                </div>
                <span>Portfólio Dev</span>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-500" />
            </Link>
          )}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>Status: Online</span>
        </div>

        {/* Footer */}
        <footer className="text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Bruno Vigo.</p>
        </footer>
      </div>
    </main>
  )
}
