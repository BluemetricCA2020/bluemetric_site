import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useT } from '../../hooks/useT'
import { navTranslations } from '../../i18n/translations/nav'
import MobileNav from './MobileNav'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useT(navTranslations)

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

  const toggleMobile = () => {
    setMobileOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            <Link to="/" className="nav-wordmark">
              BLUEMETRIC
            </Link>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>{t.home}</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>{t.services}</NavLink></li>
            <li><NavLink to="/research" className={({ isActive }) => isActive ? 'active' : ''}>{t.research}</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''}>{t.team}</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>{t.contact}</NavLink></li>
          </ul>
          <div className="nav-cta">
            <Link to="/contact" className="cta-link">{t.getInTouch}</Link>
            <a href="https://app.powerbi.com/reportEmbed?reportId=993a730b-5d07-42a2-aa40-cbfee12b7849&autoAuth=true&ctid=ebe51614-cea2-4666-b538-68d899bf79ea" className="nav-login" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              {t.clientLogin}
            </a>
            {/* DUTCH DISABLED — to re-enable, uncomment the block below */}
            {/* <div className="lang-toggle">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              <span>|</span>
              <button className={lang === 'nl' ? 'active' : ''} onClick={() => setLang('nl')}>NL</button>
            </div> */}
          </div>
          <button
            className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={toggleMobile}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <MobileNav open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
