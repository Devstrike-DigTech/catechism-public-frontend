import Link from 'next/link'
import { Book, Mail, Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Book className="h-5 w-5" />
              </div>
              Catechism
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Learn, share, and grow in your understanding of the Catholic faith.
            </p>
          </div>

          {/* Browse */}
          <div>
            <h3 className="font-semibold text-gray-900">Browse</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/booklets" className="text-gray-600 hover:text-blue-600">
                  Booklets
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-blue-600">
                  Search Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900">Community</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/leaderboard" className="text-gray-600 hover:text-blue-600">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-blue-600">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Catechism Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
