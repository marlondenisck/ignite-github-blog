import Markdown from 'react-markdown'

type PostProps = {
  body: string
}

export function Post({ body }: PostProps) {
  return (
    <main className="mt-36 mr-auto ml-auto w-full max-w-[54rem]">
      <Markdown children={body} />
    </main>
  )
}
