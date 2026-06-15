import { useState } from 'react'
import type { Movie } from '../data/siteContent'

const TMDB_BASE = 'https://image.tmdb.org/t/p/'

const FALLBACK_GRADIENTS = [
  'linear-gradient(160deg, #fce8ef 0%, #f5c6d3 100%)',
  'linear-gradient(160deg, #ffd6cc 0%, #f5a896 100%)',
  'linear-gradient(160deg, #e8d4f5 0%, #c090d8 100%)',
  'linear-gradient(160deg, #f5e8d4 0%, #d8b086 100%)',
  'linear-gradient(160deg, #f5d4e8 0%, #d886b0 100%)',
  'linear-gradient(160deg, #dde8f5 0%, #86aed8 100%)',
]

export function posterUrl(path: string, size = 'w342') {
  return `${TMDB_BASE}${size}${path}`
}

interface MovieCardProps extends Movie {
  index: number
  onClick: () => void
}

export default function MovieCard({ title, year, poster, date, index, onClick }: MovieCardProps) {
  const [imgError, setImgError] = useState(false)
  const fallback = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]

  return (
    <article
      className="movie-grid-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`${title}${year ? `, ${year}` : ''}`}
    >
      <div className="movie-grid-poster">
        {poster && !imgError ? (
          <img
            src={posterUrl(poster)}
            alt={title}
            className="movie-grid-poster-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="movie-grid-poster-fallback" style={{ background: fallback }}>
            <span>🎬</span>
          </div>
        )}
      </div>
      <div className="movie-grid-info">
        <h3 className="movie-grid-title">{title}</h3>
        {year && <span className="movie-grid-year">{year}</span>}
        {date && <span className="movie-grid-date">{date}</span>}
      </div>
    </article>
  )
}
