import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Facilitator } from '../../types'
import '../../../src/styles/carousel.css'

interface Props {
  guides: Facilitator[]
}

export function FacilitatorsCarousel({ guides }: Props) {
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

  if (guides.length === 0) return null

  return (
    <section id="guides" className="relative py-16 md:py-28 bg-gradient-to-br from-white via-bone to-sage/5 overflow-hidden">
      {/* Warm background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-honey/8 to-terracotta/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-sage/8 to-moss/4 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-charcoal dark:text-bone mb-3 leading-tight">
              Meet Our Guides
            </h2>
            <p className="text-lg text-ash dark:text-[#B8C5D0]">
              Connect with wisdom keepers from our community
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-14 h-14 rounded-[8px] bg-white border-2 border-terracotta/20 flex items-center justify-center transition-all hover:scale-105 hover:border-terracotta/40 hover:bg-terracotta/5 disabled:opacity-30 disabled:hover:scale-100 shadow-lg shadow-terracotta/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal dark:text-bone" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-14 h-14 rounded-[8px] bg-white border-2 border-terracotta/20 flex items-center justify-center transition-all hover:scale-105 hover:border-terracotta/40 hover:bg-terracotta/5 disabled:opacity-30 disabled:hover:scale-100 shadow-lg shadow-terracotta/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-charcoal dark:text-bone" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {guides.map((guide) => {
              const siteLink = guide.links?.find(l => l.type === 'site')
              const calendarLink = guide.links?.find(l => l.type === 'calendar')

              return (
                <div key={guide.id} className="embla__slide">
                  <article className="bg-white/95 backdrop-blur-sm rounded-[8px] p-8 shadow-2xl shadow-honey/15 hover:shadow-2xl hover:shadow-honey/25 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="relative w-24 h-24 rounded-[8px] overflow-hidden ring-4 ring-honey/20 flex-shrink-0 group-hover:ring-honey/40 transition-all duration-300 group-hover:scale-105">
                        <img
                          src={guide.avatar || guide.image}
                          alt={guide.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-display font-bold text-charcoal dark:text-bone mb-1 leading-tight">
                          {guide.name}
                        </h3>
                        <p className="text-sm text-sage dark:text-moss font-semibold">
                          {guide.headline}
                        </p>
                        {guide.location && (
                          <div className="flex items-center gap-1 text-xs text-ash dark:text-[#B8C5D0] mt-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{guide.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {guide.bio && (
                      <p className="text-sm text-ash dark:text-[#B8C5D0] mb-4 flex-1 line-clamp-3">
                        {guide.bio}
                      </p>
                    )}

                    {guide.tags && guide.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1.5 rounded-[8px] bg-bone text-charcoal text-sm font-medium border border-stone/30">
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
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-terracotta/30 text-terracotta rounded-[8px] text-base font-semibold transition-all hover:bg-terracotta/10 hover:border-terracotta/50 hover:scale-105"
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
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-br from-terracotta to-clay text-white rounded-[8px] text-base font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-terracotta/40 group/button"
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
            className="w-14 h-14 rounded-[8px] bg-white border-2 border-terracotta/20 flex items-center justify-center transition-all hover:scale-105 hover:border-terracotta/40 hover:bg-terracotta/5 disabled:opacity-30 shadow-lg shadow-terracotta/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal dark:text-bone" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-14 h-14 rounded-[8px] bg-white border-2 border-terracotta/20 flex items-center justify-center transition-all hover:scale-105 hover:border-terracotta/40 hover:bg-terracotta/5 disabled:opacity-30 shadow-lg shadow-terracotta/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-charcoal dark:text-bone" />
          </button>
        </div>
      </div>
    </section>
  )
}
