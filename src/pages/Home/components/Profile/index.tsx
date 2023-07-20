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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/60114134?v=4"
          alt=""
        />
        <div>
          <Title>
            <h1>Eduardo Marra</h1>
            <NavLink to="https://www.github.com/eduardomarra">
              <span>
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </NavLink>
          </Title>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <SocialContainer>
            <div>
              <FontAwesomeIcon icon={faUser} /> eduardoMarra
            </div>
            <div>
              <FontAwesomeIcon icon={faUsers} /> 32 seguidores
            </div>
          </SocialContainer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
