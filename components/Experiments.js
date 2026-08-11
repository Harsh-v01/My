import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'

const items = [
  {
    title: 'AI & Generative AI',
    desc: 'Experimenting with AI tools, APIs, and workflows to understand where they can actually make software more useful - not just where they look impressive.',
    tag: 'Exploring',
  },
  {
    title: 'Automation',
    desc: 'I like finding repetitive problems and thinking, "can this be done automatically?" Exploring agents, workflows, APIs, and tools that can make everyday work simpler.',
    tag: 'Building',
  },
  {
    title: 'Better Software',
    desc: 'Learning how to go beyond making something work - cleaner code, better architecture, better user experiences, and understanding the decisions behind good software.',
    tag: 'Learning',
  },
  {
    title: 'New Ideas',
    desc: 'I tend to go down interesting rabbit holes. Right now that means experimenting with different technologies, building small things, and seeing which ideas are worth taking further.',
    tag: 'Always',
  },
]

export default function Experiments() {
  const [ref, inView] = useInView()

  return (
    <section id="experiments" className="bg-[var(--soft-bg)] py-28 lg:py-36">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
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
              className="group rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-7 shadow-[var(--card-shadow)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:shadow-[var(--card-shadow-strong)]"
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
