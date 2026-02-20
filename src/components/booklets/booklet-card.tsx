import Link from 'next/link'
import { CatechismBooklet } from '@/types'
import { Book, Globe } from 'lucide-react'

interface BookletCardProps {
  booklet: CatechismBooklet
}

export function BookletCard({ booklet }: BookletCardProps) {
  return (
    <Link
      href={`/booklets/${booklet.id}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          <Book className="h-6 w-6" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
            {booklet.name}
          </h3>
          
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {booklet.languageDefault.toUpperCase()}
            </span>
            {booklet.version && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium">
                v{booklet.version}
              </span>
            )}
            {booklet.diocese && (
              <span className="text-xs text-gray-500">{booklet.diocese}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
