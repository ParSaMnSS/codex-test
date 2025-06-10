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
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>
        This is a simple template for an about page. You can describe your
        company or project here.
      </p>
      <p className="text-sm text-gray-600">
        Use the navigation links above to sign up or log in.
      </p>
      {showRedBox && (
        <div className="p-4 bg-red-500 text-white">This red box is configurable by the admin.</div>
      )}
    </div>
  )
}
