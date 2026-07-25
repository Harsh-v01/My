import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const traits = [
  {
    icon: '⬡',
    title: 'Builder Mindset',
    desc: 'I approach problems by building. Shipping something real always teaches more than planning indefinitely.',
  },
  {
    icon: '◈',
    title: 'Curious Learner',
    desc: 'Whether it\'s a new framework, a design pattern, or a domain I know nothing about — curiosity drives everything.',
  },
  {
    icon: '◎',
    title: 'Product Focused',
    desc: 'I think in systems and user impact, not just code. The best engineering serves a clear purpose.',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 lg:py-36 bg-[#faf7f2]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Header + intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeader eyebrow="About" heading="About Me" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-base text-[#57534e] leading-[1.85] mb-6"
            >
              I'm a third-year B.Tech student who builds things that matter. My work lives at the intersection of clean engineering and thoughtful product design — from real-time apps to AI-powered workflows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-base text-[#57534e] leading-[1.85]"
            >
              I won Smart India Hackathon 2024 and I'm always looking for the next hard problem worth solving. Currently exploring AI systems, automation, and open source contribution.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(139,111,71,0.2)] bg-[#f9f0e0]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a55a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b6f47]" />
              </span>
              <span className="text-xs font-mono text-[#78716c] tracking-wide">Open to opportunities</span>
            </motion.div>
          </div>

          {/* Right — Trait cards */}
          <div className="space-y-4">
            {traits.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-2xl border border-[rgba(139,111,71,0.1)] bg-[#f9f0e0]/60 hover:bg-[#f9f0e0] hover:border-[rgba(139,111,71,0.2)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-xl text-[#c9a55a] font-mono shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-body font-medium text-[#1c1917] mb-1">{title}</h3>
                    <p className="font-body text-sm text-[#78716c] leading-relaxed">{desc}</p>
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
