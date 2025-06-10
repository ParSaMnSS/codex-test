import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showRedBox, setShowRedBox] = useState(false)

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => setShowRedBox(!!data.showRedBox))
  }, [])

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <div className="space-x-4 mb-6">
        <Link href="/signup" className="text-blue-600 underline">Sign Up</Link>
        <Link href="/login" className="text-blue-600 underline">Log In</Link>
        <Link href="/admin" className="text-blue-600 underline">Admin</Link>
      </div>
      
      <div className="pt-4 border-t">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-2">
          This is a simple template for an about page. You can describe your
          company or project here.
        </p>
        {showRedBox && (
          <div className="p-4 bg-red-500 text-white mt-4">
            This red box is configurable by the admin
          </div>
        )}
      </div>
    </div>
  )
}