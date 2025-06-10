import { useEffect, useState } from 'react'

export default function Home() {
  const [showRedBox, setShowRedBox] = useState(false)
  const [modern, setModern] = useState(true)

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
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
