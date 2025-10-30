import type { Article } from '../../types'
import { formatDate } from '../../utils/helpers'

interface Props {
  article: Article
}

export function ArticleCard({ article }: Props) {
  const formattedDate = article.publishedAt ? formatDate(article.publishedAt) : null

  return (
    <article className="glass rounded-3xl overflow-hidden hover-lift group h-full flex flex-col">
      {article.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {article.author && (
          <div className="flex items-center gap-2 text-sm text-accent mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{article.author}</span>
            {formattedDate && (
              <>
                <span className="text-secondary">•</span>
                <span className="text-secondary">{formattedDate}</span>
              </>
            )}
          </div>
        )}

        <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="text-sm text-secondary mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-full bg-secondary text-primary text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-medium hover:underline mt-auto"
        >
          Read Article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  )
}
