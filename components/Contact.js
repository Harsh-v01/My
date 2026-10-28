import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { defaultContent } from '../lib/defaultContent'

export default function Contact({ content = defaultContent.contact }) {
  const [ref, inView] = useInView()
  const { description, links } = content || defaultContent.contact
  const list = links?.length ? links : defaultContent.contact.links

  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16 pb-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-soft)]">Contact</p>
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[var(--text-muted)]">{description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {list.map(({ key, label, value, href }, i) => (
            <motion.a
              key={key || label}
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              className="bento-card group p-6 transition hover:shadow-[var(--card-shadow-strong)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-soft)]">{label}</p>
              <p className="mt-2 text-sm text-[var(--text)] group-hover:text-[var(--accent)]">
                {typeof value === 'string' ? value.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') : value}
              </p>
              <p className="mt-4 font-mono text-[11px] text-[var(--text-soft)] group-hover:text-[var(--accent)]">→</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}