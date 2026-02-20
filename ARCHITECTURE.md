# Catechism Public Frontend - Complete Architecture

## 🎯 Project Overview

A public-facing Next.js application where users can:
1. Browse catechism questions (public)
2. View community explanations (public)
3. Register and login
4. Submit their own explanations
5. Vote on helpful explanations
6. Earn badges and compete on leaderboards

---

## 📂 Complete File Structure

```
catechism-public-frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx           # Login page
│   │   │   ├── register/
│   │   │   │   └── page.tsx           # Registration page
│   │   │   └── layout.tsx             # Auth layout (centered)
│   │   │
│   │   ├── (browse)/
│   │   │   ├── page.tsx               # Home page
│   │   │   ├── booklets/
│   │   │   │   ├── page.tsx           # Booklets list
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Booklet questions
│   │   │   ├── questions/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Question + explanations
│   │   │   ├── search/
│   │   │   │   └── page.tsx           # Search results
│   │   │   └── layout.tsx             # Public layout (header+footer)
│   │   │
│   │   ├── (user)/
│   │   │   ├── submit/
│   │   │   │   └── page.tsx           # Submit explanation
│   │   │   ├── profile/
│   │   │   │   └── page.tsx           # User profile
│   │   │   ├── achievements/
│   │   │   │   └── page.tsx           # Badges earned
│   │   │   ├── leaderboard/
│   │   │   │   └── page.tsx           # Rankings
│   │   │   └── layout.tsx             # User layout (requires auth)
│   │   │
│   │   ├── layout.tsx                 # Root layout
│   │   ├── providers.tsx              # React Query + Toast
│   │   └── globals.css                # Tailwind + theme
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx             # Main header
│   │   │   ├── footer.tsx             # Footer
│   │   │   ├── user-menu.tsx          # User dropdown
│   │   │   └── mobile-nav.tsx         # Mobile navigation
│   │   │
│   │   ├── questions/
│   │   │   ├── question-card.tsx      # Question display
│   │   │   ├── question-list.tsx      # List of questions
│   │   │   └── question-search.tsx    # Search component
│   │   │
│   │   ├── explanations/
│   │   │   ├── explanation-card.tsx   # Single explanation
│   │   │   ├── explanation-list.tsx   # List of explanations
│   │   │   ├── submit-form.tsx        # Submit explanation form
│   │   │   ├── vote-button.tsx        # Helpful vote button
│   │   │   └── media-player.tsx       # Audio/video player
│   │   │
│   │   ├── booklets/
│   │   │   ├── booklet-card.tsx       # Booklet card
│   │   │   └── booklet-grid.tsx       # Grid of booklets
│   │   │
│   │   ├── profile/
│   │   │   ├── profile-header.tsx     # User header
│   │   │   ├── stats-card.tsx         # User stats
│   │   │   ├── badge-display.tsx      # Badges earned
│   │   │   └── activity-feed.tsx      # Recent activity
│   │   │
│   │   └── ui/
│   │       ├── button.tsx             # Button component
│   │       ├── card.tsx               # Card component
│   │       ├── badge.tsx              # Badge component
│   │       └── skeleton.tsx           # Loading skeleton
│   │
│   ├── hooks/
│   │   ├── use-auth.ts                # Authentication hook
│   │   ├── use-booklets.ts            # Booklets queries
│   │   ├── use-questions.ts           # Questions queries
│   │   ├── use-explanations.ts        # Explanations queries/mutations
│   │   ├── use-votes.ts               # Voting mutations
│   │   └── use-profile.ts             # User profile queries
│   │
│   ├── lib/
│   │   ├── graphql-client.ts          # GraphQL client
│   │   └── utils.ts                   # Utility functions
│   │
│   ├── stores/
│   │   └── auth-store.ts              # Zustand auth state
│   │
│   ├── graphql/
│   │   ├── queries.ts                 # All GraphQL queries
│   │   └── mutations.ts               # All GraphQL mutations
│   │
│   └── types/
│       └── index.ts                   # TypeScript definitions
│
├── public/
│   ├── images/
│   └── icons/
│
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .gitignore
└── README.md
```

---

## 🎨 Key Pages Breakdown

### 1. Home Page (`/`)
**Purpose**: Landing page with featured content
**Features**:
- Hero section with call-to-action
- Featured questions
- Recent explanations
- Community stats
- Get started buttons

### 2. Booklets List (`/booklets`)
**Purpose**: Browse all available booklets
**Features**:
- Grid of booklet cards
- Filter by language
- Search booklets
- Booklet preview (cover, title, question count)

### 3. Booklet Questions (`/booklets/[id]`)
**Purpose**: View all questions in a booklet
**Features**:
- Booklet header (title, description)
- List of questions with numbers
- Click to view full question
- Progress indicator

### 4. Question Details (`/questions/[id]`)
**Purpose**: View question, official answer, and community explanations
**Features**:
- Question text and number
- Official answer
- List of community explanations (sorted by helpful votes)
- Vote buttons
- Submit explanation button (if authenticated)
- Filter explanations (by language, media type)

### 5. Submit Explanation (`/submit`)
**Purpose**: Submit new explanation
**Features**:
- Select question
- Choose media type (text, audio, video)
- Text editor for text explanations
- File upload for audio/video
- Submit button
- Preview

### 6. User Profile (`/profile`)
**Purpose**: View user stats and activity
**Features**:
- Profile header (avatar, name, role)
- Stats (explanations submitted, helpful votes, quality score)
- Badges earned
- Recent activity
- Edit profile button

### 7. Leaderboard (`/leaderboard`)
**Purpose**: Community rankings
**Features**:
- Top contributors (weekly, monthly, all-time)
- Rank, name, score, explanations count
- Medal icons for top 3
- User's current rank highlighted

