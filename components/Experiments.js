import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const items = [
  {
    title: 'AI Workflows',
    desc: 'Building pipelines that chain LLMs, retrieval, and tools into reliable production systems.',
    tag: 'Active',
  },
  {
    title: 'Automation',
    desc: 'Removing friction from repetitive tasks. If a computer can do it, it should.',
    tag: 'Active',
  },
  {
    title: 'Open Source',
    desc: 'Contributing to projects I use every day. Reading others\' codebases is the best education.',
    tag: 'Ongoing',
  },
  {
    title: 'System Design',
    desc: 'Studying how large-scale systems handle load, consistency, and failure gracefully.',
    tag: 'Learning',
  },
]

export default function Experiments() {
  const [ref, inView] = useInView()

  return (
    <section id="experiments" className="py-28 lg:py-36 bg-[#F0E5D8]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Now"
            heading="Currently Exploring"
            sub="Where my attention is at the moment."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ title, desc, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group p-7 rounded-2xl bg-[#F5EDE2] border border-[rgba(46,64,82,0.1)] shadow-[0_8px_30px_rgba(46,64,82,0.04)] hover:border-[rgba(46,64,82,0.18)] hover:shadow-[0_10px_36px_rgba(46,64,82,0.08)] transition-all duration-400"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-body font-medium text-[#2E4052]">{title}</h3>
                <span className="text-[10px] font-mono text-[#8B6F1F] bg-[#D9BF77]/20 px-2.5 py-1 rounded-full tracking-wide shrink-0 ml-3">
                  {tag}
                </span>
              </div>
              <p className="font-body text-sm text-[#55677A] leading-relaxed">{desc}</p>
              {/* Hover line */}
              <div className="mt-5 w-0 group-hover:w-8 h-px bg-[#D9BF77] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
