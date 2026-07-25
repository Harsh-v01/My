import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const milestones = [
  {
    year: '2022',
    title: 'Started B.Tech',
    desc: 'Enrolled in Computer Science. Wrote my first real programs and discovered a genuine love for building software.',
  },
  {
    year: '2023',
    title: 'First Projects',
    desc: 'Shipped Samvad and the Certificate Generator. Learned more in those months than any classroom could teach.',
  },
  {
    year: '2024',
    title: 'SIH + Award',
    desc: 'Won Smart India Hackathon 2024. Built AI Academic Hub under pressure — validated that I can solve real problems.',
  },
  {
    year: '2025',
    title: 'Building AI Systems',
    desc: 'Diving deep into AI workflows, automation, and open source. Exploring what the next generation of software looks like.',
  },
]

export default function Journey() {
  const [ref, inView] = useInView()

  return (
    <section id="journey" className="py-28 lg:py-36 bg-[#1c1917] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] opacity-10 rounded-full"
        style={{ background: 'radial-gradient(circle, #c9a55a 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader eyebrow="Timeline" heading="Journey" light />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[80px] top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a55a]/60 via-[#c9a55a]/20 to-transparent hidden sm:block"
          />

          <div className="space-y-12">
            {milestones.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-8 sm:gap-0 items-start"
              >
                {/* Year */}
                <div className="shrink-0 sm:w-[80px] sm:text-right sm:pr-6 sm:pt-0.5">
                  <span className="font-mono text-xs text-[#c9a55a] tracking-widest">{year}</span>
                </div>

                {/* Dot */}
                <div className="absolute left-[72px] top-1.5 w-2 h-2 rounded-full bg-[#c9a55a] hidden sm:block ring-4 ring-[#1c1917]" />

                {/* Content */}
                <div className="sm:pl-10 flex-1">
                  <h3 className="font-body font-medium text-[#faf7f2] mb-2">{title}</h3>
                  <p className="font-body text-sm text-[#a8a29e] leading-relaxed max-w-md">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
