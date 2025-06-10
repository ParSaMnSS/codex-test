import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
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
    </nav>
  )
}
