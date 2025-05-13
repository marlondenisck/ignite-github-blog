import { Profile } from '../components/Profile'
import { Post } from '../components/Post'
import { useParams } from 'react-router-dom'
import { useGitHub } from '../context/githubContext'
import { useEffect } from 'react'

export function Issues() {
  const { fetchIssue, issue, isIssueLoading } = useGitHub()
  const { number } = useParams()

  useEffect(() => {
    if (!number) return

    fetchIssue(number)
  }, [fetchIssue, number])

  return (
    <>
      {isIssueLoading ? (
        <div>Carregando...</div>
      ) : (
        issue &&
        issue.number && (
          <>
            <Profile isIssue />
            <Post body={issue.body} />
          </>
        )
      )}
    </>
  )
}
