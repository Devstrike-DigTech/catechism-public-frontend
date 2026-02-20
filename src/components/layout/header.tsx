'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Menu, X, Book } from 'lucide-react'
import { MobileNav } from './mobile-nav'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Book className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline">Catechism</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/booklets"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Booklets
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            <Search className="h-5 w-5" />
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
