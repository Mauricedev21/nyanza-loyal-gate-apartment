import {
  BedDouble,
  Building2,
  UtensilsCrossed,
  Truck,
  Laptop,
  CalendarHeart,
  Sparkles,
  Heart,
  Gem,
  CakeSlice,
  ScrollText,
  Handshake,
  Sparkle,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { assets, serviceList, whatsappLink, whatsappMessages } from '@/lib/site'

const iconMap: Record<string, LucideIcon> = {
  BedDouble,
  Building2,
  UtensilsCrossed,
  Truck,
  Laptop,
  CalendarHeart,
  Sparkles,
  Heart,
  Gem,
  CakeSlice,
  ScrollText,
  Handshake,
  Sparkle,
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Thirteen considered services spanning accommodation, dining, catering, events, wellness and venue support — all delivered to one standard."
        image={assets.conference}
        crumb="Services"
      />

      <section className="container-lux py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="A Complete Offering"
            title="Everything you need, in one place"
            description="Choose a service to inquire directly. Each request reaches our team on WhatsApp with your details pre-filled."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            const link = whatsappLink(
              `Hello Nyanza Royal Gate Apartment, I would like to inquire about your "${service.title}" service.`,
            )
            return (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_18px_50px_-35px_rgba(7,20,38,0.6)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{service.description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-navy"
                  >
                    Inquire about this
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="container-lux flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Need something tailored?</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Tell us your requirements and we will put together a service plan that fits your occasion.
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
