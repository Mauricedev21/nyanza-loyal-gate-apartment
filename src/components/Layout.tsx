import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFab from './WhatsAppFab'
import ScrollToTop from './ScrollToTop'
import { useEffect } from 'react'

export default function Layout() {
  // Add Schema.org JSON-LD structured data
  useEffect(() => {
    // Check if schema already exists
    if (document.querySelector('script[type="application/ld+json"]')) return;

    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Nyanza Royal Gate Apartment",
      "description": "Luxury accommodation, fine dining, conference facilities, weddings and events in Nyanza, Rwanda. Taste, Class, Perfection.",
      "url": "https://nyanza-loyal-gate-apartment.vercel.app/",
      "logo": "https://nyanza-loyal-gate-apartment.vercel.app/assets/logo.jpg",
      "telephone": "+250788869958",
      "email": "nyanzaroyalgateapartment@gmail.com",
      "areaServed": "Nyanza, Rwanda",
      "image": "https://nyanza-loyal-gate-apartment.vercel.app/assets/rooms.jpg"
    })

    document.head.appendChild(schema)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}