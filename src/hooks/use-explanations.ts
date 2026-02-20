import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '@/lib/graphql-client'
import { GET_EXPLANATIONS } from '@/graphql/queries'
import { Explanation } from '@/types'

interface ExplanationsData {
  explanations: Explanation[]
}

export function useExplanations(questionId: string, language: string = 'en') {
  return useQuery({
    queryKey: ['explanations', questionId, language],
    queryFn: async () => {
      const data = await graphqlClient.request<ExplanationsData>(GET_EXPLANATIONS, {
        questionId,
        language,
      })
      return data.explanations
    },
    enabled: !!questionId,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}
