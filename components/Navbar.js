import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',       href: '#about'       },
  { label: 'Projects',    href: '#projects'    },
  { label: 'Skills',      href: '#skills'      },
  { label: 'Journey',     href: '#journey'     },
  { label: 'Contact',     href: '#contact'     },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[rgba(139,111,71,0.12)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="font-display text-[1.1rem] font-medium text-[#1c1917] tracking-wide hover:text-[#8b6f47] transition-colors duration-300"
          >
            HK<span className="text-[#c9a55a]">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`relative font-body text-sm tracking-wide transition-colors duration-300 group
                    ${activeSection === href.slice(1)
                      ? 'text-[#1c1917]'
                      : 'text-[#78716c] hover:text-[#1c1917]'
                    }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#c9a55a] transition-all duration-300
                      ${activeSection === href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:harshkumar@example.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium border border-[rgba(139,111,71,0.3)] text-[#57534e] hover:bg-[#8b6f47] hover:text-[#faf7f2] hover:border-[#8b6f47] transition-all duration-300"
          >
            Say hello
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5"
          >
            <span className={`block h-px bg-[#1c1917] transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
            <span className={`block h-px bg-[#1c1917] transition-all duration-300 ${mobileOpen ? 'opacity-0 w-4' : 'w-4'}`} />
            <span className={`block h-px bg-[#1c1917] transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#faf7f2]/97 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl text-[#1c1917] hover:text-[#8b6f47] transition-colors"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
