interface BackButtonProps {
  onBack: () => void
  label?: string
  className?: string
}

export default function BackButton({ onBack, label = '← Voltar', className = '' }: BackButtonProps) {
  return (
    <button onClick={onBack} className={`back-button${className ? ' ' + className : ''}`}>
      {label}
    </button>
  )
}
