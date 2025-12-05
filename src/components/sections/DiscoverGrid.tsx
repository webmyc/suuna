import { useState } from 'react'
import type { LumaEvent, Facilitator, Article } from '../../types'
import { EventCard } from '../ui/EventCard'
import { FacilitatorCard } from '../ui/FacilitatorCard'
import { ArticleCard } from '../ui/ArticleCard'

interface Props {
  events: LumaEvent[]
  facilitators: Facilitator[]
  articles: Article[]
}

type FilterType = 'all' | 'events' | 'facilitators' | 'articles'

interface ContentItem {
  type: 'event' | 'facilitator' | 'article'
  data: LumaEvent | Facilitator | Article
  id: string
}

export function DiscoverGrid({ events, facilitators, articles }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  // Combine all content with type information
  const allContent: ContentItem[] = [
    ...events.map(e => ({ type: 'event' as const, data: e, id: `event-${e.id}` })),
    ...facilitators.map(f => ({ type: 'facilitator' as const, data: f, id: `facilitator-${f.id}` })),
    ...articles.map(a => ({ type: 'article' as const, data: a, id: `article-${a.id}` })),
  ]

  // Filter content based on active filter
  const filteredContent = allContent.filter(item => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'events') return item.type === 'event'
    if (activeFilter === 'facilitators') return item.type === 'facilitator'
    if (activeFilter === 'articles') return item.type === 'article'
    return true
  })

  const filters: { value: FilterType; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: allContent.length },
    { value: 'events', label: 'Events', count: events.length },
    { value: 'facilitators', label: 'Facilitators', count: facilitators.length },
    { value: 'articles', label: 'Articles', count: articles.length },
  ]

  return (
    <section id="discover" className="py-16 md:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal dark:text-bone mb-3">
            Discover SUUNA
          </h2>
          <p className="text-lg text-ash dark:text-[#B8C5D0] max-w-2xl mx-auto mb-8">
            Explore our community through events, wisdom keepers, and shared insights
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`
                  px-6 py-2.5 rounded-lg font-semibold transition-all text-sm
                  ${activeFilter === filter.value
                    ? 'bg-sage dark:bg-moss text-white'
                    : 'bg-white dark:bg-[#1E2B38] border border-stone/30 dark:border-white/10 text-charcoal dark:text-bone hover:border-sage dark:hover:border-moss'
                  }
                `}
              >
                {filter.label}
                <span className={`ml-2 ${activeFilter === filter.value ? 'text-white/80' : 'text-ash dark:text-[#B8C5D0]'}`}>
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredContent.map(item => {
            if (item.type === 'event') {
              return <EventCard key={item.id} event={item.data as LumaEvent} />
            }
            if (item.type === 'facilitator') {
              return <FacilitatorCard key={item.id} facilitator={item.data as Facilitator} />
            }
            if (item.type === 'article') {
              return <ArticleCard key={item.id} article={item.data as Article} />
            }
            return null
          })}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-ash dark:text-[#B8C5D0]">
              No {activeFilter === 'all' ? 'content' : activeFilter} found
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
