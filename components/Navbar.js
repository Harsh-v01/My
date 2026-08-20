import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { defaultContent } from '../lib/defaultContent'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

function ResumeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const resolveTheme = (value) => (value === 'dark' ? 'dark' : 'light')

const applyTheme = (theme, persist = true) => {
  const resolvedTheme = resolveTheme(theme)
  const root = document.documentElement
  root.classList.toggle('dark', resolvedTheme === 'dark')
  root.style.colorScheme = resolvedTheme

  if (!persist) return

  try {
    window.localStorage.setItem('theme', resolvedTheme)
  } catch (error) {}
}

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 14.7A8.3 8.3 0 0 1 9.3 4a8.3 8.3 0 1 0 10.7 10.7Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4.1" />
      <path d="M12 2.5v2.1M12 19.4v2.1M4.5 4.5l1.5 1.5M18 18l1.5 1.5M2.5 12h2.1M19.4 12h2.1M4.5 19.5l1.5-1.5M18 6l1.5-1.5" />
    </svg>
  )
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[var(--surface)]/85 text-[var(--text-muted)] shadow-sm backdrop-blur-sm hover:border-[color:var(--border-strong)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: theme === 'dark' ? 10 : -10, scale: 0.92 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="flex"
      >
        <ThemeIcon theme={theme} />
      </motion.span>
    </button>
  )
}

export default function Navbar({ content = defaultContent }) {
  const emailHref = content.contact?.links?.find((l) => l.key === 'email')?.href
    ?? `https://mail.google.com/mail/?view=cm&fs=1&to=${content.contact?.email ?? defaultContent.contact.email}`
  const resume = content.resume ?? defaultContent.resume

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    navLinks.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const initialTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    setTheme(initialTheme)

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handlePreferenceChange = (event) => {
      let storedTheme = null

      try {
        storedTheme = window.localStorage.getItem('theme')
      } catch (error) {}

      if (storedTheme) return

      const nextTheme = event.matches ? 'dark' : 'light'
      setTheme(nextTheme)
      applyTheme(nextTheme, false)
    }

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handlePreferenceChange)
      return () => media.removeEventListener('change', handlePreferenceChange)
    }

    media.addListener(handlePreferenceChange)
    return () => media.removeListener(handlePreferenceChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-[color:var(--border)] bg-[var(--soft-bg)]/90 py-3 backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#hero"
            className="font-display text-[1.1rem] font-medium tracking-wide text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
          >
            HK<span className="text-[var(--gold)]">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`group relative font-body text-sm tracking-wide transition-colors duration-300 ${
                    activeSection === href.slice(1)
                      ? 'text-[var(--text)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[var(--gold)] transition-all duration-300 ${
                      activeSection === href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <a
              href={resume.url}
              download={resume.fileName}
              className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-body font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:text-[var(--text)]"
            >
              <ResumeIcon />
              Resume
            </a>

            <a
              href={emailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-body font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--accent)] hover:text-[var(--soft-bg)]"
            >
              Say hello
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle menu"
              className="flex h-8 w-8 flex-col items-end justify-center gap-1.5"
            >
              <span className={`block h-px bg-[var(--text)] transition-all duration-300 ${mobileOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-6'}`} />
              <span className={`block h-px bg-[var(--text)] transition-all duration-300 ${mobileOpen ? 'w-4 opacity-0' : 'w-4'}`} />
              <span className={`block h-px bg-[var(--text)] transition-all duration-300 ${mobileOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-5'}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--soft-bg)]/95 backdrop-blur-sm"
          >
            {navLinks.map(({ label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href={resume.url}
              download={resume.fileName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-body font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:text-[var(--text)]"
            >
              <ResumeIcon />
              Resume
            </motion.a>

            <motion.a
              href={emailHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.07, duration: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-body font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:bg-[var(--accent)] hover:text-[var(--soft-bg)]"
            >
              Say hello
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
