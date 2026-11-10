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
    description:
      'Elegant rooms and suites with premium bedding, en-suite bathrooms and thoughtful amenities for a restful, first-class stay.',
  },
  {
    title: 'Conference Hall',
    icon: 'Building2',
    description:
      'A refined conference venue for meetings, seminars and corporate gatherings, arranged to your programme and guest numbers.',
  },
  {
    title: 'Restaurant & Bar',
    icon: 'UtensilsCrossed',
    description:
      'Seasonal Rwandan and international cuisine served in an intimate dining room, with a bar for aperitifs and celebrations.',
  },
  {
    title: 'Outside Catering',
    icon: 'Truck',
    description:
      'Full-service catering delivered to your chosen venue, with professional staff, elegant presentation and flexible menus.',
  },
  {
    title: 'Online Catering',
    icon: 'Laptop',
    description:
      'Send your catering request online and our team will respond with a tailored proposal, menu and quote.',
  },
  {
    title: 'Event Planning',
    icon: 'CalendarHeart',
    description:
      'End-to-end planning and coordination, from concept and styling to logistics, so your occasion unfolds effortlessly.',
  },
  {
    title: 'Sauna & Massage',
    icon: 'Sparkles',
    description:
      'Unwind in our sauna and wellness space, with professional massage treatments designed to restore and relax.',
  },
  {
    title: 'Weddings',
    icon: 'Heart',
    description:
      'Beautifully styled wedding ceremonies and receptions, planned with care and delivered with elegance and precision.',
  },
  {
    title: 'Wedding Proposals',
    icon: 'Gem',
    description:
      'Intimate, romantic proposal settings curated around your story, creating a moment you will treasure forever.',
  },
  {
    title: 'Birthday Celebrations',
    icon: 'CakeSlice',
    description:
      'Joyful birthday celebrations with styling, catering and entertainment tailored to the guest of honour.',
  },
  {
    title: 'Civil Weddings',
    icon: 'ScrollText',
    description:
      'Civil wedding ceremonies and receptions, with coordination of arrangements for a seamless, dignified union.',
  },
  {
    title: 'Service & Protocol',
    icon: 'Handshake',
    description:
      'Professional service and protocol support that lends dignity, order and polish to formal events and VIP guests.',
  },
  {
    title: 'Sanitation Services',
    icon: 'Sparkle',
    description:
      'Reliable sanitation and hygiene support for venues and events, keeping every space clean, safe and welcoming.',
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
