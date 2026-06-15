import { useState } from 'react'

type LetterStep = 'closed' | 'open'

interface LetterAnimationProps {
  message: string
  onContinue: () => void
}

export default function LetterAnimation({ message, onContinue }: LetterAnimationProps) {
  const [step, setStep] = useState<LetterStep>('closed')

  const parts = message.split('\n\n')
  const salutation = parts[0]
  const body = parts.slice(1).join('\n\n')

  return (
    <div className="letter-animation">
      {step === 'closed' && (
        <button className="letter-closed" onClick={() => setStep('open')}>
          <span className="letter-icon">💌</span>
          <span>Clique para abrir sua cartinha</span>
        </button>
      )}

      {step === 'open' && (
        <div className="letter-open">
          <div className="letter-ornament">✦&nbsp;&nbsp;♥&nbsp;&nbsp;✦</div>
          <h1 className="letter-salutation">{salutation}</h1>
          <div className="letter-divider" />
          <p className="letter-body">{body}</p>
          <div className="letter-divider" />
          <button className="letter-continue-btn" onClick={onContinue}>
            Continuar →
          </button>
        </div>
      )}
    </div>
  )
}
