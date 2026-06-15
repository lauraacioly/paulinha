import { useState, useEffect, useRef } from 'react'
import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'
import LockedSection from '../components/LockedSection'

interface SurprisePageProps {
  onBack: () => void
  isUnlocked: boolean
  sectionsRemaining: number
}

const vouchers = [
  {
    emoji: '🍔',
    title: 'Dia do Lixo',
    desc: 'Vale 1 dia inteiro sem contar calorias.',
  },
  {
    emoji: '🎬',
    title: 'Cinema',
    desc: 'Você escolhe o filme.',
  },
  {
    emoji: '💆‍♀️',
    title: 'Massagem tântrica',
    desc: 'Vale uma sessão completa de massagem tântrica.',
  },
  {
    emoji: '👑',
    title: 'Coringa',
    desc: 'Vale qualquer pedido razoável.',
    note: 'Exceto me mandar para Marte.',
  },
  {
    emoji: '❤️',
    title: 'Momento Especial',
    desc: 'Vale uma noite inteiramente dedicada a você, eu fazendo o que você quiser.',
  },
]

const obrigadaLines = [
  { text: 'Obrigada por existir.', delay: 0 },
  { text: 'Obrigada por cada filme que assistimos.', delay: 0.45 },
  { text: 'Obrigada por cada corrida.', delay: 0.9 },
  { text: 'Obrigada por cada conversa.', delay: 1.35 },
  { text: 'Obrigada por me fazer rir.', delay: 1.8 },
  { text: 'Obrigada por estar ao meu lado.', delay: 2.25 },
  { text: 'E se eu pudesse voltar no tempo e escolher tudo de novo...', delay: 3.1, spaceBefore: true },
  { text: 'Eu escolheria você.', delay: 3.8, emphasis: true },
  { text: 'Todas as vezes.', delay: 4.3 },
]

