'use client'

import { useState } from 'react'
import { useBooklet } from '@/hooks/use-booklets'
import { useQuestions } from '@/hooks/use-questions'
import { QuestionCard } from '@/components/questions/question-card'
import { LanguageSelector } from '@/components/ui/language-selector'
import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BookletPage({ params }: { params: { id: string } }) {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const { data: booklet, isLoading: bookletLoading } = useBooklet(params.id)
  const { data: questions = [], isLoading: questionsLoading } = useQuestions(params.id, selectedLanguage)

  const isLoading = bookletLoading || questionsLoading

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/booklets"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Booklets
      </Link>

      {/* Loading State */}
      {isLoading && (
        <div className="mt-8">
          <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-96 animate-pulse rounded bg-gray-200" />
          <div className="mt-8 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-lg bg-gray-200" />
            ))}
          </div>
        </div>
      )}

      {/* Booklet Header */}
      {!isLoading && booklet && (
        <>
          <div className="mt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">{booklet.name}</h1>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                  <span>Version {booklet.version}</span>
                  <span>•</span>
                  <span>{questions.length} Questions</span>
                </div>
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center gap-3">
                <LanguageSelector
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={setSelectedLanguage}
                />
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Questions</h2>
            {questions.length === 0 ? (
              <div className="mt-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
                <p className="text-gray-500">No questions available in this booklet yet.</p>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {questions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}