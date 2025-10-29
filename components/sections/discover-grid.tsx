'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { EventCard } from './event-card'
import { FacilitatorCard } from './facilitator-card'
import { ArticleCard } from './article-card'
import type { ContentCard } from '@/lib/types'

type FilterType = 'all' | 'event' | 'facilitator' | 'article' | 'workshop'

export function DiscoverGrid({ items }: { items: ContentCard[] }) {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.kind === filter)

  return (
    <section id="discover" className="py-16 md:py-24 bg-gradient-to-b from-suuna-bg to-suuna-forest">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-spartan font-semibold tracking-tight text-suuna-text-light mb-4">
            Discover
          </h2>
          <p className="text-lg text-suuna-text-muted max-w-2xl mx-auto mb-8">
            Explore our community's events, facilitators, and wisdom
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {(['all', 'event', 'facilitator', 'article'] as FilterType[]).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className="group"
              >
                <Badge
                  variant={filter === filterType ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  {filterType !== 'all' && 's'}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            switch (item.kind) {
              case 'event':
                return <EventCard key={`event-${item.data.id}-${index}`} event={item.data} />
              case 'facilitator':
                return <FacilitatorCard key={`facilitator-${item.data.id}-${index}`} facilitator={item.data} />
              case 'article':
                return <ArticleCard key={`article-${item.data.id}-${index}`} article={item.data} />
              default:
                return null
            }
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-suuna-text-muted">No items found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
