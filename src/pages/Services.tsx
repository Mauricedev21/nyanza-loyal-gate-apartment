import { Link } from 'react-router-dom'
import { useSeo } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { serviceList, whatsappLink, whatsappMessages } from '@/lib/site'

export default function Services() {
  useSeo(
    'Our Services | Nyanza Royal Gate Apartment',
    'Thirteen considered services spanning accommodation, dining, catering, events, wellness and venue support — all delivered to one standard.',
    '/assets/conference'
  )

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Thirteen considered services spanning accommodation, dining, catering, events, wellness and venue support — all delivered to one standard."
        image={`/assets/conference`}
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
            const link = whatsappLink(
              `Hello Nyanza Royal Gate Apartment, I would like to inquire about your "${service.title}" service.`,
            )
            return (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <article className="group relative h-full flex flex-col rounded-2xl border border-[var(--color-silver)] bg-white p-7 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-t-xl mb-4 group-hover:opacity-0.9 transition-opacity"
                  />
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-silver)] text-[var(--color-ink)] transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                    <span className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[var(--color-ink)]">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink)]/60">{service.description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-silver)]"
                  >
                    Inquire about this
                    <span className="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.2c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2a7 7 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
                      </svg>
                    </span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] py-16 md:py-20">
        <div className="container-lux flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-[var(--color-white-pure)] sm:text-4xl">Need something tailored?</h2>
            <p className="mt-2 max-w-xl text-[var(--color-white-soft)]">
              Tell us your requirements and we will put together a service plan that fits your occasion.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-silver"
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