import { Explanation } from '@/types'
import { User, ThumbsUp, Eye, Star } from 'lucide-react'
import { formatRelativeTime, getRoleDisplayName } from '@/lib/utils'

interface ExplanationCardProps {
  explanation: Explanation
}

export function ExplanationCard({ explanation }: ExplanationCardProps) {
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'PRIEST':
        return 'bg-purple-100 text-purple-800'
      case 'CATECHIST':
        return 'bg-green-100 text-green-800'
      case 'THEOLOGY_REVIEWER':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Author Info */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">{explanation.submitter.name}</div>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${getRoleBadgeColor(
                explanation.submitter.role
              )}`}
            >
              {getRoleDisplayName(explanation.submitter.role)}
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-500">{formatRelativeTime(explanation.submittedAt)}</div>
      </div>

      {/* Content */}
      <div className="mt-4">
        {explanation.contentType === 'TEXT' && explanation.textContent && (
          <p className="whitespace-pre-wrap text-gray-700">{explanation.textContent}</p>
        )}
        {explanation.contentType === 'AUDIO' && explanation.fileUrl && (
          <audio controls className="w-full">
            <source src={explanation.fileUrl} />
            Your browser does not support audio playback.
          </audio>
        )}
        {explanation.contentType === 'VIDEO' && explanation.fileUrl && (
          <video controls className="w-full rounded-lg">
            <source src={explanation.fileUrl} />
            Your browser does not support video playback.
          </video>
        )}
      </div>

      {/* Stats */}
      <div className="mt-4 flex items-center gap-6 border-t border-gray-200 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <ThumbsUp className="h-4 w-4" />
          <span className="font-medium">{explanation.helpfulCount}</span>
          <span>helpful</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Eye className="h-4 w-4" />
          <span className="font-medium">{explanation.viewCount}</span>
          <span>views</span>
        </div>
        {explanation.qualityScore && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="font-medium">{explanation.qualityScore}</span>
            <span>quality</span>
          </div>
        )}
      </div>
    </div>
  )
}