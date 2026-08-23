export default function SectionHeader({ index, eyebrow, heading, sub, light = false }) {
  return (
    <div className="mb-16">
      {(index || eyebrow) && (
        <div className="mb-5 flex items-center gap-3">
          {index && (
            <span
              className={`font-mono text-xs tracking-[0.12em] ${
                light ? 'text-[var(--gold)]' : 'text-[var(--accent)]'
              }`}
            >
              [{index}]
            </span>
          )}
          {eyebrow && (
            <>
              <span className="inline-block h-px w-6 bg-[color:var(--border-strong)]" />
              <span
                className={`font-mono text-xs uppercase tracking-[0.18em] ${
                  light ? 'text-[var(--journey-text)]/60' : 'text-[var(--text-soft)]'
                }`}
              >
                {eyebrow}
              </span>
            </>
          )}
        </div>
      )}

      <h2
        className={`font-display text-[clamp(2.2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight ${
          light ? 'text-[var(--journey-text)]' : 'text-[var(--text)]'
        }`}
      >
        {heading}
      </h2>

      {sub && (
        <p
          className={`mt-4 max-w-md font-body text-base leading-relaxed ${
            light ? 'text-[var(--journey-text)]/60' : 'text-[var(--text-muted)]'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
