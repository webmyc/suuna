import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function CommunitySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-suuna-forest to-suuna-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-spartan font-semibold tracking-tight text-suuna-text-light mb-4">
            Join the <span className="font-suuna text-suuna-accent">SUUNA</span> Community
          </h2>

          <p className="text-lg text-suuna-text-muted max-w-2xl mx-auto mb-8">
            Whether you're a facilitator, wisdom keeper, or seeking connection with intentional communities,
            there's a place for you here.
          </p>

          <Separator className="my-8 max-w-md mx-auto" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="https://lu.ma/suuna" target="_blank" rel="noopener noreferrer">
                Explore Events
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="https://suuna.org" target="_blank" rel="noopener noreferrer">
                Visit SUUNA.org
              </a>
            </Button>
          </div>

          <p className="text-sm text-suuna-text-muted mt-8">
            You teach. We amplify.
          </p>
        </div>
      </div>
    </section>
  )
}
