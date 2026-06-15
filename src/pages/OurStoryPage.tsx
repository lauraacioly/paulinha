import PageWrapper from '../components/PageWrapper'
import BackButton from '../components/BackButton'
import { siteContent } from '../data/siteContent'

interface OurStoryPageProps {
  onBack: () => void
}

export default function OurStoryPage({ onBack }: OurStoryPageProps) {
  const { ourStory } = siteContent

  return (
    <PageWrapper title={ourStory.title} className="pw-story">
      <BackButton onBack={onBack} />
      <div className="chapters">
        {ourStory.chapters.map((chapter, i) => (
          <div key={i} className="chapter">
            <span className="chapter-date">{chapter.date}</span>
            {chapter.title && <h2 className="chapter-title">{chapter.title}</h2>}
            <p className="chapter-text" style={{ whiteSpace: 'pre-line' }}>{chapter.text}</p>
          </div>
        ))}
      </div>
      <BackButton onBack={onBack} label="← Voltar para o início" className="back-button--bottom" />
    </PageWrapper>
  )
}
