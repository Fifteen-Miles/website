import fs from 'fs'
import path from 'path'

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages')
const OUT = path.join(process.cwd(), 'public', 'sitemap.xml')
const SITE = process.env.SITE_URL || 'https://www.fifteenmiles.tech'

const manualBlogSlugs = [
  '/blog/construcao-de-software-como-catedrais',
  '/blog/o-fim-da-era-dos-aplicativos-fragmentados',
  '/blog/soberania-de-dados-e-memoria-institucional'
]

function pageToRoute(name) {
  const base = path.basename(name, path.extname(name))
  if (base.toLowerCase() === 'home') return '/'
  return '/' + base.replace(/Index$/i, '').replace(/([A-Z])/g, (m, p1, offset) => (offset ? '-' : '') + p1).toLowerCase()
}

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'))
const pageUrls = files.map(f => pageToRoute(f))

const allRoutes = [...new Set([...pageUrls, ...manualBlogSlugs])]

const urls = allRoutes.map(route => ({
  loc: SITE.replace(/\/$/, '') + route,
  lastmod: new Date().toISOString()
}))

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`).join('\n')}\n</urlset>`

fs.writeFileSync(OUT, xml, 'utf8')
console.log('Wrote sitemap to', OUT)