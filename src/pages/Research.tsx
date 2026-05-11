import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../hooks/useT'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { researchTranslations } from '../i18n/translations/research'
import { posts, authors } from '../content'
import PageHeader from '../components/shared/PageHeader'
import Footer from '../components/layout/Footer'

export default function Research() {
  const t = useT(researchTranslations)
  const { lang } = useLanguage()
  useDocumentTitle(lang === 'nl' ? 'Onderzoek | Bluemetric' : 'Research | Bluemetric')
  useScrollAnimation()

  const [activeAuthor, setActiveAuthor] = useState<string | null>(null)

  const filtered = activeAuthor ? posts.filter(p => p.author === activeAuthor) : posts

  return (
    <>
      <PageHeader label={t.pageLabel} heading={t.pageHeading} sub={t.pageSub} />

      <section className="research">
        <div className="research-inner">
          <div className="research-filters fade-up">
            <button
              className={`research-filter-btn${activeAuthor === null ? ' active' : ''}`}
              onClick={() => setActiveAuthor(null)}
            >
              {t.filterAll}
            </button>
            {authors.map(author => (
              <button
                key={author}
                className={`research-filter-btn${activeAuthor === author ? ' active' : ''}`}
                onClick={() => setActiveAuthor(author)}
              >
                {author}
              </button>
            ))}
          </div>

          <div className="research-grid fade-up">
            {filtered.map(post => (
              <Link to={`/research/${post.slug}`} className="research-card" key={post.slug}>
                {post.image && (
                  <div className="research-card-img">
                    <img src={post.image} alt="" aria-hidden="true" />
                  </div>
                )}
                <div className="research-card-body">
                  <div className="research-tag">{post.tag}</div>
                  <h2>{post.title}</h2>
                  <p className="research-meta">{post.author} · {new Date(post.date).toLocaleDateString(lang === 'nl' ? 'nl-NL' : 'en-GB', { year: 'numeric', month: 'long' })}</p>
                  <span className="research-link">{t.readLink}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
