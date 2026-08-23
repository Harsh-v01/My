import { defaultContent } from '../lib/defaultContent'

export default function Footer({ content = defaultContent }) {
  const { hero, contact } = content
  const github = contact?.links?.find((l) => l.key === 'github')
  const linkedin = contact?.links?.find((l) => l.key === 'linkedin')

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--text)]">
              {hero.firstName} {hero.lastName}
              <span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-[var(--text-muted)]">
              {hero.role} based in Pune, Maharashtra — building useful, well-made digital products.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="#hero"
              className="font-mono text-xs uppercase tracking-widest text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
            >
              Back to top ↑
            </a>
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[var(--text-soft)] transition-colors hover:text-[var(--accent)]"
              >
                GitHub ↗
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[var(--text-soft)] transition-colors hover:text-[var(--accent)]"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6 sm:flex-row">
          <p className="font-mono text-[11px] tracking-widest text-[var(--text-soft)]">
            &copy; {new Date().getFullYear()} {hero.firstName} {hero.lastName}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-[var(--text-soft)]">
            Built with
            <span className="text-[var(--gold)]">Next.js · Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
