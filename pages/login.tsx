import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push('/admin')
    } else {
      const data = await res.json().catch(() => null)
      setError(data?.message || 'Invalid credentials')
    }

    setLoading(false)
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-10 backdrop-blur">
        <h1 className="text-3xl font-semibold text-white">Log In</h1>
        <p className="mt-3 text-sm text-slate-300">
          Access the admin console to configure announcements and monitor user sign-ups.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
          </div>
          {error && <p className="text-sm text-rose-300">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-sky-500 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-600"
          >
            {loading ? 'Signing in…' : 'Log In'}
          </button>
        </form>
        <p className="mt-8 text-sm text-slate-400">
          Need an account?{' '}
          <Link href="/signup" className="text-sky-300 hover:text-sky-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
