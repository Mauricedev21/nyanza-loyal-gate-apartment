import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { InstagramIcon, YoutubeIcon } from '@/components/BrandIcons'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import InquiryForm from '@/components/InquiryForm'
import { assets, site, whatsappLink, whatsappMessages } from '@/lib/site'

export default function Contact() {
  const cards = [
    {
      icon: Phone,
      title: 'Call Us',
      value: site.phoneDisplay,
      href: `tel:${site.phoneTel}`,
      note: 'Speak with our team directly',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: site.phoneDisplay,
      href: whatsappLink(whatsappMessages.general),
      note: 'Message us any time',
      external: true,
    },
    {
      icon: Mail,
      title: 'Email',
      value: site.email,
      href: `mailto:${site.email}`,
      note: 'We reply as soon as possible',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: site.location,
      href: undefined,
      note: 'Directions available on request',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We would be delighted to help with a booking, a catering quote or an upcoming celebration. Reach us by phone, WhatsApp or email."
        image={assets.conference}
        crumb="Contact"
      />

      {/* Contact cards */}
      <section className="container-lux py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="We’re Here to Help"
            title="However you prefer to reach us"
            description="Our team is ready to answer questions and help you plan the details."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon
            const content = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">{card.title}</h3>
                <p className="mt-1.5 break-words font-display text-lg font-semibold text-navy">{card.value}</p>
                <p className="mt-1 text-xs text-navy/50">{card.note}</p>
              </>
            )
            return (
              <Reveal key={card.title} delay={index * 70}>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="card block h-full p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="card h-full p-6">{content}</div>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-cream-deep/70 p-6 sm:flex-row">
            <p className="text-sm text-navy/70">
              Follow our work and latest updates on social media.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4" />
                {site.instagramHandle}
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <YoutubeIcon className="h-4 w-4" />
                YouTube
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact form */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Send a Message"
              title="Tell us how we can help"
              description="Complete the form and we will get back to you. For urgent requests, calling or messaging us on WhatsApp is fastest."
            />
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                {site.location}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/45">
                We are located in Nyanza, Rwanda. Exact directions are shared on request so you arrive with ease.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <InquiryForm
              kind="general"
              submitLabel="Send Message"
              intro="Hello Nyanza Royal Gate Apartment, I would like to get in touch."
              fields={[
                { name: 'name', label: 'Full Name', required: true, placeholder: 'Your full name' },
                { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@example.com' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'e.g. 0788 000 000' },
                {
                  name: 'inquiryType',
                  label: 'Inquiry Type',
                  type: 'select',
                  required: true,
                  options: ['General Inquiry', 'Accommodation', 'Catering', 'Event Planning', 'Conference', 'Other'],
                },
                {
                  name: 'message',
                  label: 'Message',
                  type: 'textarea',
                  required: true,
                  placeholder: 'How can we help?',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
