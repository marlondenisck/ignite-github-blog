import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import type { Issue } from '../types/issue'

type CardProps = {
  issue: Issue
}

export function Card({ issue }: CardProps) {
  return (
    <a
      className="text-text bg-post hover:border-border relative flex flex-col overflow-hidden rounded-xl border-2 border-transparent p-8 no-underline"
      href={`/issues/${issue.number}`}
    >
      <div className="mb-5 flex items-start justify-between">
        <h4 className="text-title m-0 grow text-xl">{issue.title}</h4>
        <span className="text-span ml-4 text-sm whitespace-nowrap">
          {formatDistanceToNow(issue.created_at, {
            addSuffix: true,
            locale: ptBR
          })}
        </span>
      </div>
      <p className="box relative line-clamp-4 grow overflow-hidden break-words whitespace-normal">
        {issue.body}
      </p>
    </a>
  )
}
