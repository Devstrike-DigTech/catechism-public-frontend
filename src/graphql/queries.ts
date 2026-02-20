import { gql } from 'graphql-request'

// Auth Queries
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
        role
        verified
        diocese
      }
    }
  }
`

export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        email
        name
        verified
        createdAt
      }
    }
  }
`

export const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      name
      role
      verified
      diocese
      profileImageUrl
      createdAt
    }
  }
`

// Booklet Queries
export const GET_BOOKLETS = gql`
  query GetBooklets {
    booklets {
      id
      name
      version
      languageDefault
      diocese
      createdAt
    }
  }
`

export const GET_BOOKLET = gql`
  query GetBooklet($id: UUID!) {
    booklet(id: $id) {
      id
      name
      version
      languageDefault
      diocese
      createdAt
    }
  }
`

// Question Queries
export const GET_QUESTIONS = gql`
  query GetQuestions($bookletId: UUID!, $language: String) {
    questions(bookletId: $bookletId, language: $language) {
      id
      number
      text
      answer
      category
      availableLanguages
    }
  }
`

export const GET_QUESTION = gql`
  query GetQuestion($id: UUID!) {
    question(id: $id) {
      id
      number
      text
      answer
      category
      availableLanguages
    }
  }
`

export const SEARCH_QUESTIONS = gql`
  query SearchQuestions($query: String!, $language: String) {
    searchQuestions(query: $query, language: $language) {
      id
      number
      text
      answer
      category
    }
  }
`

// Explanation Queries
export const GET_EXPLANATIONS = gql`
  query GetExplanations($questionId: UUID!, $language: String) {
    explanations(questionId: $questionId, language: $language, status: APPROVED) {
      id
      submitter {
        id
        name
        role
      }
      languageCode
      contentType
      textContent
      fileUrl
      qualityScore
      viewCount
      helpfulCount
      submittedAt
    }
  }
`

export const GET_MY_EXPLANATIONS = gql`
  query GetMyExplanations {
    myExplanations {
      id
      question {
        id
        number
        text
      }
      languageCode
      contentType
      submissionStatus
      qualityScore
      viewCount
      helpfulCount
      submittedAt
      reviewedAt
      approvedAt
    }
  }
`

// Submit Explanation Mutation
export const SUBMIT_EXPLANATION = gql`
  mutation SubmitExplanation($input: SubmitExplanationInput!) {
    submitExplanation(input: $input) {
      id
      submissionStatus
      submittedAt
    }
  }
`

// Vote Mutation
export const VOTE_HELPFUL = gql`
  mutation VoteHelpful($explanationId: UUID!) {
    voteHelpful(explanationId: $explanationId) {
      success
      message
    }
  }
`

// Profile Queries
export const GET_PROFILE = gql`
  query GetProfile {
    me {
      id
      name
      email
      role
      verified
      diocese
      profileImageUrl
      createdAt
    }
    myProfile {
      explanationCount
      totalHelpfulVotes
      avgQualityScore
    }
    myAchievements {
      id
      badge {
        id
        name
        description
        iconUrl
        category
      }
      awardedAt
      count
    }
  }
`

// Leaderboard Query
export const GET_LEADERBOARD = gql`
  query GetLeaderboard($period: String!) {
    leaderboard(period: $period) {
      userId
      userName
      userEmail
      score
      rank
      explanationCount
      helpfulVoteCount
      qualityAverage
    }
  }
`

// Badges Query
export const GET_BADGES = gql`
  query GetBadges {
    badges {
      id
      name
      description
      iconUrl
      category
      requiredCount
    }
  }
`
