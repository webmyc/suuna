import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Facilitator } from '../../types'
import '../../../src/styles/carousel.css'

interface Props {
  facilitators: Facilitator[]
}

export function FacilitatorsCarousel({ facilitators }: Props) {
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

  if (facilitators.length === 0) return null

  return (
    <section id="facilitators" className="py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Meet Our Facilitators
            </h2>
            <p className="text-lg text-secondary">
              Connect with wisdom keepers and guides from our community
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
            {facilitators.map((facilitator) => {
              const siteLink = facilitator.links?.find(l => l.type === 'site')
              const calendarLink = facilitator.links?.find(l => l.type === 'calendar')

              return (
                <div key={facilitator.id} className="embla__slide">
                  <article className="glass rounded-3xl p-6 hover-lift group h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-accent/30 flex-shrink-0 group-hover:ring-accent transition-all">
                        <img
                          src={facilitator.avatar}
                          alt={facilitator.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                          {facilitator.name}
                        </h3>
                        <p className="text-sm text-accent font-medium">
                          {facilitator.headline}
                        </p>
                        {facilitator.location && (
                          <div className="flex items-center gap-1.5 text-xs text-secondary mt-2">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{facilitator.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {facilitator.bio && (
                      <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">
                        {facilitator.bio}
                      </p>
                    )}

                    {facilitator.tags && facilitator.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {facilitator.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-full bg-primary text-secondary text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2 mt-auto">
                      {siteLink && (
                        <a
                          href={siteLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-accent text-accent rounded-full text-sm font-medium transition-all hover:bg-accent/10"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Profile
                        </a>
                      )}
                      {calendarLink && (
                        <a
                          href={calendarLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold transition-all hover:scale-105"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Book
                        </a>
                      )}
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
