import { motion } from 'framer-motion'
import AmbientGlow from './AmbientGlow'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'
import { defaultContent } from '../lib/defaultContent'

export default function Experiments({ items = defaultContent.experiments }) {
  const [ref, inView] = useInView()

  return (
    <section id="experiments" className="relative overflow-hidden bg-[var(--soft-bg)] py-28 lg:py-36">
      <AmbientGlow
        glows={[
          { color: 'terracotta', className: 'right-[-18%] top-[2rem] h-[30rem] w-[30rem]', opacity: 0.065 },
          { color: 'gold', className: 'bottom-[-24%] left-[6%] h-[28rem] w-[28rem]', opacity: 0.055 },
        ]}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Right now"
            heading="What I'm exploring"
            sub="A few things I've been spending my time learning, building, and thinking about."
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ title, desc, tag }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-7 shadow-[var(--card-shadow)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:shadow-[var(--card-shadow-strong)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-body font-medium text-[var(--text)]">{title}</h3>
                <span className="ml-3 shrink-0 rounded-full bg-[var(--gold)]/20 px-2.5 py-1 font-mono text-[10px] tracking-wide text-[var(--gold)]">
                  {tag}
                </span>
              </div>

              <p className="font-body text-sm leading-relaxed text-[var(--text-muted)]">{desc}</p>
              <div className="mt-5 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
