import { Hero } from '@/components/sections/hero'
import { DiscoverGrid } from '@/components/sections/discover-grid'
import { EventsCarousel } from '@/components/sections/events-carousel'
import { FacilitatorsCarousel } from '@/components/sections/facilitators-carousel'
import { CommunitySection } from '@/components/sections/community-section'
import { NewsletterFooter } from '@/components/sections/newsletter-footer'
import { fetchLumaEvents } from '@/lib/luma'
import type { ContentCard, LumaEvent, Facilitator, Article } from '@/lib/types'

// Import data
import facilitatorsData from '@/data/facilitators.json'
import articlesData from '@/data/articles.json'

export const revalidate = 3600 // Revalidate every hour

export default async function HomePage() {
  // Fetch events
  const events = await fetchLumaEvents()

  // Cast imported data to proper types
  const facilitators = facilitatorsData as Facilitator[]
  const articles = articlesData as Article[]

  // Create mixed content cards for Discover section
  const contentCards: ContentCard[] = [
    ...events.slice(0, 3).map(event => ({ kind: 'event' as const, data: event })),
    ...facilitators.map(facilitator => ({ kind: 'facilitator' as const, data: facilitator })),
    ...articles.map(article => ({ kind: 'article' as const, data: article })),
  ]

  return (
    <main className="min-h-screen">
      <Hero />

      <DiscoverGrid items={contentCards} />

      <EventsCarousel events={events} />

      <FacilitatorsCarousel facilitators={facilitators} />

      <CommunitySection />

      <NewsletterFooter />
    </main>
  )
}
