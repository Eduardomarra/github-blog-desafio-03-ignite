import { NavLink } from 'react-router-dom'

import {
  GithubLogo,
  CalendarCheck,
  ChatCircle,
  CaretLeft,
  ArrowSquareOut,
} from 'phosphor-react'

import {
  PostInfoContainer,
  PostInfoContent,
  PostInfoSocial,
  PostInfoLinks,
} from './styles'
import { dateFormatter } from '../../../../utils/formatterDate'

export interface Posts {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface PostInfoProps {
  postData: Posts
}

export function PostInfo({ postData }: PostInfoProps) {
  const formattedDate = dateFormatter(postData.created_at)

  return (
    <PostInfoContainer>
      <PostInfoContent>
        <PostInfoLinks>
          <NavLink to="/">
            <CaretLeft size={16} />
            Voltar
          </NavLink>
          <NavLink to="https://www.github.com/eduardomarra">
            Ver no github
            <ArrowSquareOut size={16} />
          </NavLink>
        </PostInfoLinks>
        <h1>{postData.title}</h1>
        <PostInfoSocial>
          <div>
            <GithubLogo size={22} weight="fill" />
            {postData.user?.login}
          </div>
          <div>
            <CalendarCheck size={22} weight="fill" /> {formattedDate}
          </div>
          <div>
            <ChatCircle size={22} weight="fill" />{' '}
            {`${postData.comments} comentários`}
          </div>
        </PostInfoSocial>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
