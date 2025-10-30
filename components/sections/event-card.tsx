import Image from 'next/image'
import { Calendar, MapPin } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { LumaEvent } from '@/lib/types'

export function EventCard({ event }: { event: LumaEvent }) {
  const startDate = new Date(event.start)
  const formattedDate = startDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  const formattedTime = startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      {event.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader className="space-y-3 flex-1">
        <div className="flex items-center gap-2 text-sm text-suuna-accent">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate} • {formattedTime}</span>
        </div>

        <h3 className="text-lg font-semibold leading-tight text-suuna-text-light line-clamp-2">
          {event.title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-3">
        {event.location && (
          <div className="flex items-center gap-2 text-sm text-suuna-text-muted">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        )}

        {event.excerpt && (
          <p className="text-sm text-suuna-text-muted line-clamp-2">{event.excerpt}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {event.price && (
            <Badge variant="secondary">{event.price}</Badge>
          )}
          {event.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            Save a spot
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
