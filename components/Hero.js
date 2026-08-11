import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Particles from './Particles'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const [portraitError, setPortraitError] = useState(false)
  const [portraitStatus, setPortraitStatus] = useState('checking')

  useEffect(() => {
    let isMounted = true

    const checkPortrait = async () => {
      try {
        const response = await fetch('/Harsh.jpg', { method: 'HEAD' })

        if (!isMounted) return

        if (response.ok) {
          setPortraitStatus('ready')
        } else {
          setPortraitStatus('missing')
        }
      } catch {
        if (isMounted) {
          setPortraitStatus('missing')
        }
      }
    }

    checkPortrait()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F0E5D8]">
        <Particles className="absolute inset-0" />
        {/* Warm radial blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full opacity-30 mix-blend-soft-light"
          style={{
            background: 'radial-gradient(circle, #D9BF77 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-20 mix-blend-soft-light"
          style={{
            background: 'radial-gradient(circle, #A5C9CA 0%, transparent 70%)',
          }}
        />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize:   '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-10">
            <span className="inline-block w-6 h-px bg-[#D9BF77]" />
            <span className="text-xs font-mono text-[#8FA6AC] tracking-[0.18em] uppercase">
              Software Engineer
            </span>
          </motion.div>

          {/* Name — editorial display */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.92] tracking-tight text-[#2E4052] mb-6"
          >
            Harsh
            <br />
            <span className="italic text-[#C84B31]">Kumar</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.35)}
            className="font-body text-lg text-[#55677A] max-w-sm leading-relaxed mb-12"
          >
            Building & Enjoying the journey.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#2E4052] text-[#F0E5D8] rounded-full text-sm font-body font-medium tracking-wide hover:bg-[#C84B31] transition-all duration-400"
            >
              View Projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C84B31] text-[#C84B31] rounded-full text-sm font-body font-medium tracking-wide hover:bg-[#C84B31] hover:text-[#F0E5D8] transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Subtle stats row */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex items-center gap-10 mt-20 pt-10 border-t border-[rgba(200,75,49,0.1)]"
          >
            {[
              { num: '4+',  label: 'Projects shipped'   },
              { num: '2+',  label: 'Years building'     },
              { num: '1',   label: 'Award'     },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-light text-[#2E4052]">{num}</p>
                <p className="font-body text-xs text-[#8FA6AC] mt-0.5 tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="relative aspect-[4/5] max-w-sm ml-auto">
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[#D9BF77]/40" />
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px -20px rgba(46,64,82,0.35)' }}
            >
              {portraitStatus === 'ready' && !portraitError ? (
                <img
                  src="/Harsh.jpg"
                  alt="Harsh Kumar"
                  className="w-full h-full object-contain object-top bg-[#F0E5D8]"
                  style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                  onError={() => setPortraitError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F5EDE2] via-[#F0E5D8] to-[#D9BF77]/25">
                  <div className="text-center px-6">
                    <div className="font-display text-6xl font-light text-[#2E4052]">HK</div>
                    <div className="mt-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[#8FA6AC]">
                      {portraitStatus === 'missing' ? 'Harsh.jpg missing' : 'Loading portrait'}
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-[#2E4052] mix-blend-color opacity-[0.08]" />
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-[#8FA6AC] tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#D9BF77] to-transparent"
        />
      </motion.div>
    </section>
  )
}
