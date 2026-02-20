'use client'

import Link from 'next/link'
import { Book, Search, LogIn, UserPlus } from 'lucide-react'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu */}
      <div className="fixed inset-x-0 top-16 z-50 bg-white shadow-lg md:hidden">
        <nav className="container mx-auto space-y-1 px-4 py-4">
          <Link
            href="/booklets"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <Book className="h-5 w-5" />
            <span className="font-medium">Booklets</span>
          </Link>

          <Link
            href="/search"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
            <span className="font-medium">Search</span>
          </Link>

          <div className="my-4 border-t border-gray-200" />

          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <LogIn className="h-5 w-5" />
            <span className="font-medium">Login</span>
          </Link>

          <Link
            href="/register"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700"
          >
            <UserPlus className="h-5 w-5" />
            <span className="font-medium">Get Started</span>
          </Link>
        </nav>
      </div>
    </>
  )
}
