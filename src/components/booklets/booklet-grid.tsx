import { CatechismBooklet } from '@/types'
import { BookletCard } from './booklet-card'
import { Book } from 'lucide-react'

interface BookletGridProps {
  booklets: CatechismBooklet[]
  isLoading?: boolean
}

export function BookletGrid({ booklets, isLoading }: BookletGridProps) {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 animate-pulse rounded-lg bg-gray-200" />
        ))}
      </div>
    )
  }

  if (booklets.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
        <Book className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">No booklets found</h3>
        <p className="mt-2 text-sm text-gray-500">
          Check back later for available catechism booklets.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {booklets.map((booklet) => (
        <BookletCard key={booklet.id} booklet={booklet} />
      ))}
    </div>
  )
}
