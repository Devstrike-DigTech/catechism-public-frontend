import Link from 'next/link'
import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <div className="rounded-lg bg-white px-8 py-10 shadow-lg">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-600">
          Sign in to your account to continue
        </p>
      </div>

      {/* Login Form */}
      <div className="mt-8">
        <LoginForm />
      </div>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/register" className="font-medium text-blue-600 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}