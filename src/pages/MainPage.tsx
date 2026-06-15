import DeskItem from "../components/DeskItem";
import { deskItems } from "../data/siteContent";
import type { PageId } from "../types";

interface MainPageProps {
  onNavigate: (page: PageId) => void;
  isSurpriseUnlocked: boolean;
  sectionsVisited: number;
  totalSections: number;
}

export default function MainPage({
  onNavigate,
  isSurpriseUnlocked,
  sectionsVisited,
  totalSections,
}: MainPageProps) {
  return (
    <div className="main-page">
      <header className="main-header">
        <p className="main-eyebrow">✦&nbsp;&nbsp;♥&nbsp;&nbsp;✦</p>
        <h1 className="main-title">Para o amor da minha vida</h1>
        <div className="main-divider" aria-hidden="true" />
        {!isSurpriseUnlocked ? (
          <p className="unlock-hint">
            {sectionsVisited}/{totalSections} memórias descobertas
          </p>
        ) : (
          <p className="unlock-hint unlocked">✨ Surpresa desbloqueada!</p>
        )}
      </header>

      <main className="memory-grid">
        {deskItems.map((item) => (
          <DeskItem
            key={item.id}
            emoji={item.emoji}
            label={item.label}
            page={item.page}
            position={item.position}
            isLocked={item.page === "surprise" && !isSurpriseUnlocked}
            onClick={onNavigate}
          />
        ))}
      </main>
    </div>
  );
}
