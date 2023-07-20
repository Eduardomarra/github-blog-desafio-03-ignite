import { IssuesCard } from './components/IssuesCard'
import { Profile } from './components/Profile'
import { SearchIssues } from './components/SearchIssues'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchIssues />
      <HomeContent>
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
      </HomeContent>
    </HomeContainer>
  )
}
