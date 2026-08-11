import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'

const traits = [
  {
    icon: '[]',
    title: 'Builder Mindset',
    desc: 'I learn best by building. From real-time applications to automation and AI experiments, I like turning ideas into something people can actually use.',
  },
  {
    icon: '<>',
    title: 'Curious by Nature',
    desc: 'I enjoy exploring different areas of technology - from software engineering and AI to cloud, automation, and new ways of solving problems.',
  },
  {
    icon: '()',
    title: 'Problem Driven',
    desc: 'I care about why something is being built, not just how. I try to understand the problem first and then find a practical technical solution.',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="bg-[var(--bg)] py-28 lg:py-36">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeader eyebrow="About" heading="A little about me" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-body text-base leading-[1.85] text-[var(--text-muted)]"
            >
              I&apos;m Harsh - a developer who likes making things and figuring out how they work. I started with the
              basics, got curious about everything around me, and somehow ended up exploring web development, mobile
              apps, AI, automation, and a lot of things in between.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-base leading-[1.85] text-[var(--text-muted)]"
            >
              I don&apos;t consider myself someone who has everything figured out yet - and I&apos;m okay with that. I learn
              quickly, enjoy working on problems that make me think, and genuinely like building things with people.
              I&apos;m now looking for a place where I can contribute, keep learning, and grow into a really good
              engineer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>

              <span className="text-xs font-mono tracking-wide text-[var(--text-muted)]">
                Open to opportunities
              </span>
            </motion.div>
          </div>

          <div className="space-y-4">
            {traits.map(({ icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/60 p-6 transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--surface)]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 font-mono text-xl text-[var(--gold)]">{icon}</span>

                  <div>
                    <h3 className="mb-1 font-body font-medium text-[var(--text)]">{title}</h3>
                    <p className="font-body text-sm leading-relaxed text-[var(--text-muted)]">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
