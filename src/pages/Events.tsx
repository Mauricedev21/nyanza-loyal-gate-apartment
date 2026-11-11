import { Link } from 'react-router-dom'
import { Heart, CakeSlice, Gem, ScrollText, Building2, PartyPopper, ArrowRight } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import InquiryForm from '@/components/InquiryForm'
import { assets, whatsappLink, whatsappMessages } from '@/lib/site'

const eventTypes = [
  { icon: Heart, title: 'Weddings', text: 'Ceremonies and receptions styled and coordinated with elegance and precision.' },
  { icon: CakeSlice, title: 'Birthday Parties', text: 'Joyful celebrations with styling, catering and entertainment tailored to you.' },
  { icon: Gem, title: 'Marriage Proposals', text: 'Intimate, romantic settings curated around your story and your moment.' },
  { icon: ScrollText, title: 'Civil Weddings', text: 'Dignified civil ceremonies with coordination of the arrangements.' },
  { icon: Building2, title: 'Conferences', text: 'Well-appointed spaces and support for meetings, seminars and corporate events.' },
  { icon: PartyPopper, title: 'Private Celebrations', text: 'Anniversaries, family gatherings and special occasions, handled with care.' },
]

export default function Events() {
  useSeo(
    'Events & Celebrations | Nyanza Royal Gate Apartment',
    'Weddings, proposals, birthdays, civil ceremonies, conferences and private celebrations — planned, styled and coordinated so every detail feels effortless.',
    '/assets/conference'
  )

  return (
    <>
      <PageHero
        eyebrow="Celebrations & Business"
        title="Events"
        subtitle="Weddings, proposals, birthdays, civil ceremonies, conferences and private celebrations — planned, styled and coordinated so every detail feels effortless."
        image={assets.conference}
        crumb="Events"
      />

      {/* Event types */}
      <section className="container-lux py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Occasions We Host"
            title="Moments worth gathering for"
            description="Whatever the occasion, we bring together the space, the food, the styling and the service."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event, index) => {
            const Icon = event.icon
            return (
              <Reveal key={event.title} delay={(index % 3) * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_18px_50px_-35px_rgba(7,20,38,0.6)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{event.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Why plan with us */}
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="container-lux grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Planning With Us"
              title="One team, from first idea to final toast"
              description="We coordinate the moving parts — space, catering, styling, timing and service — so you can be present for the moment rather than managing it."
            />
            <ul className="mt-7 space-y-3 text-sm text-white/75">
              {[
                'A single point of contact for your event',
                'Menus planned around your guests and budget',
                'Styling and setup tailored to your theme',
                'On-the-day coordination and service',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(whatsappMessages.event)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-silver mt-8"
            >
              Discuss Your Event
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <img src={assets.weddings} alt="Wedding preparation and event styling" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
              <img src={assets.conference} alt="Conference and celebration venue" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="event-inquiry" className="container-lux scroll-mt-24 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Event Inquiry"
              title="Let’s plan something beautiful"
              description="Share a few details about your event and our team will be in touch to discuss ideas, availability and a tailored proposal."
            />
            <div className="mt-8 space-y-3 text-sm text-navy/60">
              <p className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                Weddings, proposals and civil ceremonies
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                Birthdays and private celebrations
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                Conferences and corporate gatherings
              </p>
            </div>
            <Link to="/catering" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-navy">
              Need catering too? Explore RGA Catering
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <InquiryForm
              kind="event"
              submitLabel="Send Event Inquiry"
              intro="Hello Nyanza Royal Gate Apartment, I would like to plan an event. Here are my details:"
              fields={[
                {
                  name: 'eventType',
                  label: 'Event Type',
                  type: 'select',
                  required: true,
                  options: ['Wedding', 'Birthday', 'Marriage Proposal', 'Civil Wedding', 'Conference', 'Private Celebration', 'Other'],
                },
                { name: 'eventDate', label: 'Preferred Date', type: 'date', required: true },
                { name: 'guestCount', label: 'Expected Guests', type: 'number', required: true, min: 1, placeholder: 'e.g. 150' },
                { name: 'location', label: 'Location / Venue', placeholder: 'Our venue or elsewhere?' },
                { name: 'contactName', label: 'Contact Name', required: true, placeholder: 'Your name' },
                { name: 'contactPhone', label: 'Contact Phone', type: 'tel', required: true, placeholder: 'e.g. 0788 000 000' },
                { name: 'contactEmail', label: 'Contact Email', type: 'email', placeholder: 'you@example.com', full: true },
                {
                  name: 'requirements',
                  label: 'Additional Requirements',
                  type: 'textarea',
                  placeholder: 'Theme, budget, services needed, special requests…',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
