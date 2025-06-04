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
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-blue-500/30 transition-all duration-300 hover:border-blue-500/60 hover:scale-105">
            <Image src="/profile.png" alt="Bruno Vigo" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Bruno Vigo</h1>
            <p className="text-zinc-400 text-sm">Analista de Sistemas e Desenvolvedor de Software</p>
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
        <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
          {/* Animated background indicator */}
          <div 
            className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 transition-transform duration-300 ease-out ${
              activeTab === "social" ? "translate-x-0" : "translate-x-full"
            }`}
          />
          
          {/* Active tab highlight bar */}
          <div 
            className={`absolute bottom-0 h-0.5 w-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 transition-transform duration-300 ease-out ${
              activeTab === "social" ? "translate-x-0" : "translate-x-full"
            }`}
          />
          
          <div className="grid grid-cols-2 relative">
            <button
              onClick={() => setActiveTab("social")}
              className={`py-3 px-4 text-center transition-all duration-300 ease-out relative group ${
                activeTab === "social"
                  ? "text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">Social</span>
              <div className="absolute inset-0 bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`py-3 px-4 text-center transition-all duration-300 ease-out relative group ${
                activeTab === "portfolio"
                  ? "text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">Portfólio</span>
              <div className="absolute inset-0 bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative min-h-[240px]">
          {/* Social Tab Content */}
          <div className={`absolute inset-0 space-y-3 transition-all duration-500 ease-out ${
            activeTab === "social" 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}>
            <a
              href="https://github.com/brunovigo24"
              className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Github className="h-5 w-5" />
                </div>
                <span className="group-hover:text-emerald-400 transition-colors duration-300">GitHub</span>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
            </a>

            <a
              href="https://www.instagram.com/brunovigo_/"
              className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/10 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-pink-500 group-hover:bg-pink-500/20 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="group-hover:text-pink-400 transition-colors duration-300">Instagram</span>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/bruno-vigo-506026206/"
              className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="group-hover:text-blue-400 transition-colors duration-300">LinkedIn</span>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>

          {/* Portfolio Tab Content */}
          <div className={`absolute inset-0 space-y-3 transition-all duration-500 ease-out ${
            activeTab === "portfolio" 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-4 pointer-events-none"
          }`}>
            <Link
              href="/portfolio"
              className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/10 group"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Code className="h-5 w-5" />
                </div>
                <span className="group-hover:text-orange-400 transition-colors duration-300">Portfólio Dev</span>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
