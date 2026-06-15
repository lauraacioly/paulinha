import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'
import MovieCard, { posterUrl } from '../components/MovieCard'
import { siteContent, type Movie } from '../data/siteContent'

const FALLBACK_GRADIENTS = [
  'linear-gradient(160deg, #fce8ef 0%, #f5c6d3 100%)',
  'linear-gradient(160deg, #ffd6cc 0%, #f5a896 100%)',
  'linear-gradient(160deg, #e8d4f5 0%, #c090d8 100%)',
  'linear-gradient(160deg, #f5e8d4 0%, #d8b086 100%)',
  'linear-gradient(160deg, #f5d4e8 0%, #d886b0 100%)',
  'linear-gradient(160deg, #dde8f5 0%, #86aed8 100%)',
]

interface CinemaPageProps {
  onBack: () => void
}

interface SelectedMovie {
  movie: Movie
  index: number
}

export default function CinemaPage({ onBack }: CinemaPageProps) {
  const { cinema } = siteContent
  const [selected, setSelected] = useState<SelectedMovie | null>(null)
  const [modalImgError, setModalImgError] = useState(false)

  const openModal = (movie: Movie, index: number) => {
    setSelected({ movie, index })
    setModalImgError(false)
  }

  const closeModal = () => setSelected(null)

  const fallback = selected
    ? FALLBACK_GRADIENTS[selected.index % FALLBACK_GRADIENTS.length]
    : ''

  return (
    <PageWrapper title={cinema.title} className="pw-cinema">
      <BackButton onBack={onBack} />
      <p className="cinema-subtitle">Os filmes que fizeram parte da nossa história</p>

      <div className="movies-grid">
        {cinema.movies.map((movie, i) => (
          <MovieCard
            key={i}
            {...movie}
            index={i}
            onClick={() => openModal(movie, i)}
          />
        ))}
      </div>

      {selected && (
        <div className="movie-modal-overlay" onClick={closeModal}>
          <div className="movie-modal" onClick={e => e.stopPropagation()}>
            <div className="movie-modal-poster">
              {selected.movie.poster && !modalImgError ? (
                <img
                  src={posterUrl(selected.movie.poster, 'w500')}
                  alt={selected.movie.title}
                  className="movie-modal-poster-img"
                  onError={() => setModalImgError(true)}
                />
              ) : (
                <div
                  className="movie-modal-poster-fallback"
                  style={{ background: fallback }}
                >
                  🎬
                </div>
              )}
              <button
                className="movie-modal-close"
                onClick={closeModal}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            <div className="movie-modal-body">
              <h2 className="movie-modal-title">{selected.movie.title}</h2>
              <div className="movie-modal-meta">
                {selected.movie.year && (
                  <p className="movie-modal-year">{selected.movie.year}</p>
                )}
                {selected.movie.date && (
                  <p className="movie-modal-date">Assistimos em {selected.movie.date} ❤️</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