export default function SurprisePage({ onBack, isUnlocked, sectionsRemaining }: SurprisePageProps) {
  const [lastThingVisible, setLastThingVisible] = useState(false)
  const [obrigadaVisible, setObrigadaVisible] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)
  const [showClosing, setShowClosing] = useState(false)
  const [closingActive, setClosingActive] = useState(false)

  const lastThingRef = useRef<HTMLElement>(null)
  const obrigadaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isUnlocked) return

    const observe = (ref: React.RefObject<HTMLElement | null>, cb: () => void) => {
      if (!ref.current) return () => {}
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { cb(); obs.disconnect() }
        },
        { threshold: 0.1 }
      )
      obs.observe(ref.current)
      return () => obs.disconnect()
    }

    const c1 = observe(lastThingRef, () => setLastThingVisible(true))
    const c2 = observe(obrigadaRef, () => setObrigadaVisible(true))
    return () => { c1(); c2() }
  }, [isUnlocked])

  useEffect(() => {
    if (!obrigadaVisible) return
    const t = setTimeout(() => setButtonVisible(true), 5800)
    return () => clearTimeout(t)
  }, [obrigadaVisible])

  const triggerClosing = () => {
    setShowClosing(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setClosingActive(true)))
  }

  return (
    <>
      <div className={`surprise-outer${showClosing ? ' so-fade-out' : ''}`}>
        <PageWrapper title="✨ Surpresa Final" className="pw-surprise">
          <BackButton onBack={onBack} />

          {isUnlocked ? (
            <div className="surprise-unlocked">

              {/* Vouchers */}
              <section className="sp-vouchers">
                <p className="sp-subtitle">Para você guardar ❤️</p>
                <div className="sp-vouchers-grid">
                  {vouchers.map((v, i) => (
                    <article
                      key={i}
                      className="sp-voucher"
                      style={{ '--vd': `${i * 0.14}s` } as React.CSSProperties}
                    >
                      <span className="sp-voucher-emoji">{v.emoji}</span>
                      <h3 className="sp-voucher-title">{v.title}</h3>
                      <p className="sp-voucher-desc">{v.desc}</p>
                      {'note' in v && v.note && (
                        <p className="sp-voucher-note">{v.note}</p>
                      )}
                      <div className="sp-voucher-tag">voucher · sem prazo de validade</div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Divisor ornamental */}
              <div className="sp-orn-div" aria-hidden="true">
                <span>✦</span><span>♥</span><span>✦</span>
              </div>

              {/* Uma última coisa */}
              <section
                ref={lastThingRef}
                className={`sp-last-thing${lastThingVisible ? ' sp-lt-vis' : ''}`}
              >
                <h2 className="sp-last-heading">Uma última coisa...</h2>
                <div className="sp-last-body">
                  <p>Eu poderia colocar mais fotos, mais textos ou mais lembranças aqui.</p>
                  <p>Mas a verdade é que nada disso seria suficiente para mostrar o quanto você é importante para mim.</p>
                  <p>Então eu só queria que você soubesse que foi uma das melhores coisas que já aconteceram na minha vida.</p>
                </div>
              </section>

              {/* Partículas flutuantes */}
              <div className="sp-particles" aria-hidden="true">
                <span className="sp-p sp-p1">✦</span>
                <span className="sp-p sp-p2">♥</span>
                <span className="sp-p sp-p3">✦</span>
                <span className="sp-p sp-p4">✨</span>
                <span className="sp-p sp-p5">♥</span>
                <span className="sp-p sp-p6">✦</span>
                <span className="sp-p sp-p7">✨</span>
                <span className="sp-p sp-p8">♥</span>
                <span className="sp-p sp-p9">✦</span>
                <span className="sp-p sp-p10">✨</span>
              </div>

              {/* Obrigada */}
              <section
                ref={obrigadaRef}
                className={`sp-obrigada${obrigadaVisible ? ' sp-ob-vis' : ''}`}
              >
                {obrigadaLines.map((line, i) => (
                  <p
                    key={i}
                    className={[
                      'sp-ob-line',
                      line.emphasis ? 'sp-ob-em' : '',
                      line.spaceBefore ? 'sp-ob-sp' : '',
                    ].filter(Boolean).join(' ')}
                    style={{ '--od': `${line.delay}s` } as React.CSSProperties}
                  >
                    {line.text}
                  </p>
                ))}
                <div
                  className="sp-ob-heart-wrap"
                  style={{ '--od': '5.1s' } as React.CSSProperties}
                >
                  <span className="sp-ob-heart">❤️</span>
                </div>
              </section>

              {/* Botão de encerramento */}
              <div className={`sp-trigger${buttonVisible ? ' sp-tr-vis' : ''}`}>
                <button
                  className="sp-end-btn"
                  onClick={triggerClosing}
                  aria-label="Ver encerramento"
                >
                  <span aria-hidden="true">✦</span>
                </button>
              </div>

            </div>
          ) : (
            <LockedSection sectionsRemaining={sectionsRemaining} />
          )}
        </PageWrapper>
      </div>

      {/* Tela de encerramento */}
      {showClosing && (
        <div className={`sp-closing${closingActive ? ' sp-cl-active' : ''}`}>
          <div className="sp-cl-particles" aria-hidden="true">
            <span className="sp-cl-p sp-cl-p1">✦</span>
            <span className="sp-cl-p sp-cl-p2">♥</span>
            <span className="sp-cl-p sp-cl-p3">✦</span>
            <span className="sp-cl-p sp-cl-p4">✨</span>
            <span className="sp-cl-p sp-cl-p5">♥</span>
            <span className="sp-cl-p sp-cl-p6">✦</span>
          </div>

          <div className="sp-cl-content">
            <p className="sp-cl-main">Feliz Dia dos Namorados, meu amor</p>

            <div className="sp-cl-heart-wrap" aria-hidden="true">
              <div className="sp-cl-ring sp-cl-ring1" />
              <div className="sp-cl-ring sp-cl-ring2" />
              <span className="sp-cl-heart">❤️</span>
            </div>

            <div className="sp-cl-sig">
              <span className="sp-cl-sig1">Com amor,</span>
              <span className="sp-cl-sig2">Laura</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
