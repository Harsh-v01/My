const ICONS = [
  { x: '6%', y: '14%', s: 22, r: -12 },
  { x: '92%', y: '18%', s: 18, r: 16 },
  { x: '10%', y: '42%', s: 20, r: 8 },
  { x: '88%', y: '46%', s: 16, r: -18 },
  { x: '5%', y: '68%', s: 18, r: 12 },
  { x: '90%', y: '72%', s: 20, r: -10 },
  { x: '48%', y: '8%', s: 14, r: 6 },
  { x: '70%', y: '88%', s: 17, r: -14 },
  { x: '28%', y: '90%', s: 15, r: 20 },
]

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {ICONS.map((icon, index) => (
        <svg
          key={index}
          width={icon.s}
          height={icon.s}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute text-[var(--text)]"
          style={{
            left: icon.x,
            top: icon.y,
            opacity: 0.12,
            transform: `rotate(${icon.r}deg)`,
          }}
        >
          {index % 3 === 0 && (
            <>
              <path d="M8 6l-4 6 4 6" />
              <path d="M16 6l4 6-4 6" />
            </>
          )}
          {index % 3 === 1 && (
            <>
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </>
          )}
          {index % 3 === 2 && (
            <path d="M12 3l1.8 5.2H19l-4.2 3.2 1.6 5.3L12 13.8 7.6 16.7l1.6-5.3L5 8.2h5.2L12 3z" />
          )}
        </svg>
      ))}
    </div>
  )
}
