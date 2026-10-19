// Build sonrası: sitemap'teki her adres için dist/<adres>.html yazar. GitHub Pages bu
// dosyaları 200 ile sunar (yalnız 404.html'e düşen alt sayfalar 404 kodu döndürüyordu) ve
// her sayfa kendi başlığı, açıklaması, og etiketleri ve canonical adresiyle gelir.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { createServer } from 'vite'

const SITE = 'https://convexweb.galaksiya.net'
const template = readFileSync('dist/index.html', 'utf8')
const paths = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
)

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})
try {
  const { default: router, getRouteMeta } = await vite.ssrLoadModule('/src/router/index.js')
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const setAttr = (html, selector, value) =>
    html.replace(new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*(")`), `$1${esc(value)}$2`)

  for (const path of paths) {
    const { title, description } = getRouteMeta(router.resolve(path))
    const url = SITE + (path === '/' ? '/' : path)
    let html = template.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    html = setAttr(html, 'name="description"', description)
    html = setAttr(html, 'property="og:title"', title)
    html = setAttr(html, 'property="og:description"', description)
    html = setAttr(html, 'name="twitter:title"', title)
    html = setAttr(html, 'name="twitter:description"', description)
    html = html.replace(
      '</head>',
      `  <meta property="og:url" content="${url}" />\n    <link rel="canonical" href="${url}" />\n  </head>`,
    )
    const file = path === '/' ? 'dist/index.html' : `dist${path}.html`
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, html)
  }
  console.log(`prerender-meta: ${paths.length} sayfa yazıldı`)
} finally {
  await vite.close()
}
