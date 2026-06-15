import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'
import { siteContent } from '../data/siteContent'
import type { ThingsILoveItem } from '../data/siteContent'

interface ThingsILovePageProps {
  onBack: () => void
}

export default function ThingsILovePage({ onBack }: ThingsILovePageProps) {
  const { thingsILove } = siteContent
  const [selectedThing, setSelectedThing] = useState<ThingsILoveItem | null>(null)

  return (
    <PageWrapper title={thingsILove.title} className="pw-things">
      <BackButton onBack={onBack} />

      <div className="things-list">
        {thingsILove.items.map((thing, i) => (
          <button
            key={i}
            className="things-item"
            onClick={() => setSelectedThing(thing)}
          >
            <span className="thing-emoji">{thing.emoji}</span>
            <h2>{thing.shortTitle}</h2>
          </button>
        ))}
      </div>
      <BackButton onBack={onBack} label="← Voltar para o início" className="back-button--bottom" />

      {selectedThing && (
        <div className="thing-modal-backdrop" onClick={() => setSelectedThing(null)}>
          <div className="thing-modal" onClick={e => e.stopPropagation()}>
            <button
              className="thing-modal-close"
              onClick={() => setSelectedThing(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            <span className="thing-modal-emoji">{selectedThing.emoji}</span>
            <h2>{selectedThing.title}</h2>
            <p>{selectedThing.text}</p>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
