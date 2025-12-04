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
    <section id="events" className="relative py-16 md:py-28 bg-gradient-to-br from-bone via-white to-stone/10 overflow-hidden">
      {/* Warm background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-terracotta/8 to-honey/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-sage/6 to-moss/4 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-charcoal mb-4 leading-tight tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-xl md:text-2xl text-ash font-light leading-relaxed">
              Join our community gatherings and transformative experiences
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-14 h-14 rounded-[8px] bg-white border-2 border-sage/20 flex items-center justify-center transition-all hover:scale-105 hover:border-sage/40 hover:bg-sage/5 disabled:opacity-30 disabled:hover:scale-100 shadow-lg shadow-sage/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-sage" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-14 h-14 rounded-[8px] bg-white border-2 border-sage/20 flex items-center justify-center transition-all hover:scale-105 hover:border-sage/40 hover:bg-sage/5 disabled:opacity-30 disabled:hover:scale-100 shadow-lg shadow-sage/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-sage" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {events.map((event) => {
              const { date, time } = formatDateTime(event.start)
              return (
                <div key={event.id} className="embla__slide">
                  <article className="bg-white/95 backdrop-blur-sm rounded-[8px] overflow-hidden shadow-2xl shadow-sage/15 hover:shadow-2xl hover:shadow-sage/25 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                    {event.image && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {event.price && (
                          <div className="absolute top-5 right-5">
                            <span className="px-4 py-2 rounded-[8px] bg-terracotta text-white text-base font-semibold shadow-xl shadow-terracotta/30">
                              {event.price}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-base text-sage font-medium mb-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{date} • {time}</span>
                      </div>

                      <h3 className="text-2xl font-display font-semibold text-charcoal mb-4 line-clamp-2 group-hover:text-sage transition-colors leading-tight">
                        {event.title}
                      </h3>

                      {event.location && (
                        <div className="flex items-center gap-2 text-base text-ash mb-4">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      )}

                      {event.excerpt && (
                        <p className="text-base text-ash/80 mb-6 line-clamp-3 flex-1 leading-relaxed">
                          {event.excerpt}
                        </p>
                      )}

                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-sage to-forest text-white font-semibold text-base rounded-[8px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sage/40 mt-auto group/button"
                      >
                        <span className="group-hover/button:scale-105 transition-transform duration-300">Save a Spot</span>
                        <svg className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="flex md:hidden justify-center gap-3 mt-10">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="w-14 h-14 rounded-[8px] bg-white border-2 border-sage/20 flex items-center justify-center transition-all hover:scale-105 hover:border-sage/40 hover:bg-sage/5 disabled:opacity-30 shadow-lg shadow-sage/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-sage" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-14 h-14 rounded-[8px] bg-white border-2 border-sage/20 flex items-center justify-center transition-all hover:scale-105 hover:border-sage/40 hover:bg-sage/5 disabled:opacity-30 shadow-lg shadow-sage/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-sage" />
          </button>
        </div>
      </div>
    </section>
  )
}
