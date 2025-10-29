'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { FacilitatorCard } from './facilitator-card'
import type { Facilitator } from '@/lib/types'

export function FacilitatorsCarousel({ facilitators }: { facilitators: Facilitator[] }) {
  if (facilitators.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-spartan font-semibold tracking-tight text-suuna-text-light mb-4">
            Meet Our Facilitators
          </h2>
          <p className="text-lg text-suuna-text-muted max-w-2xl">
            Connect with wisdom keepers, healers, and guides from our community
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
            {facilitators.map((facilitator) => (
              <CarouselItem key={facilitator.id} className="md:basis-1/2 lg:basis-1/4">
                <FacilitatorCard facilitator={facilitator} />
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
