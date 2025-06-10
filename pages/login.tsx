import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [modern, setModern] = useState(true)

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => setModern(data.modernDesign !== false))
      .catch(() => setModern(true))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div
      className={
        modern
          ? 'p-8 max-w-md mx-auto bg-white shadow rounded'
          : 'p-8 max-w-md mx-auto'
      }
    >
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Log In</button>
      </form>
    </div>
  )
}
