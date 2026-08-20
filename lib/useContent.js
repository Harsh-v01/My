import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'
import { defaultContent } from './defaultContent'

// Shallow-per-key merge: for each top-level section (hero, about, projects...)
// if Firestore has that section, it fully replaces the default section.
// This keeps behaviour predictable — the admin panel always saves a whole
// section at a time.
function mergeContent(base, override) {
  if (!override) return base
  const merged = { ...base }
  for (const key of Object.keys(override)) {
    if (override[key] !== undefined) {
      merged[key] = override[key]
    }
  }
  return merged
}

export function useContent() {
  const [content, setContent] = useState(defaultContent)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let active = true

    getDoc(doc(db, 'content', 'site'))
      .then((snap) => {
        if (!active) return
        if (snap.exists()) {
          setContent(mergeContent(defaultContent, snap.data()))
        }
        setLoaded(true)
      })
      .catch(() => {
        // Firebase not configured yet, offline, or rules block reads —
        // silently fall back to default content so the site never breaks.
        if (active) setLoaded(true)
      })

    return () => {
      active = false
    }
  }, [])

  return { content, loaded }
}
