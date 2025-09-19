import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
