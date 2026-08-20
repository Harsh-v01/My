import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { useAdminAuth } from '../../lib/useAdminAuth'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user, checking } = useAdminAuth()

  useEffect(() => {
    if (!checking && user) {
      router.replace('/admin')
    }
  }, [checking, user, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/admin')
    } catch (err) {
      setError('Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--soft-bg,#F0E5D8)] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-[color:var(--border,#e7e5e4)] bg-[var(--surface,#fff)] p-8 shadow-lg"
      >
        <h1 className="mb-1 font-display text-2xl font-light text-[var(--text,#292524)]">
          Admin Login
        </h1>
        <p className="mb-6 font-body text-sm text-[var(--text-soft,#78716c)]">
          Portfolio content management
        </p>

        <label className="mb-1 block font-body text-xs text-[var(--text-muted,#57534e)]">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
          className="mb-4 w-full rounded-lg border border-[color:var(--border,#e7e5e4)] bg-transparent px-3 py-2 font-body text-sm text-[var(--text,#292524)] outline-none focus:border-[var(--accent,#C84B31)]"
        />

        <label className="mb-1 block font-body text-xs text-[var(--text-muted,#57534e)]">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-6 w-full rounded-lg border border-[color:var(--border,#e7e5e4)] bg-transparent px-3 py-2 font-body text-sm text-[var(--text,#292524)] outline-none focus:border-[var(--accent,#C84B31)]"
        />

        {error && <p className="mb-4 font-body text-xs text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[var(--text,#292524)] px-5 py-3 font-body text-sm font-medium text-[var(--surface,#fff)] transition-colors hover:bg-[var(--accent,#C84B31)] disabled:opacity-60"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
