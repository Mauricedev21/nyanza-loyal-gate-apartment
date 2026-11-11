export const site = {
  name: 'Nyanza Royal Gate Apartment',
  brand: 'RGA Catering',
  tagline: 'Taste, Class, Perfection.',
  location: 'Nyanza, Rwanda',
  phoneDisplay: '0788 869 958',
  phoneTel: '+250788869958',
  whatsapp: '250788869958',
  email: 'nyanzaroyalgateapartment@gmail.com',
  instagram: 'https://instagram.com/nyanzaroyalgateapartment',
  instagramHandle: '@nyanzaroyalgateapartment',
  youtube: 'https://www.youtube.com/results?search_query=nyanza+royal+gate+apartment',
  developer: 'Powered by Maurice',
  developerPhone: '0786931313',
} as const

/**
 * The only imagery used on the site — the client-provided RGA photographs.
 * `conference` is URL-encoded because the source file name contains a space.
 */
export const assets = {
  logo: '/assets/logo.jpg',
  rooms: '/assets/rooms.jpg',
  conference: '/assets/conference%20hall.jpg',
  massage: '/assets/massage-service.jpg',
  weddings: '/assets/weddings-preparation.jpg',
} as const

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Services', to: '/services' },
  { label: 'Catering', to: '/catering' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const

export type InquiryKind = 'accommodation' | 'catering' | 'event' | 'general'

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const whatsappMessages: Record<InquiryKind, string> = {
  accommodation:
    'Hello Nyanza Royal Gate Apartment, I would like to inquire about booking accommodation. Please share availability and rates.',
  catering:
    'Hello RGA Catering, I would like a catering quote for an upcoming event. Please share menu options and pricing.',
  event:
    'Hello Nyanza Royal Gate Apartment, I would like to plan an event with you. Please share event packages and availability.',
  general:
    'Hello Nyanza Royal Gate Apartment, I have a question about your services.',
}

export const serviceList = [
  {
    title: 'VIP Accommodation',
    icon: 'BedDouble',
    image: assets.rooms,
    description:
      'Elegant rooms and suites with premium bedding, en-suite bathrooms and thoughtful amenities for a restful, first-class stay.',
  },
  {
    title: 'Conference Hall',
    icon: 'Building2',
    image: assets.conference,
    description:
      'A refined conference venue for meetings, seminars and corporate gatherings, arranged to your programme and guest numbers.',
  },
  {
    title: 'Restaurant & Bar',
    image: assets.conference,
    description:
      'An intimate dining room serving seasonal Rwandan and international cuisine, with a bar for aperitifs and celebrations, within the main venue.',
  },
  {
    title: 'Sauna & Massage',
    icon: 'Sparkles',
    image: assets.massage,
    description:
      'Unwind in our sauna and wellness space, with professional massage treatments designed to restore and relax.',
  },
  {
    title: 'Service & Protocol',
    icon: 'Handshake',
    image: assets.conference,
    description:
      'Professional service and protocol support that lends dignity, order and polish to formal events and VIP guests.',
  },
  {
    title: 'Sanitation Services',
    icon: 'Sparkle',
    image: assets.massage,
    description:
      'Reliable sanitation and hygiene support for venues and events, keeping every space clean, safe and welcoming.',
  },
  {
    title: 'Weddings and Proposals',
    icon: 'Heart',
    image: assets.weddings,
    description:
      'Beautifully styled wedding ceremonies and intimate romantic proposal settings, planned with care and delivered with elegance and precision.',
  },
  {
    title: 'Catering',
    icon: 'Truck',
    image: assets.weddings,
    description:
      'Full-service catering delivered to your chosen venue (Outside Catering) and online request options (Online Catering) for tailored menu proposals and quotes.',
  },
  {
    title: 'Event Planning',
    icon: 'CalendarHeart',
    image: assets.weddings,
    description:
      'End-to-end planning and coordination of weddings, proposals, birthdays and other celebrations from concept and styling to logistics.',
  },
  {
    title: 'Birthday Celebrations',
    icon: 'CakeSlice',
    image: assets.weddings,
    description:
      'Joyful birthday celebrations with styling, catering and entertainment tailored to the guest of honour.',
  },
] as const

export type GalleryCategory =
  | 'Apartments'
  | 'Rooms'
  | 'Weddings'
  | 'Events'
  | 'Conference Hall'
  | 'Wellness'

export const galleryCategories: GalleryCategory[] = [
  'Apartments',
  'Rooms',
  'Weddings',
  'Events',
  'Conference Hall',
  'Wellness',
]

export const galleryItems: { src: string; category: GalleryCategory; alt: string }[] = [
  { src: assets.rooms, category: 'Apartments', alt: 'Comfortable apartment interior at Nyanza Royal Gate' },
  { src: assets.conference, category: 'Conference Hall', alt: 'Conference hall at Nyanza Royal Gate Apartment' },
  { src: assets.weddings, category: 'Weddings', alt: 'Wedding preparation at Nyanza Royal Gate' },
  { src: assets.massage, category: 'Wellness', alt: 'Massage and wellness service at Nyanza Royal Gate' },
  { src: assets.rooms, category: 'Rooms', alt: 'Guest room at Nyanza Royal Gate Apartment' },
  { src: assets.weddings, category: 'Events', alt: 'Celebration and event preparation at Nyanza Royal Gate' },
]