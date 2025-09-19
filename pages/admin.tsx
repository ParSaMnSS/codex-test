import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface User {
  id: number
  email: string
}

export default function Admin() {
  const [users, setUsers] = useState<User[]>([])
  const [showRedBox, setShowRedBox] = useState(false)
  const [saved, setSaved] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!saved) return
    const timeout = setTimeout(() => setSaved(false), 2000)
    return () => clearTimeout(timeout)
  }, [saved])

  useEffect(() => {
    fetch('/api/users?admin=true')
      .then((res) => {
        if (res.status === 401) {
          router.push('/login')
          return null
        }
        return res.json()
      })
      .then((data) => data && setUsers(data))

    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => setShowRedBox(!!data.showRedBox))
  }, [router])

  async function toggleRedBox() {
    const newValue = !showRedBox
    const res = await fetch('/api/settings?admin=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ showRedBox: newValue }),
    })
    if (res.ok) {
      setShowRedBox(newValue)
      setSaved(true)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">Admin Console</h1>
            <p className="mt-2 text-sm text-slate-300">
              Manage the ESS charging experience by updating announcements and monitoring registered users.
            </p>
          </div>
          {saved && (
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
              Saved
            </span>
          )}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Homepage Announcement</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Control the announcement chip displayed on the ESS Charging hero banner.
                </p>
              </div>
              <button
                type="button"
                onClick={toggleRedBox}
                aria-pressed={showRedBox}
                className={`relative inline-flex h-10 w-20 items-center rounded-full border border-white/15 bg-white/10 p-1 transition ${
                  showRedBox ? 'border-sky-400/40 bg-sky-500/10' : ''
                }`}
              >
                <span
                  className={`h-8 w-8 transform rounded-full bg-slate-500 transition ${
                    showRedBox ? 'translate-x-10 bg-sky-400' : 'translate-x-0'
                  }`}
                />
                <span className="sr-only">Toggle announcement</span>
              </button>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p>
                {showRedBox
                  ? 'The announcement is visible to visitors. Share updates about demonstrations, deployments, or promotions.'
                  : 'The announcement is currently hidden. Enable it to highlight time-sensitive information on the landing page.'}
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Registered Users</h2>
            <p className="mt-2 text-sm text-slate-300">
              View accounts that can access administrative tools.
            </p>
            <ul className="mt-6 space-y-3">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                >
                  <span>{user.email}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">User</span>
                </li>
              ))}
              {users.length === 0 && (
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-sm text-slate-400">
                  No registered users yet.
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
