import { motion } from 'framer-motion'
import Particles from './Particles'
import { defaultContent } from '../lib/defaultContent'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
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

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />

        <Particles className="absolute inset-0" />

        <div
          className="absolute right-[-10%] top-[-15%] h-[50vw] w-[50vw] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--hero-glow-warm) 0%, transparent 70%)' }}
        />

        <div
          className="absolute bottom-[-20%] left-[-12%] h-[40vw] w-[40vw] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--hero-glow-cool) 0%, transparent 70%)' }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32 lg:pb-16 lg:pt-36">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0.1)} className="mb-6 flex flex-wrap items-center gap-3 lg:mb-8">
              <span className="font-mono text-xs tracking-[0.12em] text-[var(--accent)]">[01]</span>
              <span className="inline-block h-px w-6 bg-[color:var(--border-strong)]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-soft)]">
                {role}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="mb-6 font-display text-[clamp(2.9rem,9vw,6.2rem)] font-semibold leading-[0.98] tracking-tight text-[var(--text)]"
            >
              {firstName}
              <br />
              <span className="text-gradient-accent">{lastName}.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="mb-9 max-w-sm font-body text-lg leading-relaxed text-[var(--text-muted)] lg:mb-10"
            >
              {tagline}
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="mb-9 flex items-center gap-2.5 lg:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-xs tracking-wide text-[var(--text-soft)]">
                Open to opportunities &middot; based in Pune, IN
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 font-body text-sm font-medium tracking-wide text-[var(--bg)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg)] sm:px-6"
              >
                View Projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-[color:var(--border-strong)] px-5 py-3 font-body text-sm font-medium tracking-wide text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:px-6"
              >
                Contact
              </a>

              <a
                href={resume.url}
                download={resume.fileName}
                className="group inline-flex items-center gap-2 rounded-md border border-[color:var(--border)] px-5 py-3 font-body text-sm font-medium tracking-wide text-[var(--text-muted)] transition-colors duration-300 hover:border-[color:var(--border-strong)] hover:text-[var(--text)] sm:px-6"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform duration-300 group-hover:translate-y-0.5">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-14 lg:hidden"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-sm">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-lg border border-[color:var(--border-strong)]" />

                <div className="absolute inset-0 overflow-hidden rounded-lg" style={{ boxShadow: 'var(--hero-shadow)' }}>
                  <img
                    src={photo}
                    alt={`${firstName} ${lastName}`}
                    className="h-full w-full bg-[var(--soft-bg)] object-contain object-top"
                    style={{ filter: 'grayscale(35%) contrast(1.08)' }}
                  />

                  <div className="absolute inset-0 mix-blend-color" style={{ backgroundColor: 'var(--hero-overlay)' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.65)}
              className="mt-14 flex items-center justify-between gap-8 border-t border-[color:var(--border)] pt-8 sm:justify-start sm:gap-12 lg:mt-16 lg:pt-9"
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-semibold text-[var(--text)]">{num}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-[var(--text-soft)]">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative ml-auto aspect-[4/5] max-w-sm">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border border-[color:var(--border-strong)]" />

              <span className="absolute -left-3 top-6 z-10 -rotate-90 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-soft)]">
                {firstName}.{lastName}
              </span>

              <div className="absolute inset-0 overflow-hidden rounded-lg" style={{ boxShadow: 'var(--hero-shadow)' }}>
                <img
                  src={photo}
                  alt={`${firstName} ${lastName}`}
                  className="h-full w-full bg-[var(--soft-bg)] object-contain object-top"
                  style={{ filter: 'grayscale(35%) contrast(1.08)' }}
                />

                <div className="absolute inset-0 mix-blend-color" style={{ backgroundColor: 'var(--hero-overlay)' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-soft)]">
          scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  )
}
