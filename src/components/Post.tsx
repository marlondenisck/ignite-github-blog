import Markdown from 'react-markdown'

type PostProps = {
  body: string
}

export function Post({ body }: PostProps) {
  return (
    <main className="w-full max-w-[54rem]">
      <Markdown />
    </main>
  )
}
