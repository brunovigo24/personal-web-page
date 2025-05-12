export interface GitHubRepo {
  name: string
  description: string
  url: string
  homepageUrl: string | null
  stargazerCount: number
  forkCount: number
  watchers: {
    totalCount: number
  }
  primaryLanguage: {
    name: string
    color: string
  } | null
}

export interface GitHubPinnedRepos {
  user: {
    pinnedItems: {
      nodes: GitHubRepo[]
    }
  }
}
