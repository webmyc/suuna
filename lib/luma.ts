import type { LumaEvent } from './types'
import localEvents from '@/data/events.json'

const LUMA_URLS = [
  'https://lu.ma/suuna',
  // Add more specific event URLs here as needed
]

export async function fetchLumaEvents(): Promise<LumaEvent[]> {
  // During build time or when API is unavailable, use local data
  if (process.env.NODE_ENV === 'production' || !process.env.NEXT_PUBLIC_BASE_URL) {
    return localEvents as LumaEvent[]
  }

  try {
    if (LUMA_URLS.length === 0) {
      return localEvents as LumaEvent[]
    }

    const qp = encodeURIComponent(LUMA_URLS.join(','))
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/luma?urls=${qp}`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.log('Luma API unavailable, using local data')
      return localEvents as LumaEvent[]
    }

    const events = await res.json()
    return events.length > 0 ? events : localEvents as LumaEvent[]
  } catch (error) {
    console.log('Using local event data')
    return localEvents as LumaEvent[]
  }
}
