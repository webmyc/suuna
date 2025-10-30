import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { LumaEvent } from '../../types'
import '../../../src/styles/carousel.css'

interface Props {
  events: LumaEvent[]
}

// Helper to format date/time
function formatDateTime(dateString: string) {
  const date = new Date(dateString)
  return {
    date: date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    time: date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }),
  }
}

export function EventsCarousel({ events }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  if (events.length === 0) return null

  return (
    <section id="events" className="py-16 md:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-secondary">
              Join our community gatherings and transformative experiences
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center transition-all hover:scale-105 hover:border-accent disabled:opacity-30 disabled:hover:scale-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center transition-all hover:scale-105 hover:border-accent disabled:opacity-30 disabled:hover:scale-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {events.map((event) => {
              const { date, time } = formatDateTime(event.start)
              return (
                <div key={event.id} className="embla__slide">
                  <article className="glass rounded-3xl overflow-hidden hover-lift group h-full flex flex-col">
                    {event.image && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {event.price && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 rounded-full bg-accent text-white text-sm font-semibold shadow-lg">
                              {event.price}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-accent mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{date} • {time}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>

                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      )}

                      {event.excerpt && (
                        <p className="text-sm text-secondary mb-4 line-clamp-3 flex-1">
                          {event.excerpt}
                        </p>
                      )}

                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg mt-auto"
                      >
                        Save a Spot
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center transition-all hover:scale-105 hover:border-accent disabled:opacity-30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-12 h-12 rounded-full bg-elevated border border-border flex items-center justify-center transition-all hover:scale-105 hover:border-accent disabled:opacity-30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}
