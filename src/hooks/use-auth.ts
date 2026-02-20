import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { graphqlClient } from '@/lib/graphql-client'
import { LOGIN_MUTATION, REGISTER_MUTATION, ME_QUERY } from '@/graphql/queries'
import { useAuthStore } from '@/stores/auth-store'
import { LoginInput, RegisterInput, AuthPayload } from '@/types'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface LoginData {
  login: AuthPayload
}

interface RegisterData {
  register: AuthPayload
}

interface MeData {
  me: AuthPayload['user']
}

export function useAuth() {
  const router = useRouter()
  const { user, setUser, login: storeLogin, logout: storeLogout } = useAuthStore()
  const queryClient = useQueryClient()

  // Fetch current user
  const { data: meData, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      try {
        const data = await graphqlClient.request<MeData>(ME_QUERY)
        return data.me
      } catch (error) {
        // If token is invalid, clear it
        storeLogout()
        return null
      }
    },
    enabled: !!useAuthStore.getState().token && !user,
  })

  // Update user from query
  if (meData && !user) {
    setUser(meData)
  }

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (input: LoginInput) => {
      const data = await graphqlClient.request<LoginData>(LOGIN_MUTATION, input)
      return data.login
    },
    onSuccess: (data) => {
      storeLogin(data.user, data.token)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      toast.success('Welcome back!')
      router.push('/')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed')
    },
  })

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (input: RegisterInput) => {
      const data = await graphqlClient.request<RegisterData>(REGISTER_MUTATION, { input })
      return data.register
    },
    onSuccess: (data) => {
      storeLogin(data.user, data.token)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      toast.success('Account created successfully!')
      router.push('/')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed')
    },
  })

  // Logout function
  const logout = () => {
    storeLogout()
    queryClient.clear()
    toast.success('Logged out successfully')
    router.push('/login')
  }

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
  }
}
