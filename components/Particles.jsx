import { useEffect, useRef } from 'react'

const MAX_PARTICLES = 60
const DENSITY_DIVISOR = 14000
const LINK_DISTANCE = 140
const POINTER_FORCE = 180

export default function Particles({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isMobile = window.innerWidth < 768
      const particleLimit = isMobile ? 35 : MAX_PARTICLES
    let animationFrameId = 0
    let width = 0
    let height = 0
    let particles = []
    let pointer = { x: -9999, y: -9999 }
    let pointerActive = false
    let running = true
    let palette = null

    const randomBetween = (min, max) => min + Math.random() * (max - min)

    const readPalette = () => {
      const styles = window.getComputedStyle(document.documentElement)

      return {
        background: styles.getPropertyValue('--particle-bg').trim() || styles.getPropertyValue('--soft-bg').trim() || '#F0E5D8',
        dot: styles.getPropertyValue('--particle-dot').trim() || '46, 64, 82',
        line: styles.getPropertyValue('--particle-line').trim() || '200, 75, 49',
        halo: styles.getPropertyValue('--particle-halo').trim() || '240, 229, 216',
        dotOpacity: Number.parseFloat(styles.getPropertyValue('--particle-dot-opacity')) || 0.85,
        lineOpacity: Number.parseFloat(styles.getPropertyValue('--particle-line-opacity')) || 0.45,
        haloOpacity: Number.parseFloat(styles.getPropertyValue('--particle-halo-opacity')) || 0.18,
      }
    }

    const createParticles = () => {
      const area = width * height
      const targetCount = Math.max(
        isMobile ? 20 : 36,
        Math.min(particleLimit, Math.floor(area / DENSITY_DIVISOR))
      )

      particles = Array.from({ length: targetCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomBetween(-0.18, 0.18),
        vy: randomBetween(-0.12, 0.12),
        radius: randomBetween(1.5, 3),
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const drawFrame = (time) => {
      palette = palette || readPalette()

      context.clearRect(0, 0, width, height)
      context.fillStyle = palette.background
      context.fillRect(0, 0, width, height)

      const pointerRadius = pointerActive ? POINTER_FORCE : 0
      const pointerRadiusSquared = pointerRadius * pointerRadius

      for (const particle of particles) {
        particle.pulse += 0.018

        const driftX = Math.sin(time * 0.00016 + particle.pulse) * 0.14
        const driftY = Math.cos(time * 0.00013 + particle.pulse * 0.9) * 0.12

        particle.x += particle.vx + driftX
        particle.y += particle.vy + driftY

        if (particle.x < -12) particle.x = width + 12
        if (particle.x > width + 12) particle.x = -12
        if (particle.y < -12) particle.y = height + 12
        if (particle.y > height + 12) particle.y = -12

        if (pointerActive) {
          const dx = particle.x - pointer.x
          const dy = particle.y - pointer.y
          const distanceSquared = dx * dx + dy * dy

          if (distanceSquared < pointerRadiusSquared && distanceSquared > 0.001) {
            const distance = Math.sqrt(distanceSquared)
            const force = (1 - distance / pointerRadius) * 1.15
            particle.x += (dx / distance) * force * 1.2
            particle.y += (dy / distance) * force * 1.2
          }
        }
      }

      context.save()
      context.lineWidth = 1

      for (let i = 0; i < particles.length; i += 1) {
        const current = particles[i]

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j]
          const dx = current.x - other.x
          const dy = current.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > LINK_DISTANCE) continue

          const opacity = (1 - distance / LINK_DISTANCE) * palette.lineOpacity
          context.strokeStyle = `rgba(${palette.line}, ${opacity})`
          context.beginPath()
          context.moveTo(current.x, current.y)
          context.lineTo(other.x, other.y)
          context.stroke()
        }
      }

      context.restore()

      for (const particle of particles) {
        context.fillStyle = `rgba(${palette.halo}, ${palette.haloOpacity})`
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius + 2.4, 0, Math.PI * 2)
        context.fill()

        context.fillStyle = `rgba(${palette.dot}, ${palette.dotOpacity})`
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      }
    }

        let lastFrameTime = 0
        const FRAME_INTERVAL = 1000 / 30

        const animate = (time) => {
          if (!running) return

          if (time - lastFrameTime >= FRAME_INTERVAL) {
            lastFrameTime = time
            drawFrame(time)
          }

          animationFrameId = window.requestAnimationFrame(animate)
        }

    const resize = () => {
      const nextWidth = canvas.clientWidth || Math.max(1, window.innerWidth)
      const nextHeight = canvas.clientHeight || Math.max(1, window.innerHeight)

      if (!nextWidth || !nextHeight) return

      const scale = Math.min(window.devicePixelRatio || 1, 1.5)

      width = nextWidth
      height = nextHeight
      canvas.width = Math.floor(nextWidth * scale)
      canvas.height = Math.floor(nextHeight * scale)
      canvas.style.width = '100%'
      canvas.style.height = '100%'

      context.setTransform(scale, 0, 0, scale, 0, 0)
      palette = readPalette()
      createParticles()
      drawFrame(0)
    }

    const handlePointerMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY }
      pointerActive = true
    }

    const handlePointerLeave = () => {
      pointerActive = false
      pointer = { x: -9999, y: -9999 }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        running = false
        window.cancelAnimationFrame(animationFrameId)
        return
      }

      if (!running && !prefersReducedMotion.matches) {
        running = true
        animationFrameId = window.requestAnimationFrame(animate)
      }
    }

    const handleThemeMutation = () => {
      palette = readPalette()
      drawFrame(0)
    }

    resize()

    let resizeObserver = null
    let themeObserver = null

    if (typeof window.ResizeObserver === 'function') {
      resizeObserver = new window.ResizeObserver(() => resize())
      try {
        resizeObserver.observe(canvas)
      } catch (error) {
        window.addEventListener('resize', resize)
      }
    } else {
      window.addEventListener('resize', resize)
    }

    if (typeof window.MutationObserver === 'function') {
      themeObserver = new window.MutationObserver(handleThemeMutation)
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    if (prefersReducedMotion.matches) {
      drawFrame(0)
      return () => {
        if (resizeObserver) {
          try { resizeObserver.disconnect() } catch (error) {}
        } else {
          window.removeEventListener('resize', resize)
        }

        if (themeObserver) {
          try { themeObserver.disconnect() } catch (error) {}
        }

        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('pointerleave', handlePointerLeave)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }

    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      running = false

      if (resizeObserver) {
        try { resizeObserver.disconnect() } catch (error) {}
      } else {
        window.removeEventListener('resize', resize)
      }

      if (themeObserver) {
        try { themeObserver.disconnect() } catch (error) {}
      }

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none block ${className}`} />
}
