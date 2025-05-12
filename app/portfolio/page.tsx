import { getPinnedRepositories } from "../actions/github"
import PortfolioClient from "../components/portfolio-client"

export default async function PortfolioPage() {
  // Buscar repositórios fixados do GitHub no servidor
  const pinnedRepos = await getPinnedRepositories("brunovigo24")

  // Renderizar o componente cliente com os dados
  return <PortfolioClient pinnedRepos={pinnedRepos} />
}
