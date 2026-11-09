import { Link } from 'react-router-dom'
import { BedDouble, Bath, Wifi, Tv, Coffee, Snowflake, ArrowRight, Phone } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import InquiryForm from '@/components/InquiryForm'
import { assets, site, whatsappLink, whatsappMessages } from '@/lib/site'

const amenities = [
  { icon: BedDouble, label: 'Premium bedding' },
  { icon: Bath, label: 'En-suite bathrooms' },
  { icon: Wifi, label: 'High-speed internet' },
  { icon: Tv, label: 'Flat-screen TV' },
  { icon: Coffee, label: 'Tea & coffee facilities' },
  { icon: Snowflake, label: 'Air conditioning' },
]

export default function Accommodation() {
  return (
    <>
      <PageHero
        eyebrow="Stay With Us"
        title="Accommodation"
        subtitle="Comfortable, considered rooms and suites designed for restful stays in Nyanza, Rwanda — whether you visit for business or leisure."
        image={assets.rooms}
        crumb="Accommodation"
      />

      {/* Intro */}
      <section className="container-lux grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Rest Easy"
            title="A calm, elegant place to return to"
            description="Our accommodation is built around your comfort: quality bedding, thoughtfully arranged interiors and the amenities that make a stay feel effortless. Every room is prepared with care before you arrive."
          />
          <p className="mt-4 text-sm leading-relaxed text-navy/65">
            To keep availability accurate, we confirm room options and rates personally. Share your dates below
            and our team will respond with the best available option for your visit.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="btn-gold">
              Make an Inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(whatsappMessages.accommodation)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Booking
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            <img src={assets.rooms} alt="Comfortable guest room at Nyanza Royal Gate" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            <img src={assets.massage} alt="Wellness and massage service for guests" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* Amenities */}
      <section className="bg-cream-deep/60 py-16 md:py-20">
        <div className="container-lux">
          <Reveal>
            <SectionHeading eyebrow="In Every Room" title="Thoughtful amenities" />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {amenities.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={index * 60}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-navy/75">{item.label}</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="container-lux py-16 md:py-20">
        <Reveal>
          <SectionHeading eyebrow="A Closer Look" title="Spaces made for slowing down" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { src: assets.rooms, alt: 'Guest room interior at Nyanza Royal Gate' },
            { src: assets.massage, alt: 'Sauna and massage wellness service' },
            { src: assets.conference, alt: 'Conference space for business stays' },
          ].map((item, index) => (
            <Reveal key={item.alt} delay={index * 80}>
              <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking form */}
      <section id="booking" className="scroll-mt-24 bg-navy py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Booking Inquiry"
              title="Request your stay"
              description="Complete the form and our team will confirm availability and rates. Prefer to talk? Call or message us directly."
            />
            <div className="mt-8 space-y-4 text-sm text-white/75">
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-3 transition-colors hover:text-gold-light">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink(whatsappMessages.accommodation)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-gold-light"
              >
                <span className="grid h-4 w-4 place-items-center text-gold" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.2c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2a7 7 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
                  </svg>
                </span>
                WhatsApp booking
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/40">
              Rates are confirmed on request. We do not publish fixed prices online so that you always receive the
              most accurate option for your dates.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <InquiryForm
              kind="accommodation"
              submitLabel="Send Booking Request"
              intro="Hello Nyanza Royal Gate Apartment, I would like to make an accommodation booking inquiry."
              fields={[
                { name: 'fullName', label: 'Full Name', required: true, placeholder: 'Your full name' },
                { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: 'e.g. 0788 000 000' },
                { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com', full: true },
                { name: 'checkIn', label: 'Check-in Date', type: 'date', required: true },
                { name: 'checkOut', label: 'Check-out Date', type: 'date', required: true },
                { name: 'guests', label: 'Number of Guests', type: 'number', required: true, min: 1, placeholder: 'e.g. 2' },
                { name: 'message', label: 'Additional Message', type: 'textarea', placeholder: 'Any preferences or special requests?' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="container-lux py-16 text-center md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Looking to host an event as well?</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy/60">
            Combine your stay with a celebration or conference — our team will coordinate everything together.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/events" className="btn-dark">
              Explore Events
            </Link>
            <Link to="/catering" className="btn-ghost">
              Explore Catering
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
