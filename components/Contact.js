import { motion } from 'framer-motion'
import { useInView } from './useInView'

const links = [
  {
    label: 'Email',
    value: 'harshkumar@example.com',
    href:  'mailto:harshkumar@example.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/harshkumar',
    href:  'https://linkedin.com/in/harshkumar',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/harshkumar',
    href:  'https://github.com/harshkumar',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#faf7f2] relative overflow-hidden">
      {/* Warm blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #e8d3a8 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="inline-block w-6 h-px bg-[#c9a55a]" />
            <span className="text-xs font-mono text-[#a8a29e] tracking-[0.18em] uppercase">Contact</span>
            <span className="inline-block w-6 h-px bg-[#c9a55a]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight text-[#1c1917] mb-6"
          >
            Let's <span className="italic text-[#8b6f47]">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-base text-[#78716c] leading-relaxed mb-14"
          >
            Whether it's a project idea, a collaboration, or just a hello — I'd love to hear from you.
          </motion.p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map(({ label, value, href, icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-[rgba(139,111,71,0.15)] bg-[#f9f0e0]/60 hover:bg-[#f9f0e0] hover:border-[rgba(139,111,71,0.3)] transition-all duration-300 w-full sm:w-auto"
              >
                <span className="text-[#a8a29e] group-hover:text-[#8b6f47] transition-colors">{icon}</span>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-[#a8a29e] tracking-widest uppercase">{label}</p>
                  <p className="text-sm font-body text-[#57534e] group-hover:text-[#1c1917] transition-colors mt-0.5">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="mailto:harshkumar@example.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1c1917] text-[#faf7f2] rounded-full font-body font-medium text-sm tracking-wide hover:bg-[#8b6f47] transition-all duration-400"
            >
              Send an email
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
