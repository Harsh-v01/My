export default function SectionHeader({ eyebrow, heading, sub, light = false }) {
  return (
    <div className="mb-16">
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-block h-px w-6 bg-[var(--gold)]" />
          <span className={`text-xs font-mono uppercase tracking-[0.18em] ${light ? 'text-[var(--gold)]' : 'text-[var(--text-soft)]'}`}>
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className={`font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight ${light ? 'text-[var(--journey-text)]' : 'text-[var(--text)]'}`}>
        {heading}
      </h2>

      {sub && (
        <p className={`mt-4 max-w-md font-body text-base leading-relaxed ${light ? 'text-[var(--gold)]/80' : 'text-[var(--text-muted)]'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
