import Link from 'next/link'
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Learn Catechism Together
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Explore questions, share explanations, and grow in faith with our community
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/booklets"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
              >
                Browse Questions
              </Link>
              <Link
                href="/register"
                className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Browse Questions</h3>
              <p className="mt-2 text-sm text-gray-600">
                Access hundreds of catechism questions with official answers
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Community Wisdom</h3>
              <p className="mt-2 text-sm text-gray-600">
                Read explanations from priests, catechists, and fellow learners
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Earn Badges</h3>
              <p className="mt-2 text-sm text-gray-600">
                Contribute explanations and earn recognition for your insights
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Track Progress</h3>
              <p className="mt-2 text-sm text-gray-600">
                See your contributions and climb the community leaderboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to get started?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join our community and start exploring catechism questions today
            </p>
            <div className="mt-8">
              <Link
                href="/booklets"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
