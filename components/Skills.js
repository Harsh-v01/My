import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const categories = [
  {
    label: 'Languages',
    icon: '⬡',
    skills: [
      'Java',
      'Python',
      'JavaScript',
      'C',
      'C++',
      'PHP',
    ],
  },
  {
    label: 'Web & App Development',
    icon: '◈',
    skills: [
      'React',
      'React Native',
      'Flutter',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Backend & Data',
    icon: '◎',
    skills: [
      'Firebase',
      'MySQL',
      'MongoDB',
      'SQL',
      'REST APIs',
    ],
  },
  {
    label: 'AI & Cloud',
    icon: '⊞',
    skills: [
      'Google Cloud',
      'AI/ML',
      'Prompt Engineering',
      'Automation',
    ],
  },
  {
    label: 'Tools I Use',
    icon: '◐',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Figma',
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 lg:py-36 bg-[#F0E5D8]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <SectionHeader
            eyebrow="What I work with"
            heading="Tools I use"
            sub="A mix of technologies I've worked with, built projects around, and continue to explore."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {categories.map(({ label, icon, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group p-6 rounded-2xl border border-[rgba(200,75,49,0.12)] bg-[#F5EDE2]/50 hover:bg-[#F5EDE2] hover:border-[rgba(200,75,49,0.22)] transition-all duration-300"
            >

              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[#D9BF77] text-base font-mono">
                  {icon}
                </span>

                <h3 className="font-body font-medium text-sm text-[#2E4052] tracking-wide">
                  {label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[11px] font-mono text-[#3D4F60] bg-[#F0E5D8] border border-[rgba(200,75,49,0.12)] rounded-full tracking-wide hover:border-[#D9BF77] hover:text-[#C84B31] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

          {/* Decorative last cell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="p-6 rounded-2xl border border-dashed border-[rgba(139,111,71,0.2)] flex flex-col items-center justify-center text-center min-h-[140px]"
          >
            <p className="font-display text-2xl italic text-[#D9BF77] mb-2">
              Still exploring
            </p>

            <p className="font-body text-xs text-[#8FA6AC]">
              The stack keeps growing with every project.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}