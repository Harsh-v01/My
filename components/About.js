import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionDecor from './SectionDecor'
import { defaultContent } from '../lib/defaultContent'

export default function About({ content = defaultContent.about }) {
  const { paragraphs, traits, availabilityText } = content
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'start 0.4'],
  })
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [0.28, 1])
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.15, 1])
  const short = paragraphs?.[0] || ''

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
    >
      <SectionDecor ghost="HARSH" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-soft)]">
          About
        </p>

        <motion.h2
          style={{ opacity: titleOpacity }}
          className="mt-3 max-w-3xl font-display text-[clamp(1.9rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.03em]"
        >
          I build useful software — clear, reliable, and worth shipping.
        </motion.h2>

        <motion.div
          style={{ scaleX: lineScale, originX: 0 }}
          className="mt-5 h-[2px] w-16 bg-[var(--accent)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--text-muted)]"
        >
          {short}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-3 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="font-mono text-[11px] text-[var(--text-soft)]">
            {availabilityText || 'Open to opportunities'} · Pune
          </span>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {(traits || []).slice(0, 3).map(({ icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index, duration: 0.45 }}
              className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/80 p-5 transition hover:-translate-y-1 hover:shadow-[var(--card-shadow-strong)]"
            >
              <span className="font-mono text-sm text-[var(--accent)]">{icon}</span>
              <h3 className="mt-2 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-muted)]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
