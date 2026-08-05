export function initAnalytics() {
  const GA_ID = (import.meta as any).env.VITE_GA_ID
  const CLARITY_ID = (import.meta as any).env.VITE_CLARITY_ID

  if (GA_ID) {
    // inject GA4
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    const inline = document.createElement('script')
    inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`
    document.head.appendChild(inline)
  }

  if (CLARITY_ID) {
    const c = document.createElement('script')
    c.type = 'text/javascript'
    c.async = true
    c.innerHTML = ` (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_ID}"); `
    document.head.appendChild(c)
  }
}
