export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[var(--soft-bg)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-body text-xs text-[var(--text-soft)]">
          Designed &amp; built by <span className="text-[var(--text-muted)]">Harsh Kumar</span>
        </p>

        <div className="flex items-center gap-1 font-mono text-xs text-[var(--gold)]/65">
          <span className="text-[var(--text-soft)]">Built with</span>
          <span className="mx-1">Next.js - Tailwind - Framer</span>
        </div>

        <p className="font-mono text-[10px] tracking-widest text-[var(--text-soft)]">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
