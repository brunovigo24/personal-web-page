"use server"

import type { GitHubPinnedRepos, GitHubRepo } from "@/types/github"

export async function getPinnedRepositories(username: string): Promise<GitHubRepo[]> {
  try {
    // GraphQL query para buscar repositórios fixados
    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                homepageUrl
                stargazerCount
                forkCount
                watchers {
                  totalCount
                }
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `

    // Fazer a requisição para a API do GitHub
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.GITHUB_TOKEN || ""}`,
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Se não tiver token ou ocorrer algum erro, retornar dados de fallback
    if (data.errors || !data.data) {
      console.error("Error fetching GitHub data:", data.errors)
      return getFallbackRepositories()
    }

    const result = data.data as GitHubPinnedRepos
    return result.user.pinnedItems.nodes
  } catch (error) {
    console.error("Error fetching pinned repositories:", error)
    return getFallbackRepositories()
  }
}

// Função para retornar dados de fallback caso a API falhe
function getFallbackRepositories(): GitHubRepo[] {
  return [
    {
      name: "Rocketseat-frontend-challenge",
      description: "Implementação de um e-commerce para venda de canecas e camisetas.",
      url: "https://github.com/brunovigo24/Rocketseat-frontend-challenge",
      homepageUrl: null,
      stargazerCount: 0,
      forkCount: 1,
      watchers: { totalCount: 0 },
      primaryLanguage: { name: "TypeScript", color: "#3178c6" },
    },
    {
      name: "laravel-challenge",
      description: "Este projeto é uma aplicação Laravel para cadastro e gerenciamento de clientes.",
      url: "https://github.com/brunovigo24/laravel-challenge",
      homepageUrl: null,
      stargazerCount: 1,
      forkCount: 1,
      watchers: { totalCount: 0 },
      primaryLanguage: { name: "PHP", color: "#4F5D95" },
    },
    {
      name: "personal-web-page",
      description:
        "Este é o código-fonte do meu site pessoal, desenvolvido com Next.js e React, utilizando Tailwind CSS para estilização.",
      url: "https://github.com/brunovigo24/personal-web-page",
      homepageUrl: null,
      stargazerCount: 0,
      forkCount: 1,
      watchers: { totalCount: 0 },
      primaryLanguage: { name: "TypeScript", color: "#3178c6" },
    },
    {
      name: "atendente-virtual-ccim",
      description:
        "Atendente Virtual CCIM é uma API desenvolvida em Node.js com Express para automação de atendimento virtual via WhatsApp.",
      url: "https://github.com/brunovigo24/atendente-virtual-ccim",
      homepageUrl: null,
      stargazerCount: 0,
      forkCount: 1,
      watchers: { totalCount: 0 },
      primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
    },
  ]
}
