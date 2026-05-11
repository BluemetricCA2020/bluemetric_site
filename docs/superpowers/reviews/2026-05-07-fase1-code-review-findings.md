# Bluemetric UI/UX Review — Fase 1: Code-Level Findings

> **Datum:** 2026-05-07
> **Branch:** `review/ui-ux`
> **Status:** Fase 1 compleet, Fase 2-5 nog te doen
> **Volgende stap:** Fix alle Critical + High items, dan Fase 2-5 browser tests

---

## Samenvatting

| Prioriteit | Aantal |
|------------|--------|
| Critical | 11 |
| High | 14 |
| Medium | 15 |
| **Totaal** | **40** |

---

## CRITICAL FINDINGS

### C1: Geen focus styles op interactieve elementen
**Bestanden:** `style.css` (global)
**Probleem:** Geen `:focus` of `:focus-visible` styles op links, buttons, language toggle, slider arrows, hamburger button. Keyboard users zien niet waar ze zijn.
**Fix:** Voeg global rule toe:
```css
*:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

### C2: MobileNav geen focus trap, Escape, aria-expanded
**Bestanden:** `MobileNav.tsx`, `Nav.tsx:68`
**Probleem:** MobileNav overlay heeft geen `role="dialog"`, `aria-modal="true"`, focus trap, of Escape-to-close. Hamburger button mist `aria-expanded`.
**Fix:**
- MobileNav: `role="dialog"` + `aria-modal="true"` + `aria-label`
- Focus trap implementeren (loop Tab van laatste naar eerste focusable element)
- `onKeyDown` handler: Escape → `onClose()`
- Restore focus naar hamburger button bij sluiten
- Hamburger: `aria-expanded={mobileOpen}` + `aria-controls="mobile-nav"`
- Hamburger aria-label vertaald: `aria-label={mobileOpen ? t.closeMenu : t.openMenu}`

### C3: Brandmark SVG geen aria-hidden
**Bestanden:** `Brandmark.tsx:33-52`
**Probleem:** SVG heeft geen `aria-hidden="true"`. Screen readers lezen 16 `<rect>` elementen voor. Component wordt ~10x gebruikt.
**Fix:** Voeg `aria-hidden="true"` toe aan root `<svg>` element in Brandmark.tsx.

### C4: Form focus outline:none zonder alternatief
**Bestanden:** `style.css:207`
**Probleem:** `outline: none` op form inputs, alleen subtiele border-color change als vervanging.
**Fix:** `outline: 2px solid var(--accent); outline-offset: 2px;` of `box-shadow: 0 0 0 3px rgba(76,144,183,0.3);`

### C5: Geen prefers-reduced-motion
**Bestanden:** `style.css` (ontbreekt volledig)
**Probleem:** Alle animaties (fade-up, fade-in, hover transitions, smooth scroll) draaien altijd, ook voor gebruikers met motion sensitivity.
**Fix:**
```css
@media (prefers-reduced-motion: reduce) {
  .fade-up, .fade-in { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
  .nav, .mobile-nav-overlay, .research-card, .team-card, .service-card,
  .service-card-stacked, .slider-arrow, .form-submit, .nav-cta a,
  .nav-login, .cta-buttons a, .nav-hamburger span,
  .services-progress-dot { transition: none; }
}
```
En in `useScrollAnimation.ts`: als `prefers-reduced-motion` is set, direct `visible` class toevoegen.

### C6: Nav scroll listener op scrollY — 60+ Hz
**Bestanden:** `Nav.tsx:14-17`
**Probleem:** `window.addEventListener('scroll', ...)` leest `window.scrollY` op elk frame en triggert React re-render.
**Fix:** Vervang door IntersectionObserver op een sentinel element bij 40px:
```tsx
useEffect(() => {
  const sentinel = document.createElement('div')
  sentinel.style.cssText = 'position:absolute;top:40px;width:1px;height:1px;pointer-events:none'
  document.body.prepend(sentinel)
  const obs = new IntersectionObserver(
    ([entry]) => setScrolled(!entry.isIntersecting),
    { threshold: 0 }
  )
  obs.observe(sentinel)
  return () => { obs.disconnect(); sentinel.remove() }
}, [])
```

### C7: Nav paint-heavy transitions
**Bestanden:** `style.css:29`
**Probleem:** `transition: box-shadow 0.3s ease, background 0.3s ease` op full-width fixed nav — paint triggers op elk frame.
**Fix:** Gebruik opacity-layered pseudo-element:
```css
.nav::after { content: ''; position: absolute; inset: 0; z-index: -1;
  background: rgba(255,255,255,0.97); box-shadow: 0 1px 20px rgba(0,0,0,0.08);
  opacity: 0; transition: opacity 0.3s ease; }
.nav.scrolled::after { opacity: 1; }
```

### C8: Geen meta description
**Bestanden:** `index.html`
**Probleem:** Alleen `og:description` bestaat, geen `<meta name="description">`.
**Fix:**
```html
<meta name="description" content="Independent advisory for ultra-high-net-worth families and Family Offices. Wealth structuring, reporting, and private investments." />
```

### C9: Alle pagina's zelfde title
**Bestanden:** `index.html`, geen page-level titles in React
**Probleem:** `<title>Bluemetric | Wealth Engineering</title>` op alle 5 routes.
**Fix:** Maak `useDocumentTitle` hook:
```tsx
import { useEffect } from 'react'
export function useDocumentTitle(title: string) {
  useEffect(() => { document.title = title }, [title])
}
```
Gebruik in elke pagina: `useDocumentTitle('Services | Bluemetric')` etc. Met vertaling via `useT`.

### C10: og:url ontbreekt
**Bestanden:** `index.html`
**Fix:** `<meta property="og:url" content="https://bluemetric-website.vercel.app/" />`

### C11: 100vh op hero zonder dvh
**Bestanden:** `style.css:66`
**Probleem:** Desktop `.hero { height: 100vh; }` zonder `100dvh` fallback (mobile override bestaat al).
**Fix:** `height: 100vh; height: 100dvh;`

---

## HIGH FINDINGS

### H1: html lang hardcoded "en"
**Bestanden:** `index.html:2`, `LanguageContext.tsx`
**Probleem:** `<html lang="en">` update niet bij NL switch. Screen readers spreken NL tekst uit met Engelse pronunciatie.
**Fix:** In `LanguageContext.tsx` setLang functie:
```tsx
document.documentElement.lang = newLang
```
Ook op initial mount de gedetecteerde taal toepassen.

### H2: href="#" placeholder links
**Bestanden:** `Nav.tsx:50-53`, `MobileNav.tsx:29-32`, `Research.tsx:23`, `Footer.tsx:49-51`
**Probleem:** Client Login (actie, geen navigatie), Research "Read more" (dode links), Footer legal links (Privacy, Terms, Disclaimer).
**Fix:**
- Client Login: `<a>` → `<button>` met button styling
- Research links: verwijderen of wijzen naar echte content
- Footer legal: echte URLs of verwijderen tot content bestaat

### H3: Contact form geen aria-required/aria-invalid/aria-describedby
**Bestanden:** `Contact.tsx:55-88`
**Fix:** `aria-required="true"` op required inputs. Bij custom validatie: `aria-invalid="true"` + `aria-describedby` linking.

### H4: Success message geen aria-live
**Bestanden:** `Contact.tsx:88-89`
**Fix:** `<div className="form-msg" role="status" aria-live="polite" ...>`

### H5: Heading hierarchy broken
**Bestanden:** `Research.tsx:21` (h4 zonder h2/h3), `Team.tsx:17,30` (p elementen als section headings)
**Fix:**
- Research: `<h4>` → `<h2>` voor card titles
- Team: `<p className="team-sublabel">` → `<h2>` voor Leadership/Advisory labels

### H6: Services dots geen accessible role
**Bestanden:** `Services.tsx:77-81`
**Fix:** `aria-label={`Slide ${activeDot + 1} of ${dots.length}`}` op slider container met `aria-live="polite"`.

### H7: Layout thrashing in useScrollAnimation onLoad
**Bestanden:** `useScrollAnimation.ts:25-28`
**Probleem:** `getBoundingClientRect()` + `classList.add()` interleaved in loop.
**Fix:** Batch reads eerst, dan writes:
```ts
const elements = document.querySelectorAll('.fade-up:not(.visible), .fade-in:not(.visible)')
const toReveal: Element[] = []
elements.forEach(el => {
  if (el.getBoundingClientRect().top < window.innerHeight) toReveal.push(el)
})
toReveal.forEach(el => el.classList.add('visible'))
```

### H8: Services slider scroll listener op elke frame
**Bestanden:** `Services.tsx:24-27`
**Fix:** Debounce met requestAnimationFrame of gebruik `scrollend` event.

### H9: transition: all op 8+ selectors
**Bestanden:** `style.css` (lines 41, 43, 123, 137, 141, 144, 155, 177, 210)
**Fix:** Vervang elk `transition: all 0.3s` door specifieke properties:
- `.nav-cta a.cta-link { transition: background-color 0.3s, color 0.3s; }`
- `.slider-arrow { transition: background-color 0.2s, color 0.2s, border-color 0.2s; }`
- `.service-card { transition: background-color 0.3s; }`
- etc.

### H10: Geen canonical URL
**Bestanden:** `index.html`
**Fix:** `<link rel="canonical" href="https://bluemetric-website.vercel.app/" />`
Idealiter dynamisch per route.

### H11: Geen robots.txt
**Fix:** Maak `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://bluemetric-website.vercel.app/sitemap.xml
```

### H12: Geen Twitter Card tags
**Bestanden:** `index.html`
**Fix:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Bluemetric | Wealth Engineering" />
<meta name="twitter:description" content="Independent advisory for ultra-high-net-worth families and Family Offices." />
<meta name="twitter:image" content="https://bluemetric-website.vercel.app/og-image.png" />
```

### H13: Middleware geo-detectie alleen op /
**Bestanden:** `middleware.ts`
**Probleem:** `matcher: '/'` — deep links (bijv. /services) krijgen geen geo-cookie.
**Fix:** Verbreed matcher:
```ts
export const config = {
  matcher: '/((?!_next|api|favicon|images|og-).*)',
}
```

### H14: Login SVG icons niet aria-hidden
**Bestanden:** `Nav.tsx:55-58`, `MobileNav.tsx:34-38`
**Fix:** `aria-hidden="true"` + `focusable="false"` op beide login icon SVGs.

---

## MEDIUM FINDINGS

### M1: Contrast te laag — lichte achtergrond
**Bestanden:** `style.css`
- `.pillar-text` #666 op #F5F2EB → ~3.9:1 (needs 4.5:1)
- `.service-desc` #666
- `.team-bio` #888 → ~3.5:1
- `.research-meta` #999 → ~2.8:1
- `.research-note` #999
- `.service-items li` #888

**Fix:** Darken naar minimaal `#595959` voor 4.5:1 ratio.

### M2: Footer contrast te laag — donkere achtergrond
**Bestanden:** `style.css`
- `.footer-desc` rgba(255,255,255,0.4)
- `.footer-links a` rgba(255,255,255,0.55)
- `.footer-bottom p` rgba(255,255,255,0.3)
- `.footer-contact p` rgba(255,255,255,0.4)
- `Contact.tsx:47` AFM note rgba(255,255,255,0.35)

**Fix:** Verhoog opacity naar minimaal 0.6 voor body text.

### M3: Language toggle geen aria-label/pressed
**Bestanden:** `Nav.tsx:63-64`, `MobileNav.tsx:23-25`
**Fix:** `aria-label="Switch to English"` + `aria-pressed={lang === 'en'}` per button.

### M4: smooth scroll niet uit bij reduced-motion
**Bestanden:** `style.css:17`
**Fix:** In de prefers-reduced-motion block: `html { scroll-behavior: auto; }`

### M5: MobileNav display:none killt opacity transitie
**Bestanden:** `style.css:55-56`
**Fix:** Gebruik `visibility: hidden; pointer-events: none;` ipv `display: none`:
```css
.mobile-nav-overlay { display: flex; opacity: 0; visibility: hidden; pointer-events: none;
  transition: opacity 0.3s ease, visibility 0.3s ease; }
.mobile-nav-overlay.open { opacity: 1; visibility: visible; pointer-events: auto; }
```

### M6: 20px backdrop-blur op nav
**Bestanden:** `style.css:29`
**Fix:** Reduceer naar `blur(8px)` of verwijder blur op `.nav.scrolled` (achtergrond al bijna opaque).

### M7: 20px backdrop-blur op mobile overlay
**Bestanden:** `style.css:55`
**Fix:** Verwijder blur — overlay is al `rgba(255,255,255,0.98)`, blur is onzichtbaar.

### M8: Geen apple-touch-icon
**Fix:** Genereer 180x180 PNG van brandmark, `public/apple-touch-icon.png`, link in index.html.

### M9: Geen theme-color
**Fix:** `<meta name="theme-color" content="#1A2E4A" />`

### M10: Geen favicon PNG fallback
**Fix:** PNG favicon 32x32 genereren, toevoegen als fallback na SVG link.

### M11: Geen JSON-LD structured data
**Fix:** Organization/FinancialService schema in index.html.

### M12: Geen og:locale
**Fix:** `<meta property="og:locale" content="en_GB" />` + `<meta property="og:locale:alternate" content="nl_NL" />`

### M13: z-index magic numbers
**Bestanden:** `style.css` — 1000, 1050, 1100
**Fix:** CSS custom properties: `--z-nav: 100; --z-mobile-overlay: 110; --z-hamburger: 120;`

### M14: Services dot width animatie = layout property
**Bestanden:** `style.css:145`
**Fix:** `transform: scaleX()` ipv width change, of transition verwijderen van width.

### M15: Form success message abrupt toggle
**Bestanden:** `Contact.tsx:89`
**Fix:** Gebruik opacity + visibility ipv display none/block.

---

## DESIGN QUALITY SCORES

| Aspect | Score | Notitie |
|--------|-------|---------|
| Typografie | 4/5 | Cormorant+Inter excellent, sommige tekst te klein (9px lockup tagline) |
| Kleur & Thema | 4/5 | Cohesief navy palette, --gold ongebruikt, accent overbelast |
| Spatial Compositie | 4.5/5 | Sterkste punt — genereuze spacing, stately rhythm |
| Visuele Details | 3.5/5 | Weinig depth/shadows, geen texturen op navy secties |
| Motion | 3/5 | Eentonig fade-up, geen stagger, broken nav/overlay transitions |
| Brand Fit | 4/5 | Serieus en professioneel, mist signature visueel moment |
| AI Slop | 4/5 | Laag — origineel brandmark, geen paarse gradients |

## TOP 5 DESIGN VERBETERINGEN

1. **Gold accent activeren** — `--gold: #C5A55A` is gedefinieerd maar ongebruikt. Sparingly voor featured items, CTA hover, quote attributie.
2. **Stagger animaties** — transition-delay per index in .map() calls voor pillars, cards, team members.
3. **Subtiele depth op navy secties** — noise texture (SVG data URI, 2-3% opacity) of radial gradient highlight.
4. **MobileNav smooth transitie** — visibility/opacity ipv display none/flex.
5. **Accent kleur differentiatie** — #4C90B7 is nu overal; gold als secondary accent zou hierarchy verbeteren.
