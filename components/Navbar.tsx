import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 shadow">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 font-semibold">
          <li>
            <Link href="/" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">
              Log In
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:underline">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
