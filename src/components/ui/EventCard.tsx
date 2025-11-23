import type { LumaEvent } from '../../types'

interface Props {
  event: LumaEvent
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

export function EventCard({ event }: Props) {
  const { date, time } = formatDateTime(event.start)

  return (
    <article className="bg-monk-surface rounded-lg overflow-hidden border border-monk-border hover:shadow-md transition-all group h-full flex flex-col">
      {event.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {event.price && (
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 rounded-md bg-monk-accent text-white text-xs font-semibold">
                {event.price}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 text-xs text-monk-accent font-medium mb-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date} • {time}</span>
        </div>

        <h3 className="text-base font-display font-bold text-monk-text-primary mb-2 line-clamp-2 leading-tight">
          {event.title}
        </h3>

        {event.location && (
          <div className="flex items-center gap-1.5 text-xs text-monk-text-secondary mb-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{event.location}</span>
          </div>
        )}

        {event.excerpt && (
          <p className="text-xs text-monk-text-secondary mb-3 line-clamp-2 flex-1">
            {event.excerpt}
          </p>
        )}

        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-monk-accent text-white font-semibold text-sm rounded-lg transition-all hover:bg-opacity-90 mt-auto"
        >
          Save a Spot
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  )
}
