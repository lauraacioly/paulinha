import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'
import { siteContent } from '../data/siteContent'
import type { RemindsItem } from '../data/siteContent'

interface RemindsMePageProps {
  onBack: () => void
}

function parseTrigger(trigger: string): { emoji: string; label: string } {
  const spaceIdx = trigger.indexOf(' ')
  if (spaceIdx > 0) {
    return { emoji: trigger.slice(0, spaceIdx), label: trigger.slice(spaceIdx + 1) }
  }
  return { emoji: trigger, label: '' }
}

export default function RemindsMePage({ onBack }: RemindsMePageProps) {
  const { remindsMe } = siteContent
  const [selected, setSelected] = useState<RemindsItem | null>(null)

  return (
    <PageWrapper title={remindsMe.title} className="pw-reminds">
      <BackButton onBack={onBack} />

      <div className="reminds-grid">
        {remindsMe.items.map((item, i) => {
          const { emoji, label } = parseTrigger(item.trigger)
          return (
            <button
              key={i}
              className="reminds-item"
              onClick={() => setSelected(item)}
            >
              <span className="reminds-item-emoji">{emoji}</span>
              {label && <span className="reminds-item-label">{label}</span>}
            </button>
          )
        })}
      </div>

      {selected && (
        <div
          className="reminds-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="reminds-modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="reminds-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
            >×</button>
            <p className="reminds-modal-trigger">{selected.trigger}</p>
            <p className="reminds-modal-text">{selected.memory}</p>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
