import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: ReactNode
  image: string
  crumb: string
}

export default function PageHero({ eyebrow, title, subtitle, image, crumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-20">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
      <div className="container-lux flex min-h-[42vh] flex-col justify-center py-16 sm:min-h-[46vh] sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/55">
          <Link to="/" className="transition-colors hover:text-gold-light">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-gold">{crumb}</span>
        </nav>
        <span className="eyebrow text-gold-light">
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
