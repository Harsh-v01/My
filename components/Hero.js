import { motion } from 'framer-motion'
import Particles from './Particles'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
})

export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-[var(--soft-bg)]">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--soft-bg)]">
        <Particles className="absolute inset-0" />

        <div
          className="absolute right-[-5%] top-[-10%] h-[55vw] w-[55vw] rounded-full opacity-30 mix-blend-soft-light"
          style={{ background: 'radial-gradient(circle, var(--hero-glow-warm) 0%, transparent 70%)' }}
        />

        <div
          className="absolute bottom-[-15%] left-[-10%] h-[45vw] w-[45vw] rounded-full opacity-20 mix-blend-soft-light"
          style={{ background: 'radial-gradient(circle, var(--hero-glow-cool) 0%, transparent 70%)' }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-28 lg:pb-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0.1)} className="mb-8 flex items-center gap-3 lg:mb-10">
              <span className="inline-block h-px w-6 bg-[var(--gold)]" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-soft)]">
                Software Engineer
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="mb-7 font-display text-[clamp(4rem,12vw,8rem)] font-light leading-[0.88] tracking-tight text-[var(--text)]"
            >
              Harsh
              <br />
              <span className="italic text-[var(--accent)]">Kumar</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="mb-9 max-w-sm font-body text-lg leading-relaxed text-[var(--text-muted)] lg:mb-12"
            >
              I enjoy solving messy problems and turning them into simple products.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 font-body text-sm font-medium tracking-wide text-[var(--surface)] hover:bg-[var(--accent)] sm:px-6"
              >
                View Projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-3 font-body text-sm font-medium tracking-wide text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--surface)] sm:px-6"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-14 lg:hidden"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-sm">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl border-2 border-[color:var(--gold)]/40" />

                <div className="absolute inset-0 overflow-hidden rounded-3xl" style={{ boxShadow: 'var(--hero-shadow)' }}>
                  <img
                    src="/Harsh.jpg"
                    alt="Harsh Kumar"
                    className="h-full w-full bg-[var(--soft-bg)] object-contain object-top"
                    style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                  />

                  <div className="absolute inset-0 mix-blend-color" style={{ backgroundColor: 'var(--hero-overlay)' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.65)}
              className="mt-14 flex items-center justify-between gap-8 border-t border-[color:var(--border)] pt-8 sm:justify-start sm:gap-12 lg:mt-20 lg:pt-10"
            >
              {[
                { num: '4+', label: 'Projects shipped' },
                { num: '3+', label: 'Years learning' },
                { num: '1', label: 'Hackathon win' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-light text-[var(--text)]">{num}</p>
                  <p className="mt-0.5 font-body text-xs tracking-wide text-[var(--text-soft)]">{label}</p>
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
              <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border-2 border-[color:var(--gold)]/40" />

              <div className="absolute inset-0 overflow-hidden rounded-3xl" style={{ boxShadow: 'var(--hero-shadow)' }}>
                <img
                  src="/Harsh.jpg"
                  alt="Harsh Kumar"
                  className="h-full w-full bg-[var(--soft-bg)] object-contain object-top"
                  style={{ filter: 'grayscale(15%) contrast(1.05)' }}
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
          className="h-8 w-px bg-gradient-to-b from-[var(--gold)] to-transparent"
        />
      </motion.div>
    </section>
  )
}
