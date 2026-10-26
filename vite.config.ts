import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { posts } from './src/content'

const SITE_URL = 'https://www.bluemetric.nl'

const STATIC_ROUTES = [
  '/',
  '/services',
  '/research',
  '/team',
  '/contact',
  '/privacy-policy',
  '/complaints-remuneration',
  '/disclaimer',
]

// Generates sitemap.xml at build time from the static routes and all research posts.
function sitemap(): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const urls = [
        ...STATIC_ROUTES.map(path => `  <url><loc>${SITE_URL}${path}</loc></url>`),
        ...posts.map(p => `  <url><loc>${SITE_URL}/research/${p.slug}</loc><lastmod>${p.date}</lastmod></url>`),
      ]
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemap()],
})
