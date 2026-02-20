import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '@/lib/graphql-client'
import { GET_BOOKLETS, GET_BOOKLET } from '@/graphql/queries'
import { CatechismBooklet } from '@/types'

interface BookletsData {
  booklets: CatechismBooklet[]
}

interface BookletData {
  booklet: CatechismBooklet
}

export function useBooklets() {
  return useQuery({
    queryKey: ['booklets'],
    queryFn: async () => {
      const data = await graphqlClient.request<BookletsData>(GET_BOOKLETS)
      return data.booklets
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useBooklet(id: string) {
  return useQuery({
    queryKey: ['booklet', id],
    queryFn: async () => {
      const data = await graphqlClient.request<BookletData>(GET_BOOKLET, { id })
      return data.booklet
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  })
}
