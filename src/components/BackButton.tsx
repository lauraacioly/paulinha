interface BackButtonProps {
  onBack: () => void
  label?: string
}

export default function BackButton({ onBack, label = '← Voltar' }: BackButtonProps) {
  return (
    <button onClick={onBack} className="back-button">
      {label}
    </button>
  )
}
