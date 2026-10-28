import { motion } from 'framer-motion'
import { defaultContent } from '../lib/defaultContent'
import SkillMarquee from './SkillMarquee'

const ease = [0.16, 1, 0.3, 1]
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

export default function Hero({ content = defaultContent.hero, resume = defaultContent.resume }) {
  const {
    firstName,
    lastName,
    role,
    tagline,
    stats,
    photo = defaultContent.hero.photo,
  } = content

  const editorial =
    'I build to understand. I ship to learn. I care about the problem before the stack.'
  const currentlyBuilding =
    'Exploring AI workflows, automation, and product-shaped software.'

  return (
    <section id="hero" className="relative pt-28 pb-6 sm:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <motion.p
            {...fade(0.05)}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-soft)]"
          >
            {role}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-[clamp(2.8rem,8vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--text)]"
          >
            {firstName}{' '}
            <span className="text-gradient-accent">{lastName}</span>
          </motion.h1>

          <motion.p
            {...fade(0.18)}
            className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text)] sm:text-xl"
          >
            {editorial}
          </motion.p>

          <motion.p {...fade(0.24)} className="mt-3 max-w-md text-[var(--text-muted)]">
            {tagline}
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-magnetic rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] hover:shadow-[0_0_24px_rgba(232,78,27,0.25)]"
            >
              View work →
            </a>
            <a
              href="#contact"
              className="btn-magnetic rounded-full border border-[color:var(--border-strong)] px-6 py-3 text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact
            </a>
            <a
              href={resume?.url || '/resume.pdf'}
              download={resume?.fileName}
              className="btn-magnetic rounded-full px-4 py-3 font-mono text-[11px] text-[var(--text-soft)] hover:text-[var(--accent)]"
            >
              ↓ Resume
            </a>
          </motion.div>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div
            {...fade(0.32)}
            className="h-full overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] shadow-[var(--card-shadow)] lg:col-span-4"
          >
            <div className="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <img
                src={photo}
                alt={`${firstName} ${lastName}`}
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
            </div>
          </motion.div>

          <div className="flex h-full flex-col gap-4 lg:col-span-8">
            <motion.div
              {...fade(0.36)}
              className="rounded-3xl bg-[var(--text)] px-6 py-5 text-[var(--bg)] sm:px-8 sm:py-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--bg)]/55">
                Currently building
              </p>
              <p className="mt-2 max-w-xl text-base leading-relaxed sm:text-lg">
                {currentlyBuilding}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="font-mono text-[11px] text-[var(--bg)]/60">
                  Open to opportunities · Pune, IN
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {(stats || []).slice(0, 3).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  {...fade(0.4 + index * 0.05)}
                  className="rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-4 shadow-[var(--card-shadow)] sm:p-6"
                >
                  <div className="font-display text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
                    {stat.num}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-soft)] sm:text-[10px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}

              {(!stats || stats.length < 3) && (
                <motion.div
                  {...fade(0.5)}
                  className="rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-4 shadow-[var(--card-shadow)] sm:p-5"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-soft)]">
                    Stack focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {['React', 'Next.js', 'Python', 'Firebase', 'AI'].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[var(--soft-bg)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-soft)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div
              {...fade(0.55)}
              className="flex flex-1 flex-col justify-between gap-4 rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-[var(--card-shadow)] sm:p-6"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-soft)]">
                  Principle
                </p>
                <p className="mt-2 max-w-sm font-display text-lg font-semibold leading-snug tracking-tight text-[var(--text)] sm:text-xl">
                  Problem first. Then the stack.
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  I care about what we&apos;re solving before how we build it.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/harsh-v01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic rounded-full border border-[color:var(--border)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-soft)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/harsh015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic rounded-full border border-[color:var(--border)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-soft)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
                >
                  LinkedIn
                </a>
                <a
                  href="#projects"
                  className="btn-magnetic rounded-full bg-[var(--text)] px-3 py-1.5 font-mono text-[11px] text-[var(--bg)] transition hover:bg-[var(--accent)]"
                >
                  View work →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div {...fade(0.5)} className="mt-10">
        <SkillMarquee />
      </motion.div>
    </section>
  )
}
