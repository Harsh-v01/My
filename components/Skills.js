import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { defaultContent } from '../lib/defaultContent'

export default function Skills({ categories = defaultContent.skills }) {
  const [ref, inView] = useInView()
  const list = categories?.length ? categories : defaultContent.skills

  return (
    <section id="skills" className="scroll-mt-24 py-12 sm:py-16">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-soft)]">Stack</p>
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Skills & tools
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(({ label, icon, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="bento-card p-5 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-sm text-[var(--accent)]">{icon}</span>
                <h3 className="text-sm font-medium text-[var(--text)]">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(skills || []).map((s) => (
                  <span key={s} className="rounded-full bg-[var(--soft-bg)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-soft)]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}