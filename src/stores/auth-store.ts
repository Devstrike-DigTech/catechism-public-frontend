import { create } from 'zustand'
import { User } from '@/types'
import { setAuthToken, clearAuthToken, getAuthToken } from '@/lib/graphql-client'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  login: (user: User, token: string) => void
  logout: () => void
  initAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setToken: (token) => {
    setAuthToken(token)
    set({ token })
  },

  login: (user, token) => {
    setAuthToken(token)
    set({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    })
  },

  logout: () => {
    clearAuthToken()
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    })
  },

  initAuth: () => {
    const token = getAuthToken()
    if (token) {
      set({ token, isLoading: true })
      // Token will be validated by fetching user in useAuth hook
    } else {
      set({ isLoading: false })
    }
  },
}))
