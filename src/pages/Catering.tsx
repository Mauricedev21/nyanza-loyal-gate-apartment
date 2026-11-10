import { Link } from 'react-router-dom'
import { UtensilsCrossed, Truck, Laptop, Heart, Building2, PartyPopper, ArrowRight } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import InquiryForm from '@/components/InquiryForm'
import { assets, site, whatsappLink, whatsappMessages } from '@/lib/site'

const offerings = [
  { icon: UtensilsCrossed, title: 'Buffet Arrangements', text: 'Generous, beautifully presented buffets for weddings, conferences and celebrations.' },
  { icon: Heart, title: 'Wedding Catering', text: 'Elegant wedding menus and service, from canapés to the final course.' },
  { icon: Building2, title: 'Conference Catering', text: 'Refreshments and working lunches that keep your programme running smoothly.' },
  { icon: PartyPopper, title: 'Private Celebrations', text: 'Tailored menus for birthdays, anniversaries and intimate gatherings.' },
  { icon: Truck, title: 'Outside Catering', text: 'Our team brings the full experience to your chosen venue.' },
  { icon: Laptop, title: 'Online Catering', text: 'Send your request online and receive a tailored proposal and quote.' },
]

export default function Catering() {
  useSeo(
    'RGA Catering | Wedding & Conference Catering Rwanda',
    'Restaurant-quality catering for weddings, conferences and private celebrations — delivered with elegance, whether at our venue or yours.',
    '/assets/weddings'
  )

  return (
    <>
      <PageHero
        eyebrow="RGA Catering"
        title="Taste, Class, Perfection."
        subtitle="Restaurant-quality catering for weddings, conferences and private celebrations — delivered with elegance, whether at our venue or yours."
        image={assets.weddings}
        crumb="Catering"
      />

      {/* Intro */}
      <section className="container-lux grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img src={assets.weddings} alt="Wedding and event preparation by RGA Catering" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            <img src={assets.conference} alt="Conference venue set for catered service" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="The RGA Kitchen"
            title="Food that looks as good as it tastes"
            description="RGA Catering combines authentic Rwandan flavours with international favourites. Every menu is planned around your occasion, and every plate is finished with the same attention to presentation."
          />
          <p className="mt-4 text-sm leading-relaxed text-navy/65">
            From a relaxed conference lunch to a full wedding feast, we handle menu planning, preparation,
            presentation and service. Share your event details and we will return a proposal built around your
            guests, budget and style.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#catering-request" className="btn-gold">
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(whatsappMessages.catering)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Catering
            </a>
          </div>
        </Reveal>
      </section>

      {/* Offerings */}
      <section className="bg-cream-deep/60 py-20 md:py-28">
        <div className="container-lux">
          <Reveal>
            <SectionHeading
              eyebrow="What We Cater"
              title="Catering for every occasion"
              description="A flexible service built around your event — inside our venue or delivered to yours."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={(index % 3) * 80}>
                  <div className="card h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-lux py-16 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="From Our Events"
            title="A look at our celebrations"
            description="Our catering is shaped by the events we serve — from intimate weddings to full conference programmes."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { src: assets.weddings, alt: 'Wedding preparation and event styling' },
            { src: assets.conference, alt: 'Conference venue set for a catered event' },
          ].map((item, index) => (
            <Reveal key={item.alt} delay={index * 80}>
              <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Request form */}
      <section id="catering-request" className="scroll-mt-24 bg-navy py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Catering Request"
              title="Tell us about your event"
              description="The more detail you share, the more accurate our proposal. We will respond with menu options and pricing."
            />
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-display text-2xl italic text-gold-light">{site.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Prefer to speak directly? Reach our team on{' '}
                <a href={`tel:${site.phoneTel}`} className="text-gold-light hover:underline">
                  {site.phoneDisplay}
                </a>{' '}
                or send a WhatsApp message.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <InquiryForm
              kind="catering"
              submitLabel="Send Catering Request"
              intro="Hello RGA Catering, I would like a catering quote. Here are my event details:"
              fields={[
                {
                  name: 'eventType',
                  label: 'Event Type',
                  type: 'select',
                  required: true,
                  options: ['Wedding', 'Conference', 'Corporate Event', 'Birthday', 'Private Celebration', 'Other'],
                },
                { name: 'eventDate', label: 'Event Date', type: 'date', required: true },
                { name: 'location', label: 'Event Location', required: true, placeholder: 'Venue / area' },
                { name: 'guestCount', label: 'Guest Count', type: 'number', required: true, min: 1, placeholder: 'e.g. 120' },
                { name: 'contactName', label: 'Contact Name', required: true, placeholder: 'Your name' },
                { name: 'contactPhone', label: 'Contact Phone', type: 'tel', required: true, placeholder: 'e.g. 0788 000 000' },
                { name: 'contactEmail', label: 'Contact Email', type: 'email', placeholder: 'you@example.com', full: true },
                {
                  name: 'requirements',
                  label: 'Additional Requirements',
                  type: 'textarea',
                  placeholder: 'Menu preferences, dietary needs, service style, budget…',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="container-lux py-16 text-center md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Planning a wedding or event too?</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy/60">
            Combine catering with venue, styling and coordination for one seamless experience.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/events" className="btn-dark">
              Explore Events
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
