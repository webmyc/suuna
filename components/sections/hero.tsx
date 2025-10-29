import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0E2A22] to-[#0A1C17]" />

      {/* Starfield effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-suuna-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-spartan font-bold text-suuna-text-light mb-8 leading-tight tracking-tight">
          Bring your gifts to your community with{' '}
          <span className="font-suuna text-suuna-accent">SUUNA</span>
        </h1>

        <p className="text-xl md:text-2xl text-suuna-text-light/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          We help creators amplify their message and grow their communities — without the technical or marketing headaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg font-semibold">
            <Link href="#discover">Co-create with SUUNA</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg font-semibold">
            <Link href="#events">Explore events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
