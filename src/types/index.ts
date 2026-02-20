// User Types
export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  verified: boolean
  diocese?: string
  profileImageUrl?: string
  createdAt: string
}

export enum UserRole {
  PUBLIC_USER = 'PUBLIC_USER',
  CATECHIST = 'CATECHIST',
  PRIEST = 'PRIEST',
  THEOLOGY_REVIEWER = 'THEOLOGY_REVIEWER',
}

export interface AuthPayload {
  token: string
  user: User
}

// Booklet Types
export interface CatechismBooklet {
  id: string
  name: string
  version: string
  languageDefault: string
  diocese?: string
  createdAt: string
}

// Question Types
export interface Question {
  id: string
  booklet?: CatechismBooklet
  number: number
  text: string
  answer: string
  category?: string
  availableLanguages: string[]
}

// Explanation Types
export interface Explanation {
  id: string
  question: Question
  submitter: User
  languageCode: string
  contentType: ExplanationContentType
  textContent?: string
  fileUrl?: string
  submissionStatus: ExplanationStatus
  qualityScore?: number
  viewCount: number
  helpfulCount: number
  submittedAt: string
  reviewedAt?: string
  approvedAt?: string
}

export enum ExplanationContentType {
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  VIDEO = 'VIDEO',
}

export enum ExplanationStatus {
  PENDING = 'PENDING',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  FLAGGED = 'FLAGGED',
}

// Profile Types
export interface UserProfile {
  user: User
  explanationCount: number
  totalHelpfulVotes: number
  avgQualityScore?: number
  badges: Achievement[]
  recentActivity: Activity[]
}

export interface Achievement {
  id: string
  badge: Badge
  awardedAt: string
  count: number
}

export interface Badge {
  id: string
  name: string
  description: string
  iconUrl?: string
  category: string
}

export interface Activity {
  id: string
  type: 'EXPLANATION_SUBMITTED' | 'BADGE_EARNED' | 'HELPFUL_VOTE_RECEIVED'
  timestamp: string
  details: string
}

// Leaderboard Types
export interface LeaderboardEntry {
  userId: string
  userName: string
  userEmail: string
  score: number
  rank: number
  explanationCount: number
  helpfulVoteCount: number
  qualityAverage?: number
}

// Form Input Types
export interface RegisterInput {
  name: string
  email: string
  password: string
  role?: UserRole
  diocese?: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface SubmitExplanationInput {
  questionId: string
  languageCode: string
  contentType: ExplanationContentType
  textContent?: string
  fileUrl?: string
}

// API Response Types
export interface ApiError {
  message: string
  code?: string
}

export interface PaginationInfo {
  page: number
  perPage: number
  total: number
  hasMore: boolean
}
