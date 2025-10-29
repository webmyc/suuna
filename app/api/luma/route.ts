import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'node-html-parser'
import type { LumaEvent } from '@/lib/types'

export const dynamic = 'force-static'
export const revalidate = 3600

async function fetchLumaEventData(url: string): Promise<LumaEvent | null> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SUUNABot/1.0)',
      },
    })

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`)
      return null
    }

    const html = await response.text()
    const root = parse(html)

    // Extract OpenGraph and meta tags
    const getMetaContent = (property: string): string | null => {
      const meta = root.querySelector(`meta[property="${property}"]`) ||
                    root.querySelector(`meta[name="${property}"]`)
      return meta?.getAttribute('content') || null
    }

    // Extract JSON-LD data
    const jsonLdScript = root.querySelector('script[type="application/ld+json"]')
    let jsonLdData: any = null
    if (jsonLdScript) {
      try {
        jsonLdData = JSON.parse(jsonLdScript.text)
      } catch (e) {
        console.error('Failed to parse JSON-LD:', e)
      }
    }

    const title = getMetaContent('og:title') ||
                  root.querySelector('title')?.text ||
                  'SUUNA Event'

    const image = getMetaContent('og:image') || undefined

    const description = getMetaContent('og:description') ||
                       getMetaContent('description') ||
                       undefined

    // Try to extract event data from JSON-LD or meta tags
    let start = jsonLdData?.startDate || new Date().toISOString()
    let end = jsonLdData?.endDate || undefined
    let location = jsonLdData?.location?.name ||
                   jsonLdData?.location?.address?.addressLocality ||
                   undefined

    // Generate a simple ID from the URL
    const id = url.split('/').pop() || `event-${Date.now()}`

    return {
      id,
      url,
      title: title.trim(),
      start,
      end,
      location,
      image,
      host: 'SUUNA Community',
      price: undefined,
      tags: [],
      excerpt: description,
    }
  } catch (error) {
    console.error(`Error fetching Luma event from ${url}:`, error)
    return null
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const urlsParam = searchParams.get('urls')

  if (!urlsParam) {
    return NextResponse.json({ error: 'Missing urls parameter' }, { status: 400 })
  }

  const urls = urlsParam.split(',').map(u => u.trim()).filter(Boolean)

  const events = await Promise.all(
    urls.map(url => fetchLumaEventData(url))
  )

  const validEvents = events.filter((e): e is LumaEvent => e !== null)

  return NextResponse.json(validEvents)
}
