import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface User {
  id: number
  email: string
}

export default function Admin() {
  const [users, setUsers] = useState<User[]>([])
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
  }, [router])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <ul className="list-disc pl-5">
        {users.map((u) => (
          <li key={u.id}>{u.email}</li>
        ))}
      </ul>
    </div>
  )
}
