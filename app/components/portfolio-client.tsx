"use client"

import { Github, Linkedin, Mail, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRef, useState, useEffect } from "react"
import GitHubProjects from "./github-projects"
import type { GitHubRepo } from "@/types/github"

interface PortfolioClientProps {
  pinnedRepos: GitHubRepo[]
}

export default function PortfolioClient({ pinnedRepos }: PortfolioClientProps) {
  const projetosRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Marcar como carregado para iniciar animações
    setIsLoaded(true)

    // Limpar listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const scrollToProjetos = () => {
    projetosRef.current?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`flex justify-between items-center p-6 max-w-7xl mx-auto ${isLoaded ? "animate-fadeIn" : "opacity-0"}`}
      >
        <Link href="/" className="text-2xl font-bold text-blue-500 font-mono hover:scale-105 transition-transform">
          BV
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-zinc-400 hover:text-white transition-colors hover:scale-105"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("habilidades")}
            className="text-zinc-400 hover:text-white transition-colors hover:scale-105"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToProjetos()}
            className="text-zinc-400 hover:text-white transition-colors hover:scale-105"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-zinc-400 hover:text-white transition-colors hover:scale-105"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-zinc-950 bg-opacity-95 z-50 flex flex-col items-center justify-center md:hidden animate-fadeIn">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center gap-8 text-xl">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Habilidades
            </button>
            <button onClick={() => scrollToProjetos()} className="text-zinc-400 hover:text-white transition-colors">
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="sobre" className={`py-20 px-6 ${isLoaded ? "animate-slideUp" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-zinc-400">Olá, eu sou</p>
            <h1 className="text-5xl font-bold font-mono">Bruno Henrique Vigo</h1>
            <h2 className="text-2xl text-zinc-300">Desenvolvedor Full Stack</h2>
            <p className="text-zinc-400 max-w-md">
              Apaixonado por criar interfaces modernas e soluções digitais inovadoras que proporcionam experiências
              excepcionais aos usuários.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={scrollToProjetos}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 hover:scale-105 transition-all"
              >
                Conheça meu trabalho
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/brunovigo24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-vigo-506026206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:brunohvigo@gmail.com"
                className="text-zinc-400 hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-64 h-64 rounded-full bg-zinc-800/80 p-2 hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Bruno Vigo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="habilidades"
        className={`py-20 px-6 bg-zinc-900/30 ${isLoaded ? "animate-slideUp animation-delay-200" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-mono">Minhas Habilidades</h2>
            <p className="text-zinc-400">Tecnologias com as quais trabalho</p>
            <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Frontend */}
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-blue-500 transition-colors hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-center mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Angular
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Bootstrap
                </Badge>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-blue-500 transition-colors hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-center mb-6">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Express
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Java
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Spring Boot
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  PHP
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  MySQL
                </Badge>
              </div>
            </div>

            {/* Ferramentas */}
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-blue-500 transition-colors hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-center mb-6">Ferramentas</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Git
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  GitHub
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Docker
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30 hover:bg-blue-900/30 transition-colors"
                >
                  Linux
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projetos"
        ref={projetosRef}
        className={`py-20 px-6 ${isLoaded ? "animate-slideUp animation-delay-400" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Meus Projetos</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          </div>

          <GitHubProjects initialRepos={pinnedRepos} username="brunovigo24" />

          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/brunovigo24?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-blue-600 text-zinc-300 hover:text-white px-6 py-3 rounded-md transition-all text-base font-medium hover:scale-105 transform"
            >
              <Github size={18} />
              Ver todos no GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className={`py-20 px-6 bg-zinc-900/30 ${isLoaded ? "animate-slideUp animation-delay-600" : "opacity-0"}`}
      >
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold font-mono">Vamos conversar?</h2>
          <p className="text-zinc-400">
            Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer
            trocar uma ideia, entre em contato!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:brunohvigo@gmail.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105 transform"
            >
              Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-vigo-506026206/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all hover:scale-105 transform"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-6 border-t border-zinc-800 ${isLoaded ? "animate-fadeIn animation-delay-800" : "opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500">© {new Date().getFullYear()} Bruno Vigo. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/brunovigo24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors hover:scale-110 transform"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-vigo-506026206/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors hover:scale-110 transform"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:brunohvigo@gmail.com"
              className="text-zinc-500 hover:text-blue-400 transition-colors hover:scale-110 transform"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
