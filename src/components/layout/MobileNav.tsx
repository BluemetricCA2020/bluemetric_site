import { useEffect, useRef, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { useT } from '../../hooks/useT'
import { navTranslations } from '../../i18n/translations/nav'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const { lang, setLang } = useLanguage()
  const t = useT(navTranslations)
  const overlayRef = useRef<HTMLDivElement>(null)

  const getFocusableElements = useCallback(() => {
    if (!overlayRef.current) return []
    return Array.from(
      overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    )
  }, [])

  useEffect(() => {
    if (!open) return

    const firstLink = overlayRef.current?.querySelector<HTMLElement>('a[href]')
    firstLink?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        const hamburger = document.querySelector<HTMLElement>('.nav-hamburger')
        hamburger?.focus()
        return
      }

      if (e.key !== 'Tab') return

      const focusable = getFocusableElements()
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose, getFocusableElements])

  return (
    <div
      ref={overlayRef}
      id="mobile-nav"
      className={`mobile-nav-overlay${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose} end>{t.home}</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>{t.services}</NavLink>
      <NavLink to="/research" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>{t.research}</NavLink>
      <NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>{t.team}</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>{t.contact}</NavLink>
      <div className="mobile-lang-toggle">
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        <span>|</span>
        <button className={lang === 'nl' ? 'active' : ''} onClick={() => setLang('nl')}>NL</button>
      </div>
      <div className="mobile-nav-cta">
        <Link to="/contact" className="cta-link" onClick={onClose}>{t.getInTouch}</Link>
        <a href="https://app.powerbi.com/reportEmbed?reportId=993a730b-5d07-42a2-aa40-cbfee12b7849&autoAuth=true&ctid=ebe51614-cea2-4666-b538-68d899bf79ea" className="nav-login" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          {t.clientLogin}
        </a>
      </div>
    </div>
  )
}
