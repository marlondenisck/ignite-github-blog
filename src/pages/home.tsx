import { Profile } from '../components/Profile'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { useGitHub } from '../context/githubContext'

export function Home() {
  const { issues } = useGitHub()

  return (
    <>
      <Profile />
      <Search />
      <div className="mt-12 mr-auto ml-auto grid w-full max-w-[54rem] grid-cols-2 gap-8">
        {issues?.length > 0 &&
          issues.map((issue) => {
            return <Card key={issue.number} issue={issue} />
          })}
      </div>
    </>
  )
}
