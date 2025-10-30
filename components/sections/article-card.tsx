import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Article } from '@/lib/types'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      {article.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader className="flex-1">
        <h3 className="text-lg font-semibold leading-tight text-suuna-text-light line-clamp-2 mb-2">
          {article.title}
        </h3>
        {article.author && (
          <p className="text-xs text-suuna-accent">by {article.author}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        {article.excerpt && (
          <p className="text-sm text-suuna-text-muted line-clamp-3">{article.excerpt}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {article.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild variant="ghost" size="sm" className="w-full">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Read more
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
