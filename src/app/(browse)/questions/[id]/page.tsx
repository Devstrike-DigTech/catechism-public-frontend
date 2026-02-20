'use client'

import { useState } from 'react'
import { useQuestion } from '@/hooks/use-questions'
import { useExplanations } from '@/hooks/use-explanations'
import { ExplanationList } from '@/components/explanations/explanation-list'
import { LanguageSelector } from '@/components/ui/language-selector'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function QuestionPage({ params }: { params: { id: string } }) {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const { data: question, isLoading: questionLoading } = useQuestion(params.id)
  const { data: explanations = [], isLoading: explanationsLoading } = useExplanations(
    params.id,
    selectedLanguage
  )

  const isLoading = questionLoading || explanationsLoading

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
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
        <div className="mt-8 space-y-6">
          <div className="h-48 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-64 animate-pulse rounded-lg bg-gray-200" />
        </div>
      )}

      {/* Question Card */}
      {!isLoading && question && (
        <>
          <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
            <div className="text-sm font-medium text-gray-500">
              Question #{question.number}
            </div>
            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              {question.text}
            </h1>

            <div className="mt-6 rounded-lg bg-blue-50 p-4">
              <div className="text-sm font-semibold text-blue-900">Official Answer:</div>
              <p className="mt-2 text-blue-800">{question.answer}</p>
            </div>

            {question.category && (
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                  {question.category}
                </span>
              </div>
            )}
          </div>

          {/* Community Explanations Section */}
          <div className="mt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gray-400" />
                <h2 className="text-xl font-bold text-gray-900">
                  Community Explanations ({explanations.length})
                </h2>
              </div>
              
              {/* Language Selector */}
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={setSelectedLanguage}
                availableLanguages={question.availableLanguages}
              />
            </div>

            {explanations.length === 0 ? (
              <div className="mt-6 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No explanations yet
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Be the first to share your understanding of this question!
                </p>
                <Link
                  href="/login"
                  className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Sign in to contribute
                </Link>
              </div>
            ) : (
              <div className="mt-6">
                <ExplanationList explanations={explanations} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}