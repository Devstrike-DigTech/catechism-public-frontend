import { Explanation } from '@/types'
import { ExplanationCard } from './explanation-card'

interface ExplanationListProps {
  explanations: Explanation[]
}

export function ExplanationList({ explanations }: ExplanationListProps) {
  if (explanations.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {explanations.map((explanation) => (
        <ExplanationCard key={explanation.id} explanation={explanation} />
      ))}
    </div>
  )
}