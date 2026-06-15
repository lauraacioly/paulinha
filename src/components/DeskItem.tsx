import type { PageId } from "../types";

interface DeskItemProps {
  emoji: string;
  label: string;
  page: PageId;
  isLocked?: boolean;
  position: { top: string; left: string };
  onClick: (page: PageId) => void;
}

const cardDescriptions: Record<string, string> = {
  "our-story": "Cada capítulo da nossa história",
  memories: "Fotos guardadas com carinho",
  "reminds-me": "Coisas que me fazem pensar em você",
  "things-i-love": "Tudo o que amo em você",
  cinema: "Os filmes que assistimos juntas",
  surprise: "Explore tudo para descobrir",
};

export default function DeskItem({
  emoji,
  label,
  page,
  isLocked = false,
  onClick,
}: DeskItemProps) {
  return (
    <button
      className={`memory-card ${isLocked ? "memory-card--locked" : ""}`}
      onClick={() => !isLocked && onClick(page)}
      disabled={isLocked}
      aria-label={isLocked ? "Explore todas as seções para desbloquear" : label}
      data-page={page}
    >
      <span className="memory-card-emoji" aria-hidden="true">
        {isLocked ? "🔒" : emoji}
      </span>
      <span className="memory-card-divider" aria-hidden="true" />
      <span className="memory-card-title">{label}</span>
      <span className="memory-card-desc">{cardDescriptions[page] ?? ""}</span>
    </button>
  );
}
