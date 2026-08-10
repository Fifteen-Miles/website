import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
  canonical?: string
  noindex?: boolean
  image?: string
  type?: 'website' | 'article'
  schemas?: any[]
}

const SITE_URL = 'https://www.fifteenmiles.tech'

export default function Seo({ title, description, path = '/', canonical, noindex, image, type = 'website', schemas = [] }: SeoProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    
    const ogUrl = SITE_URL.replace(/\/$/, '') + path
    setMeta('og:type', type, true)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:url', ogUrl, true)
    setMeta('og:site_name', 'Fifteen Miles', true)
    if (image) setMeta('og:image', image, true)

    setMeta('twitter:card', 'summary_large_image')
    if (image) setMeta('twitter:image', image)

    const linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    const canonicalUrl = canonical || ogUrl
    if (linkCanonical) linkCanonical.href = canonicalUrl
    else {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      l.setAttribute('href', canonicalUrl)
      document.head.appendChild(l)
    }

    if (noindex) {
      setMeta('robots', 'noindex')
    }

    const ldId = 'seo-json-ld'
    let ld = document.getElementById(ldId) as HTMLScriptElement | null
    
    const defaultOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fifteen Miles",
      "url": SITE_URL,
      "logo": SITE_URL + '/favicon.svg'
    }

    const defaultWebsite = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Fifteen Miles",
      "url": SITE_URL
    }

    const jsonLd = [defaultOrganization, defaultWebsite, ...schemas]

    if (ld) {
      ld.innerHTML = JSON.stringify(jsonLd)
    } else {
      ld = document.createElement('script')
      ld.type = 'application/ld+json'
      ld.id = ldId
      ld.innerHTML = JSON.stringify(jsonLd)
      document.head.appendChild(ld)
    }

    return () => {}
  }, [title, description, path, canonical, noindex, image, type, schemas])

  return null
}