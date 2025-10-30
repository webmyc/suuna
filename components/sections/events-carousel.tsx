'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { EventCard } from './event-card'
import type { LumaEvent } from '@/lib/types'

export function EventsCarousel({ events }: { events: LumaEvent[] }) {
  if (events.length === 0) return null

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-spartan font-semibold tracking-tight text-suuna-text-light mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-suuna-text-muted max-w-2xl">
            Join our community gatherings, workshops, and transformative experiences
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                <EventCard event={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
