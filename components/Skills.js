import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'

const categories = [
  {
    label: 'Languages',
    icon: '[]',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'PHP'],
  },
  {
    label: 'Web & App Development',
    icon: '<>',
    skills: ['React', 'React Native', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Backend & Data',
    icon: '()',
    skills: ['Firebase', 'MySQL', 'MongoDB', 'SQL', 'REST APIs'],
  },
  {
    label: 'AI & Cloud',
    icon: '{}',
    skills: ['Google Cloud', 'AI/ML', 'Prompt Engineering', 'Automation'],
  },
  {
    label: 'Tools I Use',
    icon: '//',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="bg-[var(--soft-bg)] py-28 lg:py-36">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="What I work with"
            heading="Tools I use"
            sub="A mix of technologies I've worked with, built projects around, and continue to explore."
          />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ label, icon, skills }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/50 p-6 transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--surface)]"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className="font-mono text-base text-[var(--gold)]">{icon}</span>
                <h3 className="font-body text-sm font-medium tracking-wide text-[var(--text)]">{label}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-[color:var(--border)] bg-[var(--soft-bg)] px-2.5 py-1 font-mono text-[11px] tracking-wide text-[var(--text-muted)] transition-colors hover:border-[var(--gold)] hover:text-[var(--accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--divider)] p-6 text-center"
          >
            <p className="mb-2 font-display text-2xl italic text-[var(--gold)]">Still exploring</p>
            <p className="font-body text-xs text-[var(--text-soft)]">The stack keeps growing with every project.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
