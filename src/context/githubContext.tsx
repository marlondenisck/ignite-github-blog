import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react'
import { api } from '../services/api'

import type { Issue } from '../types/issue'
import type { User } from '../types/user'

type GitHubContextType = {
  user: User
  issue: Issue
  issues: Issue[]
  isIssueLoading: boolean
  fetchIssue: (number: string) => Promise<void>
  fetchUser: () => Promise<void>
  fetchIssues: (query?: string) => Promise<void>
}

export const GithubContext = createContext({} as GitHubContextType)

export function GithubProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState()
  const [issues, setIssues] = useState()
  const [issue, setIssue] = useState()
  const [isIssueLoading, setIsIssueLoading] = useState(false)

  const userName = 'marlondenisck'
  const repository = 'clone-tabnews'

  async function fetchUser() {
    const response = await api.get(`/users/${userName}`)
    setUser(response.data)
  }

  const fetchIssues = useCallback(async (query?: string) => {
    if (!query) {
      const response = await api.get(
        `/repos/${userName}/${repository}/issues`,
        {
          params: {
            _sort: 'created_at',
            _order: 'desc'
          }
        }
      )
      setIssues(response.data)
    } else {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${repository}`,
        {
          params: {
            _sort: 'created_at',
            _order: 'desc'
          }
        }
      )
      setIssues(response.data)
    }
  }, [])

  useEffect(() => {
    fetchUser()

    fetchIssues()
  }, [fetchIssues])

  const fetchIssue = useCallback(async (number: string) => {
    setIsIssueLoading(true)

    const response = await api.get(
      `https://api.github.com/repos/${userName}/${repository}/issues/${number}`
    )

    setIssue(response.data)
    setIsIssueLoading(false)
  }, [])

  return (
    <GithubContext.Provider
      value={{
        user,
        issues,
        issue,
        isIssueLoading,
        fetchIssue,
        fetchIssues,
        fetchUser
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export function useGitHub() {
  return useContext(GithubContext)
}
