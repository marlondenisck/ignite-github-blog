import { Profile } from '../components/Profile'
import { Search } from '../components/Search'
import { Card } from '../components/Card'

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <div className="mt-12 mr-auto ml-auto grid w-full max-w-[54rem] grid-cols-2 gap-8">
        <Card />
      </div>
    </>
  )
}
