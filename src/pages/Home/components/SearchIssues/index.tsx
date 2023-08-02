import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SearchIssuesContainer, SearchTitle } from './styles'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchIssues() {
  const { posts, getPosts } = useContext(PostContext)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchIssuesContainer>
      <SearchTitle>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </SearchTitle>
      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchIssuesContainer>
  )
}
