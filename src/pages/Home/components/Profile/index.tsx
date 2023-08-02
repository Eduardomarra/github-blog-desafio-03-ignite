import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import {
  ProfileContainer,
  ProfileContent,
  SocialContainer,
  Title,
} from './styles'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext'

export function Profile() {
  const { user } = useContext(PostContext)

  return (
    <ProfileContainer>
      <ProfileContent key={user.login}>
        <img src={user.avatar_url} alt="" />
        <div>
          <Title>
            <h1>{user.name}</h1>
            <NavLink to={`${user.html_url}`} target="blank">
              <span>
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </NavLink>
          </Title>
          <p>{user.bio}</p>
          <SocialContainer>
            <div>
              <FontAwesomeIcon icon={faUser} /> {user.login}
            </div>
            <div>
              <FontAwesomeIcon icon={faUsers} />
              {user.followers <= 2
                ? `${user.followers} seguidor`
                : `${user.followers} seguidores`}
            </div>
          </SocialContainer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
