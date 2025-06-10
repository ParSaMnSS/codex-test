<<<<<<< HEAD
import { useState, useEffect } from 'react'
=======
import { useState } from 'react'
>>>>>>> origin/main
import { useRouter } from 'next/router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
<<<<<<< HEAD
  const [modern, setModern] = useState(true)

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => setModern(data.modernDesign !== false))
      .catch(() => setModern(true))
  }, [])
=======
>>>>>>> origin/main

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) {
      router.push('/login')
    } else {
<<<<<<< HEAD
      const data = await res.json().catch(() => null)
      alert(data?.message || 'Signup failed')
=======
      alert('Signup failed')
>>>>>>> origin/main
    }
  }

  return (
<<<<<<< HEAD
    <div
      className={
        modern
          ? 'p-8 max-w-md mx-auto bg-white shadow rounded'
          : 'p-8 max-w-md mx-auto'
      }
    >
=======
    <div className="p-8 max-w-md mx-auto">
>>>>>>> origin/main
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Sign Up</button>
      </form>
    </div>
  )
}
