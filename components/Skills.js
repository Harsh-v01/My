import { motion } from 'framer-motion'
import AmbientGlow from './AmbientGlow'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'
import { defaultContent } from '../lib/defaultContent'

export default function Skills({ categories = defaultContent.skills }) {
  const [ref, inView] = useInView()

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--soft-bg)] py-28 lg:py-36"
    >
      <AmbientGlow
        glows={[
          {
            color: 'gold',
            className: 'right-[-20%] top-[8rem] h-[28rem] w-[28rem]',
            opacity: 0.065,
          },
          {
            color: 'blue',
            className: 'bottom-[-22%] left-[-18%] h-[26rem] w-[26rem]',
            opacity: 0.045,
          },
        ]}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeader
            eyebrow="What I work with"
            heading="Tools I use"
            sub="Technologies I've worked with, built projects around, and continue to explore."
          />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ label, icon, skills }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/50 p-6 transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--surface)]"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className="font-mono text-base text-[var(--gold)]">
                  {icon}
                </span>

                <h3 className="font-body text-sm font-medium tracking-wide text-[var(--text)]">
                  {label}
                </h3>
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

          {/* Always learning card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--divider)] p-6 text-center"
          >
            <p className="mb-2 font-display text-2xl italic text-[var(--gold)]">
              Always learning
            </p>

            <p className="font-body text-xs text-[var(--text-soft)]">
              The stack grows with every project and experiment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}