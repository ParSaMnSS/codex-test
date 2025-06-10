import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface User {
  id: number
  email: string
}

export default function Admin() {
  const [users, setUsers] = useState<User[]>([])
  const [showRedBox, setShowRedBox] = useState(false)
  const [modern, setModern] = useState(true)
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
      .then((data) => {
        setShowRedBox(!!data.showRedBox)
        setModern(data.modernDesign !== false)
      })
  }, [router])

  async function updateSetting(key: string, value: boolean) {
    const res = await fetch('/api/settings?admin=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [key]: value }),
    })
    if (res.ok) {
      if (key === 'showRedBox') setShowRedBox(value)
      if (key === 'modernDesign') setModern(value)
      setSaved(true)
    } else {
      const data = await res.json().catch(() => null)
      alert(data?.message || 'Failed to update setting')
    }
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Admin</h1>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showRedBox}
            onChange={() => updateSetting('showRedBox', !showRedBox)}
          />
          <span>Show red box on About page</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={modern}
            onChange={() => updateSetting('modernDesign', !modern)}
          />
          <span>Enable modern design</span>
        </label>
        {saved && <span className="text-green-600">Saved!</span>}
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
