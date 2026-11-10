import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-navy px-5 pt-20 text-center">
      <div>
        <p className="font-display text-7xl font-semibold text-gold sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          The page you are looking for may have moved. Let us guide you back to the experience.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-gold">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
