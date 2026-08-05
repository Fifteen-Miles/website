import React, { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
  canonical?: string
  noindex?: boolean
  organizationSchema?: any
  softwareSchema?: any
}

const SITE_URL = 'https://www.fifteenmiles.tech'

export default function Seo({ title, description, path = '/', canonical, noindex, organizationSchema, softwareSchema }: SeoProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)

    // Open Graph
    const og = {
      'og:type': 'website',
      'og:title': title,
      'og:description': description,
      'og:url': SITE_URL.replace(/\/$/, '') + path,
      'og:site_name': 'Fifteen Miles'
    }
    Object.entries(og).forEach(([k, v]) => {
      let el = document.querySelector(`meta[property="${k}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', k)
        document.head.appendChild(el)
      }
      el.setAttribute('content', v)
    })

    // Twitter Card
    const tw = {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
    let twe = document.querySelector('meta[name="twitter:card"]') as HTMLMetaElement | null
    if (!twe) {
      twe = document.createElement('meta')
      twe.setAttribute('name', 'twitter:card')
      document.head.appendChild(twe)
    }
    twe.setAttribute('content', tw.content)

    // canonical
    const linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    const canonicalUrl = canonical || (SITE_URL.replace(/\/$/, '') + path)
    if (linkCanonical) linkCanonical.href = canonicalUrl
    else {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      l.setAttribute('href', canonicalUrl)
      document.head.appendChild(l)
    }

    // noindex
    if (noindex) {
      setMeta('robots', 'noindex')
    }

    // Structured data (JSON-LD)
    const ldId = 'seo-json-ld'
    let ld = document.getElementById(ldId) as HTMLScriptElement | null
    const organization = organizationSchema || {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fifteen Miles",
      "url": SITE_URL,
      "logo": SITE_URL + '/favicon.svg'
    }

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Fifteen Miles",
      "url": SITE_URL
    }

    const software = softwareSchema || {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fifteen Miles Website",
      "url": SITE_URL,
      "applicationCategory": "BusinessApplication"
    }

    const jsonLd = [organization, website, software]

    if (ld) {
      ld.innerHTML = JSON.stringify(jsonLd)
    } else {
      ld = document.createElement('script')
      ld.type = 'application/ld+json'
      ld.id = ldId
      ld.innerHTML = JSON.stringify(jsonLd)
      document.head.appendChild(ld)
    }

    return () => {
      // no cleanup of head elements for now
    }
  }, [title, description, path, canonical, noindex, organizationSchema, softwareSchema])

  return null
}
