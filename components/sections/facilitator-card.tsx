import Image from 'next/image'
import { MapPin, ExternalLink, Calendar } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Facilitator } from '@/lib/types'

export function FacilitatorCard({ facilitator }: { facilitator: Facilitator }) {
  const siteLink = facilitator.links?.find(l => l.type === 'site')
  const calendarLink = facilitator.links?.find(l => l.type === 'calendar')

  return (
    <Card className="group h-full flex flex-col">
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-suuna-accent/30 flex-shrink-0">
            <Image
              src={facilitator.avatar}
              alt={facilitator.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-suuna-text-light leading-tight mb-1">
              {facilitator.name}
            </h3>
            {facilitator.location && (
              <div className="flex items-center gap-1.5 text-xs text-suuna-text-muted">
                <MapPin className="h-3 w-3" />
                <span>{facilitator.location}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-suuna-text-muted leading-relaxed line-clamp-3">
          {facilitator.headline}
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {facilitator.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 flex-wrap">
        {siteLink && (
          <Button asChild variant="ghost" size="sm" className="flex-1">
            <a href={siteLink.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Profile
            </a>
          </Button>
        )}
        {calendarLink && (
          <Button asChild size="sm" className="flex-1">
            <a href={calendarLink.url} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              Book
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
