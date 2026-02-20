import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/graphql'

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {},
})

// Function to set auth token
export function setAuthToken(token: string | null) {
  if (token) {
    graphqlClient.setHeader('Authorization', `Bearer ${token}`)
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
  } else {
    graphqlClient.setHeader('Authorization', '')
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
    }
  }
}

// Function to get auth token
export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token')
  }
  return null
}

// Function to clear auth token
export function clearAuthToken() {
  setAuthToken(null)
}

// Initialize token from localStorage on client
if (typeof window !== 'undefined') {
  const token = getAuthToken()
  if (token) {
    setAuthToken(token)
  }
}
