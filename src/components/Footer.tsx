import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { InstagramIcon, YoutubeIcon } from './BrandIcons'
import { navItems, site, whatsappLink, whatsappMessages } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/logo.jpg"
              alt={`${site.name} logo`}
              className="h-12 w-12 rounded-xl object-cover object-center ring-1 ring-white/10"
              width={48}
              height={48}
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-[0.12em] text-white">
                NYANZA ROYAL GATE
              </span>
              <span className="block text-[0.62rem] uppercase tracking-[0.42em] text-gold">Apartment</span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            Luxury accommodation, exceptional catering and unforgettable events in Nyanza, Rwanda.
            <span className="mt-2 block font-display text-lg italic text-gold">{site.tagline}</span>
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on Instagram`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on YouTube`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/60 transition-colors hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/60">
            <li>VIP Accommodation</li>
            <li>Conference Hall</li>
            <li>Restaurant &amp; Bar</li>
            <li>Outside &amp; Online Catering</li>
            <li>Weddings &amp; Events</li>
            <li>Sauna &amp; Massage</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} className="flex items-start gap-3 text-cream/70 transition-colors hover:text-gold-light">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/70 transition-colors hover:text-gold-light"
              >
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center text-gold" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.5-5.8c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2a7 7 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
                  </svg>
                </span>
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 break-all text-cream/70 transition-colors hover:text-gold-light">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-cream/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {site.location}
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/70 transition-colors hover:text-gold-light"
              >
                <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-cream/45 sm:flex-row sm:text-left">
          <p>Powered by Maurice — All Rights Reserved © Copyright</p>
          <p className="tracking-wide">
            Developer contact: <a href="tel:0786931313" className="text-cream/70 transition-colors hover:text-gold">0786931313</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
