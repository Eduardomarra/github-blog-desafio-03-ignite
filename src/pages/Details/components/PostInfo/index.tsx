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

export function PostInfo() {
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
        <h1>JavaScript data types and data structures</h1>
        <PostInfoSocial>
          <div>
            <GithubLogo size={22} weight="fill" /> eduardoMarra
          </div>
          <div>
            <CalendarCheck size={22} weight="fill" /> 32 seguidores
          </div>
          <div>
            <ChatCircle size={22} weight="fill" /> 32 seguidores
          </div>
        </PostInfoSocial>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
