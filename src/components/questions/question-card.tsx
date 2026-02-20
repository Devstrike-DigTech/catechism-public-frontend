import Link from 'next/link'
import { Question } from '@/types'
import { HelpCircle, ChevronRight } from 'lucide-react'
import { truncate } from '@/lib/utils'

interface QuestionCardProps {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Link
      href={`/questions/${question.id}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
          {question.number}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
              {truncate(question.text, 100)}
            </h3>
            <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1" />
          </div>

          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{truncate(question.answer, 120)}</p>

          {question.category && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                {question.category}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
