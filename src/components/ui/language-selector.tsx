'use client'

import { Globe } from 'lucide-react'
import { getLanguageName } from '@/lib/utils'

interface LanguageSelectorProps {
  selectedLanguage: string
  onLanguageChange: (language: string) => void
  availableLanguages?: string[]
}

const DEFAULT_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ig', name: 'Igbo' },
  { code: 'yo', name: 'Yoruba' },
]

export function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
  availableLanguages,
}: LanguageSelectorProps) {
  // Filter to only show available languages if provided
  const languages = availableLanguages
    ? DEFAULT_LANGUAGES.filter((lang) => availableLanguages.includes(lang.code))
    : DEFAULT_LANGUAGES

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-5 w-5 text-gray-400" />
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}