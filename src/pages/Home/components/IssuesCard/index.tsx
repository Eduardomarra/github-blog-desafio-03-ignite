import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { IssuesCardContainer, IssuesTitle } from './styles'
import { Posts } from '../../../../contexts/PostContext'

interface Postsprops {
  post: Posts
}

export function IssuesCard({ post }: Postsprops) {
  const dateFormat = formatDistanceToNow(new Date(post.created_at), {
    addSuffix: true,
    locale: ptBR,
  })
  return (
    <IssuesCardContainer>
      <NavLink to={`/post/${post.number}`}>
        <div>
          <IssuesTitle>
            <h2>{post.title}</h2>
            <span>{dateFormat}</span>
          </IssuesTitle>
          <p>{post.body}</p>
        </div>
      </NavLink>
    </IssuesCardContainer>
  )
}
