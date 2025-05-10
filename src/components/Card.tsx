import type { IssueType } from '../types/issueType'

type CardProps = {
  issue: IssueType
}

export function Card({ issue }: CardProps) {
  return (
    <a
      className="text-text bg-post hover:border-border relative flex flex-col overflow-hidden rounded-xl border-2 border-transparent p-8 no-underline"
      href={`/issues/1`}
    >
      <div className="mb-5 flex items-start justify-between">
        <h4 className="text-title m-0 grow text-xl">
          JavaScript data types and data structures
        </h4>
        <span className="text-span ml-4 text-sm whitespace-nowrap">
          Há 1 dia
        </span>
      </div>
      <p className="box relative line-clamp-4 grow overflow-hidden break-words whitespace-normal">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </p>
    </a>
  )
}
