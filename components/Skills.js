import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const categories = [
  {
    label: 'Frontend',
    icon: '⬡',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend',
    icon: '◈',
    skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    label: 'Cloud',
    icon: '◎',
    skills: ['AWS', 'Vercel', 'Render', 'Docker', 'CI/CD'],
  },
  {
    label: 'Databases',
    icon: '⊞',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'],
  },
  {
    label: 'Tools',
    icon: '◐',
    skills: ['Git', 'GitHub', 'Figma', 'Postman', 'Linux', 'VS Code'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 lg:py-36 bg-[#faf7f2]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Capabilities"
            heading="Tech Stack"
            sub="Tools and technologies I reach for to build things."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ label, icon, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 rounded-2xl border border-[rgba(139,111,71,0.12)] bg-[#f9f0e0]/50 hover:bg-[#f9f0e0] hover:border-[rgba(139,111,71,0.22)] transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-[#c9a55a] text-base font-mono">{icon}</span>
                <h3 className="font-body font-medium text-sm text-[#1c1917] tracking-wide">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[11px] font-mono text-[#57534e] bg-[#faf7f2] border border-[rgba(139,111,71,0.12)] rounded-full tracking-wide hover:border-[#c9a55a] hover:text-[#8b6f47] transition-colors cursor-default"
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
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl border border-dashed border-[rgba(139,111,71,0.2)] flex flex-col items-center justify-center text-center min-h-[140px]"
          >
            <p className="font-display text-2xl italic text-[#c9a55a] mb-2">Always learning</p>
            <p className="font-body text-xs text-[#a8a29e]">Stack grows with every project</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
