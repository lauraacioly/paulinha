import { useState } from 'react'
import LetterAnimation from '../components/LetterAnimation'
import YesNoButtons from '../components/YesNoButtons'
import { siteContent } from '../data/siteContent'

type EntranceStep = 'letter' | 'yes-no' | 'confirmed'

interface EntrancePageProps {
  onEnter: () => void
}

export default function EntrancePage({ onEnter }: EntrancePageProps) {
  const [step, setStep] = useState<EntranceStep>('letter')
  const { entrance } = siteContent

  return (
    <div className="entrance-page">
      {step === 'letter' && (
        <LetterAnimation
          message={entrance.letterMessage}
          onContinue={() => setStep('yes-no')}
        />
      )}

      {step === 'yes-no' && (
        <YesNoButtons
          question={entrance.yesNoQuestion}
          initialYesLabel={entrance.initialYesLabel}
          initialNoLabel={entrance.initialNoLabel}
          noSequence={entrance.noSequence}
          onYes={() => setStep('confirmed')}
        />
      )}

      {step === 'confirmed' && (
        <div className="entrance-confirmed">
          <p>{entrance.afterYesMessage}</p>
          <button className="enter-btn" onClick={onEnter}>
            {entrance.enterButtonLabel}
          </button>
        </div>
      )}
    </div>
  )
}
