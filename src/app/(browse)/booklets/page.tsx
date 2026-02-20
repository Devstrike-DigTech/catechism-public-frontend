'use client'

import { useState, useMemo } from 'react'
import { useBooklets } from '@/hooks/use-booklets'
import { BookletGrid } from '@/components/booklets/booklet-grid'
import { LanguageSelector } from '@/components/ui/language-selector'
import { BookOpen } from 'lucide-react'

export default function BookletsPage() {
  const { data: booklets = [], isLoading } = useBooklets()
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  // Filter booklets by language
  const filteredBooklets = useMemo(() => {
    return booklets.filter((booklet) => booklet.languageDefault === selectedLanguage)
  }, [booklets, selectedLanguage])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Catechism Booklets</h1>
            </div>
            <p className="mt-2 text-lg text-gray-600">
              Browse our collection of catechism booklets and explore the questions
            </p>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-3">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredBooklets.length} booklet{filteredBooklets.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 animate-pulse rounded-lg bg-gray-200" />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredBooklets.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">No booklets available</h3>
          <p className="mt-2 text-sm text-gray-500">
            No booklets found for the selected language. Try switching to another language.
          </p>
        </div>
      )}

      {/* Booklets Grid */}
      {!isLoading && filteredBooklets.length > 0 && <BookletGrid booklets={filteredBooklets} />}
    </div>
  )
}