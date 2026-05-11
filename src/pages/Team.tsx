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
