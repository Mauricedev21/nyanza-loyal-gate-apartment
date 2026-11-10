import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, Sparkles, ShieldCheck, Leaf, Users, Award } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { assets, site, whatsappLink, whatsappMessages } from '@/lib/site'

const values = [
  { icon: HeartHandshake, title: 'Warm Hospitality', text: 'Guests are welcomed personally and cared for with genuine warmth throughout their visit.' },
  { icon: Sparkles, title: 'Attention to Detail', text: 'From table settings to room preparation, the small things are never overlooked.' },
  { icon: ShieldCheck, title: 'Trust & Reliability', text: 'Clear communication, dependable service and spaces kept to a high standard.' },
  { icon: Leaf, title: 'Local Roots', text: 'Proudly rooted in Nyanza, Rwanda, and shaped by the warmth of our community.' },
  { icon: Users, title: 'People First', text: 'A team that listens, anticipates and adapts to make every occasion feel personal.' },
  { icon: Award, title: 'Quiet Excellence', text: 'A considered standard of quality across accommodation, dining and events.' },
]

const offerings = [
  { title: 'Accommodation', text: 'Comfortable rooms and suites for restful stays in Nyanza.' },
  { title: 'Dining', text: 'A restaurant and bar serving Rwandan and international favourites.' },
  { title: 'Catering', text: 'Inside and outside catering for weddings, conferences and private events.' },
  { title: 'Events', text: 'Weddings, proposals, birthdays, civil ceremonies and conferences.' },
  { title: 'Conference', text: 'A well-appointed hall for meetings, seminars and corporate gatherings.' },
  { title: 'Wellness', text: 'Sauna and massage to help you unwind and recharge.' },
]

export default function About() {
  useSeo(
    'About Nyanza Royal Gate Apartment',
    'Nyanza Royal Gate Apartment brings together comfortable accommodation, thoughtful dining and beautifully run events — all delivered with the warmth of Rwandan hospitality.',
    '/assets/rooms'
  )

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A refined hospitality address in Nyanza"
        subtitle="Nyanza Royal Gate Apartment brings together comfortable accommodation, thoughtful dining and beautifully run events — all delivered with the warmth of Rwandan hospitality."
        image={assets.rooms}
        crumb="About"
      />

      {/* Intro */}
      <section className="container-lux grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img src={assets.conference} alt="Conference and event space at Nyanza Royal Gate" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            <img src={assets.weddings} alt="Wedding preparation at Nyanza Royal Gate" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="Hospitality with intention"
            description="We are a hospitality, accommodation, catering and events establishment serving guests in Nyanza, Rwanda. Our approach is simple: create spaces that feel calm and considered, serve food that is beautifully presented, and run events with precision and care."
          />
          <p className="mt-4 text-sm leading-relaxed text-navy/65">
            Under one roof, guests can stay, dine, celebrate and meet — while our RGA Catering team extends the
            same standard of service beyond our walls, to venues across the region. The result is a complete
            hospitality experience that is easy to trust.
          </p>
          <p className="mt-4 font-display text-xl italic text-gold">{site.tagline}</p>
          <Link to="/accommodation" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-navy">
            Plan your stay
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* Official brand mark */}
      <section className="bg-navy py-14 md:py-16">
        <div className="container-lux flex flex-col items-center gap-5 text-center">
          <Reveal>
            <img
              src={assets.logo}
              alt="Nyanza Royal Gate Apartment official logo"
              className="mx-auto h-24 w-auto max-w-full rounded-2xl object-contain ring-1 ring-white/10 sm:h-28"
              loading="lazy"
            />
            <p className="mt-5 font-display text-xl italic text-gold-light">{site.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-deep/60 py-20 md:py-28">
        <div className="container-lux">
          <Reveal>
            <SectionHeading
              eyebrow="What Guides Us"
              title="Values you can feel in every detail"
              description="Our standards are not written on the wall — they are experienced in how you are welcomed, served and looked after."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={index * 70}>
                  <div className="card h-full p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-navy">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{value.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="container-lux py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="One Destination"
            title="Everything under one roof"
            description="Stay, dine, meet and celebrate without leaving the address — or let us bring the experience to you."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="flex h-full gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/60">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container-lux flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Let’s make your visit memorable</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Tell us what you need and our team will help you plan the perfect stay or occasion.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-gold">
                Contact Us
              </Link>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
