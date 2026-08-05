import React, { useEffect, useState } from 'react'

type ManifestEntry = {
  webp?: string[]
  avif?: string[]
}

type Manifest = Record<string, ManifestEntry>

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number | string
  height?: number | string
  sizes?: string
}

let cachedManifest: Manifest | null = null

export default function LazyImage({ src = '', alt = '', width, height, style, className, sizes, ...rest }: Props) {
  const [manifest, setManifest] = useState<Manifest | null>(cachedManifest)

  useEffect(() => {
    if (cachedManifest) return
    if (typeof window === 'undefined') return
    let cancelled = false
    fetch('/optimized/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error('no manifest')
        return r.json()
      })
      .then((m: Manifest) => {
        if (cancelled) return
        cachedManifest = m
        setManifest(m)
      })
      .catch(() => {
        // ignore — manifest may not exist in dev
      })
    return () => { cancelled = true }
  }, [])

  const computedStyle = { ...(style || {}) } as React.CSSProperties
  if (width && height && !('aspectRatio' in (style || {}))) {
    computedStyle.aspectRatio = `${width}/${height}`
  }

  // derive manifest key from src path
  const srcBasename = src.split('/').pop() || src
  const entry = manifest && manifest[srcBasename]

  if (entry && (entry.avif?.length || entry.webp?.length)) {
    const avifSrcSet = entry.avif ? entry.avif.join(', ') : undefined
    const webpSrcSet = entry.webp ? entry.webp.join(', ') : undefined

    return (
      <picture className={className} style={computedStyle}>
        {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
        {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={width as any}
          height={height as any}
          style={computedStyle}
          {...rest}
        />
      </picture>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width as any}
      height={height as any}
      style={computedStyle}
      className={className}
      {...rest}
    />
  )
}
