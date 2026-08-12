const glowColors = {
  gold: 'var(--glow-gold)',
  terracotta: 'var(--glow-terracotta)',
  blue: 'var(--glow-blue)',
}

export default function AmbientGlow({ glows = [], className = '' }) {
  if (!glows.length) return null

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
      {glows.map(({ color = 'gold', className: glowClassName = '', opacity = 0.12 }, index) => (
        <span
          key={`${color}-${index}`}
          className={`absolute block rounded-full blur-3xl ${glowClassName}`}
          style={{
            background: `radial-gradient(circle, ${glowColors[color] || color} 0%, transparent 70%)`,
            opacity,
          }}
        />
      ))}
    </div>
  )
}
