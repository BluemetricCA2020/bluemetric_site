import { useT } from '../hooks/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { teamTranslations } from '../i18n/translations/team'
import PageHeader from '../components/shared/PageHeader'
import Footer from '../components/layout/Footer'

export default function Team() {
  const t = useT(teamTranslations)
  const { lang } = useLanguage()
  useDocumentTitle(lang === 'nl' ? 'Team | Bluemetric' : 'Team | Bluemetric')
  useScrollAnimation()

  return (
    <>
      <PageHeader label={t.pageLabel} heading={t.pageHeading} sub={t.pageSub} />

      <section className="team">
        <div className="team-inner">
          <div className="team-columns">
            <div className="team-column fade-up">
              <h2 className="team-sublabel">{t.clientAdvisoryLabel}</h2>
              <div className="team-column-grid">
                {t.clientAdvisory.map((m, i) => (
                  <div className="team-card" key={i}>
                    <div className="team-initials">{m.initials}</div>
                    <h3 className="team-name">{m.name}</h3>
                    <p className="team-role">{m.role}</p>
                    <p className="team-bio">{m.bio}</p>
                    {m.creds && <p className="team-creds">{m.creds}</p>}
                    {m.linkedin && (
                      <a href={m.linkedin} className="team-linkedin" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${m.name}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="team-column-divider" aria-hidden="true" />

            <div className="team-column fade-up">
              <h2 className="team-sublabel">{t.investmentLabel}</h2>
              <div className="team-column-grid">
                {t.investment.map((m, i) => (
                  <div className="team-card" key={i}>
                    <div className="team-initials">{m.initials}</div>
                    <h3 className="team-name">{m.name}</h3>
                    <p className="team-role">{m.role}</p>
                    <p className="team-bio">{m.bio}</p>
                    {m.creds && <p className="team-creds">{m.creds}</p>}
                    {m.linkedin && (
                      <a href={m.linkedin} className="team-linkedin" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${m.name}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
