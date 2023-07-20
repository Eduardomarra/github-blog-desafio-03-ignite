import { SearchIssuesContainer, SearchTitle } from './styles'

export function SearchIssues() {
  return (
    <SearchIssuesContainer>
      <SearchTitle>
        <h3>Publicações</h3>
        <span>3 publicações</span>
      </SearchTitle>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchIssuesContainer>
  )
}
