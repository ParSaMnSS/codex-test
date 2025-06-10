<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> origin/main
import { useEffect, useState } from 'react'

export default function Home() {
  const [showRedBox, setShowRedBox] = useState(false)
<<<<<<< HEAD
  const [modern, setModern] = useState(true)
=======
>>>>>>> origin/main

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
<<<<<<< HEAD
      .then((data) => {
        setShowRedBox(!!data.showRedBox)
        setModern(data.modernDesign !== false)
      })
      .catch(() => {
        setShowRedBox(false)
        setModern(true)
      })
  }, [])

  return (
    <div className="space-y-8">
      <section
        className={
          modern
            ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20'
            : 'bg-gray-100 py-10'
        }
      >
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="max-w-2xl mx-auto">
            This is a simple template for an about page. You can describe your
            company or project here.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl space-y-4">
        <p className="text-gray-700">Use the navigation links above to sign up or log in.</p>
        {showRedBox && (
          <div className="p-4 bg-red-500 text-white">This red box is configurable by the admin.</div>
        )}
      </section>
    </div>
  )
}
=======
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
>>>>>>> origin/main
