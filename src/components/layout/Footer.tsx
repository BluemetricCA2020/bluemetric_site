import { Link } from 'react-router-dom'
import { useT } from '../../hooks/useT'
import { navTranslations } from '../../i18n/translations/nav'
import Brandmark from '../shared/Brandmark'

interface FooterProps {
  showBrandmark?: boolean
  brandmarkDirection?: 'ltr' | 'rtl'
}

export default function Footer({ showBrandmark = false, brandmarkDirection = 'ltr' }: FooterProps) {
  const t = useT(navTranslations)

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Brandmark width={36} height={36} variant="white" direction={brandmarkDirection} />
              <span className="footer-brand-name">Bluemetric</span>
            </div>
            <p className="footer-desc">{t.footerDesc}</p>
            {showBrandmark && (
              <div className="footer-brandmark">
                <Brandmark width={48} height={48} variant="color" />
              </div>
            )}
          </div>
          <div>
            <h4>{t.footerNavTitle}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/services">{t.services}</Link></li>
              <li><Link to="/research">{t.research}</Link></li>
              <li><Link to="/team">{t.team}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>{t.footerContactTitle}</h4>
            <p>Claude Debussylaan 46<br />1082 MD Amsterdam<br />{t.footerCountry}</p>
            <p style={{ marginTop: 16 }}><a href="mailto:info@bluemetric.nl">info@bluemetric.nl</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footerCopyright}</p>
          <div>
            <span>{t.privacyPolicy}</span>
            <span>{t.termsOfService}</span>
            <span>{t.disclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
