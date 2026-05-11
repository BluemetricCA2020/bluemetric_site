# Bluemetric Website — UI/UX Review Plan

> **Uitvoering:** Via `superpowers:dispatching-parallel-agents` waar mogelijk. Elke fase bevat onafhankelijke taken die parallel kunnen draaien.

**Doel:** Volledige UI/UX review van https://bluemetric-website.vercel.app op basis van 6 benaderingen: Playwright MCP, agent-browser, BrowserStack, source-vergelijking, ui-skills, en frontend-design evaluatie.

**Live URL:** https://bluemetric-website.vercel.app
**Source bestanden:** `bluemetric-website 1/` (5 HTML-pagina's + style.css + images)
**React project:** `bluemetric-website/src/`
**Pagina's:** Home (`/`), Services (`/services`), Research (`/research`), Team (`/team`), Contact (`/contact`)
**Talen:** EN (default) + NL (via toggle of geo-detectie NL/BE)

---

## Fase 1: Code-Level Review (4 parallel agents, geen browser nodig)

Vier onafhankelijke reviews op de codebase. Elk draait als aparte agent met de volledige skill-regels als instructie.

### Agent 1: fixing-accessibility

**Scope:** Alle componenten + index.html
**Bestanden:**
- `index.html` — lang attribute, structure
- `src/components/layout/Nav.tsx` — navigatie, links, hamburger button
- `src/components/layout/MobileNav.tsx` — overlay, focus trapping, keyboard access
- `src/components/layout/Footer.tsx` — links, structuur
- `src/components/shared/PageHeader.tsx` — heading levels
- `src/pages/Home.tsx` — heading hierarchy, links, images
- `src/pages/Services.tsx` — custom slider (keyboard accessible?), scroll controls
- `src/pages/Research.tsx` — card links, images
- `src/pages/Team.tsx` — images, card structure
- `src/pages/Contact.tsx` — **form** (labels, error states, aria-describedby, required fields)
- `src/styles/style.css` — focus styles, contrast

**Checklist (uit fixing-accessibility regels):**
- [ ] Elke interactieve control heeft een accessible name
- [ ] Icon-only buttons hebben aria-label (hamburger menu, language toggle, slider arrows)
- [ ] Alle form inputs hebben labels (Contact pagina)
- [ ] Links hebben betekenisvolle tekst (geen "click here")
- [ ] Decoratieve icons/images zijn aria-hidden
- [ ] Alle interactieve elementen bereikbaar via Tab
- [ ] Focus is zichtbaar voor keyboard users
- [ ] Geen tabindex > 0
- [ ] Escape sluit MobileNav overlay
- [ ] MobileNav trapt focus terwijl open
- [ ] Focus keert terug naar hamburger button bij sluiten
- [ ] Native elementen (button, a, input) ipv role-based hacks
- [ ] Heading levels niet overgeslagen (h1 → h2 → h3)
- [ ] Form errors linked via aria-describedby
- [ ] Required fields aangekondigd
- [ ] Sufficient contrast voor tekst en icons
- [ ] prefers-reduced-motion gerespecteerd voor animaties
- [ ] Images hebben correct alt text

**Output:** Lijst van violations met exact snippet, waarom het ertoe doet, en concrete fix.

---

### Agent 2: fixing-metadata

**Scope:** `index.html` + SPA routing setup
**Bestanden:**
- `index.html` — alle meta tags
- `src/App.tsx` — routing (per-page titles?)
- `public/favicon.svg` — favicon validatie
- `public/og-image.png` — OG image check
- `vercel.json` — rewrites

**Checklist (uit fixing-metadata regels):**
- [ ] Geen duplicate title/description/canonical/robots tags
- [ ] Consistent title format
- [ ] Meta description aanwezig
- [ ] Canonical URL aanwezig en correct
- [ ] robots meta tag aanwezig (of bewuste keuze om weg te laten)
- [ ] OG title, description, image aanwezig met absolute URLs
- [ ] og:url aanwezig en matcht canonical
- [ ] twitter:card aanwezig (summary_large_image)
- [ ] OG image correcte dimensies (1200x630)
- [ ] Favicon werkt cross-browser
- [ ] apple-touch-icon overwogen
- [ ] theme-color meta tag
- [ ] html lang attribute correct (en, maar wisselt naar nl)
- [ ] og:locale ingesteld
- [ ] hreflang alternates? (EN/NL versies bestaan op dezelfde URL, via state)
- [ ] Per-pagina titles via document.title of React Helmet? (SPA = alle pagina's zelfde title)
- [ ] Structured data (JSON-LD) overwogen voor Organization

**Output:** Lijst van ontbrekende/incorrecte metadata met prioriteit en concrete fix.

---

### Agent 3: fixing-motion-performance

**Scope:** Alle animaties en transitions
**Bestanden:**
- `src/hooks/useScrollAnimation.ts` — IntersectionObserver scroll-reveal
- `src/styles/style.css` — CSS transitions en animations (.fade-up, .fade-in, hover effects, nav scroll)
- `src/pages/Services.tsx` — slider scroll behavior (scrollBy)
- `src/components/layout/Nav.tsx` — scroll-based navbar background change (scrollY > 40)
- `src/components/layout/MobileNav.tsx` — overlay open/close transitions

**Checklist (uit fixing-motion-performance regels):**
- [ ] Geen interleaved layout reads en writes in dezelfde frame
- [ ] Animaties gebruiken alleen compositor props (transform, opacity) — geen width/height/top/left
- [ ] Geen scroll events voor animaties (useScrollAnimation gebruikt IntersectionObserver — goed)
- [ ] Nav.tsx: scroll listener voor navbar — checken of dit performant is (scrollY lezen in event handler)
- [ ] Services slider: scrollBy() gebruik — one-shot, acceptabel?
- [ ] CSS transitions: welke properties worden geanimeerd? Alleen transform/opacity of ook paint/layout?
- [ ] will-change niet permanent toegepast
- [ ] Animaties pauzeren wanneer off-screen (unobserve na visible — goed)
- [ ] prefers-reduced-motion gerespecteerd
- [ ] Geen requestAnimationFrame loops zonder stop conditie
- [ ] Blur/filter animaties < 8px en alleen op kleine surfaces

**Output:** Lijst van performance issues met impact-inschatting en alternatief.

---

### Agent 4: baseline-ui + frontend-design evaluatie

**Scope:** Alle componenten + CSS — design quality review
**Bestanden:** Alle `.tsx` bestanden + `style.css`

**NB:** Site gebruikt plain CSS, geen Tailwind. Baseline-ui regels toepassen waar framework-onafhankelijk.

**baseline-ui regels (toepasbaar zonder Tailwind):**
- [ ] Accessible component primitives voor keyboard/focus behavior
- [ ] aria-label op icon-only buttons
- [ ] AlertDialog voor destructieve acties (n.v.t. waarschijnlijk)
- [ ] Geen `h-screen` equivalent problemen (100vh op mobile)
- [ ] Errors naast waar de actie gebeurt (contact form)
- [ ] Paste niet geblokkeerd in inputs
- [ ] Animaties alleen op compositor props (transform, opacity)
- [ ] Geen layout properties animeren
- [ ] Interaction feedback < 200ms
- [ ] prefers-reduced-motion gerespecteerd
- [ ] text-balance op headings, text-pretty op body (CSS check)
- [ ] tabular-nums voor data (n.v.t. waarschijnlijk)
- [ ] Vaste z-index schaal
- [ ] Geen gradients tenzij gevraagd
- [ ] Lege states hebben een clear next action

**frontend-design evaluatie (design kwaliteit):**
- [ ] **Typografie:** Cormorant Garamond (serif) + Inter (sans) — goede pairing? Consistent gebruik? Font weights passend?
- [ ] **Kleurpalet:** Navy (#1A2E4A) als basis, blauwe tinten — cohesie? Contrast? Accent gebruik?
- [ ] **Spatial compositie:** Layout asymmetrie, negative space, grid, alignment
- [ ] **Visuele details:** Achtergronden, texturen, schaduwen, borders — sfeer en diepte?
- [ ] **Motion:** Scroll-reveal animaties — subtle of overdone? Consistent timing?
- [ ] **Overall impressie:** Voelt het "designed" of generiek? Memorabel? Past bij doelgroep (UHNW/Family Offices)?
- [ ] **AI slop check:** Overused patterns? Cookie-cutter components? Gebrek aan karakter?

**Output:** Design quality rapport met sterke punten, verbeterpunten, en prioriteit.

---

## Fase 2: Visuele Testing (agent-browser, sequentieel per viewport)

Na Fase 1 (of parallel met Fase 1 als gewenst). Gebruikt agent-browser voor screenshots en visuele evaluatie.

### Taak 2.1: Desktop Screenshots (1440px breed)

```bash
agent-browser set viewport 1440 900
```

**Per pagina (EN):**
1. `agent-browser open https://bluemetric-website.vercel.app/`
2. `agent-browser screenshot --full` → `screenshots/desktop-home-en.png`
3. Scroll naar beneden, screenshot key sections
4. Herhaal voor `/services`, `/research`, `/team`, `/contact`

**NL versie (steekproef):**
1. Navigeer naar homepage
2. Klik language toggle naar NL
3. Screenshot homepage NL
4. Screenshot contact NL (form labels, footer)

**Te controleren:**
- [ ] Navbar correct (logo links, nav rechts, language toggle)
- [ ] Hero sectie (achtergrondafbeelding, tekst, CTA)
- [ ] Secties juist uitgelijnd, spacing consistent
- [ ] Footer per pagina (brandmark ja/nee, direction ltr/rtl)
- [ ] Hover states op links/buttons
- [ ] Active nav state highlighting
- [ ] Services slider functioneel (klik pijlen, dots updaten)

---

### Taak 2.2: Mobile Screenshots (375px breed)

```bash
agent-browser set viewport 375 812
```
Of device emulatie:
```bash
agent-browser set device "iPhone 14"
```

**Per pagina (EN):**
1. Navigeer naar elke pagina
2. Full-page screenshot
3. Open hamburger menu → screenshot
4. Test language toggle in mobiel menu

**Te controleren:**
- [ ] Hamburger menu zichtbaar (geen desktop nav)
- [ ] Mobile nav overlay werkt (open/close)
- [ ] Tekst leesbaar (font sizes niet te klein)
- [ ] Touch targets groot genoeg (min 44x44px)
- [ ] Geen horizontal overflow/scroll
- [ ] Services: gestapelde cards ipv slider
- [ ] Contact form bruikbaar op mobile
- [ ] Hero sectie past op scherm
- [ ] Images schalen correct

---

### Taak 2.3: Tablet Screenshots (768px breed)

```bash
agent-browser set viewport 768 1024
```

**Steekproef: homepage + services + contact**
- [ ] Layout past zich aan (geen kapotte tussenstand)
- [ ] Grid correcte kolommen
- [ ] Nav: desktop of mobile variant?

---

## Fase 3: Functionele Testing (agent-browser)

### Taak 3.1: Navigatie & Routing

- [ ] Klik elke nav link → juiste pagina laadt
- [ ] Browser back/forward werkt
- [ ] ScrollToTop: pagina scrollt naar boven bij navigatie
- [ ] Direct URL navigatie werkt (bijv. `/services` refreshen → pagina laadt, niet 404)
- [ ] Active state in nav matcht huidige pagina

### Taak 3.2: Language Toggle

- [ ] Klik EN|NL toggle → alle tekst wisselt
- [ ] Taal wordt opgeslagen in localStorage (`bluemetric-lang`)
- [ ] Na refresh: taal behouden
- [ ] Alle pagina's: volledige vertaling (geen NL restanten in EN, geen EN restanten in NL)
- [ ] Footer "The Netherlands" ↔ "Nederland" wisselt correct

### Taak 3.3: Contact Formulier

- [ ] Alle velden invulbaar
- [ ] Submit button reageert
- [ ] Succes-melding verschijnt na submit
- [ ] Succes-melding verdwijnt na 5 seconden
- [ ] Form reset na submit

### Taak 3.4: Services Slider (desktop)

- [ ] Scroll buttons werken (links/rechts)
- [ ] Progress dots updaten bij scroll
- [ ] Smooth scroll animatie
- [ ] Alle cards zichtbaar door te scrollen

### Taak 3.5: Scroll Animaties

- [ ] Fade-up/fade-in elementen verschijnen bij scroll
- [ ] Animaties triggeren eenmalig (niet opnieuw bij terugscrollen)
- [ ] Elementen boven de fold zijn direct zichtbaar (geen flash)

---

## Fase 4: Source Vergelijking (agent-browser, parallel sessions)

Vergelijk de originele statische HTML (source bestanden) met de live React versie.

### Aanpak

Voor elke pagina:
1. Open source HTML in browser: `file:///path/to/bluemetric-website 1/index.html`
2. Screenshot op 1440px
3. Open live versie: `https://bluemetric-website.vercel.app/`
4. Screenshot op 1440px
5. Visueel vergelijken

**NB:** `file://` protocol kan geblokkeerd worden door agent-browser. Alternatief: serve source bestanden lokaal via `npx serve "bluemetric-website 1/"` op een andere poort.

### Per pagina vergelijken

| Aspect | Check |
|--------|-------|
| Layout | Sections in zelfde volgorde, zelfde breedte/spacing |
| Typografie | Fonts, sizes, weights, line-heights matchen |
| Kleuren | Achtergrondkleuren, tekstkleuren, accenten matchen |
| Afbeeldingen | Zelfde afbeeldingen, zelfde positionering |
| Spacing | Padding, margins consistent met source |
| Interactieve elementen | Buttons, links op zelfde plekken |

**Pagina-mapping:**
- `index.html` → `/` (Home)
- `services.html` → `/services`
- `research.html` → `/research`
- `team.html` → `/team`
- `contact.html` → `/contact`

---

## Fase 5: Cross-Browser Testing (BrowserStack)

> **Vereist:** BrowserStack account credentials. Als niet beschikbaar, vervangen door agent-browser device emulatie.

### Configuratie

```json
{
  "url": "https://bluemetric-website.vercel.app",
  "browsers": [
    {"os": "Windows", "os_version": "11", "browser": "chrome", "browser_version": "latest"},
    {"os": "Windows", "os_version": "11", "browser": "firefox", "browser_version": "latest"},
    {"os": "Windows", "os_version": "11", "browser": "edge", "browser_version": "latest"},
    {"os": "OS X", "os_version": "Sonoma", "browser": "safari", "browser_version": "17.0"},
    {"device": "iPhone 15", "os_version": "17"},
    {"device": "iPhone 12", "os_version": "16"},
    {"device": "Samsung Galaxy S23", "os_version": "13.0"},
    {"device": "Google Pixel 7", "os_version": "13.0"}
  ],
  "wait_time": 10
}
```

### Te controleren per browser
- [ ] Fonts laden correct (Google Fonts)
- [ ] SVG favicon rendert
- [ ] CSS transitions werken
- [ ] Flex/grid layouts correct
- [ ] Scroll behavior smooth
- [ ] Backdrop-filter (als gebruikt) werkt in Safari

### Fallback zonder BrowserStack
Agent-browser device emulatie voor:
- iPhone 14 (Safari-achtig)
- Samsung Galaxy S23 (Android Chrome)
- iPad (tablet)

---

## Fase 6: Consolidatie & Rapportage

### Samenvoeging
Na alle fasen: alle bevindingen samenvoegen in één overzicht.

### Prioritering

| Categorie | Definitie | Actie |
|-----------|-----------|-------|
| **Critical** | Functioneel broken, accessibility blocker, security issue | Direct fixen |
| **Important** | Visuele bug op een hoofdviewport, missing metadata, performance issue | Fixen voor launch |
| **Nice-to-have** | Verfijning, polish, optimalisatie | Voorleggen aan gebruiker |

### Fix & Verify cyclus
1. Alle Critical + Important findings fixen
2. Commit + push (Vercel auto-deploy)
3. Re-test gefixte items met agent-browser
4. Nice-to-have voorleggen aan gebruiker voor beslissing

---

## Uitvoeringsplan: Parallellisatie

```
Fase 1 (parallel, geen browser):
  ├── Agent 1: fixing-accessibility review
  ├── Agent 2: fixing-metadata review
  ├── Agent 3: fixing-motion-performance review
  └── Agent 4: baseline-ui + frontend-design evaluatie

Fase 2+3 (sequentieel, browser nodig):
  ├── 2.1: Desktop screenshots (1440px)
  ├── 2.2: Mobile screenshots (375px)
  ├── 2.3: Tablet screenshots (768px)
  ├── 3.1: Navigatie & routing tests
  ├── 3.2: Language toggle tests
  ├── 3.3: Contact formulier tests
  ├── 3.4: Services slider tests
  └── 3.5: Scroll animatie tests

Fase 4 (na fase 2, vergelijking):
  └── Source HTML vs live site per pagina

Fase 5 (onafhankelijk):
  └── BrowserStack of agent-browser device emulatie

Fase 6 (na alle fasen):
  └── Consolidatie → Fix → Verify
```

**Geschatte uitvoeringstijd:** 
- Fase 1: ~5-10 min (parallel agents)
- Fase 2+3: ~15-20 min (browser werk)
- Fase 4: ~10 min
- Fase 5: ~5-10 min (afhankelijk van BrowserStack)
- Fase 6: afhankelijk van aantal findings
