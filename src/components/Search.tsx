import { type FormEvent, useState, useEffect } from 'react'
import { useGitHub } from '../context/githubContext'

export function Search() {
  const { issues, fetchIssues } = useGitHub()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search) {
      fetchIssues(search)
    }
  }, [fetchIssues, search])

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    if (search) {
      await fetchIssues(search)
    } else {
      await fetchIssues()
    }
  }

  return (
    <div className="mt-36 mr-auto ml-auto flex w-full max-w-[54rem] flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-subtitle text-xl">Publicações</h3>
        <span className="text-span text-sm">
          {' '}
          {issues?.length} {issues?.length > 1 ? 'publicações' : 'publicação'}
        </span>
      </div>
      <form className="flex" onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="border-border bg-input text-text placeholder:text-label flex-1 rounded-md border px-4 py-3"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  )
}
