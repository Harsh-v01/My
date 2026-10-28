const DEFAULT_ITEMS = [
  'React', 'Next.js', 'Python', 'FastAPI', 'Firebase', 'TypeScript',
  'Node.js', 'Kotlin', 'Flutter', 'OpenAI', 'Tailwind', 'MongoDB',
  'Git', 'Cloud', 'Automation', 'RAG', 'SQL',
]

export default function SkillMarquee({ items = DEFAULT_ITEMS }) {
  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-[color:var(--divider)] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />
      <div className="marquee-track gap-8 px-4">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 font-mono text-[12px] tracking-[0.14em] text-[var(--text-soft)]"
          >
            {item}
            <span className="ml-8 text-[var(--accent)]">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
