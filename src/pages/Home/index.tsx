import { IssuesCard } from './components/IssuesCard'
import { Profile } from './components/Profile'
import { HomeContainer, IssuesContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <IssuesContent>
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
      </IssuesContent>
    </HomeContainer>
  )
}
