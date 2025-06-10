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
    const newVal = !showRedBox
    const res = await fetch('/api/settings?admin=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ showRedBox: newVal }),
    })
    if (res.ok) {
      setShowRedBox(newVal)
      setSaved(true)
    } else {
      const data = await res.json().catch(() => null)
      alert(data?.message || 'Failed to update setting')
    }
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Admin</h1>
      <div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={showRedBox} onChange={toggleRedBox} />
          <span>Show red box on About page</span>
        </label>
        {saved && <span className="ml-2 text-green-600">Saved!</span>}
      </div>
      <h2 className="text-xl font-semibold">Users</h2>
      <ul className="list-disc pl-5">
        {users.map((u) => (
          <li key={u.id}>{u.email}</li>
        ))}
      </ul>
    </div>
  )
}