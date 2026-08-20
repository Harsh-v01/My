import { motion } from 'framer-motion'
import AmbientGlow from './AmbientGlow'
import { useInView } from './useInView'
import { defaultContent } from '../lib/defaultContent'

const icons = {
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  other: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  ),
}

export default function Contact({ content = defaultContent.contact }) {
  const { description, links } = content
  const emailHref = links.find((l) => l.key === 'email')?.href
    ?? `https://mail.google.com/mail/?view=cm&fs=1&to=${content.email}`
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg)] py-28 lg:py-36"
    >
      <AmbientGlow
        glows={[
          {
            color: 'blue',
            className:
              'bottom-[-16%] left-1/2 h-[30rem] w-[58rem] -translate-x-1/2',
            opacity: 0.11,
          },
          {
            color: 'gold',
            className:
              'right-[-18%] top-[10%] h-[26rem] w-[26rem]',
            opacity: 0.06,
          },
        ]}
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        <div className="mx-auto max-w-2xl text-center">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <span className="inline-block h-px w-6 bg-[var(--gold)]" />

            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-soft)]">
              Contact
            </span>

            <span className="inline-block h-px w-6 bg-[var(--gold)]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight text-[var(--text)]"
          >
            Let&apos;s{' '}
            <span className="italic text-[var(--accent)]">
              Connect
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-14 font-body text-base leading-relaxed text-[var(--text-muted)]"
          >
            {description}
          </motion.p>

          {/* Contact links */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {links.map(({ key, label, value, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="group flex w-full items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/60 px-5 py-3.5 transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--surface)] sm:w-auto"
              >
                <span className="text-[var(--text-soft)] transition-colors group-hover:text-[var(--accent)]">
                  {icons[key] ?? icons.other}
                </span>

                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-soft)]">
                    {label}
                  </p>

                  <p className="mt-0.5 font-body text-sm text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Gmail CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-12"
          >
            <a
              href={emailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-8 py-4 font-body text-sm font-medium tracking-wide text-[var(--surface)] transition-colors hover:bg-[var(--accent)]"
            >
              Send an email

              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}