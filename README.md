# Catechism Public Frontend

Public-facing web application for the Catechism Platform where users can browse questions, view explanations, and contribute to the community.

## Features

### Public (No Authentication Required)
- 📖 Browse catechism booklets
- ❓ View questions and official answers
- 💬 Read community explanations
- 🔍 Search questions
- 🌐 Multi-language support

### Authenticated Users
- 👤 Create account and login
- ✍️ Submit explanations (text, audio, video)
- 👍 Vote on helpful explanations
- 🏆 Earn badges and achievements
- 📊 View personal profile and stats
- 🎖️ Compete on leaderboards

## User Roles

- **PUBLIC_USER** - Can submit explanations and vote
- **CATECHIST** - Priority submissions and special badge
- **PRIEST** - Can submit with clergy badge
- **THEOLOGY_REVIEWER** - Can submit with expert badge

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State**: Zustand + React Query
- **API**: GraphQL (graphql-request)
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Backend API running

### Installation

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your backend URL
# NEXT_PUBLIC_API_URL=http://localhost:8080/graphql

# Run development server
npm run dev

# Visit http://localhost:3001
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js routes
│   ├── (auth)/            # Auth pages (login, register)
│   ├── (browse)/          # Public browsing pages
│   ├── (user)/            # Authenticated user pages
│   └── layout.tsx         # Root layout
│
├── components/
│   ├── layout/            # Headers, footers, nav
│   ├── questions/         # Question components
│   ├── explanations/      # Explanation components
│   └── ui/                # Reusable UI components
│
├── hooks/                 # React Query hooks
├── lib/                   # Utilities
├── types/                 # TypeScript types
└── graphql/               # GraphQL queries
```

## Key Pages

### Public Pages
- **/** - Home page with featured content
- **/booklets** - Browse all booklets
- **/booklets/[id]** - View booklet questions
- **/questions/[id]** - View question details + explanations

### Auth Pages
- **/login** - User login
- **/register** - Create account
- **/forgot-password** - Password reset

### User Pages (Authenticated)
- **/submit** - Submit new explanation
- **/profile** - User profile and stats
- **/achievements** - Earned badges
- **/leaderboard** - Community rankings

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/graphql
```

## Deployment

### Vercel (Recommended)
```bash
vercel
```
Set `NEXT_PUBLIC_API_URL` in dashboard.

### Railway/Render
1. Connect GitHub repo
2. Set environment variable: `NEXT_PUBLIC_API_URL`
3. Deploy automatically on push

## Features by Version

### v1 (MVP)
- ✅ Browse questions
- ✅ View explanations
- ✅ User authentication
- ✅ Submit explanations (text)
- ✅ Vote on explanations

### v2 (Planned)
- ⏳ Audio/Video explanations
- ⏳ Advanced search
- ⏳ Badges & achievements
- ⏳ Leaderboards
- ⏳ User profiles

## Port Configuration

- Admin Frontend: `http://localhost:3000`
- Public Frontend: `http://localhost:3001`
- Backend API: `http://localhost:8080`

## Contributing

This is the public-facing frontend. For admin features, see `catechism-admin-frontend`.

## License

Proprietary
