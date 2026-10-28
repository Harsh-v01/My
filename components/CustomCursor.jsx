import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return undefined

    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const move = (event) => setPos({ x: event.clientX, y: event.clientY })
    const over = (event) => {
      const target = event.target
      setHover(Boolean(target.closest('a, button, [role="button"], input, textarea, select, label')))
    }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      className={`cursor-dot ${hover ? 'is-hover' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  )
}
