export type LumaEvent = {
  id: string
  url: string
  title: string
  start: string
  end?: string
  location?: string
  image?: string
  host?: string
  price?: string
  tags?: string[]
  excerpt?: string
}

export type Facilitator = {
  id: string
  name: string
  avatar: string
  headline: string
  location?: string
  tags?: string[]
  links?: { type: 'site' | 'luma' | 'instagram' | 'youtube' | 'calendar'; url: string }[]
  featured?: boolean
}

export type Article = {
  id: string
  title: string
  url: string
  image?: string
  excerpt?: string
  tags?: string[]
  author?: string
}

export type Workshop = {
  id: string
  title: string
  url: string
  image?: string
  price?: string
  tags?: string[]
  description?: string
}

export type ContentCard =
  | { kind: 'event'; data: LumaEvent }
  | { kind: 'facilitator'; data: Facilitator }
  | { kind: 'article'; data: Article }
  | { kind: 'workshop'; data: Workshop }
