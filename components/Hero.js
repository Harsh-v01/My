import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#faf7f2]" />
        {/* Warm radial blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, #f2e4c8 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #e8d3a8 0%, transparent 70%)',
          }}
        />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize:   '256px 256px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-10">
            <span className="inline-block w-6 h-px bg-[#c9a55a]" />
            <span className="text-xs font-mono text-[#a8a29e] tracking-[0.18em] uppercase">
              Software Engineer
            </span>
          </motion.div>

          {/* Name — editorial display */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.92] tracking-tight text-[#1c1917] mb-6"
          >
            Harsh
            <br />
            <span className="italic text-[#8b6f47]">Kumar</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.35)}
            className="font-body text-lg text-[#78716c] max-w-sm leading-relaxed mb-12"
          >
            Building useful digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1c1917] text-[#faf7f2] rounded-full text-sm font-body font-medium tracking-wide hover:bg-[#8b6f47] transition-all duration-400"
            >
              View Projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(139,111,71,0.3)] text-[#57534e] rounded-full text-sm font-body font-medium tracking-wide hover:border-[#8b6f47] hover:text-[#8b6f47] transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Subtle stats row */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex items-center gap-10 mt-20 pt-10 border-t border-[rgba(139,111,71,0.1)]"
          >
            {[
              { num: '3+',  label: 'Projects shipped'   },
              { num: '2+',  label: 'Years building'     },
              { num: '1',   label: 'National award'     },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-light text-[#1c1917]">{num}</p>
                <p className="font-body text-xs text-[#a8a29e] mt-0.5 tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-[#a8a29e] tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#c9a55a] to-transparent"
        />
      </motion.div>
    </section>
  )
}
