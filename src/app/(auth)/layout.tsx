import Link from 'next/link'
import { BookOpen } from 'lucide-react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Simple Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Catechism</span>
          </Link>
        </div>
      </header>

      {/* Centered Auth Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-600">
          <p>&copy; 2024 Catechism Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}