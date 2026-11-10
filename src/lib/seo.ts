import { useEffect } from 'react'

/**
 * SEO useEffect hook - sets page-specific metadata.
 * Call this at the top of any page component.
 * @param title - Page title (will be set as document.title)
 * @param description - Meta description
 * @param image - Optional Open Graph / Twitter image URL
 * @param canonical - Optional canonical URL (defaults to vercel.app domain)
 */
export const useSeo = (
  title: string,
  description: string,
  image?: string,
  canonical?: string,
) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Nyanza Royal Gate Apartment`

    // Update meta description
    const existingDesc = document.querySelector('meta[name="description"]')
    if (existingDesc) {
      existingDesc.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }

    // Update Open Graph tags
    if (image) {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDesc = document.querySelector('meta[property="og:description"]')
      const ogImg = document.querySelector('meta[property="og:image"]')
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogTitle) ogTitle.setAttribute('content', title)
      if (ogDesc) ogDesc.setAttribute('content', description)
      if (ogImg) ogImg.setAttribute('content', image)
      if (ogUrl) ogUrl.setAttribute('content', canonical || 'https://nyanza-loyal-gate-apartment.vercel.app/')
    }

    // Update Twitter tags
    if (image) {
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      const twitterDesc = document.querySelector('meta[name="twitter:description"]')
      const twitterImg = document.querySelector('meta[name="twitter:image"]')
      if (twitterTitle) twitterTitle.setAttribute('content', title)
      if (twitterDesc) twitterDesc.setAttribute('content', description)
      if (twitterImg) twitterImg.setAttribute('content', image)
    }

    // Set canonical URL if provided
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = canonical
        document.head.appendChild(link)
      }
    }
  }, [title, description, image, canonical])
}