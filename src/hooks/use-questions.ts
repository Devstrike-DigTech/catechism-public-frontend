import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '@/lib/graphql-client'
import { GET_QUESTIONS, GET_QUESTION, SEARCH_QUESTIONS } from '@/graphql/queries'
import { Question } from '@/types'

interface QuestionsData {
  questions: Question[]
}

interface QuestionData {
  question: Question
}

interface SearchQuestionsData {
  searchQuestions: Question[]
}

export function useQuestions(bookletId: string, language: string = 'en') {
  return useQuery({
    queryKey: ['questions', bookletId, language],
    queryFn: async () => {
      const data = await graphqlClient.request<QuestionsData>(GET_QUESTIONS, {
        bookletId,
        language,
      })
      return data.questions
    },
    enabled: !!bookletId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useQuestion(id: string) {
  return useQuery({
    queryKey: ['question', id],
    queryFn: async () => {
      const data = await graphqlClient.request<QuestionData>(GET_QUESTION, { id })
      return data.question
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useSearchQuestions(query: string, language: string = 'en') {
  return useQuery({
    queryKey: ['search-questions', query, language],
    queryFn: async () => {
      const data = await graphqlClient.request<SearchQuestionsData>(SEARCH_QUESTIONS, {
        query,
        language,
      })
      return data.searchQuestions
    },
    enabled: query.length >= 3, // Only search if query is 3+ characters
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}
