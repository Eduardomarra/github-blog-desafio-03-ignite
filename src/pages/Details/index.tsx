import { useCallback, useEffect, useState } from 'react'
import { PostInfo } from './components/PostInfo'

import { DetailsContainer, DetailsContent } from './styles'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Posts } from '../../contexts/PostContext'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

export function Details() {
  const [postData, setPostData] = useState<Posts>({} as Posts)

  const { id } = useParams()

  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPO

  const getPostDetail = useCallback(async () => {
    const response = await api.get(
      `/repos/${userName}/${repoName}/issues/${id}`,
    )
    setPostData(response.data)
  }, [id, repoName, userName])

  useEffect(() => {
    getPostDetail()
  }, [getPostDetail])

  return (
    <DetailsContainer>
      <PostInfo postData={postData} />
      <DetailsContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {postData.body}
        </ReactMarkdown>
      </DetailsContent>
    </DetailsContainer>
  )
}
