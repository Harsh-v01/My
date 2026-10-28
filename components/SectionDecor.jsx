export default function SectionDecor({ ghost = '', className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {ghost && (
        <div className="absolute left-1/2 top-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 select-none text-center font-display text-[clamp(4.5rem,22vw,14rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--text)] opacity-[0.04] dark:opacity-[0.06]">
          {ghost}
        </div>
      )}

      <span className="absolute left-[6%] top-[18%] h-3 w-3 rounded-full border border-[var(--text)] opacity-[0.12]" />
      <span className="absolute right-[10%] top-[22%] h-4 w-4 rotate-12 border border-[var(--text)] opacity-[0.10]" />
      <span className="absolute bottom-[24%] left-[8%] h-8 w-px bg-[var(--text)] opacity-[0.10]" />
      <span className="absolute bottom-[20%] right-[12%] h-2 w-2 rounded-full bg-[var(--accent)] opacity-20" />
      <span className="absolute left-[40%] top-[12%] h-px w-10 bg-[var(--text)] opacity-[0.10]" />
    </div>
  )
}
