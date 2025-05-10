import { UserType } from './userType'

export type IssueType = {
  user: UserType
  title: string
  body: string
  comments: number
  number: number
  created_at: string
  html_url: string
}
