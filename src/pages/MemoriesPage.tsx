import { useState, useEffect, useCallback } from 'react'
import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'

const photoModules = import.meta.glob<string>(
  '../assets/photos/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
)

function extractNumber(path: string): number {
  const match = path.match(/img \((\d+)\)/)
  return match ? Number(match[1]) : 0
}

const photos = Object.entries(photoModules)
  .sort(([a], [b]) => extractNumber(a) - extractNumber(b))
  .map(([, src]) => src)

interface MemoriesPageProps {
  onBack: () => void
}

export default function MemoriesPage({ onBack }: MemoriesPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goNext = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null)
  }, [])

  const goPrev = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <PageWrapper title="Nossas Memórias" className="pw-memories">
      <BackButton onBack={onBack} />

      <p className="memories-counter">📸 {photos.length} memórias guardadas</p>

      <div className="memories-gallery">
        {photos.map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={src}
              alt={`Memória ${i + 1}`}
              className="gallery-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <BackButton onBack={onBack} label="← Voltar para o início" className="back-button--bottom" />

      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Fechar"
          >
            ✕
          </button>
          <button
            className="lightbox-prev"
            onClick={e => { e.stopPropagation(); goPrev() }}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightboxIndex]}
              alt={`Memória ${lightboxIndex + 1}`}
              className="lightbox-img"
            />
            <p className="lightbox-counter">{lightboxIndex + 1} / {photos.length}</p>
          </div>
          <button
            className="lightbox-next"
            onClick={e => { e.stopPropagation(); goNext() }}
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
      )}
    </PageWrapper>
  )
}
