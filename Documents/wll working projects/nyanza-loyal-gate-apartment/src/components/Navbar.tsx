import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { navItems, site } from '@/lib/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid ? 'bg-navy/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-lux flex h-20 items-center justify-between gap-4">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <img
            src="/assets/logo.jpg"
            alt={`${site.name} logo`}
            className="h-11 w-11 shrink-0 rounded-xl object-cover object-center ring-1 ring-white/10"
            width={44}
            height={44}
          />
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] font-semibold tracking-[0.14em] text-white sm:text-[1.15rem]">
              NYANZA ROYAL GATE
            </span>
            <span className="block text-[0.62rem] font-medium uppercase tracking-[0.42em] text-gold">
              Apartment
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-gold-light xl:flex"
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link to="/accommodation" className="btn-gold hidden !px-5 !py-2.5 text-[0.8rem] sm:inline-flex">
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-navy transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-lux flex flex-col gap-1 py-5" aria-label="Mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? 'bg-white/5 text-gold-light' : 'text-white/85 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4 sm:hidden">
            <Link to="/accommodation" onClick={() => setOpen(false)} className="btn-gold w-full">
              Book Now
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
