import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowRight,
  BedDouble,
  Building2,
  UtensilsCrossed,
  CalendarHeart,
  Heart,
  Sparkles,
  MapPin,
  ShieldCheck,
  ConciergeBell,
  Star,
} from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { assets, galleryItems, serviceList, site, whatsappLink, whatsappMessages } from '@/lib/site'

// SEO useEffect - sets page-specific metadata
const useSeo = (title: string, description: string, image?: string) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Nyanza Royal Gate Apartment`

    // Update meta description
    const existingDesc = document.querySelector('meta[name="description"]')
    if (existingDesc) {
      existingDesc.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }

    // Update Open Graph tags if image provided
    if (image) {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDesc = document.querySelector('meta[property="og:description"]')
      const ogImg = document.querySelector('meta[property="og:image"]')
      if (ogTitle) ogTitle.setAttribute('content', title)
      if (ogDesc) ogDesc.setAttribute('content', description)
      if (ogImg) ogImg.setAttribute('content', image)

      // Update Twitter tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      const twitterDesc = document.querySelector('meta[name="twitter:description"]')
      const twitterImg = document.querySelector('meta[name="twitter:image"]')
      if (twitterTitle) twitterTitle.setAttribute('content', title)
      if (twitterDesc) twitterDesc.setAttribute('content', description)
      if (twitterImg) twitterImg.setAttribute('content', image)
    }
  }, [title, description, image])
}

useSeo(
    'Nyanza Royal Gate Apartment',
    'Luxury accommodation, exceptional catering and unforgettable events in Nyanza, Rwanda. Taste, Class, Perfection.',
    '/assets/rooms.jpg'
  )

const featuredServices = [
  { ...serviceList[0], icon: BedDouble },
  { ...serviceList[1], icon: Building2 },
  { ...serviceList[2], icon: UtensilsCrossed },
  { ...serviceList[5], icon: CalendarHeart },
  { ...serviceList[7], icon: Heart },
  { ...serviceList[6], icon: Sparkles },
]

const promises = [
  { icon: ConciergeBell, title: 'Attentive Service', text: 'A dedicated team that anticipates your needs with warmth and discretion.' },
  { icon: ShieldCheck, title: 'Reliable Standards', text: 'Clean, secure and well-kept spaces you can trust throughout your stay.' },
  { icon: Star, title: 'Refined Comfort', text: 'Considered interiors and quality amenities designed around your ease.' },
  { icon: MapPin, title: 'Heart of Nyanza', text: 'Conveniently located in Nyanza, Rwanda, close to the region’s landmarks.' },
]

export default function Home() {
  const galleryPreview = galleryItems.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
        <img
          src={assets.rooms}
          alt="Guest accommodation at Nyanza Royal Gate Apartment"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 hero-vignette" />

        <div className="container-lux w-full pb-16 pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-4">
                <img
                  src={assets.logo}
                  alt={`${site.name} logo`}
                  className="h-14 w-14 rounded-xl object-cover object-center ring-1 ring-white/20"
                  width={56}
                  height={56}
                />
                <span className="eyebrow text-gold-light">
                  <span className="h-px w-8 bg-current" />
                  {site.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 font-display text-sm uppercase tracking-[0.45em] text-white/70">Welcome to</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.02] text-white text-balance sm:text-6xl lg:text-7xl">
                Nyanza Royal Gate Apartment
              </h1>
              <p className="mt-4 font-display text-2xl italic text-gold-light sm:text-3xl">{site.tagline}</p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                A refined address for luxury accommodation, exceptional catering and memorable events in the
                heart of Nyanza, Rwanda. Arrive as a guest, leave with a story worth telling.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/accommodation" className="btn-gold">
                  Book Accommodation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
                <a
                  href={whatsappLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
          <span className="flex flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-white/50">
            Scroll
            <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
          </span>
        </div>
      </section>

      {/* Welcome / About teaser */}
      <section className="container-lux grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal className="order-2 md:order-1">
          <div className="relative">
            <img
              src={assets.conference}
              alt="Conference and event space at Nyanza Royal Gate"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_70px_-40px_rgba(7,20,38,0.7)]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-xl bg-navy p-5 text-cream shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold text-gold-light">RGA</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">Hospitality &amp; Catering</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Welcome"
              title="Where comfort meets quiet elegance"
              description="Nyanza Royal Gate Apartment brings together comfortable accommodation, fine dining and beautifully run events under one roof. Every detail — from the welcome at reception to the last course of a celebration — is delivered with care."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Luxury rooms & suites',
                'Restaurant & bar',
                'Conference facilities',
                'Weddings & celebrations',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm font-medium text-navy/80">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-navy">
              Discover our story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-cream-deep/60 py-20 md:py-28">
        <div className="container-lux">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="A complete hospitality experience"
              description="From a restful night’s stay to a celebration designed around you, our services cover every part of your visit."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={index * 80}>
                  <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_18px_50px_-35px_rgba(7,20,38,0.6)] transition-transform duration-300 hover:-translate-y-1">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-navy">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{service.description}</p>
                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-navy"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Link to="/services" className="btn-dark">
                View All Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature split: Catering */}
      <section className="container-lux grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="RGA Catering"
            title="Taste, Class, Perfection — on every plate"
            description="Our catering team brings restaurant-quality food to your venue. Whether an intimate dinner, a wedding feast or a conference lunch, we plan menus that look as beautiful as they taste."
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/catering" className="btn-gold">
              Explore Catering
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink(whatsappMessages.catering)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Request a Quote
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={assets.weddings}
            alt="Wedding and event preparation by RGA Catering"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_70px_-45px_rgba(7,20,38,0.8)]"
            loading="lazy"
          />
        </Reveal>
      </section>

      {/* Signature split: Events */}
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="container-lux grid items-center gap-12 md:grid-cols-2">
          <Reveal delay={100} className="order-2 md:order-1">
            <img
              src={assets.conference}
              alt="Conference and celebration space"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <SectionHeading
              align="left"
              light
              eyebrow="Celebrations & Business"
              title="Occasions, beautifully handled"
              description="Weddings, proposals, birthdays, civil ceremonies and conferences — our team plans, styles and coordinates every detail so you can be fully present for the moment."
            />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/events" className="btn-gold">
                Plan an Event
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink(whatsappMessages.event)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Speak to Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand promise */}
      <section className="container-lux py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The RGA Promise"
            title="Hospitality built on trust"
            description="We do the quiet work behind a great stay and a memorable event — so that everything simply feels effortless."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream-deep/60 py-20 md:py-28">
        <div className="container-lux">
          <Reveal>
            <SectionHeading
              eyebrow="A Glimpse Inside"
              title="Step into the experience"
              description="A look at the spaces, plates and celebrations that define Nyanza Royal Gate."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {galleryPreview.map((item, index) => (
              <Reveal key={item.src} delay={index * 60}>
                <Link to="/gallery" className="group relative block overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/30" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.category}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Link to="/gallery" className="btn-ghost">
                View Full Gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img src={assets.rooms} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/60" />
        <div className="container-lux py-20 text-center md:py-24">
          <Reveal>
            <span className="eyebrow text-gold-light">
              <span className="h-px w-6 bg-current" />
              Reserve Your Stay
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-white text-balance sm:text-4xl md:text-5xl">
              Your table, your suite, your celebration — ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Send us your dates and requirements. Our team will confirm availability and help you plan the
              details.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/accommodation" className="btn-gold">
                Book Accommodation
              </Link>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
