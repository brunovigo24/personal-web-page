import { getPinnedRepositories } from "@/app/actions/github"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const username = searchParams.get("username") || "brunovigo24"

  try {
    const repos = await getPinnedRepositories(username)
    return NextResponse.json(repos)
  } catch (error) {
    console.error("Error in GitHub API route:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub repositories" }, { status: 500 })
  }
}
