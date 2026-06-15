interface LockedSectionProps {
  sectionsRemaining: number
}

export default function LockedSection({ sectionsRemaining }: LockedSectionProps) {
  return (
    <div className="locked-section">
      <span className="locked-icon">🔒</span>
      <h2>Surpresa bloqueada</h2>
      <p>
        Explore mais{' '}
        <strong>{sectionsRemaining}</strong>{' '}
        {sectionsRemaining === 1 ? 'área' : 'áreas'} para desbloquear esta surpresa.
      </p>
    </div>
  )
}
