import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <div className="space-x-4">
        <Link href="/signup" className="text-blue-600 underline">Sign Up</Link>
        <Link href="/login" className="text-blue-600 underline">Log In</Link>
        <Link href="/admin" className="text-blue-600 underline">Admin</Link>
      </div>
    </div>
  )
}
