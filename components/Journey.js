import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { useInView } from './useInView'
import { defaultContent } from '../lib/defaultContent'

export default function Journey({ milestones = defaultContent.journey }) {
  const [ref, inView] = useInView()

  return (
    <section id="journey" className="relative overflow-hidden bg-[var(--journey-bg)] py-28 lg:py-36">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      <div
        className="absolute right-0 top-0 h-[40vw] w-[40vw] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader index="04" eyebrow="So far" heading="The journey" sub="Still figuring things out. Still building." light />
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-0 left-[80px] top-0 hidden w-px bg-gradient-to-b from-[var(--gold)]/60 via-[var(--gold)]/20 to-transparent sm:block"
          />

          <div className="space-y-14">
            {milestones.map(({ year, title, desc }, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-8 sm:gap-0"
              >
                <div className="shrink-0 sm:w-[80px] sm:pr-6 sm:pt-0.5 sm:text-right">
                  <span className="font-mono text-xs tracking-widest text-[var(--gold)]">{year}</span>
                </div>

                <div
                  className="absolute left-[72px] top-1.5 hidden h-2 w-2 rounded-full bg-[var(--gold)] sm:block"
                  style={{ boxShadow: '0 0 0 4px var(--journey-bg)' }}
                />

                <div className="flex-1 sm:pl-10">
                  <h3 className="mb-2 font-body font-medium text-[var(--journey-text)]">{title}</h3>
                  <p className="max-w-md font-body text-sm leading-relaxed text-[var(--text-soft)]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
