import { useCallback, useEffect, useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { assets, galleryCategories, galleryItems, type GalleryCategory } from '@/lib/site'

type Filter = 'All' | GalleryCategory

export default function Gallery() {
  useSeo(
    'Gallery | Nyanza Royal Gate Apartment',
    'Explore our spaces, plates and celebrations. Filter by category and open any image for a closer look.',
    '/assets/rooms'
  )

  const [filter, setFilter] = useState<Filter>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex !== null ? filtered[activeIndex] : null

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of the experience"
        subtitle="Explore our spaces, plates and celebrations. Filter by category and open any image for a closer look."
        image={assets.rooms}
        crumb="Gallery"
      />

      <section className="container-lux py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Photography"
            title="Browse by category"
            description="Apartments, rooms, weddings, events, the conference hall and wellness — a look at the spaces we offer."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {(['All', ...galleryCategories] as Filter[]).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFilter(category)
                  setActiveIndex(null)
                }}
                aria-pressed={filter === category}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'border-gold bg-gold text-ink shadow-[0_8px_20px_-10px_rgba(214,163,58,0.9)]'
                    : 'border-navy/15 bg-white text-navy/70 hover:border-gold hover:text-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <Reveal key={`${item.src}-${index}`} delay={(index % 3) * 60}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline-none"
                aria-label={`Open ${item.category} image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/40" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-navy/60">No images in this category yet.</p>
        )}
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${active.alt}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              prev()
            }}
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="max-h-[86vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto max-h-[78vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              <span className="font-medium text-gold-light">{active.category}</span> — {active.alt}
              <span className="ml-2 text-white/40">
                ({(activeIndex ?? 0) + 1} / {filtered.length})
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  )
}
