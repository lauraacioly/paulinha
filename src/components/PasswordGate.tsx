import { useState } from 'react'

// ──────────────────────────────────────────────
// Altere aqui para mudar a senha do site
const SITE_PASSWORD = "tomsinho"
// ──────────────────────────────────────────────

const STORAGE_KEY = 'paulinha_auth'

export function checkStoredAuth(): boolean {
  return localStorage.getItem(STORAGE_KEY) === '1'
}

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue]       = useState('')
  const [error, setError]       = useState(false)
  const [shaking, setShaking]   = useState(false)
  const [unlocking, setUnlocking] = useState(false)

  const tryPassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim().toLowerCase() === SITE_PASSWORD.toLowerCase()) {
      localStorage.setItem(STORAGE_KEY, '1')
      setUnlocking(true)
      setTimeout(onUnlock, 820)
    } else {
      setValue('')
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 560)
      setTimeout(() => setError(false), 4000)
    }
  }

  return (
    <div className={`pg-screen${unlocking ? ' pg-unlocking' : ''}`}>
      {/* Corações de fundo — mesmo estilo da entrance-page */}
      <div aria-hidden="true" className="pg-bg-hearts" />

      <div className={`pg-card${shaking ? ' pg-shake' : ''}`}>
        <p className="pg-ornament">✦  ♥  ✦</p>

        <span className="pg-envelope" aria-hidden="true">💌</span>

        <h1 className="pg-title">
          Este cantinho foi feito<br />para uma pessoa muito especial
        </h1>

        <p className="pg-subtitle">
          Só você sabe a senha certa, meu amor.
        </p>

        <form onSubmit={tryPassword} className="pg-form" noValidate>
          <input
            className={`pg-input${error ? ' pg-input--error' : ''}`}
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false) }}
            placeholder="sua senha secreta…"
            autoComplete="current-password"
            autoFocus
          />

          <div className="pg-error-slot">
            {error && (
              <p className="pg-error" role="alert">
                Hmm… acho que essa não é a senha certa 😘
              </p>
            )}
          </div>

          <button className="pg-btn" type="submit">
            Entrar ❤️
          </button>
        </form>

        <p className="pg-hint">Feito com muito amor, só para você.</p>
      </div>
    </div>
  )
}
