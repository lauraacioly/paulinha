import { useState } from 'react'
import type { PageId } from './types'

import PasswordGate, { checkStoredAuth } from './components/PasswordGate'
import EntrancePage from './pages/EntrancePage'
import MainPage from './pages/MainPage'
import OurStoryPage from './pages/OurStoryPage'
import MemoriesPage from './pages/MemoriesPage'
import RemindsMePage from './pages/RemindsMePage'
import ThingsILovePage from './pages/ThingsILovePage'
import CinemaPage from './pages/CinemaPage'
import SurprisePage from './pages/SurprisePage'

import './index.css'

// Seções que precisam ser visitadas para desbloquear a surpresa
const UNLOCKABLE_SECTIONS: PageId[] = [
  'our-story',
  'memories',
  'reminds-me',
  'things-i-love',
  'cinema',
]

export default function App() {
  const [authed, setAuthed] = useState<boolean>(checkStoredAuth)
  const [currentPage, setCurrentPage] = useState<PageId>('entrance')
  const [visitedPages, setVisitedPages] = useState<Set<PageId>>(new Set())

  if (!authed) {
    return (
      <div className="app">
        <PasswordGate onUnlock={() => setAuthed(true)} />
      </div>
    )
  }

  const navigate = (page: PageId) => {
    setVisitedPages(prev => new Set([...prev, page]))
    setCurrentPage(page)
  }

  const goBack = () => navigate('main')

  const sectionsVisited = UNLOCKABLE_SECTIONS.filter(s => visitedPages.has(s)).length
  const sectionsRemaining = UNLOCKABLE_SECTIONS.length - sectionsVisited
  const isSurpriseUnlocked = sectionsRemaining === 0

  const renderPage = () => {
    switch (currentPage) {
      case 'entrance':
        return <EntrancePage onEnter={() => navigate('main')} />

      case 'main':
        return (
          <MainPage
            onNavigate={navigate}
            isSurpriseUnlocked={isSurpriseUnlocked}
            sectionsVisited={sectionsVisited}
            totalSections={UNLOCKABLE_SECTIONS.length}
          />
        )

      case 'our-story':
        return <OurStoryPage onBack={goBack} />

      case 'memories':
        return <MemoriesPage onBack={goBack} />

      case 'reminds-me':
        return <RemindsMePage onBack={goBack} />

      case 'things-i-love':
        return <ThingsILovePage onBack={goBack} />

      case 'cinema':
        return <CinemaPage onBack={goBack} />

      case 'surprise':
        return (
          <SurprisePage
            onBack={goBack}
            isUnlocked={isSurpriseUnlocked}
            sectionsRemaining={sectionsRemaining}
          />
        )
    }
  }

  return <div className="app">{renderPage()}</div>
}
