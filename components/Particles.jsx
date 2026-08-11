"use client";

import { useEffect, useRef } from 'react'

const MAX_PARTICLES = 90
const DENSITY_DIVISOR = 14000
const LINK_DISTANCE = 140
const POINTER_FORCE = 180
const DOT_COLOR = '46, 64, 82'
const LINE_COLOR = '200, 75, 49'

export default function Particles({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrameId = 0
    let width = 0
    let height = 0
    let particles = []
    let pointer = { x: -9999, y: -9999 }
    let pointerActive = false
    let running = true

    const randomBetween = (min, max) => min + Math.random() * (max - min)

    const createParticles = () => {
      const area = width * height
      const targetCount = Math.max(36, Math.min(MAX_PARTICLES, Math.floor(area / DENSITY_DIVISOR)))

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
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#F0E5D8'
      ctx.fillRect(0, 0, width, height)

      const pointerRadius = pointerActive ? POINTER_FORCE : 0
      const pointerRadiusSq = pointerRadius * pointerRadius

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
          const distanceSq = dx * dx + dy * dy

          if (distanceSq < pointerRadiusSq && distanceSq > 0.001) {
            const distance = Math.sqrt(distanceSq)
            const force = (1 - distance / pointerRadius) * 1.15
            particle.x += (dx / distance) * force * 1.2
            particle.y += (dy / distance) * force * 1.2
          }
        }
      }

      ctx.save()
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i += 1) {
        const current = particles[i]

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j]
          const dx = current.x - other.x
          const dy = current.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > LINK_DISTANCE) continue

          const opacity = (1 - distance / LINK_DISTANCE) * 0.45
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(current.x, current.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      }

      ctx.restore()

      for (const particle of particles) {
        ctx.fillStyle = 'rgba(242, 236, 225, 0.18)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius + 2.4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(${DOT_COLOR}, 0.85)`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = (time) => {
      if (!running) return
      drawFrame(time)
      animationFrameId = window.requestAnimationFrame(animate)
    }

    const resize = () => {
      const nextWidth = canvas.clientWidth || Math.max(1, window.innerWidth)
      const nextHeight = canvas.clientHeight || Math.max(1, window.innerHeight)

      // Guard against transient zero measurements (common on first paint)
      if (!nextWidth || !nextHeight) return

      const scale = Math.min(window.devicePixelRatio || 1, 2)

      width = nextWidth
      height = nextHeight

      canvas.width = Math.floor(nextWidth * scale)
      canvas.height = Math.floor(nextHeight * scale)
      canvas.style.width = '100%'
      canvas.style.height = '100%'

      ctx.setTransform(scale, 0, 0, scale, 0, 0)
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

      if (!running) {
        running = true
        animationFrameId = window.requestAnimationFrame(animate)
      }
    }

    // Run an initial resize and then observe the canvas for size changes.
    // ResizeObserver fires immediately on observe() with the current size
    // (useful for layout shifts like webfont loading on Vercel first paint).
    resize()

    if (prefersReducedMotion.matches) {
      drawFrame(0)
      return undefined
    }

    let resizeObserver = null
    if (typeof window.ResizeObserver === 'function') {
      resizeObserver = new window.ResizeObserver(() => resize())
      try {
        resizeObserver.observe(canvas)
      } catch (e) {
        // Fallback to window resize if observe fails for any reason
        window.addEventListener('resize', resize)
      }
    } else {
      // Older browsers: fall back to window resize
      window.addEventListener('resize', resize)
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      running = false
      if (resizeObserver) {
        try { resizeObserver.disconnect() } catch (e) { /* ignore */ }
      } else {
        window.removeEventListener('resize', resize)
      }
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block ${className}`}
    />
  )
}