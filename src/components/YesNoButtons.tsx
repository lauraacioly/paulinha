import { useState } from 'react'
import type { NoStep } from '../data/siteContent'

interface YesNoButtonsProps {
  question: string
  initialYesLabel: string
  initialNoLabel: string
  noSequence: NoStep[]
  onYes: () => void
}

export default function YesNoButtons({
  question,
  initialYesLabel,
  initialNoLabel,
  noSequence,
  onYes,
}: YesNoButtonsProps) {
  const [noCount, setNoCount] = useState(0)

  const isInitial = noCount === 0
  const currentStep = isInitial ? null : noSequence[noCount - 1]

  const currentMessage = isInitial ? question : currentStep!.message
  const isForced = !isInitial && !currentStep!.yesLabel

  const yesLabel = isInitial ? initialYesLabel : currentStep!.yesLabel
  const noLabel  = isInitial ? initialNoLabel  : currentStep!.noLabel

  return (
    <div className="yes-no-wrapper">
      <p className="yes-no-question" key={noCount}>{currentMessage}</p>
      <div className="yes-no-buttons" key={`btns-${noCount}`}>
        {isForced ? (
          <button className="yes-button" onClick={onYes}>
            {currentStep!.forcedLabel}
          </button>
        ) : (
          <>
            <button className="yes-button" onClick={onYes}>
              {yesLabel}
            </button>
            <button className="no-button" onClick={() => setNoCount(c => c + 1)}>
              {noLabel}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
