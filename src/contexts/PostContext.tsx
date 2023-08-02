import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface Posts {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface User {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  followers: number
}

interface PostsContextType {
  posts: Posts[]
  user: User
  getPosts: (query: string) => Promise<void>
}

interface PostsContextProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostsContextType)

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<Posts[]>([])
  const [user, setUser] = useState<User>({} as User)

  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPO

  const getPosts = useCallback(
    async (query = '') => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
        )
        setPosts(response.data.items)
      } catch {
        console.log('')
      }
    },
    [posts, repoName, userName],
  )

  const getUser = useCallback(async () => {
    try {
      const response = await api.get(`/users/${userName}`)
      setUser(response.data)
    } catch {
      console.log('')
    }
  }, [userName])

  useEffect(() => {
    getPosts()
    getUser()
  }, [getPosts, getUser])
  return (
    <PostContext.Provider value={{ posts, user, getPosts }}>
      {children}
    </PostContext.Provider>
  )
}