### 8. Login (`/login`)
**Purpose**: User authentication
**Features**:
- Email and password fields
- Remember me checkbox
- Forgot password link
- Register link
- Social login (optional)

### 9. Register (`/register`)
**Purpose**: New account creation
**Features**:
- Name, email, password fields
- Role selection (public user, catechist, priest)
- Terms acceptance
- Submit button
- Login link

---

## 🔄 Data Flow

### Authentication Flow
```
1. User enters credentials
2. GraphQL mutation: login(email, password)
3. Backend returns JWT + user data
4. Token stored in Zustand + localStorage
5. GraphQL client adds token to headers
6. Protected routes check auth state
7. Redirect to login if unauthenticated
```

### Submit Explanation Flow
```
1. User selects question
2. User writes explanation (or uploads file)
3. Form validation
4. GraphQL mutation: submitExplanation(input)
5. Backend creates Explanation record (status: PENDING)
6. Success toast
7. Redirect to question page
8. Explanation appears in moderation queue (admin)
```

### Voting Flow
```
1. User clicks "Helpful" button
2. GraphQL mutation: voteHelpful(explanationId)
3. Backend increments helpfulCount
4. UI updates optimistically
5. If already voted, show "Already voted" message
```

---

## 🎯 GraphQL Queries & Mutations

### Queries
```graphql
# Get all booklets
query GetBooklets {
  booklets {
    id
    name
    version
    languageDefault
  }
}

# Get questions in booklet
query GetQuestions($bookletId: UUID!, $language: String) {
  questions(bookletId: $bookletId, language: $language) {
    id
    number
    text
    answer
  }
}

# Get question with explanations
query GetQuestionDetails($questionId: UUID!, $language: String) {
  question(id: $questionId) {
    id
    number
    text
    answer
  }
  explanations(questionId: $questionId, language: $language, status: APPROVED) {
    id
    textContent
    fileUrl
    contentType
    submitter {
      name
    }
    qualityScore
    helpfulCount
    viewCount
  }
}

# Get user profile
query GetProfile {
  me {
    id
    name
    email
    role
    profile {
      explanationCount
      totalHelpfulVotes
      avgQualityScore
    }
    achievements {
      badge {
        name
        iconUrl
      }
      awardedAt
    }
  }
}

# Get leaderboard
query GetLeaderboard($period: String!) {
  leaderboard(period: $period) {
    userId
    userName
    score
    rank
    explanationCount
  }
}
```

### Mutations
```graphql
# Register
mutation Register($input: RegisterInput!) {
  register(input: $input) {
    token
    user {
      id
      name
      email
      role
    }
  }
}

# Login
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      name
      email
      role
    }
  }
}

# Submit explanation
mutation SubmitExplanation($input: SubmitExplanationInput!) {
  submitExplanation(input: $input) {
    id
    submissionStatus
  }
}

# Vote helpful
mutation VoteHelpful($explanationId: UUID!) {
  voteHelpful(explanationId: $explanationId) {
    success
  }
}
```

---

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) - Main actions
- **Success**: Green (#10b981) - Positive feedback
- **Warning**: Yellow (#f59e0b) - Alerts
- **Danger**: Red (#ef4444) - Errors
- **Gray**: Various shades for UI elements

### Typography
- **Headings**: Bold, hierarchical (text-3xl, text-2xl, text-xl)
- **Body**: Regular, readable (text-base, text-sm)
- **Labels**: Medium weight (font-medium)

### Spacing
- Consistent spacing scale (4px increments)
- Generous whitespace for readability
- Responsive padding/margins

### Components
- Rounded corners (rounded-lg)
- Subtle shadows (shadow-sm, shadow)
- Smooth transitions
- Hover states on interactive elements

---

## 🔐 Security Considerations

1. **JWT Storage**: Store in httpOnly cookies (backend) or localStorage (frontend)
2. **Auth Guards**: Protect user routes with authentication checks
3. **Input Validation**: Validate all form inputs client-side
4. **XSS Prevention**: Sanitize user-generated content
5. **CSRF Protection**: Use CSRF tokens for mutations
6. **Rate Limiting**: Implement on backend for submissions and votes

---

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: ≥ 1024px

### Mobile Features
- Hamburger menu
- Touch-friendly buttons (44px min)
- Swipe gestures (optional)
- Responsive grids (1 col → 2 cols → 3+ cols)
- Bottom navigation (optional)

---

## 🚀 Performance Optimization

1. **React Query Caching**: Cache booklets, questions for 5 minutes
2. **Image Optimization**: Use Next.js Image component
3. **Code Splitting**: Route-based code splitting (automatic)
4. **Lazy Loading**: Load explanations on scroll (infinite scroll)
5. **Prefetching**: Prefetch likely next routes
6. **SSR/SSG**: Static generation for booklets list

---

## ✅ Next Steps

1. **Phase 1**: Core browsing (booklets, questions, explanations)
2. **Phase 2**: Authentication (login, register)
3. **Phase 3**: Submit explanations (text only)
4. **Phase 4**: Voting system
5. **Phase 5**: User profiles and achievements
6. **Phase 6**: Leaderboards
7. **Phase 7**: Audio/video support
8. **Phase 8**: Advanced search

---

## 🎯 Success Metrics

- **User Engagement**: Time on site, pages per session
- **Content Quality**: Average quality scores, helpful vote ratio
- **User Growth**: New registrations, retention rate
- **Contribution Rate**: Explanations submitted per user
- **Community Health**: Active contributors, leaderboard participation

This architecture provides a complete blueprint for building the public frontend!
