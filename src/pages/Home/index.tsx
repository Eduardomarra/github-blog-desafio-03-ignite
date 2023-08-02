import { useContext } from 'react'
import { IssuesCard } from './components/IssuesCard'
import { Profile } from './components/Profile'
import { SearchIssues } from './components/SearchIssues'
import { HomeContainer, HomeContent } from './styles'
import { PostContext } from '../../contexts/PostContext'

export function Home() {
  const { posts } = useContext(PostContext)

  return (
    <HomeContainer>
      <Profile />
      <SearchIssues />
      <HomeContent>
        {posts.map((post) => (
          <IssuesCard key={post.number} post={post} />
        ))}
      </HomeContent>
    </HomeContainer>
  )
}
