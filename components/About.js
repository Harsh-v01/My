import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const traits = [
  {
    icon: '⬡',
    title: 'Builder Mindset',
    desc: 'I learn best by building. From real-time applications to automation and AI experiments, I like turning ideas into something people can actually use.',
  },
  {
    icon: '◈',
    title: 'Curious by Nature',
    desc: 'I enjoy exploring different areas of technology — from software engineering and AI to cloud, automation, and new ways of solving problems.',
  },
  {
    icon: '◎',
    title: 'Problem Driven',
    desc: 'I care about why something is being built, not just how. I try to understand the problem first and then find a practical technical solution.',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 lg:py-36 bg-[#FAF7F2]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Header + intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <SectionHeader
                eyebrow="About"
                heading="A little about me"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="font-body text-base text-[#3D4F60] leading-[1.85] mb-6"
            >
              I'm Harsh — a developer who likes making things and
              figuring out how they work. I started with the basics,
              got curious about everything around me, and somehow ended
              up exploring web development, mobile apps, AI, automation,
              and a lot of things in between.

            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="font-body text-base text-[#3D4F60] leading-[1.85]"
            >
              I don't consider myself someone who has everything figured
              out yet — and I'm okay with that. I learn quickly, enjoy
              working on problems that make me think, and genuinely like
              building things with people. I'm now looking for a place
              where I can contribute, keep learning, and grow into a
              really good engineer.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4
              }}
              className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(200,75,49,0.2)] bg-[#F5EDE2]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9BF77] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C84B31]" />
              </span>

              <span className="text-xs font-mono text-[#55677A] tracking-wide">
                Open to opportunities
              </span>
            </motion.div>
          </div>

          {/* Right — Trait cards */}
          <div className="space-y-4">
            {traits.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group p-6 rounded-2xl border border-[rgba(200,75,49,0.1)] bg-[#F5EDE2]/60 hover:bg-[#F5EDE2] hover:border-[rgba(200,75,49,0.2)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-xl text-[#D9BF77] font-mono shrink-0">
                    {icon}
                  </span>

                  <div>
                    <h3 className="font-body font-medium text-[#2E4052] mb-1">
                      {title}
                    </h3>

                    <p className="font-body text-sm text-[#55677A] leading-relaxed">
                      {desc}
                    </p>
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