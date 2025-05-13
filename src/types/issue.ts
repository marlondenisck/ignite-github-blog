import type { User } from './user'

export type Issue = {
  user: User
  title: string
  body: string
  comments: number
  number: number
  created_at: string
  html_url: string
}
