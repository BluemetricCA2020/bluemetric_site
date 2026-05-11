import { Link } from 'react-router-dom'
import { useT } from '../hooks/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { homeTranslations } from '../i18n/translations/home'
import Brandmark from '../components/shared/Brandmark'
import Footer from '../components/layout/Footer'

export default function Home() {
  const t = useT(homeTranslations)
  const { lang } = useLanguage()
  useDocumentTitle(lang === 'nl' ? 'Bluemetric | Vermogensbegeleiding' : 'Bluemetric | Wealth Engineering')
  useScrollAnimation()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-up">
          <h1 className="hero-heading">{t.heroHeading}</h1>
          <div className="hero-line"></div>
          <p className="hero-sub">{t.heroSub}</p>
        </div>
        <div className="hero-logo-lockup fade-up">
          <Brandmark width={52} height={52} variant="color" />
          <span className="hero-lockup-name">BLUEMETRIC</span>
          <span className="hero-lockup-tagline">WEALTH ENGINEERING</span>
        </div>
        <div className="scroll-indicator">
          <span>{t.scroll}</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* BRANDMARK DIVIDER */}
      <div className="brandmark-divider">
        <Brandmark width={60} height={60} variant="color" opacity={0.25} />
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-top fade-up">
            <div className="about-brandmark">
              <Brandmark width={120} height={120} variant="color" />
            </div>
            <h2 className="about-heading">{t.aboutHeading}</h2>
          </div>
          <div className="pillars fade-up">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">{t.pillar1Title}</h3>
              <p className="pillar-text">{t.pillar1Text}</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">{t.pillar2Title}</h3>
              <p className="pillar-text">{t.pillar2Text}</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">{t.pillar3Title}</h3>
              <p className="pillar-text">{t.pillar3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="philosophy-inner">
          <blockquote className="philosophy-quote fade-up">{t.philosophyQuote}</blockquote>
          <p className="philosophy-attr fade-up">{t.philosophyAttr}</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-bg-mark">
          <Brandmark width={400} height={400} variant="color" />
        </div>
        <div className="cta-section-inner fade-up">
          <h2>{t.ctaHeading}</h2>
          <p>{t.ctaSub}</p>
          <div className="cta-buttons">
            <Link to="/services" className="cta-primary">{t.ctaServices}</Link>
            <Link to="/research" className="cta-outline">{t.ctaResearch}</Link>
            <Link to="/contact" className="cta-outline">{t.ctaContact}</Link>
          </div>
        </div>
      </section>

      <Footer showBrandmark brandmarkDirection="rtl" />
    </>
  )
}
