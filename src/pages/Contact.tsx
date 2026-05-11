import { useState } from 'react'
import { useT } from '../hooks/useT'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { contactTranslations } from '../i18n/translations/contact'
import Brandmark from '../components/shared/Brandmark'
import Footer from '../components/layout/Footer'

export default function Contact() {
  const t = useT(contactTranslations)
  const { lang } = useLanguage()
  useDocumentTitle(lang === 'nl' ? 'Contact | Bluemetric' : 'Contact | Bluemetric')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form))

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(String(data.email))) {
      setEmailError(true)
      return
    }
    setEmailError(false)

    setStatus('sending')
    // FORM DISABLED — to re-enable, replace the line below with the fetch call
    await new Promise(resolve => setTimeout(resolve, 1200))
    /* await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }) */
    setStatus('success')
    form.reset()
  }

  return (
    <>
      <section className="contact" style={{ marginTop: 70 }}>
        <div className="contact-left">
          <div className="contact-left-bg" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}></div>
          <div className="contact-left-overlay"></div>
          <div className="contact-left-content">
            <div className="contact-brandmark">
              <Brandmark width={60} height={60} variant="white" direction="ltr" />
            </div>
            <h2 className="contact-heading">{t.conversationHeading}</h2>
            <div className="contact-info">
              <h4>{t.emileName}</h4>
              <p>
                {t.emileRole}<br />
                <a href="mailto:evt@bluemetric.nl">evt@bluemetric.nl</a><br />
                <a href="tel:+31683793008">+31 6 83 79 3008</a>
              </p>
            </div>
            <div className="contact-info">
              <h4>{t.koenName}</h4>
              <p>
                {t.koenRole}<br />
                <a href="mailto:kvm@bluemetric.nl">kvm@bluemetric.nl</a><br />
                <a href="tel:+31618564000">+31 6 18 56 4000</a>
              </p>
            </div>
            <div className="contact-office">
              <p>{t.addressLine1}<br />{t.addressLine2}<br />{t.addressCountry}</p>
              <p style={{ marginTop: 16, fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{t.afmNote}</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="section-label">{t.sectionLabel}</div>
          <h3>{t.formHeading}</h3>
          <p className="contact-form-intro">{t.formIntro}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">{t.labelFirstName}</label>
                <input type="text" id="firstName" name="firstName" required aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">{t.labelLastName}</label>
                <input type="text" id="lastName" name="lastName" required aria-required="true" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.labelEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                aria-invalid={emailError}
                onChange={() => emailError && setEmailError(false)}
              />
              {emailError && <span className="form-field-error" role="alert">{t.emailError}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t.labelPhone}</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.labelSubject}</label>
              <select id="subject" name="subject">
                <option value="">{t.subjectPlaceholder}</option>
                <option value="advisory">{t.subjectWealth}</option>
                <option value="reporting">{t.subjectReporting}</option>
                <option value="private">{t.subjectPrivate}</option>
                <option value="general">{t.subjectGeneral}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.labelMessage}</label>
              <textarea id="message" name="message" rows={4}></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.sending : t.submit}
            </button>
            {status === 'success' && <div className="form-msg form-msg--success" role="status" aria-live="polite">{t.success}</div>}
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
