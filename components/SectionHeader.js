import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, heading, sub, light = false }) {
  return (
    <div className="mb-16">
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-block w-6 h-px ${light ? 'bg-[#A5C9CA]' : 'bg-[#D9BF77]'}`} />
          <span className={`text-xs font-mono tracking-[0.18em] uppercase ${light ? 'text-[#D9BF77]' : 'text-[#8FA6AC]'}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight ${light ? 'text-[#F0E5D8]' : 'text-[#2E4052]'}`}>
        {heading}
      </h2>
      {sub && (
        <p className={`font-body text-base mt-4 max-w-md leading-relaxed ${light ? 'text-[#D9BF77]/80' : 'text-[#55677A]'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
