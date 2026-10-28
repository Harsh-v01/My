import { useEffect, useRef } from 'react'

/**
 * Lightweight sparse lattice background.
 * Far fewer nodes than the old dense network — low CPU/GPU cost.
 */
export default function Particles({ className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let width = 0
    let height = 0
    let dpr = 1

    const NODE_COUNT = 28
    const CONNECT_DIST = 140
    const SPEED = 0.18

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function initNodes() {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: Math.random() * 1.2 + 0.6,
      }))
    }

    function getColors() {
      const styles = getComputedStyle(document.documentElement)
      const dot = styles.getPropertyValue('--particle-dot').trim() || '155, 156, 163'
      const line = styles.getPropertyValue('--particle-line').trim() || '255, 90, 46'
      const dotOp = parseFloat(styles.getPropertyValue('--particle-dot-opacity')) || 0.35
      const lineOp = parseFloat(styles.getPropertyValue('--particle-line-opacity')) || 0.12
      return { dot, line, dotOp, lineOp }
    }

    function draw() {
      if (!width || !height) return
      const { dot, line, dotOp, lineOp } = getColors()
      ctx.clearRect(0, 0, width, height)

      const nodes = nodesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        n.x = Math.max(0, Math.min(width, n.x))
        n.y = Math.max(0, Math.min(height, n.y))

        const dx = mx - n.x
        const dy = my - n.y
        const dist = Math.hypot(dx, dy)
        if (dist < 120 && dist > 0) {
          n.vx -= (dx / dist) * 0.012
          n.vy -= (dy / dist) * 0.012
        }
        n.vx *= 0.995
        n.vy *= 0.995
        const speed = Math.hypot(n.vx, n.vy)
        if (speed < 0.05) {
          n.vx += (Math.random() - 0.5) * 0.02
          n.vy += (Math.random() - 0.5) * 0.02
        }
      }

      ctx.lineWidth = 0.7
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * lineOp
            ctx.strokeStyle = `rgba(${line}, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${dot}, ${dotOp})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function onLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    initNodes()
    draw()

    const onResize = () => {
      resize()
      initNodes()
    }
    window.addEventListener('resize', onResize)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    const onVis = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      } else {
        draw()
      }
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      aria-hidden="true"
    />
  )
}