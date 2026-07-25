import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, heading, sub, light = false }) {
  return (
    <div className="mb-16">
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-block w-6 h-px ${light ? 'bg-[#e8d3a8]' : 'bg-[#c9a55a]'}`} />
          <span className={`text-xs font-mono tracking-[0.18em] uppercase ${light ? 'text-[#c9a55a]' : 'text-[#a8a29e]'}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight ${light ? 'text-[#faf7f2]' : 'text-[#1c1917]'}`}>
        {heading}
      </h2>
      {sub && (
        <p className={`font-body text-base mt-4 max-w-md leading-relaxed ${light ? 'text-[#c9a55a]/80' : 'text-[#78716c]'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
