import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#v2x', label: 'V2H & V2B' },
  { href: '#ess-charging', label: 'ESS Charging' },
  { href: '#support', label: 'Support & Services' },
  { href: '#about', label: 'About Us' },
]

const accountLinks = [
  { href: '/signup', label: 'Create Account' },
  { href: '/login', label: 'Log In' },
  { href: '/admin', label: 'Admin' },
]

function getLinkClasses(href: string, pathname: string) {
  const base =
    'text-sm font-medium tracking-wide text-slate-300 transition hover:text-white'
  const isHome = href === '/' && pathname === '/'
  const isEss = href === '#ess-charging' && pathname === '/'
  return `${base} ${isHome || isEss ? 'text-white' : ''}`
}

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on('routeChangeComplete', close)
    return () => {
      router.events.off('routeChangeComplete', close)
    }
  }, [router])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/20 text-lg font-semibold text-sky-300">
            IP
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Infy Power
            </span>
            <span className="text-lg font-semibold">Energy Storage</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClasses(link.href, router.pathname)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            {accountLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="rounded-full border border-sky-500/60 bg-sky-500/10 px-6 py-2 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/20"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
            >
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950/95 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClasses(link.href, router.pathname)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 text-sm uppercase tracking-[0.3em] text-slate-400">
            {accountLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-sky-500/60 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-200"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
