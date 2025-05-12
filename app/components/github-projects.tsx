"use client"

import type { GitHubRepo } from "@/types/github"
import { Github, Star, GitFork, Eye } from "lucide-react"
import { useState } from "react"

interface GitHubProjectsProps {
  initialRepos: GitHubRepo[]
  username: string
}

export default function GitHubProjects({ initialRepos, username }: GitHubProjectsProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>(initialRepos)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refreshProjects = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/github?username=${username}`)
      if (!response.ok) {
        throw new Error("Falha ao buscar projetos")
      }
      const data = await response.json()
      setRepos(data)
    } catch (err) {
      setError("Não foi possível carregar os projetos. Tente novamente mais tarde.")
      console.error("Error refreshing projects:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">

      {error && <div className="bg-red-900/20 border border-red-800 text-red-400 p-4 rounded-md">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="bg-[#111] rounded-lg p-6 border border-zinc-800 w-full max-w-md flex flex-col justify-between h-full hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-2"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium">{repo.name}</h3>
                {repo.primaryLanguage && (
                  <div
                    className="flex items-center gap-1 bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded-full text-xs"
                    style={{
                      backgroundColor: `${repo.primaryLanguage.color}20`,
                      color: repo.primaryLanguage.color,
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                    ></span>
                    {repo.primaryLanguage.name}
                  </div>
                )}
              </div>

              <p className="text-zinc-400 text-sm mb-4">{repo.description || ""}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <Star size={16} />
                  <span>{repo.stargazerCount}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <GitFork size={16} />
                  <span>{repo.forkCount}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <Eye size={16} />
                  <span>{repo.watchers.totalCount}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-2 rounded-md text-sm transition-colors w-full justify-center hover:bg-blue-600 hover:text-white"
              >
                <Github size={16} />
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
